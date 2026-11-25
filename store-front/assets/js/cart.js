(function () {
  Shell.mount({ page: 'cart' });
  const root = document.querySelector('[data-cart]');
  const { esc, price, byId } = Ui;
  const Q = CATALOG.questions;
  const FREE = CATALOG.freeShippingThreshold;
  const SHIPPING = 3.95;
  const WHERE = { home: 'home page', plp: 'product list', pdp: 'product page', search: 'search', profile: 'your profile' };
  let ended = false;

  const shadeOf = (p, code) => p.shades.find(s => s.code === code) || p.shades[0];
  const title = (k, v) => (Q.find(q => q.key === k).answers.find(x => x.key === v) || {}).title;

  function lines(cart) {
    return cart.map(l => {
      const p = byId(l.id); if (!p) return '';
      const s = shadeOf(p, l.shade);
      return `<div class="line">
        <a class="line__img" href="pdp.html?id=${encodeURIComponent(p.id)}">${Ui.packshot(p, s)}</a>
        <div class="line__info">
          <a href="pdp.html?id=${encodeURIComponent(p.id)}" class="line__name">${esc(p.name)}</a>
          ${s.code !== 'U' ? `<div class="line__shade"><i style="background:${s.hex}"></i>${esc(s.code + ' ' + s.name)}</div>` : ''}
          <div class="line__row">
            <div class="qty" role="group" aria-label="Quantity">
              <button data-qty="${l.id}|${l.shade}|${l.qty - 1}" aria-label="Decrease">−</button><span>${l.qty}</span><button data-qty="${l.id}|${l.shade}|${l.qty + 1}" aria-label="Increase">+</button>
            </div>
            <b>${price(p.price * l.qty)}</b>
          </div>
          <button class="link-btn line__rm" data-qty="${l.id}|${l.shade}|0">Remove</button>
        </div>
      </div>`;
    }).join('');
  }

  function routine(cart, a) {
    const st = a.skinType || 'normal';
    const have = new Set(cart.map(l => l.id));
    const ids = (CATALOG.pairsWith[st] || []).filter(id => !have.has(id));
    if (!ids.length) return '';
    return `<section class="routine"><p class="eyebrow">Complete your routine</p>
      <h2>${a.skinType ? `Picked for ${esc(title('skinType', st).toLowerCase())} skin` : 'Customers also add'}</h2>
      <div class="routine__list">${ids.map(id => { const p = byId(id); return `<div class="rt">
        <span class="rt__img">${Ui.packshot(p)}</span><span class="rt__tx"><b>${esc(p.name)}</b><small>${esc(p.blurb)}</small></span>
        <button class="btn btn--ghost rt__add" data-add="${id}">+ ${price(p.price)}</button></div>`; }).join('')}</div></section>`;
  }

  function summary(cart) {
    const sub = cart.reduce((s, l) => s + byId(l.id).price * l.qty, 0);
    const ship = sub >= FREE ? 0 : SHIPPING;
    const left = Math.max(0, FREE - sub);
    return `<aside class="sum">
      <div class="ship"><p>${left ? `You're <b>${price(left)}</b> away from free shipping` : '<b>You\'ve got free shipping</b> to Austria'}</p>
        <div class="ship__bar"><i style="width:${Math.min(100, (sub / FREE) * 100)}%"></i></div></div>
      <div class="sum__row"><span>Subtotal</span><span>${price(sub)}</span></div>
      <div class="sum__row"><span>Shipping</span><span>${ship ? price(ship) : 'Free'}</span></div>
      <div class="sum__row sum__total"><span>Total</span><span>${price(sub + ship)}</span></div>
      <button class="btn btn--accent btn--block" data-checkout>Checkout</button>
      <p class="sum__note">Prices include 20% Austrian VAT.</p>
    </aside>`;
  }

  function render() {
    if (ended) return renderEnd();
    const cart = State.getCart();
    const a = State.getAnswers();
    if (!cart.length) {
      root.innerHTML = `<div class="empty"><h1>Your bag is empty</h1><p>Let's find the foundation that's made for you.</p><a class="btn btn--accent" href="plp.html">Shop foundations</a></div>`;
      return;
    }
    const n = cart.reduce((s, l) => s + l.qty, 0);
    root.innerHTML = `<h1 class="cart__title">Your bag <span>(${n})</span></h1>
      <div class="cart__layout"><div><div class="lines">${lines(cart)}</div>${routine(cart, a)}</div>${summary(cart)}</div>`;
  }

  /* What Poltio did during this visit, built from the journey log. */
  function renderEnd() {
    const log = State.getLog();
    const a = State.getAnswers();
    const answers = log.filter(e => e.type === 'answer');
    const places = [...new Set(answers.map(e => WHERE[e.where]).filter(Boolean))];
    const plpFilters = answers.filter(e => e.where === 'plp').length;
    // Count from what's in the bag now, not from add events (removes and repeats would inflate them).
    const bag = State.getCart().map(l => ({ l, p: byId(l.id) })).filter(x => x.p);
    const foundations = bag.filter(x => x.p.category === 'foundation');
    const great = foundations.filter(x => Match.tier(x.p, a) === 'great').length;
    const suggested = foundations.filter(x => { const s = Match.suggestShade(x.p, a); return s && s.code === x.l.shade; }).length;
    const routineAdds = bag.length - foundations.length;
    const items = [
      [`${Object.keys(a).length} of 5 questions answered`, places.length ? `Asked in place on the ${places.join(', ')}. No popup, no quiz page.` : 'Every question was optional, and the store still worked without answers.'],
      [`${plpFilters} filter${plpFilters === 1 ? '' : 's'} set by answering questions`, 'On the product list, the questions were the filters. Every answer also built up the profile.'],
      [`${great} great match${great === 1 ? '' : 'es'} in the bag`, 'Echo explained each product against your answers before you added it.'],
      [`${suggested} shade${suggested === 1 ? '' : 's'} picked from the suggestion`, 'Shade match from buyers with the same skin tone did the work a swatch card can\'t.'],
      [`${routineAdds} routine item${routineAdds === 1 ? '' : 's'} added`, 'Picked for your skin type in the bag.'],
    ];
    root.innerHTML = `<div class="end">
      <p class="eyebrow">Demo ends here</p>
      <h1>That was guided selling, start to finish.</h1>
      <p class="end__lede">Here's what Poltio did on this visit. Every page used the same growing profile of you, instead of a popup fewer than 1 in 10 shoppers ever open.</p>
      <ol class="end__list">${items.map(([h, p]) => `<li><b>${esc(h)}</b><span>${esc(p)}</span></li>`).join('')}</ol>
      <div class="end__cta"><button class="btn btn--accent" data-restart>Start over as a new shopper</button><a class="btn btn--ghost" href="index.html">Back to the store</a></div>
      <p class="end__foot">Concept demo by Poltio for KIKO Milano. Products, prices and reviews are invented.</p>
    </div>`;
  }

  root.addEventListener('click', e => {
    const q = e.target.closest('[data-qty]');
    if (q) { const [id, shade, n] = q.dataset.qty.split('|'); State.setQty(id, shade, Math.max(0, +n)); }
    const add = e.target.closest('[data-add]');
    if (add) {
      const p = byId(add.dataset.add);
      State.logEvent({ type: 'add', id: p.id, shade: p.shades[0].code, suggested: false, tier: 'other', from: 'routine' });
      State.addToCart(p.id, p.shades[0].code);
      Ui.toast(`Added · ${esc(p.name)}`);
    }
    if (e.target.closest('[data-checkout]')) { ended = true; render(); scrollTo(0, 0); }
    if (e.target.closest('[data-restart]')) { State.resetAll(); location.href = 'index.html'; }
  });
  State.onChange(render);
  render();
})();
