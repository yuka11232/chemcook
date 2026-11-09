/* NUTRIX LAB - Intergenerational Food Archive
   ==========================================================================
   DATA FIRST. Each record has three layers, and they are never mixed:

   reference  General, widely documented background on the tradition.
              Not collected by NUTRIX LAB. No quantities, no invented recipe.
   lunchbox   How it connects to the team's lunchboxes.
              state "seen"  - visible in one of our lunchbox photographs
              state "named" - named by the team, no photograph yet
              state "idea"  - an idea for a future box, not yet made or tested
   family     A family's own version, collected by interview, with permission.
              Stays null until a real record exists. When it does, fill in:
              { from: 'Grandmother of a team member (name only with consent)',
                collected: '2026-11-20', ingredients: [...], method: '...',
                memory: '...', photo: 'assets/img/...' }
   ========================================================================== */
(function () {
  'use strict';

  var RECORDS = [
    {
      id: 'plov', no: 'ARX-01', az: 'Plov', en: 'Saffron rice with its toppings',
      cats: ['grains'], keywords: 'aş rice saffron qazmaq qara butter celebration',
      photo: { src: 'assets/img/lunchbox-03-rice-salad-grill.jpg', pos: '28% 84%', alt: 'Yellow and white rice in the team\'s Box 03.' },
      summary: 'The centrepiece of celebrations: rice and its toppings cooked separately, brought together at the table.',
      reference: {
        typical: ['Long-grain rice', 'Butter', 'Saffron, steeped in hot water', 'A topping (qara) — for example meat, dried fruit or chestnuts'],
        prep: 'The rice is part-boiled, drained, then steamed slowly with butter. Saffron is steeped and spooned over part of the rice, giving the familiar yellow-and-white pattern. A crust called qazmaq often forms at the bottom of the pot and is shared out as a treat.',
        background: 'Plov has many regional and family versions, often named after their topping. Şah plov, baked inside a shell of thin lavaş bread, is one of the best-known festive forms.'
      },
      lunchbox: { state: 'seen', box: 3, text: 'Box 03 carries yellow-and-white rice beside a fresh salad and grilled meat. The pattern echoes saffron plov; which spice coloured it, and how it was cooked, are still to be recorded.' },
      prompts: ['Which topping (qara) did your family make for celebrations?', 'Who was allowed to have the qazmaq?', 'Was plov ever packed to take somewhere — and how?'],
      family: null
    },
    {
      id: 'kabab', no: 'ARX-02', az: 'Kabab və sumaqlı soğan', en: 'Kabab with sumac onions',
      cats: ['meat', 'veg'], keywords: 'kebab grilled meat sumac onion sour herbs lavash',
      photo: { src: 'assets/img/lunchbox-03-rice-salad-grill.jpg', pos: '74% 52%', alt: 'Grilled meat under sliced red onion and sumac in the team\'s Box 03.' },
      summary: 'Grilled meat served with thin-sliced onion tossed in sour, deep-red sumac.',
      reference: {
        typical: ['Meat, grilled on skewers', 'Onion, sliced thin', 'Sumac', 'Fresh herbs', 'Lavaş to wrap or serve on'],
        prep: 'The onion is sliced thin and tossed with sumac and herbs shortly before serving. Its sourness balances the richness of the grilled meat.',
        background: 'Sumac onions beside grilled meat are a familiar pairing across Azerbaijan and the wider region. Sumac brings sourness without any liquid — the same reason it suits a packed lunch.'
      },
      lunchbox: { state: 'seen', box: 3, text: 'Box 03 packs grilled meat under sumac onions and herbs, in its own foil tray. The type of meat is still to be recorded.' },
      prompts: ['What did your family put on the table beside kabab?', 'Was sumac bought, or made at home?', 'Who did the grilling, and where?'],
      family: null
    },
    {
      id: 'dovga', no: 'ARX-03', az: 'Dovğa', en: 'Yogurt soup with fresh herbs',
      cats: ['dairy', 'veg', 'grains'], keywords: 'dovga yogurt qatıq herbs dill coriander mint rice chickpeas soup cold hot',
      photo: null, tile: { a: '#3C5A3A' },
      summary: 'Yogurt, fresh herbs and rice — eaten hot in winter and cold in summer.',
      reference: {
        typical: ['Yogurt (qatıq), thinned with water', 'Rice', 'Fresh herbs such as dill, coriander and mint; often spinach', 'Sometimes chickpeas', 'Egg or a little flour, so the yogurt does not split'],
        prep: 'The yogurt is mixed with egg or flour and stirred constantly while it heats, so it does not curdle. Cooked rice and chopped herbs go in near the end.',
        background: 'One of Azerbaijan\'s best-known yogurt dishes, served at home and at gatherings. It is eaten warm in cold months and chilled in summer.'
      },
      lunchbox: { state: 'idea', text: 'Not in a photographed box. Yogurt is named by the team as a lunchbox food: a chilled dovğa-style pot of yogurt with herbs is an idea for a future box. It would need to travel cold, and it has not been made or tested.' },
      prompts: ['How did your family stop the yogurt splitting?', 'Which herbs went in — and which never did?', 'Was it a summer dish, a winter dish, or both?'],
      family: null
    },
    {
      id: 'corek', no: 'ARX-04', az: 'Çörək', en: 'Bread at the table',
      cats: ['grains'], keywords: 'bread corek tandir lavas yuxa saj waste wheat',
      photo: { src: 'assets/img/lunchbox-02-chicken-mash.jpg', pos: '84% 30%', alt: 'A loaf of bread wrapped separately in the team\'s Box 02.' },
      summary: 'Bread is treated with particular respect — and is not thrown away.',
      reference: {
        typical: ['Wheat flour', 'Water', 'Salt', 'Yeast or a sourdough starter'],
        prep: 'Tandır bread is pressed onto the hot inner wall of a clay oven. Thin breads such as lavaş and yuxa are rolled out and baked quickly on a curved iron plate (saj) or in the tandır.',
        background: 'A widely kept custom is never to throw bread away: a piece that falls is picked up, often kissed, and set somewhere high. Stale bread is given another use rather than binned.'
      },
      lunchbox: { state: 'seen', box: 2, alsoBox: 1, text: 'Boxes 01 and 02 both include a loaf, wrapped separately from the wet food. The custom of not wasting bread links directly to our plan to record what comes home from school uneaten.' },
      prompts: ['What happened to stale bread in your home?', 'Was bread baked at home, bought, or from a neighbour\'s tandır?', 'What were you told to do if bread fell on the floor?'],
      family: null
    },
    {
      id: 'quru-meyve', no: 'ARX-05', az: 'Qoz-fındıq və quru meyvə', en: 'Nuts and dried fruit',
      cats: ['fruit'], keywords: 'nuts walnuts hazelnuts almonds raisins dates dried fruit novruz xonca semeni winter',
      photo: { src: 'assets/img/lunchbox-03-rice-salad-grill.jpg', pos: '40% 22%', alt: 'A glass of mixed nuts and raisins in the team\'s Box 03.' },
      summary: 'Winter stores, and the heart of the Novruz tray.',
      reference: {
        typical: ['Walnuts, hazelnuts, almonds', 'Raisins (kişmiş)', 'Dried apricots and other dried fruit'],
        prep: 'Fruit is dried in the sun or in airy rooms so it keeps through the winter; nuts are stored in their shells.',
        background: 'At Novruz, the spring new year, the xonça tray holds sprouted wheat (səməni) surrounded by nuts, dried fruit and pastries such as şəkərbura and paxlava.'
      },
      lunchbox: { state: 'seen', box: 3, alsoBox: 1, text: 'Box 03 has a small glass of walnuts, almonds, cashews, hazelnuts and raisins. Box 01 has dates with banana and cinnamon.' },
      prompts: ['How were nuts and fruit stored for winter?', 'What was on your family\'s xonça at Novruz?', 'Which dried fruit did children get as a snack?'],
      family: null
    },
    {
      id: 'noxud', no: 'ARX-06', az: 'Noxud', en: 'Chickpeas, from piti to hummus',
      cats: ['pulses'], keywords: 'chickpeas noxud piti hummus humus pulses beans lobya lemon tahini seki',
      photo: { src: 'assets/img/lunchbox-01-beans-fruit-bread.jpg', pos: '32% 22%', alt: 'A spiced bean or chickpea dish with a lemon wedge in the team\'s Box 01.' },
      summary: 'A pulse with a long local history, now also eaten as hummus.',
      reference: {
        typical: ['Dried chickpeas, soaked overnight', 'For piti: lamb, chestnuts and saffron', 'For hummus: tahini (sesame paste) and lemon juice'],
        prep: 'Dried chickpeas are soaked before cooking. Piti is slow-cooked in individual clay pots; hummus is blended smooth from cooked chickpeas.',
        background: 'Piti, a lamb and chickpea stew cooked in clay pots, is closely associated with Şəki. Hummus comes from the wider Middle East and is now widely eaten.'
      },
      lunchbox: { state: 'seen', box: 1, text: 'Box 01 holds a spiced bean or chickpea dish with a lemon wedge; which pulse, and the recipe, are still to be recorded. Hummus is named by the team as a lunchbox food, not yet photographed.' },
      prompts: ['Did anyone soak chickpeas the night before? For how long?', 'Has anyone in your family made piti?', 'Which pulses were cheap and everyday, and which were for guests?'],
      family: null
    },
    {
      id: 'salat', no: 'ARX-07', az: 'Pomidor-xiyar salatı', en: 'Tomato and cucumber salad with herbs',
      cats: ['veg'], keywords: 'salad tomato cucumber onion herbs goyerti dill coriander basil reyhan coban',
      photo: { src: 'assets/img/lunchbox-03-rice-salad-grill.jpg', pos: '24% 47%', alt: 'Tomato, cucumber, red onion and dill salad in the team\'s Box 03.' },
      summary: 'Chopped just before eating, with a bunch of fresh herbs never far away.',
      reference: {
        typical: ['Tomato', 'Cucumber', 'Onion', 'Fresh herbs — dill, coriander, basil (reyhan)'],
        prep: 'Chopped close to eating so it stays crisp; dressed simply, if at all.',
        background: 'Fresh herbs (göyərti) are put on the table with most meals, often whole, as a bunch to pick from.'
      },
      lunchbox: { state: 'seen', box: 3, text: 'Box 03 carries a chopped salad of tomato, cucumber, red onion, dill and leafy greens. Boxes 01 and 02 pack tomato and cucumber whole instead — they keep better that way until lunch.' },
      prompts: ['Which herbs were always on your family\'s table?', 'Who grew them, and where?', 'Was salad dressed — with what?'],
      family: null
    }
  ];

  var FILTERS = [
    { id: 'all',    label: 'All records',            test: function () { return true; } },
    { id: 'seen',   label: 'Seen in our lunchboxes', test: function (r) { return r.lunchbox.state === 'seen'; } },
    { id: 'idea',   label: 'Ideas for new boxes',    test: function (r) { return r.lunchbox.state !== 'seen'; } },
    { id: 'family', label: 'With a family record',   test: function (r) { return !!r.family; } },
    { id: 'grains', label: 'Rice & bread',           test: function (r) { return r.cats.indexOf('grains') > -1; } },
    { id: 'pulses', label: 'Pulses',                 test: function (r) { return r.cats.indexOf('pulses') > -1; } },
    { id: 'dairy',  label: 'Dairy',                  test: function (r) { return r.cats.indexOf('dairy') > -1; } },
    { id: 'meat',   label: 'Meat',                   test: function (r) { return r.cats.indexOf('meat') > -1; } },
    { id: 'veg',    label: 'Vegetables & herbs',     test: function (r) { return r.cats.indexOf('veg') > -1; } },
    { id: 'fruit',  label: 'Fruit & nuts',           test: function (r) { return r.cats.indexOf('fruit') > -1; } }
  ];

  var BOX_TITLES = { 1: 'Box 01 — Bean dish, fruit & bread', 2: 'Box 02 — Chicken with mashed potato', 3: 'Box 03 — Rice, salad & grilled meat' };

  /* ==========================================================================
     Rendering
     ========================================================================== */
  var grid = document.getElementById('recgrid');
  if (!grid) return;
  var search = document.getElementById('archive-search');
  var filterRow = document.getElementById('archive-filters');
  var countEl = document.getElementById('archive-count');
  var activeFilter = 'all';

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  /* "dovga" finds "Dovğa", "corek" finds "Çörək". */
  function fold(s) {
    return String(s).toLowerCase().replace(/ə/g, 'e').replace(/ı/g, 'i')
      .normalize('NFD').replace(/[̀-ͯ]/g, '');
  }
  RECORDS.forEach(function (r) {
    r._text = fold([r.az, r.en, r.summary, r.keywords, r.reference.typical.join(' '), r.reference.background, r.lunchbox.text].join(' '));
  });

  var STATE = {
    seen:  { mark: '●', cls: 'pv-seen',  label: 'Seen in our lunchbox' },
    named: { mark: '◐', cls: 'pv-named', label: 'Named by the team' },
    idea:  { mark: '◌', cls: 'pv-named', label: 'Idea, not yet tested' }
  };

  function visual(r, cls) {
    if (r.photo) {
      return '<img class="' + cls + '" src="' + r.photo.src + '" alt="' + esc(r.photo.alt) + '" style="object-position:' + r.photo.pos + '" loading="lazy" width="1200" height="1600">';
    }
    return '<div class="typetile" style="--a:' + r.tile.a + '" aria-hidden="true"><span class="tt-a" lang="az">' + esc(r.az) + '</span></div>';
  }

  function card(r) {
    var st = STATE[r.lunchbox.state];
    return '<li><article class="reccard" id="' + r.id + '">' +
      '<div class="reccard-tab"><span>' + r.no + '</span><span>' + (r.family ? 'Family record' : 'Reference record') + '</span></div>' +
      visual(r, 'reccard-img') +
      '<div class="reccard-body">' +
        '<h3 class="reccard-az" lang="az">' + esc(r.az) + '</h3>' +
        '<p class="reccard-en">' + esc(r.en) + '</p>' +
        '<p class="reccard-sum">' + esc(r.summary) + '</p>' +
        '<ul class="chain" aria-label="Across generations">' +
          '<li><span class="pv pv-ref" aria-hidden="true">○</span><span class="c-k">Tradition</span><span>General reference</span></li>' +
          '<li><span class="pv ' + (r.family ? 'pv-seen' : 'pv-todo') + '" aria-hidden="true">' + (r.family ? '●' : '▫') + '</span><span class="c-k">Family</span><span>' + (r.family ? 'Collected ' + esc(r.family.collected) : 'Not yet collected') + '</span></li>' +
          '<li><span class="pv ' + st.cls + '" aria-hidden="true">' + st.mark + '</span><span class="c-k">Lunchbox</span><span>' + st.label + '</span></li>' +
        '</ul>' +
        '<button type="button" class="open-rec" data-open="' + r.id + '" aria-haspopup="dialog">Open record<span class="visually-hidden">: ' + esc(r.en) + '</span></button>' +
      '</div></article></li>';
  }

  filterRow.innerHTML = FILTERS.map(function (f) {
    return '<button type="button" data-filter="' + f.id + '" aria-pressed="' + (f.id === activeFilter) + '">' + f.label + '</button>';
  }).join('');

  function render() {
    var q = fold(search.value.trim());
    var terms = q.split(/\s+/).filter(Boolean);
    var test = FILTERS.filter(function (f) { return f.id === activeFilter; })[0].test;
    var hits = RECORDS.filter(function (r) {
      return test(r) && terms.every(function (t) { return r._text.indexOf(t) > -1; });
    });
    grid.innerHTML = hits.length
      ? hits.map(card).join('')
      : '<li class="archive-none"><p class="h3" style="margin-bottom:var(--s2);">No records match</p><p style="margin:0;">' +
        (activeFilter === 'family'
          ? 'No family records have been collected yet. The interview guide below is how the first one gets made.'
          : 'Try a single ingredient, such as <i>yogurt</i>, <i>rice</i> or <i>chickpeas</i>, or clear the filter.') + '</p></li>';
    countEl.textContent = hits.length + ' of ' + RECORDS.length + ' records';
  }

  search.addEventListener('input', render);
  filterRow.addEventListener('click', function (e) {
    var b = e.target.closest('[data-filter]');
    if (!b) return;
    activeFilter = b.getAttribute('data-filter');
    var all = filterRow.querySelectorAll('[data-filter]');
    for (var i = 0; i < all.length; i++) all[i].setAttribute('aria-pressed', String(all[i] === b));
    render();
  });

  /* Record dialog ---------------------------------------------------------- */
  var dlg = document.createElement('dialog');
  dlg.className = 'recdialog';
  dlg.setAttribute('aria-labelledby', 'rd-title');
  document.body.appendChild(dlg);
  var opener = null;

  function boxLink(n) {
    return '<a href="lunchbox.html#box-' + n + '">' + BOX_TITLES[n] + '</a>';
  }

  function openRecord(id, from) {
    var r = RECORDS.filter(function (x) { return x.id === id; })[0];
    if (!r) return;
    opener = from || null;
    var st = STATE[r.lunchbox.state];
    var boxes = [r.lunchbox.box, r.lunchbox.alsoBox].filter(Boolean).sort();
    dlg.innerHTML =
      '<div class="rd-head"><span>' + r.no + ' · Archive record</span><button type="button" data-close>Close ✕</button></div>' +
      '<div class="rd-hero">' + visual(r, '') +
        '<div class="rd-title"><h2 id="rd-title" lang="az">' + esc(r.az) + '</h2><p>' + esc(r.en) + '</p></div></div>' +
      '<div class="rd-body">' +

        '<section class="rd-sec ref"><div class="rd-sec-h"><span class="pv pv-ref" aria-hidden="true">○</span><h3>The tradition</h3>' +
          '<span class="tier-kind">General reference — not collected by us</span></div><div class="rd-in">' +
          '<div class="rd-cols"><div><h4>Commonly includes</h4><ul>' + r.reference.typical.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul></div>' +
          '<div><h4>How it is usually made</h4><p>' + esc(r.reference.prep) + '</p></div></div>' +
          '<h4>Background</h4><p style="margin-bottom:var(--s2);">' + esc(r.reference.background) + '</p>' +
          '<p class="note" style="margin:0;">A general description, not a recipe: no quantities are given, because a recipe on this site comes from a person who cooks it.</p>' +
        '</div></section>' +

        '<section class="rd-sec"><div class="rd-sec-h"><span class="pv ' + st.cls + '" aria-hidden="true">' + st.mark + '</span><h3>In our lunchboxes</h3>' +
          '<span class="tier-kind">' + st.label + '</span></div>' +
          '<p>' + esc(r.lunchbox.text) + '</p>' +
          (boxes.length ? '<p style="margin:0;">See ' + boxes.map(boxLink).join(' and ') + '.</p>' : '') +
        '</section>' +

        (r.family
          ? '<section class="rd-sec"><div class="rd-sec-h"><span class="pv pv-seen" aria-hidden="true">●</span><h3>The family\'s version</h3>' +
              '<span class="tier-kind">Collected ' + esc(r.family.collected) + '</span></div>' +
              '<p><b>From:</b> ' + esc(r.family.from) + '</p>' +
              '<h4>Ingredients, as given</h4><ul>' + r.family.ingredients.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>' +
              '<h4>Method, as given</h4><p>' + esc(r.family.method) + '</p>' +
              (r.family.memory ? '<h4>Remembered</h4><p>' + esc(r.family.memory) + '</p>' : '') +
            '</section>'
          : '<section class="rd-sec todo"><div class="rd-sec-h"><span class="pv pv-todo" aria-hidden="true">▫</span><h3>The family\'s version</h3>' +
              '<span class="tier-kind">Not yet collected</span></div>' +
              '<p>No family has shared their version of this yet. These are the questions we would ask first:</p><ol>' +
              r.prompts.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ol>' +
              '<p style="margin:0;"><a href="#collect" data-close>How a family recipe enters the archive</a></p>' +
            '</section>') +
      '</div>';
    dlg.showModal();
    try { history.replaceState(null, '', '#' + r.id); } catch (err) {}
    dlg.querySelector('[data-close]').focus();
  }

  grid.addEventListener('click', function (e) {
    var b = e.target.closest('[data-open]');
    if (b) openRecord(b.getAttribute('data-open'), b);
  });
  dlg.addEventListener('click', function (e) {
    var link = e.target.closest('a[href^="#"]');
    if (link) opener = null;   // following an in-page link: don't jump back to the card
    if (e.target === dlg || e.target.closest('[data-close]')) dlg.close();
  });
  dlg.addEventListener('close', function () {
    try { history.replaceState(null, '', location.pathname + location.search); } catch (err) {}
    if (opener && document.body.contains(opener)) opener.focus();
  });

  render();

  /* Deep links: archive.html#dovga opens that record. */
  function fromHash() {
    var id = location.hash.slice(1);
    if (!id || !RECORDS.some(function (r) { return r.id === id; })) return;
    var btn = grid.querySelector('[data-open="' + id + '"]');
    if (btn) btn.scrollIntoView({ block: 'center' });
    if (typeof HTMLDialogElement === 'function') openRecord(id, btn);
  }
  window.addEventListener('hashchange', fromHash);
  fromHash();
})();
