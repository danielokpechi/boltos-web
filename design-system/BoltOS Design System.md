# BoltOS Design System

Persistent reference for all future BoltOS work in this project. Source of truth: the delivered brand book plus decisions locked in `BoltOS Complete Social System.dc.html`. Read this before building anything new.

## Colour tokens

| Token | Hex | Ratio | Use |
|---|---|---|---|
| Night | #101014 | 60% | Default ground. Black-dominant system. |
| Snow | #F7F7F5 | 20% | Light ground, inverted slabs, text on Night |
| Ultra Violet | #7B2FE2 | 15% | Primary accent — bars, kickers, rules, links (hover #6424D9) |
| Hot Rose | #D62086 | 3% | ONE small mark per composition, max |
| Sky Aqua | #35C7DF | 2% | ONE small mark per composition, max |

Night tonal scale (official): #1F2126, #2C2F36, #15171B — use for second darks / tonal pairs.
Supporting greys in use: #6B7280 (mid grey labels), #D1D5DB (light rules), #E5E7EB (doc background).

Rules:
- If a canvas reads as a violet field it is off-brand — never fill a canvas with Ultra Violet.
- CTA gradient: `linear-gradient(180deg, #7B2FE2 0%, #D62086 100%)` (vertical) or 90° horizontal. Purple→pink only.
- The logomark blue gradient (#61C2ED→#5163F0) is artwork inside the logo only. Never sample, extend, or apply to the logo.

## Type

- **Host Grotesk** (Google Fonts, 400–800): headlines, figures, key messaging.
- **Geist** (Google Fonts, 400–700): sub-heads, body, labels, UI. Helvetica fallback only.
- Book scale: Display XL 72/80 · H2 40/48 · Body 16/24 · Caption 12/16 · Overline 11/16.
- Social scale (×2.5, ours, unconfirmed by book): Display 180 · H2 100 · Body 40 · Caption 30 · Overline 28.
- Max three typographic styles per composition. Labels: Geist, 0.14em tracking, uppercase.

Font link:
`https://fonts.googleapis.com/css2?family=Host+Grotesk:wght@400;500;600;700;800&family=Geist:wght@400;500;600;700&display=swap`

## Spacing & layout

- Base unit 8px — every margin, gap, offset a multiple of 8. Canvas margin 88px, lockup row 64px, group gaps 40px, frame gaps 16px.
- One visual anchor per composition. Asymmetry, 1–3° rotation (one rotated element max), uneven columns.
- Never: row of three evenly spaced rounded cards; equal weight everywhere.
- Everything Canva-rebuildable: rectangles, text boxes, image frames, one flat grain PNG. No blend stacks, no live effects.
- Text swap zones must survive ±30% copy length; state breaking points.

## Texture & photography

- Grain: `assets/grain-400.png`, 6% Multiply on flat fields (top layer, locked).
- Photography recipe (book): 2% film grain, Ultra Violet shadows 15%, Sky Aqua highlights 8%.
- Glows permitted only where the book mandates: Particle Wave (`assets/particle-wave.svg`) and Connected Perspective patterns.

## Icons & logo

- Icons: isometric glassmorphism — purple 3D forms with frosted faces, supplied as rendered brand assets. Never redrawn as flat line icons. (Book also lists geometric 4px-stroke/72px icon spec.)
- Logo files (in `assets/logo/`, wide wordmark ~6.4:1, transparent PNG):
  - `BoltOS_Primary_RGB.png` — Snow (light) wordmark, gradient OS — use on Night/dark grounds
  - `BoltOS_Secondary_RGB.png` — dark wordmark, gradient OS — use on Snow/light grounds
  - `BoltOS_Black.png` — all-black one-colour — light grounds, mono contexts
  - `BoltOS_White.png` — all-Snow one-colour — dark grounds, mono contexts
  - The gradient (pink→violet→aqua) lives only in the OS glyph of the RGB versions — never recreate it elsewhere.
- Logo: minimum 72px digital; clear space = play symbol height. Forbidden: recolour, rotate, outline, gradient, effects, opacity reduction, rearranging/re-kerning.
- Wordmark lockup on socials: bottom-left, 64px row; handle @boltos opposite or beside at x=368.
- Profile picture: primary logo on one approved brand colour, 1000×1000.

## Layout library

`BoltOS Complete Social System.dc.html` = master: 36 layouts (3a–3f, 4a–4k, 5-series backdrops, 6a–6k occasions, 7a–7h), three families (anchor / evidence / furniture), single-vs-carousel mapping, content-branch calendar. Flat PNG exports in `export/`. Site: https://boltos.ai/

## DC conventions used

Template CSS vars: `--uv --pk --cy --grad --gradr --zone --grain --notes`; props `uv, pink, cyan, grainOpacity, showSwapZones, showNotes`. Swap-zone outline: `1.5px dashed rgba(123,47,226,0.7)`.

## Open questions

- Book has no social type scale — the ×2.5 ratios are ours pending confirmation.
- Book hex conflicts resolved as: Night #101014, Snow #F7F7F5 (#0D0A18 on gradient page is artwork, not a token).
