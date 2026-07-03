# Bri Nellermoe Author Website

## Project
Author website for Bri Nellermoe, independent author who writes romantasy and the adjacent micro-genres she's exploring. Plain HTML/CSS/JS. Hosted on GitHub Pages. Do NOT describe her as "self-published" — she uses "independent author."

## Pages
- `index.html` — Home: hero, tagline, featured book, email CTA
- `about.html` — Bio, author photo
- `books.html` — Published titles + coming soon
- `connect.html` — Email signup (Kit embed) + social links
- Nav must have a slot for a 5th link (Art) without restructuring

## Design
Cozy, whimsical romantasy with an enchanted-forest feel — warm, not dark or grim. Brand voice is "a little magic, a lot of heart." Visual palette is "The Forest Between": deep forest-green base (#081408) with gold accents. Fraunces (variable serif) for display headings, Nunito Sans for body. Rounded cards/buttons/covers, pill-shaped tags. Atmospheric but inviting. The old "dark/moody/burgundy/midnight-navy" direction was retired — do not reintroduce it.

## Images
Current assets in `/images/` (all local, relative paths):
- `hero-bg.avif` — hero background, green grade baked in
- `bri-headshot.webp` — author photo (still placeholder art, not final)
- `secrets-in-embers-cover-v2.jpg` / `.webp` / `.png` — current book cover (served via `<picture>`)
- `og-share.jpg` — 1200×630 social share card

CSS should degrade gracefully if images are missing.

## Content Placeholders
Still unconfirmed — keep placeholders until Bri provides:
- Full bio (about.html shows a "bio in progress" box; first line + one paragraph are real)
- *Secrets in Embers* blurb/synopsis (index.html + books.html show a "blurb pending" box)
- Second book title and teaser (coming-soon card)
- Instagram URL (`@PLACEHOLDER` site-wide)

Already confirmed/live (not placeholders): buy links (Amazon + Books2Read), TikTok URL (@brinellermoe), Goodreads profile, Kit email embed + double opt-in.

## Communication Preferences
- No filler, no reinforcement, no restating what was asked
- Direct answers only
- Flag errors or suboptimal approaches clearly
- User is building experience with Claude Code — explain the why behind non-obvious decisions, but don't over-explain basics
