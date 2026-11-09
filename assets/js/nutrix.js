/* NUTRIX LAB - shared behaviour: mobile menu and photo lightbox.
   Everything here is an enhancement. Without JavaScript the menu is a plain
   wrapped list and every photo link simply opens the full image. */
(function () {
  'use strict';

  /* Mobile menu ----------------------------------------------------------- */
  var toggle = document.querySelector('.navtoggle');
  var nav = document.getElementById('mainnav');
  if (toggle && nav) {
    var setOpen = function (open) {
      toggle.setAttribute('aria-expanded', String(open));
      nav.classList.toggle('is-open', open);
    };
    toggle.addEventListener('click', function () {
      setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setOpen(false);
        toggle.focus();
      }
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) setOpen(false);
    });
  }

  /* Lightbox --------------------------------------------------------------
     Any <a data-lightbox="group" href="full.jpg" data-title="" data-caption="">
     opens in a dialog; links sharing a group can be stepped through. */
  var links = Array.prototype.slice.call(document.querySelectorAll('a[data-lightbox]'));
  if (!links.length || typeof HTMLDialogElement !== 'function') return;

  var dlg = document.createElement('dialog');
  dlg.className = 'lightbox';
  dlg.setAttribute('aria-labelledby', 'lb-title');
  dlg.innerHTML =
    '<div class="lb-inner">' +
      '<div class="lb-img"><img alt=""></div>' +
      '<div class="lb-side">' +
        '<span class="lb-count" aria-live="polite"></span>' +
        '<p class="lb-cap"><b id="lb-title"></b><span class="lb-text"></span></p>' +
        '<div class="lb-btns">' +
          '<button type="button" data-step="-1">&larr; Previous</button>' +
          '<button type="button" data-step="1">Next &rarr;</button>' +
          '<button type="button" data-close>Close</button>' +
        '</div>' +
      '</div>' +
    '</div>';
  document.body.appendChild(dlg);

  var img = dlg.querySelector('img');
  var title = dlg.querySelector('#lb-title');
  var text = dlg.querySelector('.lb-text');
  var count = dlg.querySelector('.lb-count');
  var stepBtns = dlg.querySelectorAll('[data-step]');
  var group = [], index = 0, opener = null;

  function show(i) {
    index = (i + group.length) % group.length;
    var a = group[index];
    var thumb = a.querySelector('img');
    img.src = a.getAttribute('href');
    img.alt = thumb ? thumb.alt : '';
    title.textContent = a.getAttribute('data-title') || '';
    text.textContent = a.getAttribute('data-caption') || '';
    count.textContent = group.length > 1 ? 'Photo ' + (index + 1) + ' of ' + group.length : '';
    for (var s = 0; s < stepBtns.length; s++) stepBtns[s].hidden = group.length < 2;
  }

  links.forEach(function (a) {
    a.addEventListener('click', function (e) {
      if (e.metaKey || e.ctrlKey || e.shiftKey) return;   // let "open in new tab" work
      e.preventDefault();
      var name = a.getAttribute('data-lightbox');
      group = links.filter(function (l) { return l.getAttribute('data-lightbox') === name; });
      opener = a;
      show(group.indexOf(a));
      dlg.showModal();
      dlg.querySelector(group.length > 1 ? '[data-step="1"]' : '[data-close]').focus();
    });
  });

  dlg.addEventListener('click', function (e) {
    var step = e.target.closest('[data-step]');
    if (step) { show(index + Number(step.getAttribute('data-step'))); return; }
    if (e.target.closest('[data-close]') || e.target === dlg) dlg.close();
  });
  dlg.addEventListener('keydown', function (e) {
    if (group.length < 2) return;
    if (e.key === 'ArrowRight') { e.preventDefault(); show(index + 1); }
    if (e.key === 'ArrowLeft')  { e.preventDefault(); show(index - 1); }
  });
  dlg.addEventListener('close', function () {
    img.removeAttribute('src');
    if (opener) opener.focus();
  });
})();
