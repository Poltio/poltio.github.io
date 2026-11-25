// Poltio AI search prototype. Everything runs in the browser: the rule-based mapper below
// stands in for the LLM intent-mapping layer, and recommend() stands in for the api1 algorithm.
(() => {
  const MODE = document.body.dataset.mode === 'dropdown' ? 'dropdown' : 'overlay';
  const { products: P, flow: FLOW } = window.CATALOG;
  const MARK = '../assets/poltio-mark.png';

  const $ = (s, r = document) => r.querySelector(s);
  const h = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const fmt = (n) => n.toLocaleString('tr-TR') + ' TL';
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const norm = (s) => s.toLocaleLowerCase('tr').replace(/ı/g, 'i').replace(/ş/g, 's').replace(/ğ/g, 'g')
    .replace(/ü/g, 'u').replace(/ö/g, 'o').replace(/ç/g, 'c').replace(/â/g, 'a');

  // ---------- Art (simple line icons, no external images) ----------
  const ICON = {
    robot: '<circle cx="32" cy="34" r="20"/><circle cx="32" cy="34" r="7"/><path d="M20 22l-4-4"/>',
    stick: '<path d="M38 8l-10 40"/><rect x="18" y="46" width="22" height="8" rx="4"/><rect x="33" y="8" width="10" height="14" rx="3"/>',
    canister: '<rect x="10" y="32" width="26" height="18" rx="9"/><path d="M36 38c10 0 12-8 12-16V10"/><path d="M42 10h12"/>',
    q: '<path d="M24 22a8 8 0 1 1 11 7c-3 1-3 3-3 6"/><circle cx="32" cy="44" r="1.5"/>',
    rug: '<rect x="14" y="16" width="36" height="32" rx="2"/><path d="M14 24h36M14 40h36M10 18v28M54 18v28"/>',
    planks: '<path d="M10 16h44M10 28h44M10 40h44M10 52h44M24 16v12M40 28v12M18 40v12M46 40v12"/>',
    tiles: '<rect x="12" y="12" width="40" height="40" rx="2"/><path d="M32 12v40M12 32h40"/>',
    mix: '<rect x="12" y="12" width="40" height="40" rx="2"/><path d="M12 32h20M32 12v40M38 20h14M38 28h14M38 36h14M38 44h14"/>',
    paw: '<ellipse cx="32" cy="40" rx="10" ry="8"/><circle cx="20" cy="26" r="4"/><circle cx="28" cy="18" r="4"/><circle cx="38" cy="18" r="4"/><circle cx="45" cy="26" r="4"/>',
    nopaw: '<ellipse cx="32" cy="40" rx="10" ry="8"/><circle cx="20" cy="26" r="4"/><circle cx="28" cy="18" r="4"/><circle cx="38" cy="18" r="4"/><circle cx="45" cy="26" r="4"/><path d="M12 52L52 12"/>',
    ustu: '<path d="M14 38v-6a18 18 0 0 1 36 0v6"/><rect x="10" y="36" width="10" height="16" rx="4"/><rect x="44" y="36" width="10" height="16" rx="4"/>',
    ici: '<path d="M22 20a8 8 0 0 1 8 8v4a6 6 0 0 1-12 0v-4"/><path d="M24 38v12"/><path d="M42 20a8 8 0 0 1 8 8v4a6 6 0 0 1-12 0v-4"/><path d="M44 38v12"/>',
  };
  const svg = (name, stroke = '#17293a') =>
    `<svg viewBox="0 0 64 64" fill="none" stroke="${stroke}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICON[name] || ''}</svg>`;
  const art = (p) => {
    const icon = p.cat === 'kulaklik' ? p.form : p.type === 'sarjli' ? 'stick' : p.type === 'kablolu' ? 'canister' : 'robot';
    return `<div class="art" style="--tint:${p.color}">${svg(icon)}</div>`;
  };

  // ---------- Store page ----------
  function renderStore() {
    const other = MODE === 'overlay' ? 'dropdown' : 'overlay';
    document.body.insertAdjacentHTML('afterbegin', `
      <div class="demo-bar"><img src="${MARK}" alt=""> Poltio AI Search demosu · <b>${MODE === 'overlay' ? 'Overlay' : 'Dropdown'}</b> modu
        · <a href="../${other}/">${other === 'overlay' ? 'Overlay' : 'Dropdown'} moduna geç</a> · <a href="../">Tüm demolar</a></div>
      <header class="st-head">
        <a class="st-logo" href="./">VOLTAJ<small>elektronik</small></a>
        <div class="st-search-wrap"><form class="st-search" id="st-search" autocomplete="off" role="search">
          <button type="button" class="ai-pill on" id="ai-pill" aria-pressed="true" title="Yapay zekâ modu"><img src="${MARK}" alt="">AI Modu</button>
          <input id="st-q" type="search" enterkeyhint="search" aria-label="Ara">
          <button class="st-go" aria-label="Ara"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/></svg></button>
        </form></div>
        <nav class="st-icons"><span>Giriş Yap</span><span>Sepetim <b>0</b></span></nav>
      </header>
      <nav class="st-cats"><span>Telefon</span><span>Bilgisayar</span><span>TV &amp; Ses</span><span>Beyaz Eşya</span><span class="on">Elektrikli Ev Aletleri</span><span>Kulaklık</span><span>Kampanyalar</span></nav>
      <main class="st-main" id="st-main"></main>`);
    renderHome();
  }

  const grid = (list) => `<div class="st-grid">${list.map((p) => `
    <article class="st-card">${art(p)}<div class="st-brand">${esc(p.brand)}</div><h3>${esc(p.name)}</h3>
      <div class="st-rate">★ ${p.rating.toFixed(1)}</div><div class="st-price">${fmt(p.price)}</div><button class="st-add" type="button">Sepete Ekle</button></article>`).join('')}</div>`;

  function renderHome() {
    $('#st-main').innerHTML = `
      <section class="st-hero"><div><small>Kasım fırsatları</small><h1>Evinizi akıllı aletlerle yenileyin</h1>
        <p>Ne aradığınızı bilmiyor musunuz? Arama kutusuna kendi kelimelerinizle yazın.</p></div><div class="st-hero-art">${svg('robot', '#fff')}</div></section>
      <h2 class="st-h2">Çok satanlar</h2>${grid(P)}`;
  }

  function renderClassic(q) {
    const t = norm(q).split(/\s+/).filter(Boolean);
    const list = P.filter((p) => t.some((w) => norm(p.name + ' ' + p.brand + ' ' + (p.tags || '')).includes(w)));
    $('#st-main').innerHTML = `<p class="st-crumb">Ana Sayfa / Arama</p><h2 class="st-h2">“${esc(q)}” için ${list.length} sonuç</h2>
      ${list.length ? grid(list) : '<p class="st-empty">Sonuç bulunamadı. AI Modu ile kendi kelimelerinizle anlatmayı deneyin.</p>'}`;
  }

  // ---------- Chat shell (one component, two containers) ----------
  const root = h('div', `ps-root is-${MODE}`);
  root.hidden = true;
  root.innerHTML = `
    <div class="ps-backdrop"></div>
    <section class="ps-panel" role="dialog" aria-label="Akıllı Asistan">
      <header class="ps-head"><img src="${MARK}" alt=""><div><b>Akıllı Asistan</b><small>Ürünü birlikte bulalım</small></div><span class="sp"></span>
        <button type="button" class="ps-classic">Klasik aramaya dön</button>
        <button type="button" class="ps-expand" aria-label="Tam ekranda aç" title="Tam ekranda aç">⤢</button>
        <button type="button" class="ps-close" aria-label="Kapat">×</button></header>
      <div class="ps-state" hidden><span class="l">Anladığım</span><div class="chips"></div></div>
      <div class="ps-thread"><div class="ps-col"></div></div>
      <footer class="ps-foot"><div class="ps-col">
        <div class="ps-qr"></div>
        <form class="ps-inp" autocomplete="off"><input aria-label="Mesaj" placeholder="Bir şey ekleyin ya da sorun… “sessiz olsun”"><button aria-label="Gönder">↑</button></form>
        <div class="ps-legal">Yapay zekâ desteklidir, ürün detaylarını kontrol edin. · Powered by <b>Poltio</b></div>
      </div></footer>
    </section>`;
  const col = $('.ps-thread .ps-col', root);
  const thread = $('.ps-thread', root);
  const scroll = () => { thread.scrollTop = thread.scrollHeight; };

  const EXAMPLES = ['Kedim var, 15 bin altı süpürge arıyorum', '3+1 ev için sessiz robot süpürge', 'Koşu için kablosuz kulaklık', 'Aurix R20'];

  // ---------- State: the chips ARE the state ----------
  let S;
  const fresh = () => ({ flow: null, a: {}, p: {}, hp: { feats: [], budget: null }, top: [], shown: false, skip: false, exact: null, last: '' });
  S = fresh();

  const LABEL = {
    type: { robot: 'Robot süpürge', sarjli: 'Şarjlı dikey', kablolu: 'Kablolu', any: 'Tip fark etmez' },
    floor: { hali: 'Halı', parke: 'Parke', seramik: 'Seramik', karisik: 'Karışık zemin' },
    feats: { anc: 'Gürültü engelleme', spor: 'Spor', cocuk: 'Çocuk için', ici: 'Kulak içi', ustu: 'Kulak üstü' },
  };
  const budgetLabel = (b) => (b === 'any' ? 'Bütçe esnek' : '≤ ' + fmt(b));

  function chips() {
    const out = [];
    if (S.flow === 'supurge') {
      out.push({ k: 'flow', l: 'Süpürge' });
      const { a, p } = S;
      if (a.type) out.push({ k: 'a.type', l: LABEL.type[a.type] });
      if (a.floor) out.push({ k: 'a.floor', l: LABEL.floor[a.floor] });
      if (a.pet != null) out.push({ k: 'a.pet', l: a.pet ? cap(p.petWord || 'evcil hayvan') + ' tüyü' : 'Evcil hayvan yok' });
      if (a.budget != null) out.push({ k: 'a.budget', l: budgetLabel(a.budget) });
      if (p.quiet) out.push({ k: 'p.quiet', l: 'Sessiz' });
      if (p.big != null) out.push({ k: 'p.big', l: p.big ? 'Geniş ev' : 'Küçük ev' });
    } else if (S.flow === 'kulaklik') {
      out.push({ k: 'flow', l: 'Kulaklık' });
      S.hp.feats.forEach((f) => out.push({ k: 'f.' + f, l: LABEL.feats[f] }));
      if (S.hp.budget) out.push({ k: 'hp.budget', l: budgetLabel(S.hp.budget) });
    }
    return out;
  }
  const cap = (s) => s.charAt(0).toLocaleUpperCase('tr') + s.slice(1);

  function renderChips() {
    const list = chips();
    const bar = $('.ps-state', root);
    bar.hidden = !list.length;
    $('.chips', bar).innerHTML = list.map((c, i) =>
      `<button type="button" class="chip c${i % 4}" data-k="${c.k}" title="Kaldır">${esc(c.l)}${c.k === 'flow' ? '' : '<span aria-hidden="true">×</span>'}</button>`).join('');
  }

  function removeChip(k) {
    if (k === 'flow') return;
    const [ns, key] = k.split('.');
    let label = (chips().find((c) => c.k === k) || {}).l || '';
    if (ns === 'a') delete S.a[key];
    if (ns === 'p') delete S.p[key];
    if (ns === 'f') S.hp.feats = S.hp.feats.filter((f) => f !== key);
    if (ns === 'hp') S.hp.budget = null;
    S.skip = false;
    renderChips();
    enqueue(async () => {
      await bot((bb) => say(bb, `Tamam, “${label}” tercihini kaldırdım.`));
      if (S.flow === 'kulaklik') return hybridResults();
      return ns === 'p' && S.shown ? showResults() : nextStep();
    });
  }

  // ---------- Intent mapping (stand-in for the LLM layer) ----------
  function mapText(raw) {
    const t = ' ' + norm(raw) + ' ';
    const r = { a: {}, p: {}, feats: [], intents: [] };

    if (/supurge|robot|paspas|toz al|vakum/.test(t)) r.flow = 'supurge';
    if (/kulakli|kulak ici|kulak ustu|airpod|\bbuds\b|\banc\b/.test(t)) r.flow = 'kulaklik';

    const explain = /robot mu|dikey mi|hangisi|farki ne|fark nedir|ne fark/.test(t);
    if (explain) r.intents.push('explain');
    if (!explain) {
      if (/robot/.test(t)) r.a.type = 'robot';
      else if (/sarjli|\bsarj|dikey|kablosuz supurge/.test(t)) r.a.type = 'sarjli';
      else if (/kablolu|torbali/.test(t)) r.a.type = 'kablolu';
    }

    const fl = [];
    if (/\bhali(da|lar|li|m|ya|yi|dan)?\b/.test(t)) fl.push('hali');
    if (/parke|laminat|ahsap/.test(t)) fl.push('parke');
    if (/seramik|fayans|mermer|\bkaro/.test(t)) fl.push('seramik');
    if (/karisik|her turlu zemin/.test(t)) fl.push('karisik');
    if (fl.length) r.a.floor = fl.length > 1 ? 'karisik' : fl[0];

    if (/(hayvan|kedi|kope[gk])\w* (yok|beslemiyor)/.test(t)) r.a.pet = false;
    else if (/kedi|kope[gk]|tuy|evcil|pati|hayvan/.test(t)) {
      r.a.pet = true;
      r.p.petWord = /kedi/.test(t) ? 'kedi' : /kope[gk]/.test(t) ? 'köpek' : 'evcil hayvan';
    }

    const re = /(\d{1,3}(?:[.,]\d{3})+|\d+(?:[.,]\d+)?)\s*(bin\b|k\b)?/g;
    let m;
    while ((m = re.exec(t))) {
      const before = t.slice(0, m.index).trimEnd();
      if (before.endsWith('+') || /^\s*\+/.test(t.slice(m.index + m[1].length))) continue;
      let n = /[.,]\d{3}$/.test(m[1]) && !m[2] ? +m[1].replace(/[.,]/g, '') : +m[1].replace(',', '.');
      if (m[2]) n *= 1000;
      if (n >= 500) r.a.budget = Math.round(n);
    }
    if (/butce (fark etmez|esnek|sorun degil)|fiyat (fark etmez|onemli degil)/.test(t)) r.a.budget = 'any';

    if (/sessiz|gurultu yapmasin|ses yapmasin|bebek|gece/.test(t)) r.p.quiet = true;
    if (/\b[3-6] ?\+ ?1\b|genis|buyuk ev|dubleks|villa|katli/.test(t)) r.p.big = true;
    else if (/\b[12] ?\+ ?[01]\b|kucuk ev|studyo/.test(t)) r.p.big = false;

    if (/gurultu|\banc\b|ucak|metro|seyahat/.test(t)) r.feats.push('anc');
    if (/spor|kosu|gym|ter\b|antrenman/.test(t)) r.feats.push('spor');
    if (/cocuk/.test(t)) r.feats.push('cocuk');
    if (/kulak ici/.test(t)) r.feats.push('ici');
    if (/kulak ustu/.test(t)) r.feats.push('ustu');

    if (/daha ucuz|ucuz|uygun fiyat|pahali/.test(t)) r.intents.push('cheaper');
    if (/karsilastir|kiyasla/.test(t)) r.intents.push('compare');
    if (/bastan|sifirla|yeni arama/.test(t)) r.intents.push('reset');
    if (/sonuclari goster|simdi goster|\batla\b/.test(t)) r.intents.push('show');
    if (/benzer/.test(t)) r.intents.push('similar');
    if (/klasik arama/.test(t)) r.intents.push('classic');

    // No category named, but floor / shedding / cleaning words point to vacuums (the LLM would infer this)
    if (!r.flow && (r.a.floor || /tuy|temizl|toz/.test(t))) r.flow = 'supurge';

    r.exact = P.find((p) => p.exact.test(t)) || null;
    return r;
  }

  // ---------- Bot helpers ----------
  let queue = Promise.resolve();
  const enqueue = (fn) => { queue = queue.then(fn).catch((e) => console.error(e)); return queue; };

  function me(text, pick) { col.append(h('div', 'me' + (pick ? ' pick' : ''), esc(text))); scroll(); }

  async function bot(build) {
    const row = h('div', 'bot', `<img src="${MARK}" alt="">`);
    const bb = h('div', 'bb');
    row.append(bb);
    const dots = h('div', 'typing', '<i></i><i></i><i></i>');
    bb.append(dots);
    col.append(row);
    scroll();
    await sleep(500);
    dots.remove();
    await build(bb);
    scroll();
    return bb;
  }

  async function stream(el, text) {
    for (let i = 0; i < text.length; i += 3) {
      el.textContent = text.slice(0, i + 3);
      if (i % 30 === 0) scroll();
      await sleep(14);
    }
    el.textContent = text;
  }
  async function say(bb, text) { const s = h('div', 'say'); bb.append(s); await stream(s, text); }

  function setQR(list) {
    $('.ps-qr', root).innerHTML = list.map((q) => `<button type="button">${esc(q)}</button>`).join('');
  }

  // ---------- Guided flow ----------
  async function nextStep() {
    const q = FLOW.questions.find((x) => !(x.key in S.a));
    if (!q || S.skip) return showResults();
    const known = FLOW.questions.filter((x) => x.key in S.a).length;
    setQR(['Sonuçları şimdi göster', 'Baştan başla']);
    await bot(async (bb) => {
      const card = h('div', 'qcard');
      const bigs = q.answers.some((x) => x.big);
      card.innerHTML = `<div class="qn">${FLOW.questions.length - known} soru kaldı</div><h4>${esc(q.text)}</h4>
        <div class="ans ans-${q.answers.length}">${q.answers.map((x, i) => `
          <button type="button" class="an" data-i="${i}"><i style="--tint:${['#d46fde', '#ff6a4e', '#ffc000', '#039fee'][i % 4]}">${bigs ? `<em>${x.big}</em>` : svg(x.icon)}</i><span>${esc(x.l)}</span></button>`).join('')}</div>
        <div class="prog">${FLOW.questions.map((x) => `<b class="${x.key in S.a ? 'd' : ''}"></b>`).join('')}</div>
        <div class="q-or">ya da aşağıya kendi cevabınızı yazın</div>`;
      card.addEventListener('click', (e) => {
        const b = e.target.closest('.an');
        if (!b) return;
        const x = q.answers[+b.dataset.i];
        card.querySelectorAll('.an').forEach((n) => n.classList.toggle('on', n === b));
        enqueue(async () => {
          me(x.l, true);
          S.a[q.key] = x.v;
          if (q.key === 'pet' && x.v && !S.p.petWord) S.p.petWord = 'evcil hayvan';
          renderChips();
          await nextStep();
        });
      });
      bb.append(card);
    });
  }

  function recommend() {
    const { a, p } = S;
    let c = P.filter((x) => x.cat === 'supurge');
    if (a.type && a.type !== 'any') c = c.filter((x) => x.type === a.type);
    let relaxed = false;
    if (typeof a.budget === 'number') {
      const inBudget = c.filter((x) => x.price <= a.budget);
      if (inBudget.length) c = inBudget; else relaxed = true;
    }
    const score = (x) => {
      let s = x.rating / 10;
      if (a.floor === 'karisik') s += x.floors.length - 1;
      else if (a.floor) s += x.floors.includes(a.floor) ? 2 : -2;
      if (a.pet === true) s += x.pet ? 3 : -2;
      if (p.quiet) s += x.quiet ? 2 : -1;
      if (p.big === true) s += x.big ? 1 : -1;
      if (p.big === false) s += x.big ? 0 : 1;
      if (relaxed) s -= x.price / 500;
      return s;
    };
    c = [...c].sort((x, y) => score(y) - score(x));
    return { list: c.slice(0, 3), total: c.length, relaxed };
  }

  const FLOOR_NOTE = { hali: 'Halıda gücü otomatik artırır.', parke: 'Parkeyi çizmeyen yumuşak başlıkla gelir.', seramik: 'Seramikte ıslak silme de yapabilir.' };
  function why(x) {
    const { a, p } = S;
    const r = [];
    if (a.pet && x.pet) r.push(`Tüy dolanmayan fırçası ${p.petWord || 'evcil hayvan'} tüyü için ideal.`);
    if (a.floor && a.floor !== 'karisik' && x.floors.includes(a.floor)) r.push(FLOOR_NOTE[a.floor]);
    if (a.floor === 'karisik' && x.floors.length > 1) r.push('Zemin değişimini algılayıp gücü kendisi ayarlar.');
    if (p.quiet && x.quiet) r.push(`${x.db} dB ile sınıfının en sessizlerinden.`);
    if (p.big && x.big) r.push(x.type === 'robot' ? 'İstasyonu sayesinde geniş evde haftalarca kendi kendine çalışır.' : `${x.power}, geniş ev için yeterli.`);
    if (typeof a.budget === 'number' && x.price <= a.budget * 0.8) r.push('Bütçenizin rahatça altında.');
    if (!r.length) r.push(x.blurb);
    return r.slice(0, 2).join(' ');
  }

  async function productRow(bb, list, whyFn) {
    const row = h('div', 'prods');
    bb.append(row);
    const cards = list.map((x, i) => {
      const c = h('article', 'pr', `${art(x)}<span class="rk">${i + 1}</span><b>${esc(x.name)}</b>
        <div class="meta">★ ${x.rating.toFixed(1)}</div><div class="p">${fmt(x.price)}</div><div class="why"></div>
        <button type="button" class="cta">Ürüne git</button>`);
      row.append(c);
      return c;
    });
    scroll();
    for (let i = 0; i < list.length; i++) await stream($('.why', cards[i]), whyFn(list[i]));
  }

  async function showResults() {
    const { list, total, relaxed } = recommend();
    S.top = list;
    S.shown = true;
    await bot(async (bb) => {
      const { a, p } = S;
      const bits = [a.floor && a.floor !== 'karisik' ? LABEL.floor[a.floor].toLocaleLowerCase('tr') : '', a.pet ? `${p.petWord || 'evcil hayvan'} tüyü` : '', p.quiet ? 'sessizlik' : ''].filter(Boolean);
      const intro = relaxed
        ? `Bütçenizin altında bu kriterlere uyan model bulamadım. Bütçeye en yakın seçenekler:`
        : `${total} uygun ürün arasından ${bits.length ? bits.join(', ') + ' için ' : ''}en iyi ${list.length} seçenek:`;
      await say(bb, intro);
      await productRow(bb, list, why);
    });
    setQR(['Daha ucuz göster', 'Sessiz olsun', "1 ve 2'yi karşılaştır", 'Robot mu, dikey mi?', 'Baştan başla']);
  }

  async function compare() {
    if (S.top.length < 2) return bot((bb) => say(bb, 'Karşılaştırmak için önce birkaç ürün bulalım. Ne arıyorsunuz?'));
    const [x, y] = S.top;
    await bot(async (bb) => {
      const cheaper = x.price <= y.price ? x : y;
      const lines = [`${cheaper.brand} ${fmt(Math.abs(x.price - y.price))} daha uygun.`];
      if (x.db != null) { const q = x.db <= y.db ? x : y; lines.push(`${q.name.split(' ').slice(0, 2).join(' ')} daha sessiz (${q.db} dB).`); }
      await say(bb, 'Kısaca: ' + lines.join(' '));
      const rows = [['Fiyat', fmt(x.price), fmt(y.price)], ['Puan', '★ ' + x.rating, '★ ' + y.rating]];
      if (x.cat === 'supurge') {
        rows.push(['Tip', LABEL.type[x.type], LABEL.type[y.type]], ['Zemin', x.floors.map((f) => LABEL.floor[f]).join(', '), y.floors.map((f) => LABEL.floor[f]).join(', ')],
          ['Evcil hayvan', x.pet ? '✓' : '–', y.pet ? '✓' : '–'], ['Ses', x.db + ' dB', y.db + ' dB']);
      }
      rows.push(['Güç / pil', x.power, y.power]);
      bb.append(h('table', 'cmp', `<thead><tr><th></th><th>${esc(x.name)}</th><th>${esc(y.name)}</th></tr></thead><tbody>${rows.map((r) => `<tr><th>${r[0]}</th><td>${esc(r[1])}</td><td>${esc(r[2])}</td></tr>`).join('')}</tbody>`));
    });
  }

  async function explain() {
    const { a, p } = S;
    let t = 'Robot süpürge günlük temizliği siz evde yokken yapar, ama koltuk üstü ve köşeler için yetersiz kalır. Şarjlı dikey süpürge her yere uzanır, ama süpürmeyi siz yaparsınız.';
    if (a.pet) t += ` ${cap(p.petWord || 'evcil hayvan')} tüyü her gün birikiyorsa robot büyük kolaylık sağlar.`;
    if (p.big) t += ' Geniş evde istasyonlu robot daha mantıklı.';
    await bot((bb) => say(bb, t));
    setQR(['Robot olsun', 'Şarjlı dikey olsun', 'Sonuçları şimdi göster']);
  }

  // ---------- Hybrid catalog search (categories without a flow) ----------
  async function hybridResults() {
    const { feats, budget } = S.hp;
    let c = P.filter((x) => x.cat === 'kulaklik');
    let relaxed = false;
    if (typeof budget === 'number') { const b = c.filter((x) => x.price <= budget); if (b.length) c = b; else relaxed = true; }
    const score = (x) => feats.reduce((s, f) => s + (x.feats.includes(f) ? 2 : 0), x.rating / 10);
    const list = [...c].sort((x, y) => score(y) - score(x)).slice(0, 3);
    S.top = list;
    S.shown = true;
    const FEAT_NOTE = { anc: 'Aktif gürültü engelleme ile metroda ve uçakta sessizlik.', spor: 'Ter ve suya dayanıklı, koşuda yerinden oynamaz.', cocuk: 'Ses sınırlayıcısı çocuk kulağını korur.', ici: 'Cebe sığan küçük şarj kutusu.', ustu: 'Uzun kullanımda kulağı yormayan yastıklar.' };
    await bot(async (bb) => {
      const featText = feats.map((f) => LABEL.feats[f].toLocaleLowerCase('tr')).join(', ');
      const anyMatch = !feats.length || list.some((x) => feats.some((f) => x.feats.includes(f)));
      await say(bb, relaxed ? 'Bu bütçede uygun model bulamadım. En yakın seçenekler:'
        : !anyMatch ? `Bu bütçede ${featText} özellikli model yok. Bütçenize uyan en iyi seçenekler:`
        : `Kataloğu ${featText ? featText + ' için ' : ''}taradım. En uygun ${list.length} kulaklık:`);
      await productRow(bb, list, (x) => {
        const r = feats.filter((f) => x.feats.includes(f)).map((f) => FEAT_NOTE[f]);
        r.push(`${x.power} pil ömrü.`);
        return r.slice(0, 2).join(' ');
      });
      bb.append(h('div', 'src-note', 'ⓘ Bu kategori için soru akışı yok: sonuçlar hibrit katalog aramasından geliyor.'));
    });
    setQR(['Gürültü engelleme olsun', 'Spor için', '2.000 TL altı', "1 ve 2'yi karşılaştır", 'Baştan başla']);
  }

  // ---------- Router ----------
  async function handle(text) {
    const m = mapText(text);
    S.last = text;

    if (m.intents.includes('classic')) { closeChat(); renderClassic(S.query || text); return; }
    if (m.intents.includes('reset')) {
      S = fresh();
      renderChips();
      await bot((bb) => say(bb, 'Baştan başlayalım. Ne arıyorsunuz? Kendi kelimelerinizle anlatabilirsiniz.'));
      setQR(EXAMPLES);
      return;
    }
    if (m.intents.includes('compare')) return compare();
    if (m.intents.includes('similar') && S.exact) return similar();

    if (m.exact && !m.flow) {
      S.exact = m.exact;
      await bot(async (bb) => {
        await say(bb, 'Aradığınız ürünü buldum:');
        await productRow(bb, [m.exact], (x) => x.blurb);
      });
      setQR(['Benzerlerini göster', 'Klasik aramada göster', 'Baştan başla']);
      return;
    }

    const flow = m.flow || S.flow;
    if (flow === 'supurge') return vacuumTurn(m);
    if (flow === 'kulaklik') return headphoneTurn(m);

    await bot((bb) => say(bb, 'Bunu mağazada tam eşleştiremedim. Şunlardan birini mi arıyordunuz?'));
    setQR(['Robot süpürge', 'Şarjlı süpürge', 'Kablosuz kulaklık', 'Klasik aramada göster']);
  }

  async function vacuumTurn(m) {
    const starting = S.flow !== 'supurge';
    if (starting) { S = { ...fresh(), query: S.query }; S.flow = 'supurge'; }
    const before = chips().map((c) => c.l);
    Object.assign(S.a, m.a);
    Object.assign(S.p, m.p);
    if (m.intents.includes('cheaper')) {
      if (S.top.length) S.a.budget = Math.floor((S.top[0].price - 1) / 500) * 500;
      else if (S.a.budget == null) S.a.budget = 7500;
    }
    if (m.intents.includes('show')) S.skip = true;
    renderChips();
    const added = chips().map((c) => c.l).filter((l) => !before.includes(l));

    if (m.intents.includes('explain')) return explain();

    if (starting) {
      const known = chips().length - 1;
      const left = FLOW.questions.filter((x) => !(x.key in S.a)).length;
      let t = S.a.pet ? `${cap(S.p.petWord || 'evcil hayvan')} tüyüyle uğraşan biri için güzel seçenekler var.` : 'Size en uygun süpürgeyi birlikte bulalım.';
      if (known) t += ` ${known} şeyi zaten anladım${left ? `, ${left} kısa soru kaldı.` : '.'}`;
      await bot((bb) => say(bb, t));
      return nextStep();
    }
    if (added.length || m.intents.includes('show')) {
      if (added.length) await bot((bb) => say(bb, `Güncelledim: ${added.join(', ')}.`));
      return S.shown || S.skip || FLOW.questions.every((x) => x.key in S.a) ? showResults() : nextStep();
    }
    if (S.shown) {
      await bot((bb) => say(bb, 'Bunu tam anlayamadım. Biraz farklı anlatır mısınız? Örneğin bütçe, zemin ya da “sessiz olsun” gibi.'));
      return;
    }
    await bot((bb) => say(bb, 'Bunu seçeneklerle eşleştiremedim. Kısa bir soruyla devam edelim:'));
    return nextStep();
  }

  async function headphoneTurn(m) {
    if (S.flow !== 'kulaklik') { S = { ...fresh(), query: S.query }; S.flow = 'kulaklik'; }
    m.feats.forEach((f) => { if (!S.hp.feats.includes(f)) S.hp.feats.push(f); });
    if (typeof m.a.budget === 'number') S.hp.budget = m.a.budget;
    if (m.intents.includes('cheaper') && S.top.length) S.hp.budget = Math.floor((S.top[0].price - 1) / 100) * 100;
    renderChips();
    return hybridResults();
  }

  async function similar() {
    const x = S.exact;
    S.exact = null;
    if (x.cat === 'kulaklik') {
      S = { ...fresh(), query: S.query, flow: 'kulaklik' };
      S.hp.feats = x.feats.slice();
      renderChips();
      return hybridResults();
    }
    S = { ...fresh(), query: S.query, flow: 'supurge' };
    S.a = { type: x.type, budget: x.price, pet: x.pet, floor: x.floors.length > 1 ? 'karisik' : x.floors[0] };
    if (x.pet) S.p.petWord = 'evcil hayvan';
    renderChips();
    await bot((bb) => say(bb, `${x.brand} ${x.name.split(' ')[1]} gibi, aynı fiyat aralığındaki alternatifler:`));
    return showResults();
  }

  function send(text) {
    text = text.trim();
    if (!text) return;
    $('.ps-welcome', root)?.remove();
    if (!S.query) S.query = text;
    me(text);
    enqueue(() => handle(text));
  }

  // ---------- Open / close ----------
  function welcome() {
    if (col.children.length) return;
    col.append(h('div', 'ps-welcome', `<img src="${MARK}" alt=""><h3>Ne aradığınızı anlatın</h3>
      <p>Kendi kelimelerinizle yazın; birkaç kısa soruyla size en uygun ürünü bulalım.</p>`));
    setQR(EXAMPLES);
  }

  function openChat() {
    root.hidden = false;
    document.body.classList.toggle('ps-lock', root.classList.contains('is-overlay'));
    welcome();
  }
  function closeChat() {
    root.hidden = true;
    root.className = `ps-root is-${MODE}`;
    document.body.classList.remove('ps-lock');
  }
  function expand() {
    root.className = 'ps-root is-overlay';
    document.body.classList.add('ps-lock');
    scroll();
  }

  // ---------- Wire up ----------
  renderStore();
  const form = $('#st-search');
  const input = $('#st-q');
  const pill = $('#ai-pill');
  const wrap = $('.st-search-wrap');
  wrap.append(root);

  const aiOn = () => pill.classList.contains('on');
  const placeholder = () => { input.placeholder = aiOn() ? 'Ne aradığını anlat… “kedim var, sessiz bir süpürge”' : 'Ürün, marka veya kategori ara'; };
  placeholder();

  pill.addEventListener('click', () => {
    pill.classList.toggle('on');
    pill.setAttribute('aria-pressed', aiOn());
    placeholder();
    if (!aiOn()) closeChat();
    input.focus();
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const q = input.value.trim();
    if (!aiOn()) { if (q) renderClassic(q); return; }
    openChat();
    if (q) { send(q); input.value = ''; input.blur(); $('.ps-inp input', root).focus({ preventScroll: true }); }
  });

  if (MODE === 'dropdown') {
    input.addEventListener('focus', () => { if (aiOn()) openChat(); });
    document.addEventListener('pointerdown', (e) => {
      if (!root.hidden && root.classList.contains('is-dropdown') && !wrap.contains(e.target)) closeChat();
    });
  }

  root.addEventListener('click', (e) => {
    if (e.target.closest('.ps-close') || e.target.classList.contains('ps-backdrop')) return closeChat();
    if (e.target.closest('.ps-expand')) return expand();
    if (e.target.closest('.ps-classic')) { closeChat(); return renderClassic(S.query || 'süpürge'); }
    const chip = e.target.closest('.chip');
    if (chip) return removeChip(chip.dataset.k);
    const qr = e.target.closest('.ps-qr button');
    if (qr) return send(qr.textContent);
    if (e.target.closest('.cta')) {
      const t = h('div', 'toast', 'Demo: burada ürün sayfası açılır.');
      document.body.append(t);
      setTimeout(() => t.remove(), 1800);
    }
  });

  $('.ps-inp', root).addEventListener('submit', (e) => {
    e.preventDefault();
    const i = $('input', e.currentTarget);
    send(i.value);
    i.value = '';
  });

  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !root.hidden) closeChat(); });

  const q = new URLSearchParams(location.search).get('q');
  if (q) { openChat(); send(q); }

  // Exposed for the self-check in ../test.html
  window.__ps = { mapText, norm };
})();
