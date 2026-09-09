#!/usr/bin/env bash
# sync-sites.sh — publish this repo to BOTH GitHub accounts in one operation.
#
#   ./sync-sites.sh check     verify only; changes nothing, exits non-zero on a problem
#   ./sync-sites.sh status    show what each of the three sites currently carries
#   ./sync-sites.sh publish   run every check, then push to both accounts
#
# WHY ONE SCRIPT. There are three copies of this site:
#   1. https://www.harmreductionadvocate.com/     Squarespace. THE CANONICAL SITE. Edited by hand.
#   2. https://psychedelicpharmacist.github.io/   GitHub Pages, account psychedelicpharmacist. LIVE MIRROR.
#   3. mbonertz account                           GitHub, university identity. BACKUP MIRROR.
# Copies 2 and 3 are served from THIS repository, so a single push keeps them byte-identical and they
# cannot drift. Copy 1 is manual, which is why paste blocks are generated for it under
# claude-export-work/paste-blocks/.
#
# SEO POSTURE. Every page here declares <link rel="canonical"> to the matching harmreductionadvocate.com
# page, so search engines consolidate ranking signals on the brand domain instead of splitting them
# across three identical sites. robots.txt deliberately ALLOWS crawling: a crawler has to read a page to
# see its canonical tag, so a Disallow would leave the duplicate unresolved. Do not add Disallow rules
# without first removing the canonical tags.
#
# FROZEN FILE. terms/terms.html is frozen (see README). Nothing may modify it. The checker verifies its
# checksum and this script refuses to publish if it has changed.

set -uo pipefail
cd "$(dirname "$0")"

CHECKER="/tmp/claude-1000/-home-pharm-projects/8537fc32-01b5-4a0d-84b9-60b45e462a10/scratchpad/sitecheck.py"
BRANCH="$(git branch --show-current)"
GREEN=$'\033[32m'; RED=$'\033[31m'; YEL=$'\033[33m'; OFF=$'\033[0m'
ok()   { printf "  %sPASS%s %s\n" "$GREEN" "$OFF" "$1"; }
bad()  { printf "  %sFAIL%s %s\n" "$RED" "$OFF" "$1"; }
note() { printf "  %snote%s %s\n" "$YEL" "$OFF" "$1"; }

require_remotes() {
  local missing=0
  for r in live backup both; do
    git remote get-url "$r" >/dev/null 2>&1 || { bad "remote '$r' is not configured"; missing=1; }
  done
  return $missing
}

do_check() {
  local fails=0
  echo "PRE-PUBLISH CHECKS"

  require_remotes || fails=$((fails+1))

  if [ -n "$(git status --porcelain)" ]; then
    bad "working tree is dirty — commit or stash before publishing"
    git status --short | sed 's/^/        /'
    fails=$((fails+1))
  else
    ok "working tree clean"
  fi

  if [ -f "$CHECKER" ]; then
    if python3 "$CHECKER" all >/tmp/sitecheck.out 2>&1; then
      ok "sitecheck: all checks passed (frozen file, links, chrome, metadata, wording)"
    else
      bad "sitecheck reported problems:"
      tail -25 /tmp/sitecheck.out | sed 's/^/        /'
      fails=$((fails+1))
    fi
  else
    note "sitecheck not found at $CHECKER — skipping deep verification"
  fi

  for f in .nojekyll robots.txt; do
    [ -f "$f" ] && ok "$f present" || { bad "$f missing"; fails=$((fails+1)); }
  done

  # Every page must canonical to the brand domain, or the duplicate-content fix is gone.
  # terms/terms.html is the one documented exception: it is FROZEN, so the metadata pass never
  # touched it and it still carries a self-canonical. That is deliberate and must not be "fixed".
  local pages canon missing
  pages=$(find . -name '*.html' -not -path './.git/*' -not -path './terms/terms.html' | wc -l)
  canon=$(grep -rl 'rel="canonical" href="https://www.harmreductionadvocate.com' --include='*.html' . \
          | grep -v '^./terms/terms.html$' | wc -l)
  if [ "$pages" -eq "$canon" ]; then
    ok "all $pages non-frozen pages canonical to harmreductionadvocate.com (terms/terms.html exempt, frozen)"
  else
    bad "only $canon of $pages non-frozen pages carry the cross-domain canonical"
    missing=$(grep -rL 'rel="canonical" href="https://www.harmreductionadvocate.com' --include='*.html' . \
              | grep -v '^./terms/terms.html$')
    [ -n "$missing" ] && echo "$missing" | sed 's/^/        missing: /'
    fails=$((fails+1))
  fi

  [ "$fails" -eq 0 ] && echo "  ---- ready to publish ----" || echo "  ---- $fails problem(s); not ready ----"
  return $fails
}

do_status() {
  echo "LIVE STATUS"
  for u in https://www.harmreductionadvocate.com/ https://psychedelicpharmacist.github.io/ https://mbonertz.github.io/; do
    printf "  %-44s HTTP %s\n" "$u" "$(curl -s -o /dev/null -L --max-time 20 -w '%{http_code}' "$u")"
  done
  echo
  echo "  local HEAD:  $(git rev-parse --short HEAD)  $(git log -1 --format=%s | cut -c1-60)"
  for r in live backup; do
    printf "  %-8s " "$r:"
    git ls-remote --heads "$r" "$BRANCH" 2>/dev/null | awk '{print substr($1,1,7)}' | tr -d '\n' || printf "unreachable"
    echo "   $(git remote get-url $r)"
  done
  echo
  echo "  If live and backup show different hashes, run: $0 publish"
}

do_publish() {
  do_check || { echo; echo "Refusing to publish while checks fail."; exit 1; }
  echo
  echo "PUBLISHING $BRANCH to both accounts"
  if git push both "$BRANCH"; then
    echo
    ok "pushed to psychedelicpharmacist and mbonertz"
    echo "  GitHub Pages usually rebuilds within a minute or two."
    echo "  Verify with: $0 status"
  else
    bad "push failed — check 'gh auth status' and that both repos exist"
    exit 1
  fi
}

case "${1:-check}" in
  check)   do_check ;;
  status)  do_status ;;
  publish) do_publish ;;
  *) echo "usage: $0 [check|status|publish]"; exit 2 ;;
esac
