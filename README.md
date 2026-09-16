# NUTRIX LAB — website

Two pages built so far: the homepage and the first food-pairing page.

```
index.html                              homepage
pairings/lentils-bell-pepper.html       Pair 01
assets/css/nutrix.css                   the whole stylesheet
assets/img/*.svg                        marked placeholders (see PHOTOGRAPHY.md)
PHOTOGRAPHY.md                          shot list and house rules
```

No build step, no JavaScript, no dependencies. Open `index.html` in a browser.
Fonts (Literata, IBM Plex Sans, IBM Plex Mono) load from Google Fonts, so the
first load needs a network connection; the stack falls back to Noto and then to
system faces offline.

## Editorial rules the markup enforces

These are the reason several things look emptier than a normal marketing site.
They are deliberate — please don't "fill them in" without the underlying work.

- **Status is stated once per page**, near the top, and not repeated. The homepage
  says it in the band under the opening; the pairing page says it in the box under
  the question.
- **Three kinds of evidence are kept apart** on a pairing page, each appearing
  exactly once, distinguished by typography as well as colour: *measured by us*
  (red mark, body text), *published by others* (navy rule down the left, citation
  numerals), *planned* (grey mark). Never move a citation into the first block.
- **No Food Interaction Score is displayed anywhere**, and none should be until the
  formula, weightings and inputs can be published beside it.
- **LunchBox AI is labelled as not yet built**, and no sample output is shown. A
  demonstration recommendation on screen is indistinguishable from a real one.
- **No price appears without a shop and a date.** The cost table holds em-dashes
  until both exist.
- **No in-vitro result is described as a human effect.** Each measurement on the
  homepage carries its own explicit limit; the pairing page carries a limits block.
- **No contributor, supervisor or partner is named** until they have agreed.

## Accessibility and typography

Checked in Chrome during the build:

- Azerbaijani glyphs `Ə ə İ ı Ş ş Ğ ğ Ç ç Ö ö Ü ü` verified present in all three
  faces by canvas measurement, not assumed. Azerbaijani runs carry `lang="az"`.
- All text meets WCAG AA contrast on both pages (audited against computed styles).
- Skip link, visible focus ring on every interactive element, no interactive
  element hidden from keyboard. Cards for unbuilt pages are not links, so they
  never appear in the tab order as dead ends.
- Wide tables are scrollable regions with `tabindex="0"` and a visible hint at
  narrow widths; the page body never scrolls sideways.
- Motion is limited to 140 ms colour/border transitions, disabled under
  `prefers-reduced-motion`.
- Light-only by choice: the design is a printed-publication idiom, and `body`
  paints its background explicitly.

## Next

Egg + tomato, beef + greens and rice + beans have cards on the homepage marked
"page in preparation". Copy `pairings/lentils-bell-pepper.html` as the template —
the block structure (`§1 Ingredients` … `§6 Sources`) is the record sheet and
should stay consistent across pairings.
