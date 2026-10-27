# HarmReductionAdvocate.com — Educational Archive

Static mirror of HarmReductionAdvocate.com: the educational archive of **Responsible Empowered Living, a Canadian Harm Reduction Non-Profit (2022–2025)**, together with the practicum-campaign pages of **Mike Bonertz, Student Counsellor in Training — MPS Candidate, St. Stephen's College**.

The site is an educational archive. It is not currently accepting consultations. **Education, not medical advice.**

## What this site is

- **Psychedelic education and harm reduction resources** preserved from R.E.L.'s public-education work: an introduction, condition-specific resource pages (PTSD, end-of-life distress, substance use disorder) and wellness themes (spiritual wellness, wellness of the well, wellness of the planet, physical well-being). These are presented as educational resources, not as scheduled events.
- **Practicum-campaign pages** written for practicum supervisors: who Mike is, what he is training toward, what a pharmacist adds to a counselling team, medication safety screening, harm reduction in practice, rural/remote/northern practice, Two-Eyed Seeing, a FAQ, and a note on how to read the older archive material.
- **Published articles and contributions**, with exact credit for collaborative work.
- **Sophrodelic Legal Magic Mushroom Retreat** — information about the retreat and sophrology, delivered by Bénédicte (Ben) Mannix, Holistic Therapist.

Everything here is education and policy literacy only. It is not medical advice, a diagnosis, a prescription, or an offer of psychedelic-assisted therapy. Psychedelics do not cure disease; the archive discusses how they may help some people when used safely, legally and well, alongside the care people already receive. Questions about any medication belong with the client's own prescriber and care team.

## Pages

Main navigation (identical on every page):

| Page | File |
| --- | --- |
| For Practicum Supervisors | `practicum/for-practicum-supervisors.html` |
| Sophrodelic Legal Magic Mushroom Retreat | `retreat.html` |
| Home | `index.html` |
| About | `about.html` |
| Services | `services.html` |
| Educational Resources | `educational-resources.html` |
| Contact | `contact.html` |
| Terms of Service | `terms/terms.html` (includes the Privacy Policy and Disclaimer sections) |
| Published Articles | `published-articles.html` |

Practicum pages (linked from For Practicum Supervisors):

- `practicum/education-and-credentials.html`
- `practicum/what-a-pharmacist-adds.html`
- `practicum/medication-safety-screening.html`
- `practicum/harm-reduction-in-practice.html`
- `practicum/rural-remote-and-northern-practice.html`
- `practicum/two-eyed-seeing.html`
- `practicum/practicum-faq.html`
- `practicum/about-this-archive.html`

Educational resource pages (linked from Educational Resources):

- `events/introduction-new-era.html`
- `events/spiritual-wellness.html`
- `events/wellness-of-the-well.html`
- `events/wellness-of-the-planet.html`
- `events/physical-well-being.html`
- `resources/ptsd.html`
- `resources/end-of-life-distress.html`
- `resources/substance-use-disorder.html`

## Project structure

```
/
├── index.html
├── about.html
├── services.html
├── contact.html
├── educational-resources.html
├── published-articles.html
├── retreat.html
├── practicum/                  # practicum-campaign pages
│   ├── for-practicum-supervisors.html
│   ├── education-and-credentials.html
│   ├── what-a-pharmacist-adds.html
│   ├── medication-safety-screening.html
│   ├── harm-reduction-in-practice.html
│   ├── rural-remote-and-northern-practice.html
│   ├── two-eyed-seeing.html
│   ├── practicum-faq.html
│   └── about-this-archive.html
├── events/                     # archived educational resources (wellness themes)
│   ├── introduction-new-era.html
│   ├── spiritual-wellness.html
│   ├── wellness-of-the-well.html
│   ├── wellness-of-the-planet.html
│   └── physical-well-being.html
├── resources/                  # archived educational resources (conditions)
│   ├── ptsd.html
│   ├── end-of-life-distress.html
│   └── substance-use-disorder.html
├── terms/
│   └── terms.html              # Terms of Service, Privacy Policy, Disclaimer
├── css/
│   ├── normalize.css
│   ├── style.css
│   ├── hero-fallback.css       # also provides the text/dot social-link fallback
│   ├── premium-cards.css
│   └── svg-effects.css
├── js/
│   └── main.js                 # mobile nav toggle, smooth scrolling
├── images/
│   ├── hra-logo.png
│   ├── hra-logo-apple.png
│   ├── logo.svg
│   ├── hero/
│   ├── about/
│   ├── resources/
│   └── retreat/
├── svg/
│   ├── logo.svg
│   ├── favicon.svg
│   └── neural-background.svg
└── README.md
```

## Shared header and footer

Every page carries the same header navigation (listed above) and the same footer:

- Tagline: "HarmReductionAdvocate.com — Psychedelic Education and Harm Reduction Resources. This site is an educational archive."
- Contact: mbonertz@ualberta.ca
- Social links: Instagram, LinkedIn, TikTok and Linktree (all real profile URLs; no placeholders)
- Disclaimer: "R.E.L.’s education and consulting services are not a substitute for medical advice or services, as provided by an appropriately licensed physician, psychiatrist, or similar, we aim to bridge the gap for folks who may not have immediate access to those services. Education, not medical advice."
- Copyright: © 2026 Harm Reduction Advocate. All rights reserved.

Relative paths use a `../` prefix on pages inside `practicum/`, `events/`, `resources/` and `terms/`.

## Wording that this archive keeps consistent

The live site's wording is the source of truth. When editing, keep these conventions:

- Mike Bonertz is "a student counsellor in training" (Student Counsellor in Training — MPS Candidate, St. Stephen's College). He holds no protected title.
- Sixteen years as a licensed pharmacist, and more than twenty years in pharmacies all told. Registered with the College of Pharmacists of British Columbia, Full Pharmacist class, in good standing.
- Responsible Empowered Living, a Canadian Harm Reduction Non-Profit (2022–2025), is described in the past tense; this site is an educational archive of that work.
- Psychedelics are discussed as something that may help with healing, used safely, legally and well, alongside the care people already receive. Psychedelics do not cure disease, and there is no language about reducing, stopping or replacing medications: that decision belongs to the client's own prescriber.
- Publications: "contributed to" the Substance Guides; Drug Science — Named author, International Policy; the Heroic Dose article (Psychedelic Scene, 31 May 2023; it also appears in Psychedelic Pathways Issue 3, 2025 — never "republished") co-written with Bénédicte Mannix; Risks to the Heart under its full live title and verbatim byline; MAPS Canada listed as separate entries (the Tip Sheet credit; membership of the Psychedelic Access Community of Practice since November 2022; School of Psychedelics training).
- Legal name "Micheal Francis Bonertz" where the live page uses it; "Mike Bonertz" elsewhere.
- Publications: the canonical register is kept outside this repository and every entry here is
  derived from it. "From Taboo to Treatment: The Case for Compassionate Access to Psilocybin in
  the UK" is credited to Drug Science, 2023 — not PsiloNautica, and not both. The report's cover
  and About page do name PsiloNautica, but the author James Bunn settled the credit himself on
  25 Aug 2026 ("feel free to credit it to Drug Science as that's the more well known organisation
  of the two"), and Addendum 94 of 29 Aug 2026 closed the campaign's L4 locked string on that
  basis. Mike is named on the report's Authors page for the International Policy section, one of
  ten people named there. The report runs to seventy-nine pages (verified with pdfinfo against
  the archived PDF; an older record said 76). Two things are NOT claimable and must stay off every
  surface: that five governments requested a pre-publication review, and any association with
  Oxford, Yale, UCL or the NHS — none of those appears anywhere in the report (verified 8 Sep
  2026; the Authors page names the University of Manchester and PsiloNautica only).
  The MAPS Canada Tip Sheet names him under its "Developed by" credit, one of nine; the separate
  "Designed by" credit belongs to Sunny Yimeng Dong, and there is no author line (verified at the
  cover, 9 Sep 2026). The November 2025 updated edition carries the same credit, so the site states
  both editions. An earlier reading of this repo inverted those labels and has been corrected.

## Three sites, one source

This content exists in three places. They are not three equal websites; they are one canonical site and
two mirrors, and the difference is what keeps them out of each other's way in search.

| # | Site | Role | How it is updated |
|---|------|------|-------------------|
| 1 | https://www.harmreductionadvocate.com/ | **Canonical.** The brand domain, on Squarespace. | By hand, using the paste blocks generated alongside this repo |
| 2 | https://psychedelicpharmacist.github.io/ | **Live mirror.** GitHub Pages, `psychedelicpharmacist` account. | `./sync-sites.sh publish` |
| 3 | `mbonertz` account | **Backup mirror.** University identity. | the same push |

Mirrors 2 and 3 are served from THIS repository, so one push updates both and they cannot drift apart.

### Why the mirrors do not compete with the brand domain

Three identical sites would normally split their ranking signals and compete with one another. Every page
here declares `<link rel="canonical">` pointing at the matching page on harmreductionadvocate.com, so
search engines consolidate everything on the brand domain. `robots.txt` deliberately **allows** crawling,
because a crawler has to read a page to see its canonical tag; a `Disallow` would hide the canonical and
leave the duplicate unresolved. Do not add `Disallow` rules without first removing the canonical tags.

`terms/terms.html` is the one page without a cross-domain canonical. It is frozen (see below), so the
metadata pass never touched it. That is deliberate.

### What the mirrors are actually for

- **Redundancy.** Squarespace is a single point of failure and a recurring bill. These copies are free,
  independently hosted, and always current.
- **An audit trail.** Git records every change to these public claims with a date, which matters when a
  professional body or a placement site asks what was published and when. Squarespace cannot do that.
- **A free exit.** GitHub Pages supports custom domains. Pointing harmreductionadvocate.com here would
  serve the same site at the same address with no content migration and no hosting fee.

### Publishing

```
./sync-sites.sh check      # verify only: clean tree, frozen file intact, links, metadata, canonicals
./sync-sites.sh status     # what each of the three sites currently carries
./sync-sites.sh publish    # run every check, then push to both accounts
```

`publish` refuses to run while any check fails, including if the frozen Terms page has been modified.

### Frozen page: terms/terms.html

**Do not change this file. Ever.**

The Terms of Service page is final as of 2026-09-08. It carries the compliance wording that the
rest of the archive uses: Responsible Empowered Living in the past tense as a Canadian Harm
Reduction Non-Profit (2022-2025), the contact link resolved, and a real inbox for the linking
enquiry instruction. That state was reviewed and settled by the site owner.

This page is exempt from every future editing pass, including wording sweeps, banned-string
scans, link rewrites, meta or template refreshes, and any parity run against the live site.
Automated checks may read it and report on it; nothing may write to it. If the live
harmreductionadvocate.com Terms of Service is ever revised, the owner decides whether and how
this mirror follows, page by page.

## Technologies

- HTML5, CSS3 (custom properties), vanilla JavaScript
- Inline SVG animations
- Google Fonts (Philosopher, Raleway)

## Maintaining the site

- Header and footer are identical on every page; update them everywhere at once (search and replace across all `.html` files, respecting the `../` prefix).
- New practicum pages go in `practicum/` and should be linked from `practicum/for-practicum-supervisors.html`.
- New archived resources go in `events/` or `resources/` and should be linked from `educational-resources.html`.
- Every relative `href`/`src` must resolve to a file in this repository.

> 27 Oct 2026: "The Role I Am Training Toward" (`/menu-1`, formerly `practicum/the-role-i-am-training-toward.html`) was deleted from the live site at Mike's instruction and removed from this copy so no sync or restore brings it back. The frozen Terms page still names it in its navigation (the freeze forbids editing that file).
