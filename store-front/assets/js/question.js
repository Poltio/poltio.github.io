/* One question, rendered as a hero slide, grid card, inline block or in the profile sheet. */
(function (root) {
  const { esc } = root.Ui;

  /**
   * render(container, question, currentValue, onAnswer, opts)
   * opts: { variant: 'hero'|'card'|'inline'|'chip', sub?: string, onSkip?: fn, step?: string }
   */
  function render(container, q, current, onAnswer, opts = {}) {
    const variant = opts.variant || 'inline';
    const answers = q.answers.map(a => {
      const visual = q.type === 'chips' ? '' :
        `<span class="ans__visual" style="background:${esc(a.visual)}"></span>`;
      return `<button type="button" class="ans" data-ans="${esc(a.key)}" aria-pressed="${a.key === current}">
        ${visual}<span class="ans__text"><span class="ans__title">${esc(a.title)}</span>${a.hint ? `<span class="ans__hint">${esc(a.hint)}</span>` : ''}</span>
      </button>`;
    }).join('');
    container.innerHTML = `<div class="q q--${variant}" role="group" aria-labelledby="q-${q.key}-${variant}">
      ${opts.step ? `<div class="eyebrow">${esc(opts.step)}</div>` : ''}
      <h3 class="q__title" id="q-${q.key}-${variant}">${esc(q.title)}</h3>
      ${opts.sub ? `<p class="q__sub">${esc(opts.sub)}</p>` : ''}
      <div class="q__answers q__answers--${q.type}">${answers}</div>
      ${opts.onSkip ? `<div class="q__foot"><span></span><button type="button" class="link-btn" data-skip>Skip →</button></div>` : ''}
    </div>`;
    container.querySelectorAll('[data-ans]').forEach(b => b.addEventListener('click', () => onAnswer(b.dataset.ans)));
    const skip = container.querySelector('[data-skip]');
    if (skip) skip.addEventListener('click', opts.onSkip);
  }

  root.Question = { render };
})(window);
