/* Invented demo catalog. Kiko-sounding names; not Kiko's real range. */
(function (root) {
  const DEPTHS = [
    { key: 'fair', title: 'Fair', num: 10, word: 'Ivory' },
    { key: 'light', title: 'Light', num: 20, word: 'Beige' },
    { key: 'medium', title: 'Medium', num: 30, word: 'Sand' },
    { key: 'tan', title: 'Tan', num: 40, word: 'Caramel' },
    { key: 'deep', title: 'Deep', num: 50, word: 'Cocoa' },
  ];
  const TONES = [
    { key: 'warm', title: 'Warm', letter: 'W' },
    { key: 'neutral', title: 'Neutral', letter: 'N' },
    { key: 'cool', title: 'Cool', letter: 'C' },
  ];
  const HEX = {
    fair: { warm: '#F3D6BE', neutral: '#F1D3C4', cool: '#F2D2CC' },
    light: { warm: '#E8C09C', neutral: '#E5BDA4', cool: '#E4BBAC' },
    medium: { warm: '#D19E73', neutral: '#CB9A7E', cool: '#C69684' },
    tan: { warm: '#B07A4E', neutral: '#A9765A', cool: '#A37262' },
    deep: { warm: '#7A4E2E', neutral: '#6E4836', cool: '#66443C' },
  };

  function shadesFor(depthKeys) {
    const out = [];
    for (const d of DEPTHS) {
      if (!depthKeys.includes(d.key)) continue;
      for (const t of TONES) {
        out.push({ code: t.letter + d.num, name: t.title + ' ' + d.word, hex: HEX[d.key][t.key], depth: d.key, undertone: t.key });
      }
    }
    return out;
  }
  const ALL = DEPTHS.map(d => d.key);

  const questions = [
    {
      key: 'skinType', short: 'Skin type', title: "What's your skin type?", type: 'image',
      answers: [
        { key: 'dry', title: 'Dry', hint: 'Feels tight, flaky patches', visual: 'radial-gradient(circle at 30% 30%, #fde7da, #f3c6b0 70%)' },
        { key: 'normal', title: 'Normal', hint: 'Balanced, rarely fussy', visual: 'radial-gradient(circle at 30% 30%, #fbe3e8, #eebcc8 70%)' },
        { key: 'combination', title: 'Combination', hint: 'Shiny T-zone, dry cheeks', visual: 'linear-gradient(135deg, #fbe3e8 0 50%, #f6d1dc 50% 100%)' },
        { key: 'oily', title: 'Oily', hint: 'Shine by midday', visual: 'radial-gradient(circle at 35% 35%, #ffffff, #f4b8cf 45%, #e6007e 120%)' },
      ],
    },
    {
      key: 'finish', short: 'Finish', title: 'What finish do you like?', type: 'image',
      answers: [
        { key: 'matte', title: 'Matte', hint: 'Shine-free, velvety', visual: 'linear-gradient(160deg, #d9b3a0, #b98a76)' },
        { key: 'natural', title: 'Natural', hint: 'Looks like skin', visual: 'linear-gradient(160deg, #f1cdb8, #d9a98f)' },
        { key: 'radiant', title: 'Radiant', hint: 'Dewy, lit-from-within', visual: 'radial-gradient(circle at 30% 25%, #fff 0 12%, #f6d3c2 30%, #e2a98f 90%)' },
      ],
    },
    {
      key: 'coverage', short: 'Coverage', title: 'How much coverage?', type: 'chips',
      answers: [
        { key: 'light', title: 'Light', hint: 'Evens things out' },
        { key: 'medium', title: 'Medium', hint: 'Covers redness' },
        { key: 'full', title: 'Full', hint: 'Covers everything' },
      ],
    },
    {
      key: 'depth', short: 'Skin tone', title: 'Which is closest to your skin tone?', type: 'swatch',
      answers: DEPTHS.map(d => ({ key: d.key, title: d.title, visual: HEX[d.key].neutral })),
    },
    {
      key: 'undertone', short: 'Undertone', title: 'Your undertone?', type: 'chips',
      answers: [
        { key: 'warm', title: 'Warm', hint: 'Golden, veins look green' },
        { key: 'neutral', title: 'Neutral', hint: 'A bit of both' },
        { key: 'cool', title: 'Cool', hint: 'Pink, veins look blue' },
        { key: 'not_sure', title: 'Not sure', hint: "We'll show every shade" },
      ],
    },
  ];

  const HOWTO = {
    dry: 'Prep with a hydrating primer, then press in with a damp sponge so it melts into skin.',
    normal: 'Dot on the centre of the face and blend outwards with a brush or fingertips.',
    combination: 'Use a thin layer on the T-zone, build where you need it, and set only the shiny areas.',
    oily: 'Start with a mattifying primer, buff in thin layers, and lock in with setting powder.',
  };

  // [id, name, price, rating, reviewCount, skinType[], finish[], coverage[], depths, blurb]
  const F = [
    ['infinite-matte', 'Infinite Matte Foundation', 13.99, 4.6, 2318, ['oily', 'combination'], ['matte'], ['medium', 'full'], ALL, 'Our longest-wearing matte. Controls shine for up to 24 hours.'],
    ['velvet-blur-tint', 'Velvet Blur Skin Tint', 11.99, 4.4, 864, ['normal', 'combination'], ['natural'], ['light'], ALL, 'A weightless tint that blurs and evens without looking like makeup.'],
    ['radiant-glow-fluid', 'Radiant Glow Fluid Foundation', 14.99, 4.5, 1502, ['dry', 'normal'], ['radiant'], ['light', 'medium'], ALL, 'Light-reflecting pearls for a fresh, healthy glow.'],
    ['full-cover-stick', 'Full Cover 2-in-1 Stick', 12.99, 4.3, 977, ['normal', 'combination', 'oily'], ['matte', 'natural'], ['full'], ALL, 'Foundation and concealer in one twist-up stick.'],
    ['hydra-silk-serum', 'Hydra Silk Serum Foundation', 16.99, 4.7, 1189, ['dry'], ['radiant'], ['light', 'medium'], ['fair', 'light', 'medium', 'tan'], 'Serum texture with hyaluronic acid. Skin feels plumped all day.'],
    ['second-skin', 'Second Skin Natural Foundation', 13.99, 4.5, 2044, ['dry', 'normal', 'combination'], ['natural'], ['medium'], ALL, 'Buildable, breathable, and true to your skin texture.'],
    ['oil-control-24h', 'Oil Control 24H Foundation', 14.99, 4.4, 1356, ['oily'], ['matte'], ['full'], ALL, 'Sebum-absorbing powders keep you matte from morning to night.'],
    ['dewy-drops', 'Dewy Drops Foundation', 12.99, 4.2, 611, ['dry', 'normal'], ['radiant'], ['light'], ['fair', 'light', 'medium', 'tan', 'deep'], 'Mix-in drops for a sheer, glassy finish.'],
    ['soft-focus-powder', 'Soft Focus Powder Foundation', 11.99, 4.3, 742, ['oily', 'combination'], ['matte'], ['medium'], ['fair', 'light', 'medium', 'tan'], 'A pressed powder foundation for quick, shine-free touch-ups.'],
    ['smart-balance', 'Smart Balance Foundation', 13.99, 4.4, 1088, ['combination'], ['natural'], ['medium'], ALL, 'Mattifies the T-zone and hydrates the cheeks at the same time.'],
    ['cushion-glow-spf', 'Cushion Glow SPF 30', 17.99, 4.6, 933, ['dry', 'normal'], ['radiant'], ['light', 'medium'], ['fair', 'light', 'medium', 'tan'], 'A refillable cushion with SPF 30 for on-the-go glow.'],
    ['long-wear-velvet', 'Long Wear Velvet Foundation', 15.99, 4.5, 1677, ['normal', 'combination', 'oily'], ['matte'], ['medium', 'full'], ALL, 'Velvety matte that stays put through heat and humidity.'],
    ['pure-skin-sensitive', 'Pure Skin Sensitive Fluid', 14.99, 4.6, 528, ['dry', 'normal'], ['natural'], ['light', 'medium'], ['fair', 'light', 'medium', 'tan', 'deep'], 'Fragrance-free and gentle on reactive skin.'],
    ['illuminating-satin', 'Illuminating Satin Foundation', 15.99, 4.4, 803, ['normal', 'combination'], ['radiant', 'natural'], ['medium'], ALL, 'A satin finish that catches the light without looking oily.'],
    ['mattifying-mousse', 'Mattifying Mousse Foundation', 12.99, 4.1, 456, ['oily'], ['matte'], ['light', 'medium'], ['fair', 'light', 'medium', 'tan', 'deep'], 'Whipped mousse that sets to a soft, powdery matte.'],
    ['nourishing-cream', 'Nourishing Cream Foundation', 16.99, 4.5, 690, ['dry'], ['natural', 'radiant'], ['full'], ['light', 'medium', 'tan', 'deep'], 'Rich, cushiony coverage with shea butter for very dry skin.'],
    ['everyday-tinted', 'Everyday Tinted Moisturiser', 10.99, 4.3, 1214, ['dry', 'normal', 'combination'], ['natural'], ['light'], ALL, 'Moisturiser and a hint of colour in one step.'],
    ['pro-coverage-fluid', 'Pro Coverage Fluid', 15.99, 4.5, 1391, ['normal', 'combination', 'oily'], ['natural', 'matte'], ['full'], ALL, 'Studio-grade coverage that still looks like skin.'],
  ];

  const products = F.map(([id, name, price, rating, reviewCount, skinType, finish, coverage, depths, blurb]) => ({
    id, name, category: 'foundation', price, rating, reviewCount,
    tags: { skinType, finish, coverage }, shades: shadesFor(depths), blurb, howTo: HOWTO,
  }));

  const UNI = [{ code: 'U', name: 'Universal', hex: '#F4E4DC', depth: null, undertone: null }];
  [
    ['hydrating-glow-primer', 'Hydrating Glow Primer', 'primer', 9.99, 4.5, 803, 'Plumps and preps dry skin for a smooth, dewy base.'],
    ['pore-blur-primer', 'Pore Blur Matte Primer', 'primer', 9.99, 4.4, 1120, 'Blurs pores and keeps shine away for hours.'],
    ['invisible-setting-powder', 'Invisible Setting Powder', 'powder', 8.99, 4.6, 1544, 'A weightless translucent powder that locks foundation in place.'],
    ['dewy-fix-spray', 'Dewy Fix Setting Spray', 'spray', 8.99, 4.3, 612, 'A fine mist that melts powders and adds a fresh glow.'],
  ].forEach(([id, name, category, price, rating, reviewCount, blurb]) => products.push({
    id, name, category, price, rating, reviewCount, tags: { skinType: [], finish: [], coverage: [] }, shades: UNI, blurb, howTo: HOWTO,
  }));

  const pairsWith = {
    dry: ['hydrating-glow-primer', 'dewy-fix-spray'],
    normal: ['hydrating-glow-primer', 'invisible-setting-powder'],
    combination: ['pore-blur-primer', 'invisible-setting-powder'],
    oily: ['pore-blur-primer', 'invisible-setting-powder', 'dewy-fix-spray'],
  };

  // Seeded so reviews are identical on every load.
  function mulberry32(a) {
    return function () {
      a |= 0; a = (a + 0x6d2b79f5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  const rnd = mulberry32(20261125);
  const pick = arr => arr[Math.floor(rnd() * arr.length)];
  const depthIdx = k => DEPTHS.findIndex(d => d.key === k);

  const fitReviews = {};
  for (const p of products) {
    if (p.category !== 'foundation') continue;
    const n = 120 + Math.floor(rnd() * 80);
    const list = [];
    for (let i = 0; i < n; i++) {
      const shade = pick(p.shades);
      let di = depthIdx(shade.depth);
      const r = rnd();
      if (r < 0.12 && di > 0) di -= 1; else if (r < 0.24 && di < DEPTHS.length - 1) di += 1;
      const reviewerDepth = DEPTHS[di].key;
      const diff = di - depthIdx(shade.depth);
      let match = diff > 0 ? 'too_light' : diff < 0 ? 'too_dark' : 'just_right';
      if (diff === 0 && rnd() < 0.08) match = rnd() < 0.5 ? 'too_light' : 'too_dark';
      list.push({
        skinType: rnd() < 0.8 ? pick(p.tags.skinType) : pick(['dry', 'normal', 'combination', 'oily']),
        depth: reviewerDepth,
        undertone: rnd() < 0.75 ? shade.undertone : pick(TONES).key,
        shade: shade.code,
        match,
      });
    }
    fitReviews[p.id] = list;
  }

  const CATALOG = { questions, products, fitReviews, pairsWith, freeShippingThreshold: 25 };
  if (typeof module !== 'undefined' && module.exports) module.exports = CATALOG;
  else root.CATALOG = CATALOG;
})(typeof window !== 'undefined' ? window : globalThis);
