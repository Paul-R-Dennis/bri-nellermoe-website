# Bri Nellermoe Author Website

## Project
Author website for Bri Nellermoe, independent author. Her debut is romantasy (Secrets in Embers), and she writes across multiple genres; she has loved fantasy, romance, and ghost stories all her life. Outside writing she works as a nurse and has a full house of pets (two dogs, two cats, leopard gecko, fish) - personal color for the bio only, keep it out of site-wide branding. Plain HTML/CSS/JS, no build step. Hosted on GitHub Pages at brinellermoe.com. Do NOT describe her as "self-published" — she uses "independent author."

## Copy Rules
- No em dashes in site copy, page titles, meta tags, or alt text. Bri dislikes them (reads as AI-drafted). Use a colon, comma, or `&middot;` instead. Only exception: the book blurb, which is her Amazon copy verbatim ("souls—she of the Witches…").
- Title pattern: `Page | Bri Nellermoe` (pipe separator).

## Pages
- `index.html` — Home: hero, tagline, featured book, email CTAs (two Kit forms: hero + bottom band)
- `about.html` — Bio, author photo
- `books.html` — Published titles + coming soon
- `connect.html` — Kit email embed, social links, contact form (Web3Forms)
- `press.html` — Press kit: at-a-glance facts, bios, blurb, asset downloads, links `bri-nellermoe-press-sheet.pdf`
- `links.html` — Link-in-bio page for TikTok/Instagram (noindex)
- `privacy.html` — Privacy policy
- `confirmed.html` — Kit double opt-in landing page (noindex)
- `404.html` — Not-found page (noindex); uses root-relative `/` paths so it works at any URL depth
- Nav must have a slot for a 5th link (Art) without restructuring (`<!-- Art link added here when ready -->` in every nav)

## Structure
- The `<head>`, nav, footer, and nav-toggle script are duplicated in all 9 pages. A change to any of them must be made in every page.
- Fonts load via `<link>` tags in each page's `<head>` (preconnect + Google Fonts stylesheet), not `@import` in CSS.
- GA4 (`G-30GDJY8KCL`) with Consent Mode v2: inline snippet in each `<head>`, banner in `consent.js`, events in `analytics.js`. Buy and social links are tracked by URL match (Amazon / B&N / Books2Read, TikTok / Instagram / Goodreads), so new links need no class.
- Instagram links are hidden by a TEMP rule at the bottom of `style.css` that matches the placeholder URL. When the real URL arrives: swap it in everywhere and delete that rule.
- CSS token names `--burgundy*` and `--navy*` are legacy from the retired palette; they hold greens. `--gold-dim` was raised to #A18D28 for WCAG AA contrast; don't darken it.

## Deploy
- Pushing to `main` deploys. GitHub Pages builds with Jekyll: files/folders starting with `.` or `_` are never published; `.md` files are published unless listed in `_config.yml` `exclude` (CLAUDE.md is). Add any new repo-only Markdown there.
- Local preview: `.claude/launch.json` config `static` (`npx serve`, autoPort; port 3000 is taken by another project on this Mac).
- Gitignored, local-only: `TODO.md`, `CHANGELOG.md`, `CONTENT_DRAFTS.md`, `BENCHMARKS.md`, `_tools/` (press-sheet PDF generator). As of 2026-09-27 these exist only on the old Windows PC (`C:\Projects\bri-nellermoe-website`), not on this Mac. The press sheet PDF can't be regenerated until `_tools/` is copied over.

## Design
Cozy, whimsical romantasy with an enchanted-forest feel — warm, not dark or grim. Brand voice is "a little magic, a lot of heart." Visual palette is "The Forest Between": deep forest-green base (#081408) with gold accents. Fraunces (variable serif) for display headings, Nunito Sans for body. Rounded cards/buttons/covers, pill-shaped tags. Atmospheric but inviting. The old "dark/moody/burgundy/midnight-navy" direction was retired — do not reintroduce it.

## Images
Current assets in `/images/` (all local, relative paths):
- `hero-bg.avif` — hero background, green grade baked in
- `bri-headshot.webp` — author photo, FINAL (real photo from Bri, 2026-08-23; 800×800 square crop, EXIF stripped)
- `bri-nellermoe-headshot.jpg` — hi-res press headshot (1242×2208, EXIF stripped), download link on press.html
- `secrets-in-embers-cover-v2.jpg` / `.webp` — current book cover, 960×1500 (served via `<picture>`). The `.png` (2 MB, same size) is referenced nowhere; keep-or-delete undecided.
- `og-share.jpg` — 1200×630 social share card
- `icon-192.png`, `icon-512.png`, `icon-maskable-512.png` + root `apple-touch-icon.png` — PWA/home-screen icons

CSS should degrade gracefully if images are missing.

## Content Placeholders
Still unconfirmed — keep placeholders until Bri provides:
- Second book title and teaser (coming-soon card on books.html). The "Eve and Killian" line came from Bri; the quote "Some secrets are buried for a reason…" is template-era and unconfirmed.
- Instagram URL (`instagram.com/PLACEHOLDER` site-wide, hidden via CSS)

Already confirmed/live (not placeholders): *Secrets in Embers* blurb (Bri's Amazon copy, on books.html + press.html; home uses the final paragraph), full bio (Bri's own words, on about.html + press.html since 2026-08-23), final author headshot, buy links (Amazon + Barnes & Noble + Books2Read), TikTok URL (@brinellermoe), Goodreads profile, Kit email embed + double opt-in, press sheet PDF.

## Open Decisions
- Contact email: `author@brinellermoe.com` (press page + PDF; forwards via ImprovMX) vs `brinellermoeauthor@gmail.com` (connect.html + privacy.html). Pick one.
- Press kit says "credit the cover artist where noted," but no artist is credited anywhere. Need the name from Bri, or drop the line.
- Press cover download is only 960×1500; a larger file from Bri would suit press/print use.
- "The occasional dragon theory" (connect.html) is template-era copy; confirm with Bri.
- Privacy policy should mention the cookie banner / Cookie settings link, Consent Mode's cookieless pings on Reject, and Google Fonts. Needs Bri's approval before changing legal wording.

## Communication Preferences
- No filler, no reinforcement, no restating what was asked
- Direct answers only
- Flag errors or suboptimal approaches clearly
- User is building experience with Claude Code — explain the why behind non-obvious decisions, but don't over-explain basics
