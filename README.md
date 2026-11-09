# NUTRIX LAB — website

A student-led initiative in Azerbaijan connecting food science, school
nutrition, hands-on experiments and food knowledge across generations.

```
index.html                              homepage: opening, four strands, pairings, method
lunchbox.html                           School LunchBox Program (3 photographed boxes)
library.html                            Interactive Food Library (ingredient explorer)
archive.html                            Intergenerational Food Archive (searchable)
lab.html                                Inside Our Lab (photo gallery + lightbox)
impact.html                             Our Impact (documented vs. not yet counted)
pairings/lentils-bell-pepper.html       Pair 01
assets/css/nutrix.css                   the whole stylesheet
assets/js/nutrix.js                     mobile menu + photo lightbox (every page)
assets/js/library.js                    Food Library data + explorer
assets/js/archive.js                    Archive records + search
assets/img/                             the team's own photographs (see PHOTOGRAPHY.md)
```

No build step and no dependencies. Open `index.html` in a browser. Fonts load
from Google Fonts; the stack falls back to Noto and then system faces offline.

JavaScript is used only where a page is interactive (menu, lightbox, explorer,
archive search). Without it the menu is a plain list and photos open full-size;
the explorer and archive show a note pointing to the LunchBox page.

## Editing content

**Add or correct a food** — `assets/js/library.js`, the `FOODS` list at the top.
`status: 'seen'` only if the food is visible in one of our lunchbox photos;
otherwise `'named'`. Facts must be general composition facts, never health claims.

**Add a photographed lunchbox** — add a `.meal` article to `lunchbox.html` (copy
Box 03), set the pin positions (`--x` / `--y` as % of the photo), and add the box
to `BOXES` in `library.js`. List only what can be seen in the photo.

**Add a family recipe to the archive** — `assets/js/archive.js`. Set `family` on
the record (the shape is described at the top of the file). It appears on the
card and in the record automatically, and the "With a family record" filter
starts finding it. Only with the agreement of the person who shared it.

**Impact numbers** in `impact.html` are counts of what is on this site (3 boxes,
5 lab photos, 20 foods, 7 records). Update them by hand when those change.

## Editorial rules the markup enforces

These are the reason several things look emptier than a normal marketing site.
They are deliberate — please don't "fill them in" without the underlying work.

- **Status is stated once per page**, near the top, and not repeated.
- **Three kinds of evidence are kept apart** on a pairing page: *measured by us*
  (red mark), *published by others* (navy rule, citation numerals), *planned*
  (grey mark). Never move a citation into the first block.
- **Programme pages use four provenance marks**, explained in each page's key:
  ● seen in our photo · ◐ named by the team, not yet photographed ·
  ○ general reference, not our research · ▫ not yet recorded.
  Red stays reserved for laboratory measurements.
- **Ingredients come from photos, not guesses.** Recipes, seasonings, amounts,
  meat type and cost are listed as "not yet recorded" until the team records them.
- **Archive reference sections are not recipes.** They carry no quantities; a
  recipe on this site comes from a person who cooks it.
- **No Food Interaction Score is displayed anywhere** until its formula,
  weightings and inputs can be published beside it.
- **LunchBox AI is labelled as not yet built**, and no sample output is shown.
  The Food Library recommends nothing; it only reports what our boxes contain.
- **No price appears without a shop and a date.**
- **No in-vitro result is described as a human effect.**
- **No contributor, supervisor, school or partner is named** until they agree.
  Impact figures about people appear only with a date, a source and a method.

## Accessibility

- Azerbaijani glyphs verified in all three faces; Azerbaijani runs carry `lang="az"`.
- Skip link, visible focus ring, 44px touch targets on menu and dialog buttons.
- Lightbox and archive records use the native `<dialog>` (Esc closes, focus is
  trapped and returned). Arrow keys step through lab photos.
- Explorer selections are toggle buttons with `aria-pressed`; result changes are
  announced through a polite live region.
- Photo pins are decorative; the numbered list beside each photo is the content.
- Wide tables scroll inside their own region; the page never scrolls sideways
  (checked at 375, 512, 700, 800, 1000, 1060 and 1200px).
- Motion is limited to short transitions, disabled under `prefers-reduced-motion`.
- Light-only by choice: `body` paints its background explicitly.
