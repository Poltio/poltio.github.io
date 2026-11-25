/* Promo bar, header, nav, profile sheet, search overlay, menu, footer. */
(function (root) {
  const { esc, ICON } = root.Ui;
  const C = () => root.CATALOG;

  const SUGGESTIONS = [
    ['matte foundation for oily skin', 'skinType=oily&finish=matte'],
    ['glowy foundation for dry skin', 'skinType=dry&finish=radiant'],
    ['light coverage, natural finish', 'coverage=light&finish=natural'],
    ['full coverage for deep skin tones', 'coverage=full&depth=deep'],
  ];
  const NAV = ['Make-up', 'Face', 'Eyes', 'Lips', 'Skincare', 'New in', 'Offers'];

  function answeredCount() { return Object.keys(State.getAnswers()).length; }

  function header(page) {
    return `<div class="promo">Free shipping in Austria over €25</div>
    <header class="site-header">
      <div class="wrap site-header__bar">
        <div class="site-header__left">
          <button class="icon-btn hide-desktop" data-open="menu" aria-label="Menu">${ICON.menu}</button>
          <button class="icon-btn" data-open="search" aria-label="Search">${ICON.search}</button>
        </div>
        <a class="logo" href="index.html" aria-label="KIKO Milano home"><b>KIKO</b><small>MILANO</small></a>
        <div class="site-header__right">
          <button class="profile-pill" data-open="profile" aria-label="Your profile">
            <span class="dot"></span><span class="label-long">Your profile ·</span><span data-pill-count></span>
          </button>
          <a class="icon-btn" href="cart.html" aria-label="Bag">${ICON.bag}<span class="badge-count" data-bag-count hidden></span></a>
        </div>
      </div>
      <nav class="nav" aria-label="Main">${NAV.map(n => `<a href="plp.html"${n === 'Face' && page === 'plp' ? ' aria-current="page"' : ''}>${n}</a>`).join('')}</nav>
    </header>
    <dialog class="sheet" id="dlg-profile" aria-labelledby="dlg-profile-t">
      <div class="sheet__head"><h2 id="dlg-profile-t">Your foundation profile</h2><button class="icon-btn" data-close aria-label="Close">${ICON.close}</button></div>
      <div class="sheet__body" data-profile-body></div>
    </dialog>
    <dialog class="sheet" id="dlg-search" aria-labelledby="dlg-search-t">
      <div class="sheet__head"><h2 id="dlg-search-t">Search</h2><button class="icon-btn" data-close aria-label="Close">${ICON.close}</button></div>
      <div class="sheet__body">
        <form action="plp.html"><label class="visually-hidden" for="q-search">Search products</label>
          <input class="search-input" id="q-search" type="search" placeholder="Try “foundation that won't go shiny”" autocomplete="off"></form>
        <p class="search-note">${ICON.spark.replace('<svg', '<svg width="14" height="14" style="color:var(--accent)"')}<span>Powered by <b>Poltio AI search</b> — coming soon</span></p>
        <div class="eyebrow">People ask</div>
        <ul class="suggest">${SUGGESTIONS.map(([t, q]) => `<li><a href="plp.html?${q}">${esc(t)}</a></li>`).join('')}</ul>
      </div>
    </dialog>
    <dialog class="sheet sheet--left" id="dlg-menu" aria-label="Menu">
      <div class="sheet__head"><h2>Menu</h2><button class="icon-btn" data-close aria-label="Close">${ICON.close}</button></div>
      <div class="sheet__body"><ul class="menu-list">${['Foundations', ...NAV].map(n => `<li><a href="plp.html">${n}<span>›</span></a></li>`).join('')}</ul></div>
    </dialog>`;
  }

  function footer() {
    return `<footer class="site-footer"><div class="wrap">
      <div><h3>Shop</h3><ul><li><a href="plp.html">Foundations</a></li><li><a href="plp.html">Face</a></li><li><a href="plp.html">New in</a></li></ul></div>
      <div><h3>Help</h3><ul><li>Shipping to Austria</li><li>Returns</li><li>Contact</li></ul></div>
      <div><h3>KIKO Rewards</h3><ul><li>Join and get 10% off</li><li>Birthday gift</li></ul></div>
      <div><h3>Stores</h3><ul><li>Wien · Graz · Linz</li><li>Salzburg · Innsbruck</li></ul></div>
      <p class="demo-note">Concept demo by Poltio. Products, prices and reviews are invented. Guided selling powered by Poltio.</p>
    </div></footer>`;
  }

  function renderProfile() {
    const body = document.querySelector('[data-profile-body]');
    const a = State.getAnswers();
    body.innerHTML = `<p class="q__sub" style="margin:0 0 6px">Your answers shape every page of the store. Change anything, any time.</p>` +
      C().questions.map(q => {
        const ans = q.answers.find(x => x.key === a[q.key]);
        return `<div class="profile-row" data-row="${q.key}">
          <div class="profile-row__top">
            <div><div class="eyebrow">${esc(q.short)}</div><div class="profile-row__value${ans ? '' : ' is-empty'}">${ans ? esc(ans.title) : 'Not answered'}</div></div>
            <div class="profile-row__actions"><button class="link-btn" data-edit="${q.key}">${ans ? 'Change' : 'Answer'}</button>${ans ? `<button class="link-btn" data-clear="${q.key}">Clear</button>` : ''}</div>
          </div><div data-edit-slot></div></div>`;
      }).join('') +
      `<div style="margin-top:20px;display:grid;gap:10px"><a class="btn btn--accent btn--block" href="plp.html">See my matches</a><button class="btn btn--ghost btn--block" data-reset>Start over</button></div>`;
    body.querySelectorAll('[data-edit]').forEach(b => b.addEventListener('click', () => {
      const q = C().questions.find(x => x.key === b.dataset.edit);
      const slot = b.closest('.profile-row').querySelector('[data-edit-slot]');
      Question.render(slot, q, a[q.key], v => State.setAnswer(q.key, v, 'profile'), { variant: 'inline' });
    }));
    body.querySelectorAll('[data-clear]').forEach(b => b.addEventListener('click', () => State.clearAnswer(b.dataset.clear)));
    body.querySelector('[data-reset]').addEventListener('click', () => { State.resetAll(); location.href = 'index.html'; });
  }

  function update() {
    document.querySelectorAll('[data-pill-count]').forEach(el => { el.textContent = answeredCount() + '/5'; });
    const n = State.getCart().reduce((s, x) => s + x.qty, 0);
    document.querySelectorAll('[data-bag-count]').forEach(el => { el.textContent = n; el.hidden = !n; });
    if (document.getElementById('dlg-profile').open) renderProfile();
  }

  function mount({ page }) {
    State.init({ questions: C().questions, productIds: C().products.map(p => p.id) });
    State.applyUrlPreset(location.search);
    document.getElementById('shell-top').innerHTML = header(page);
    document.getElementById('shell-bottom').innerHTML = footer();
    document.addEventListener('click', e => {
      const open = e.target.closest('[data-open]');
      if (open) {
        const d = document.getElementById('dlg-' + open.dataset.open);
        if (open.dataset.open === 'profile') renderProfile();
        d.showModal();
        if (open.dataset.open === 'search') d.querySelector('input').focus();
      }
      if (e.target.closest('[data-close]')) e.target.closest('dialog').close();
      if (e.target.tagName === 'DIALOG') e.target.close(); // backdrop click
    });
    State.onChange(update);
    update();
  }

  root.Shell = { mount, update };
})(window);
