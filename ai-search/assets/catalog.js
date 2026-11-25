// Demo catalog for the Poltio AI search prototype. Brands, products and prices are fictional.
window.CATALOG = {
  products: [
    // Vacuums: these have a guided flow (FLOW below)
    { id: 'r20', cat: 'supurge', type: 'robot', brand: 'Aurix', name: 'Aurix R20 Omni Robot Süpürge', price: 13499, rating: 4.7, floors: ['parke', 'seramik'], pet: true, quiet: false, big: true, db: 62, power: '180 dk pil', exact: /\br ?20\b/, color: '#d46fde', blurb: 'Paspas yıkama istasyonlu, haritalamalı robot.' },
    { id: 'r10', cat: 'supurge', type: 'robot', brand: 'Aurix', name: 'Aurix R10 Robot Süpürge', price: 8999, rating: 4.3, floors: ['parke', 'seramik'], pet: false, quiet: true, big: false, db: 55, power: '120 dk pil', exact: /\br ?10\b/, color: '#ff6a4e', blurb: 'Küçük evler için sessiz ve kompakt robot.' },
    { id: 's7', cat: 'supurge', type: 'robot', brand: 'Vortek', name: 'Vortek S7 Max Robot Süpürge', price: 14799, rating: 4.6, floors: ['hali', 'parke'], pet: true, quiet: false, big: true, db: 65, power: '200 dk pil', exact: /\bs ?7\b/, color: '#ffc000', blurb: 'Halıda güç artıran, otomatik boşaltmalı robot.' },
    { id: 'x60', cat: 'supurge', type: 'robot', brand: 'Nova', name: 'Nova X60 Ultra Robot Süpürge', price: 27999, rating: 4.9, floors: ['hali', 'parke', 'seramik'], pet: true, quiet: true, big: true, db: 52, power: '240 dk pil', exact: /\bx ?60\b/, color: '#039fee', blurb: 'Serinin en üst modeli; her zemin, tam otomatik.' },
    { id: 'v8', cat: 'supurge', type: 'sarjli', brand: 'Kleen', name: 'Kleen V8 Pet Şarjlı Dikey Süpürge', price: 11999, rating: 4.5, floors: ['hali', 'parke'], pet: true, quiet: false, big: false, db: 74, power: '45 dk pil', exact: /\bv ?8\b/, color: '#d46fde', blurb: 'Koltuk ve araç için ayrılabilen el ünitesi.' },
    { id: 'v12', cat: 'supurge', type: 'sarjli', brand: 'Kleen', name: 'Kleen V12 Slim Şarjlı Dikey Süpürge', price: 16499, rating: 4.8, floors: ['hali', 'parke', 'seramik'], pet: true, quiet: true, big: true, db: 68, power: '60 dk pil', exact: /\bv ?12\b/, color: '#039fee', blurb: 'Lazerle toz gösteren hafif dikey süpürge.' },
    { id: 'aqua', cat: 'supurge', type: 'sarjli', brand: 'Silva', name: 'Silva Aqua 3in1 Islak Kuru Süpürge', price: 9999, rating: 4.2, floors: ['parke', 'seramik'], pet: false, quiet: true, big: false, db: 70, power: '35 dk pil', exact: /silva aqua/, color: '#ffc000', blurb: 'Süpürür, siler ve kurutur; sert zeminler için.' },
    { id: 'lite', cat: 'supurge', type: 'sarjli', brand: 'Nova', name: 'Nova Stick Lite Şarjlı Süpürge', price: 5999, rating: 4.0, floors: ['parke', 'seramik'], pet: false, quiet: true, big: false, db: 69, power: '30 dk pil', exact: /stick lite/, color: '#ff6a4e', blurb: 'Hızlı günlük temizlik için hafif ve uygun fiyatlı.' },
    { id: 'cyclone', cat: 'supurge', type: 'kablolu', brand: 'Vortek', name: 'Vortek PowerCyclone Kablolu Süpürge', price: 4999, rating: 4.4, floors: ['hali', 'parke'], pet: true, quiet: false, big: true, db: 79, power: '2.000 W', exact: /powercyclone/, color: '#039fee', blurb: 'Torbasız, güçlü emişli klasik süpürge.' },
    { id: 'silence', cat: 'supurge', type: 'kablolu', brand: 'Silva', name: 'Silva Silence 900 Kablolu Süpürge', price: 6499, rating: 4.6, floors: ['hali', 'parke', 'seramik'], pet: false, quiet: true, big: true, db: 59, power: '900 W', exact: /silence ?900/, color: '#d46fde', blurb: 'Sınıfının en sessizlerinden, her zemine uygun.' },
    { id: 'turbo', cat: 'supurge', type: 'kablolu', brand: 'Aurix', name: 'Aurix TurboPet Kablolu Süpürge', price: 7999, rating: 4.5, floors: ['hali'], pet: true, quiet: false, big: true, db: 77, power: '2.200 W', exact: /turbopet/, color: '#ffc000', blurb: 'Turbo fırçalı, halı ve tüy uzmanı.' },
    { id: 'compact', cat: 'supurge', type: 'kablolu', brand: 'Kleen', name: 'Kleen Compact Torbalı Süpürge', price: 3499, rating: 4.1, floors: ['parke', 'seramik'], pet: false, quiet: true, big: false, db: 66, power: '750 W', exact: /kleen compact/, color: '#ff6a4e', blurb: 'Küçük evler için kompakt ve ekonomik.' },

    // Headphones: no guided flow, so they go through hybrid catalog search
    { id: 'q30', cat: 'kulaklik', form: 'ustu', brand: 'Sonix', name: 'Sonix Q30 ANC Kulak Üstü Kulaklık', price: 3999, rating: 4.6, feats: ['anc', 'ustu'], power: '50 saat', exact: /\bq ?30\b/, color: '#039fee', tags: 'kablosuz bluetooth gurultu engelleme anc kulak ustu seyahat ucak', blurb: 'Uzun pil ömürlü, katlanabilir seyahat kulaklığı.' },
    { id: 'budspro', cat: 'kulaklik', form: 'ici', brand: 'Sonix', name: 'Sonix Buds Pro Kulak İçi Kulaklık', price: 2999, rating: 4.5, feats: ['anc', 'ici'], power: '30 saat', exact: /buds pro/, color: '#d46fde', tags: 'kablosuz bluetooth gurultu engelleme anc kulak ici true wireless', blurb: 'Küçük kutuda güçlü gürültü engelleme.' },
    { id: 'sport', cat: 'kulaklik', form: 'ici', brand: 'Bassline', name: 'Bassline Sport Kablosuz Kulaklık', price: 1499, rating: 4.3, feats: ['spor', 'ici'], power: '24 saat', exact: /bassline sport/, color: '#ffc000', tags: 'kablosuz bluetooth spor kosu su gecirmez ter kulak ici', blurb: 'IPX7 su geçirmez, kulak kancalı spor modeli.' },
    { id: 'studio', cat: 'kulaklik', form: 'ustu', brand: 'Aurix', name: 'Aurix Studio Kulak Üstü Kulaklık', price: 7499, rating: 4.8, feats: ['anc', 'ustu'], power: '40 saat', exact: /aurix studio/, color: '#ff6a4e', tags: 'kablosuz bluetooth gurultu engelleme anc kulak ustu hi-res muzik studyo', blurb: 'Hi-Res ses ve premium gürültü engelleme.' },
    { id: 'kids', cat: 'kulaklik', form: 'ustu', brand: 'Kleen', name: 'Kleen Kids Çocuk Kulaklığı', price: 899, rating: 4.4, feats: ['cocuk', 'ustu'], power: '20 saat', exact: /kleen kids/, color: '#d46fde', tags: 'kablosuz bluetooth cocuk ses sinirlayici kulak ustu', blurb: '85 dB ses sınırlayıcılı, esnek çocuk kulaklığı.' },
    { id: 'air', cat: 'kulaklik', form: 'ici', brand: 'Bassline', name: 'Bassline Air Kablosuz Kulaklık', price: 1999, rating: 4.2, feats: ['ici'], power: '28 saat', exact: /bassline air/, color: '#039fee', tags: 'kablosuz bluetooth kulak ici gunluk', blurb: 'Günlük kullanım için hafif ve uygun fiyatlı.' },
  ],

  // The guided flow for vacuums: the same questions the Poltio widget asks
  flow: {
    id: 'supurge',
    questions: [
      { key: 'type', text: 'Nasıl bir süpürge düşünüyorsunuz?', answers: [
        { v: 'robot', l: 'Robot', icon: 'robot' }, { v: 'sarjli', l: 'Şarjlı dikey', icon: 'stick' },
        { v: 'kablolu', l: 'Kablolu', icon: 'canister' }, { v: 'any', l: 'Emin değilim', icon: 'q' } ] },
      { key: 'floor', text: 'Evinizde en çok hangi zemin var?', answers: [
        { v: 'hali', l: 'Halı', icon: 'rug' }, { v: 'parke', l: 'Parke', icon: 'planks' },
        { v: 'seramik', l: 'Seramik', icon: 'tiles' }, { v: 'karisik', l: 'Karışık', icon: 'mix' } ] },
      { key: 'pet', text: 'Evde tüy döken bir dostunuz var mı?', answers: [
        { v: true, l: 'Evet', icon: 'paw' }, { v: false, l: 'Hayır', icon: 'nopaw' } ] },
      { key: 'budget', text: 'Bütçeniz ne kadar?', answers: [
        { v: 7500, l: '7.500 TL altı', big: '7,5K' }, { v: 15000, l: '15.000 TL altı', big: '15K' },
        { v: 25000, l: '25.000 TL altı', big: '25K' }, { v: 'any', l: 'Fark etmez', big: '∞' } ] },
    ],
  },
};
