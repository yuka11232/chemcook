/* NUTRIX LAB - Interactive Food Library
   ==========================================================================
   DATA FIRST. To add or correct a food, edit the lists below; nothing else
   needs to change.

   status  "seen"  - visible in one of the team's own lunchbox photographs
           "named" - named by the team as a lunchbox food, not yet photographed
   facts   general, widely documented composition facts only. No health or
           medical claims, and nothing presented as a NUTRIX LAB result.
   ========================================================================== */
(function () {
  'use strict';

  var BOXES = [
    { n: 1, title: 'Bean dish, fruit & bread', img: 'assets/img/lunchbox-01-beans-fruit-bread.jpg', href: 'lunchbox.html#box-1',
      foods: ['beans', 'lemon', 'banana', 'dates', 'cinnamon', 'bread', 'tomato', 'cucumber'] },
    { n: 2, title: 'Chicken with mashed potato', img: 'assets/img/lunchbox-02-chicken-mash.jpg', href: 'lunchbox.html#box-2',
      foods: ['chicken', 'potato', 'tomato', 'bread', 'cucumber', 'persimmon', 'apple'] },
    { n: 3, title: 'Rice, salad & grilled meat', img: 'assets/img/lunchbox-03-rice-salad-grill.jpg', href: 'lunchbox.html#box-3',
      foods: ['rice', 'tomato', 'cucumber', 'herbs', 'grilled-meat', 'onion-sumac', 'nuts', 'raisins'] }
  ];

  var GROUPS = {
    protein: { name: 'Protein foods',       cls: 'g-protein' },
    starch:  { name: 'Starchy foods',       cls: 'g-starch'  },
    dairy:   { name: 'Dairy',               cls: 'g-dairy'   },
    produce: { name: 'Fruit & vegetables',  cls: 'g-produce' },
    flavour: { name: 'Herbs, spices & sour', cls: 'g-flavour' }
  };
  var GROUP_ORDER = ['protein', 'starch', 'dairy', 'produce', 'flavour'];

  var FOODS = [
    /* The five foods visitors are most likely to look for come first. */
    { id: 'yogurt', en: 'Yogurt', az: 'Qatıq', group: 'dairy', status: 'named',
      facts: [
        'Made by fermenting milk with bacteria, which thickens it and makes it tangy — fermentation makes it more acidic.',
        'A dairy food: it provides protein and calcium.'
      ],
      kitchen: 'Needs to stay cool until lunch — in practice, an insulated box or a cold pack.',
      archive: { id: 'dovga', name: 'Dovğa, the yogurt and herb soup' } },

    { id: 'tomato', en: 'Tomato', az: 'Pomidor', group: 'produce', status: 'seen',
      seenAs: 'Whole in Boxes 01 and 02, roasted in Box 02, chopped into the salad in Box 03.',
      facts: [
        'Contains vitamin C and lycopene, the pigment that makes it red.',
        'Naturally acidic.',
        'Vitamin C is sensitive to heat, so a roasted tomato and a raw one are not chemically the same food.'
      ],
      kitchen: 'Travels well whole; cut tomato is better kept in its own container so it doesn\'t make other foods soggy.' },

    { id: 'hummus', en: 'Hummus', az: 'Humus', group: 'protein', status: 'named',
      facts: [
        'Made from cooked chickpeas blended with tahini (sesame paste) and lemon juice. The team\'s own recipe is recorded and will be published with the family recipes.',
        'Chickpeas are pulses: they provide protein, fibre and plant (non-haem) iron.'
      ],
      kitchen: 'Packs well in a small sealed pot; pairs naturally with bread and raw vegetables for dipping.',
      archive: { id: 'noxud', name: 'Noxud — chickpeas, from piti to hummus' } },

    { id: 'chicken', en: 'Chicken', az: 'Toyuq əti', group: 'protein', status: 'seen',
      seenAs: 'Roast chicken piece in Box 02, beside the mashed potato.',
      facts: [
        'A protein food.',
        'Like other meats, it contains haem iron — the form of iron found in animal foods.'
      ],
      kitchen: 'Cooked meat must be kept cool until it is eaten.' },

    { id: 'potato', en: 'Potato', az: 'Kartof', group: 'starch', status: 'seen',
      seenAs: 'Mashed, filling most of the main tray in Box 02.',
      facts: [
        'A starchy food: most of its energy comes from starch.',
        'Also contains some vitamin C and potassium.',
        'Cooking, mashing and cooling all change how its starch is structured.'
      ],
      kitchen: 'Mash travels in a sealed tray and needs a spoon — Box 02 packs one.' },

    /* Everything else documented in the photographs. */
    { id: 'beans', en: 'Beans / chickpeas', az: 'Lobya / noxud', group: 'protein', status: 'seen',
      seenAs: 'A spiced bean or chickpea dish with a lemon wedge in Box 01. Which pulse, and the recipe, are still to be recorded.',
      facts: [
        'Pulses: they provide protein, fibre and plant (non-haem) iron.',
        'Pulses also contain phytate, a compound that binds minerals such as iron.'
      ],
      kitchen: 'Dried pulses are soaked before cooking; tinned ones are ready to use.',
      archive: { id: 'noxud', name: 'Noxud — chickpeas, from piti to hummus' } },

    { id: 'grilled-meat', en: 'Grilled meat', az: 'Kabab', group: 'protein', status: 'seen',
      seenAs: 'Grilled meat under sumac onions in Box 03. The type of meat is still to be recorded.',
      facts: ['A protein food that contains haem iron.'],
      kitchen: 'Cooked meat must be kept cool until it is eaten.',
      archive: { id: 'kabab', name: 'Kabab with sumac onions' } },

    { id: 'nuts', en: 'Nuts', az: 'Qoz-fındıq', group: 'protein', status: 'seen',
      seenAs: 'Walnuts, almonds, cashews and hazelnuts in a small glass in Box 03.',
      facts: ['Contain fats, protein and fibre.'],
      kitchen: 'Check for nut allergies before packing nuts for anyone else; many schools have rules on this.',
      archive: { id: 'quru-meyve', name: 'Nuts and dried fruit' } },

    { id: 'bread', en: 'Bread', az: 'Çörək', group: 'starch', status: 'seen',
      seenAs: 'A loaf wrapped separately in both Box 01 and Box 02.',
      facts: ['A starchy food made from wheat flour.'],
      kitchen: 'Wrapped on its own, it stays dry until lunch.',
      archive: { id: 'corek', name: 'Çörək — bread at the table' } },

    { id: 'rice', en: 'Rice', az: 'Düyü', group: 'starch', status: 'seen',
      seenAs: 'Yellow and white rice in Box 03. The spice that coloured it is still to be recorded.',
      facts: ['A starchy food.'],
      kitchen: 'Cooked rice should be cooled quickly and kept cool until lunch.',
      archive: { id: 'plov', name: 'Plov — saffron rice' } },

    { id: 'cucumber', en: 'Cucumber', az: 'Xiyar', group: 'produce', status: 'seen',
      seenAs: 'Whole in Boxes 01 and 02; chopped into the salad in Box 03.',
      facts: ['Mostly water — about 95%.'],
      kitchen: 'With tomato, one of only two foods in all three photographed boxes. It travels whole without any packing.' },

    { id: 'herbs', en: 'Dill & leafy herbs', az: 'Şüyüd, göyərti', group: 'produce', status: 'seen',
      seenAs: 'Dill and other leafy greens through the salad in Box 03, and over the sumac onions.',
      facts: ['Fresh herbs are leafy greens: used here for flavour, in small amounts.'],
      kitchen: 'Added just before packing so they stay fresh.',
      archive: { id: 'salat', name: 'Tomato and cucumber salad with herbs' } },

    { id: 'lemon', en: 'Lemon', az: 'Limon', group: 'flavour', status: 'seen',
      seenAs: 'A lemon wedge on the bean dish in Box 01.',
      facts: ['Strongly acidic.', 'Contains vitamin C.'],
      kitchen: 'A wedge lets the eater squeeze it at lunchtime, rather than in the morning.' },

    { id: 'onion-sumac', en: 'Onion with sumac', az: 'Soğan, sumaq', group: 'flavour', status: 'seen',
      seenAs: 'Sliced red onion with sumac and herbs over the grilled meat in Box 03.',
      facts: ['Sumac is a sour, deep-red spice made from dried, ground berries.'],
      kitchen: 'Sumac gives sourness without liquid, so it does not make the box wet.',
      archive: { id: 'kabab', name: 'Kabab with sumac onions' } },

    { id: 'cinnamon', en: 'Cinnamon', az: 'Darçın', group: 'flavour', status: 'seen',
      seenAs: 'A whole cinnamon stick in the banana and dates in Box 01.',
      facts: ['A spice made from tree bark, used here for flavour.'],
      kitchen: 'A whole stick flavours fruit over the morning and is removed before eating.' },

    { id: 'banana', en: 'Banana', az: 'Banan', group: 'produce', status: 'seen',
      seenAs: 'Sliced, with dates and cinnamon, in Box 01.',
      facts: ['A fruit whose sugars increase as it ripens — the starch in it turns to sugar.'],
      kitchen: 'Cut banana darkens in air, so slicing it close to packing time helps.' },

    { id: 'dates', en: 'Dates', az: 'Finik (xurma)', group: 'produce', status: 'seen',
      seenAs: 'Whole dates with banana and cinnamon in Box 01.',
      facts: ['A dried fruit: its natural sugar is concentrated as the water is lost.'],
      kitchen: 'Keeps without refrigeration.',
      archive: { id: 'quru-meyve', name: 'Nuts and dried fruit' } },

    { id: 'raisins', en: 'Raisins', az: 'Kişmiş', group: 'produce', status: 'seen',
      seenAs: 'Dark raisins mixed into the nuts in Box 03.',
      facts: ['Dried grapes, with concentrated natural sugar.'],
      kitchen: 'Keeps without refrigeration.',
      archive: { id: 'quru-meyve', name: 'Nuts and dried fruit' } },

    { id: 'apple', en: 'Apple', az: 'Alma', group: 'produce', status: 'seen',
      seenAs: 'Whole, in Box 02.',
      facts: ['A fruit that contains fibre.'],
      kitchen: 'Travels whole without any packing.' },

    { id: 'persimmon', en: 'Persimmon', az: 'Xurma', group: 'produce', status: 'seen',
      seenAs: 'Whole, in Box 02.',
      facts: ['An autumn fruit. Its orange colour comes from carotenoid pigments, including beta-carotene.'],
      kitchen: 'A seasonal choice — available in autumn and early winter.' }
  ];

  /* Questions a combination raises. Each one is a question, linked to the
     planned measurement or published evidence it relates to - never a result. */
  var PULSES = ['beans', 'hummus'];
  var VIT_C = ['tomato', 'lemon'];
  var STARCH = ['bread', 'potato', 'rice'];
  var MEAT = ['chicken', 'grilled-meat'];
  var ACIDIC = ['lemon', 'tomato', 'yogurt'];
  var GREENS = ['herbs'];

  function any(sel, list) { return list.some(function (id) { return sel.indexOf(id) > -1; }); }
  function count(sel, list) { return list.filter(function (id) { return sel.indexOf(id) > -1; }).length; }

  var RULES = [
    { test: function (s) { return any(s, PULSES) && any(s, VIT_C); },
      kind: 'Published evidence · not our measurement',
      title: 'Plant iron next to vitamin C',
      text: 'Pulses carry non-haem iron. Published single-meal studies show vitamin C can increase how much non-haem iron is absorbed — the question behind <a href="pairings/lentils-bell-pepper.html">our first pairing, lentils + bell pepper</a>. Whether it holds for this combination, at lunchbox amounts, has not been measured.' },
    { test: function (s) { return count(s, STARCH) >= 2; },
      kind: 'Planned measurement',
      title: 'Two starchy foods together',
      text: 'Our planned starch-breakdown measurement compares how quickly starch is broken down in a laboratory digestion model across combinations like this one. Nothing has been measured yet, and the measure is a laboratory proxy, not a blood-sugar reading.' },
    { test: function (s) { return any(s, MEAT) && any(s, GREENS); },
      kind: 'Planned pairing',
      title: 'Meat with leafy greens',
      text: 'Two forms of iron in one meal: haem iron from the meat, non-haem iron from the greens. This is the question behind our planned beef + leafy greens pairing.' },
    { test: function (s) { return s.indexOf('rice') > -1 && any(s, PULSES); },
      kind: 'Planned pairing',
      title: 'Rice with pulses',
      text: 'Our planned rice + beans pairing asks how quickly rice starch breaks down in the digestion model when pulses are part of the same meal.' },
    { test: function (s) { return any(s, ACIDIC) && s.length >= 2; },
      kind: 'Planned measurement',
      title: 'An acidic food in the mix',
      text: 'Lemon, tomato and yogurt are all acidic. Our planned pH measurement asks whether combining foods changes how acidic the mixture becomes — which affects what dissolves and which vitamins survive. A pH reading describes the food in the beaker, not the person eating it.' },
    { test: function (s) { return s.indexOf('yogurt') > -1 && any(s, ['herbs', 'cucumber', 'rice']); },
      kind: 'Tradition · general reference', tradition: true,
      title: 'Yogurt with greens',
      text: 'Yogurt, fresh herbs and rice are the base of dovğa, a traditional Azerbaijani yogurt soup. <a href="archive.html#dovga">Read the archive record</a>.' },
    { test: function (s) { return s.indexOf('onion-sumac') > -1 && any(s, MEAT); },
      kind: 'Tradition · general reference', tradition: true,
      title: 'Sumac onions with grilled meat',
      text: 'A long-standing way to serve kabab, and the combination in Box 03. <a href="archive.html#kabab">Read the archive record</a>.' }
  ];

  /* ==========================================================================
     Rendering - no need to edit below this line to change content.
     ========================================================================== */
  var root = document.getElementById('explorer');
  if (!root) return;

  var byId = {};
  FOODS.forEach(function (f) { byId[f.id] = f; });
  var selected = [];

  var chooser = root.querySelector('.chooser-groups');
  var results = root.querySelector('.results');
  var status = document.getElementById('explorer-status');

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function mark(st) {
    return st === 'seen'
      ? '<span class="pv pv-seen" aria-hidden="true">●</span>'
      : '<span class="pv pv-named" aria-hidden="true">◐</span>';
  }
  function boxesWith(id) { return BOXES.filter(function (b) { return b.foods.indexOf(id) > -1; }); }

  /* Chooser */
  chooser.innerHTML = GROUP_ORDER.map(function (g) {
    var foods = FOODS.filter(function (f) { return f.group === g; });
    if (!foods.length) return '';
    return '<fieldset class="' + GROUPS[g].cls + '"><legend>' + GROUPS[g].name + '</legend><div class="foodchips">' +
      foods.map(function (f) {
        var label = f.en + (f.status === 'named' ? ' — named by the team, not yet photographed' : ' — seen in our photos');
        return '<button type="button" class="foodchip" data-food="' + f.id + '" aria-pressed="false" title="' + esc(f.az) + '" aria-label="' + esc(label) + '">' +
          mark(f.status) + esc(f.en) + '</button>';
      }).join('') + '</div></fieldset>';
  }).join('');

  root.addEventListener('click', function (e) {
    var chip = e.target.closest('[data-food]');
    if (chip) { toggleFood(chip.getAttribute('data-food')); return; }
    var add = e.target.closest('[data-add]');
    if (add) { if (selected.indexOf(add.getAttribute('data-add')) < 0) { selected.push(add.getAttribute('data-add')); update(); } return; }
    var preset = e.target.closest('[data-box]');
    if (preset) {
      var box = BOXES[Number(preset.getAttribute('data-box')) - 1];
      selected = box.foods.slice(); update(); return;
    }
    if (e.target.closest('[data-clear]')) { selected = []; update(); }
  });

  function toggleFood(id) {
    var i = selected.indexOf(id);
    if (i > -1) selected.splice(i, 1); else selected.push(id);
    update();
  }

  function update() {
    var chips = root.querySelectorAll('[data-food]');
    for (var i = 0; i < chips.length; i++) {
      chips[i].setAttribute('aria-pressed', String(selected.indexOf(chips[i].getAttribute('data-food')) > -1));
    }
    render();
    try {
      history.replaceState(null, '', selected.length ? '#f=' + selected.join(',') : location.pathname + location.search);
    } catch (err) { /* file:// in some browsers - harmless */ }
  }

  function render() {
    if (!selected.length) {
      results.innerHTML =
        '<div class="results-empty"><p class="h3" style="margin-bottom:var(--s3);">Pick a food to begin</p>' +
        '<p>Choose one food to read about it, or several to see how they combine — which food groups they cover, ' +
        'which of our lunchboxes already put them together, and what questions the combination raises for the lab.</p>' +
        '<p class="note">Try <button type="button" class="textbtn" data-add="yogurt">yogurt</button>, ' +
        '<button type="button" class="textbtn" data-add="tomato">tomato</button>, ' +
        '<button type="button" class="textbtn" data-add="hummus">hummus</button>, ' +
        '<button type="button" class="textbtn" data-add="chicken">chicken</button> or ' +
        '<button type="button" class="textbtn" data-add="potato">potato</button>.</p></div>';
      status.textContent = 'No foods selected.';
      return;
    }

    var foods = selected.map(function (id) { return byId[id]; });
    var html = '';

    /* 1. Food groups covered */
    var covGroups = ['starch', 'protein', 'produce', 'dairy'];
    html += '<div class="res-block"><h3>Food groups in your selection <span>' + foods.length + (foods.length === 1 ? ' food' : ' foods') + '</span></h3><div class="coverage">' +
      covGroups.map(function (g) {
        var hits = foods.filter(function (f) { return f.group === g; });
        return '<div class="cov ' + GROUPS[g].cls + (hits.length ? ' is-on' : '') + '"><span class="cov-name">' + GROUPS[g].name + '</span>' +
          '<span class="cov-val">' + (hits.length ? hits.map(function (f) { return esc(f.en); }).join(', ') : 'None yet') + '</span></div>';
      }).join('') + '</div>' +
      '<p class="note" style="margin:0;">Public food guides commonly describe a balanced meal as a starchy food, a protein food, and fruit or vegetables — often with dairy as well. ' +
      (['starch', 'protein', 'produce'].every(function (g) { return foods.some(function (f) { return f.group === g; }); })
        ? '<b style="color:var(--ink);font-weight:500;">This selection has all three.</b>'
        : 'Add from the empty groups to complete a box.') +
      '</p></div>';

    /* 2. Documented lunchboxes */
    var full = BOXES.filter(function (b) { return selected.every(function (id) { return b.foods.indexOf(id) > -1; }); });
    var partial = BOXES.filter(function (b) { return full.indexOf(b) < 0; })
      .map(function (b) { return { b: b, n: count(selected, b.foods) }; })
      .filter(function (x) { return x.n > 0; })
      .sort(function (a, b) { return b.n - a.n; });
    html += '<div class="res-block"><h3>In our photographed lunchboxes</h3>';
    if (full.length) {
      html += '<p style="font-size:15.5px;">' + (selected.length > 1 ? 'Packed together in ' : 'Appears in ') + full.length + ' of our ' + BOXES.length + ' documented boxes:</p>' +
        '<ul class="matchboxes">' + full.map(boxRow).join('') + '</ul>';
    } else {
      var named = foods.filter(function (f) { return f.status === 'named'; });
      html += '<p style="font-size:15.5px;">' + (selected.length > 1
        ? 'No photographed box contains all of these together.'
        : 'Not in a photographed box yet.') +
        (named.length ? ' ' + named.map(function (f, i) { return i ? esc(f.en.toLowerCase()) : esc(f.en); }).join(' and ') + (named.length > 1 ? ' are' : ' is') + ' named by the team as a lunchbox food, but no photograph of that box has been added yet.' : '') + '</p>';
      if (partial.length) {
        html += '<ul class="matchboxes">' + partial.map(function (x) { return boxRow(x.b, x.n); }).join('') + '</ul>';
      }
    }
    html += '</div>';

    /* 3. Questions */
    var qs = RULES.filter(function (r) { return r.test(selected); });
    if (selected.length > 1) {
      html += '<div class="res-block"><h3>Questions this combination raises</h3>';
      html += qs.length
        ? qs.map(function (q) {
            return '<div class="question' + (q.tradition ? ' tradition' : '') + '"><span class="q-tag">' + q.kind + '</span><h4>' + q.title + '</h4><p>' + q.text + '</p></div>';
          }).join('')
        : '<p class="note">None of our planned measurements or archive records address this combination yet.</p>';
      html += '</div>';
    }

    /* 4. Food cards */
    html += '<div class="res-block"><h3>About ' + (foods.length === 1 ? 'this food' : 'these foods') + '</h3>' + foods.map(foodCard).join('') + '</div>';

    results.innerHTML = html;
    status.textContent = foods.length + (foods.length === 1 ? ' food' : ' foods') + ' selected: ' + foods.map(function (f) { return f.en; }).join(', ') + '. ' +
      (full.length ? 'Found together in ' + full.length + ' documented lunchbox' + (full.length > 1 ? 'es' : '') + '.' : 'Not together in a documented lunchbox.');
  }

  function boxRow(b, n) {
    return '<li class="matchbox"><img src="' + b.img + '" alt="" width="76" height="76" loading="lazy">' +
      '<span><a href="' + b.href + '">Box 0' + b.n + ' — ' + esc(b.title) + '</a>' +
      '<small>' + (n ? 'Contains ' + n + ' of your ' + selected.length + ' foods' : b.foods.length + ' foods, all visible in the photograph') + '</small></span></li>';
  }

  function foodCard(f) {
    var boxes = boxesWith(f.id);
    var co = {};
    boxes.forEach(function (b) { b.foods.forEach(function (id) { if (id !== f.id) co[id] = (co[id] || 0) + 1; }); });
    var coIds = Object.keys(co).sort(function (a, b) { return co[b] - co[a]; });

    return '<article class="foodcard ' + GROUPS[f.group].cls + '">' +
      '<div class="foodcard-head"><h4>' + esc(f.en) + '</h4><span class="az" lang="az">' + esc(f.az) + '</span><span class="grp">' + GROUPS[f.group].name + '</span></div>' +
      '<div class="foodcard-body"><div>' +
        '<h5>What it brings · general reference</h5><ul>' + f.facts.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>' +
        (f.kitchen ? '<h5>In a lunchbox</h5><p>' + esc(f.kitchen) + '</p>' : '') +
        (f.archive ? '<h5>In the archive</h5><p><a href="archive.html#' + f.archive.id + '">' + esc(f.archive.name) + '</a></p>' : '') +
      '</div><div>' +
        '<h5>' + mark(f.status) + ' ' + (f.status === 'seen' ? 'Seen in our photos' : 'Named by the team') + '</h5>' +
        (f.status === 'seen'
          ? '<p>' + esc(f.seenAs) + '</p><div class="inbox">' + boxes.map(function (b) {
              return '<a href="' + b.href + '"><img src="' + b.img + '" alt="Box 0' + b.n + '" width="64" height="64" loading="lazy"><span>Box 0' + b.n + '</span></a>';
            }).join('') + '</div>'
          : '<p>Named by the team as a lunchbox food. A photograph of the box it was packed in has not been added yet.</p>') +
        (coIds.length
          ? '<h5>Packed with it in our boxes</h5><div class="pairs-with">' + coIds.map(function (id) {
              return selected.indexOf(id) > -1 ? '' : '<button type="button" data-add="' + id + '" aria-label="Add ' + esc(byId[id].en) + ' to selection">+ ' + esc(byId[id].en) + '</button>';
            }).join('') + '</div>'
          : '') +
      '</div></div></article>';
  }

  /* Presets + initial state from the URL (#f=tomato,chicken) */
  var presetWrap = root.querySelector('.presets');
  if (presetWrap) {
    presetWrap.insertAdjacentHTML('beforeend', BOXES.map(function (b) {
      return '<button type="button" class="preset" data-box="' + b.n + '">Box 0' + b.n + '</button>';
    }).join(''));
  }
  var m = /#f=([\w,-]+)/.exec(location.hash);
  if (m) selected = m[1].split(',').filter(function (id) { return byId[id]; });
  update();
})();
