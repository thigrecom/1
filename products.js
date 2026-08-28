const PRODUCTS_DATA = {
  cacau100: {
    name: "Cacau 100%",
    images: [
      "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=600&q=80"
    ],
    variants: [
      { name: "200g", price: 70.00, available: true },
      { name: "700g", price: 220.00, available: true }
    ],
    desc: "Cacau cerimonial puro 100%, prensado artesanalmente preservando a manteiga natural de cacau e teobromina.",
    usage: "Ideal para rituais matinais ou momentos de foco. Dilua 15g em 300ml de água quente e misture bem."
  },
  cacau70: {
    name: "Cacau 70%",
    images: [
      "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&w=600&q=80"
    ],
    variants: [
      { name: "60g", price: 0, available: false },
      { name: "220g", price: 77.00, available: true }
    ],
    desc: "Equilíbrio perfeito entre a intensidade do cacau e o dulçor harmônico.",
    usage: "Consumo direto em pequenos pedaços para degustação consciente durante a tarde."
  },
  nibs: {
    name: "Nibs de Cacau",
    images: [
      "https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=600&q=80"
    ],
    variants: [
      { name: "70g", price: 11.00, available: true }
    ],
    desc: "Nibs de cacau crocantes selecionados e tostados suavemente.",
    usage: "Adicione a frutas, iogurtes, smoothies ou consuma como topping crocante."
  },
  cha: {
    name: "Chá de Casca de Cacau",
    images: [
      "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=600&q=80"
    ],
    variants: [
      { name: "Infusão natural", price: 5.00, available: true }
    ],
    desc: "Infusão aromática e leve extraída diretamente da casca natural do cacau.",
    usage: "Infusione 1 colher de sopa em água fervente por 5 a 8 minutos. Sirva quente ou gelado."
  },
  fenogrego: {
    name: "Feno Grego",
    images: [
      "https://images.unsplash.com/photo-1509358271058-acd05cc93898?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=600&q=80"
    ],
    variants: [
      { name: "60g", price: 5.00, available: true }
    ],
    desc: "Sementes selecionadas de Feno Grego para vitalidade e infusão.",
    usage: "Utilize em decocção para chás fortificantes ou como especiaria em preparos culinários."
  },
  cabaca: {
    name: "Cabaça de Cacau",
    images: [
      "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=600&q=80"
    ],
    variants: [
      { name: "O fruto", price: 6.00, available: true }
    ],
    desc: "Fruto de cacau nativo e artesanal.",
    usage: "Pode ser utilizado para consumo in natura das amêndoas ou uso decorativo e ritualístico."
  },
  babosa: {
    name: "Muda de Babosa",
    images: [
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=600&q=80"
    ],
    variants: [
      { name: "Unidade", price: 12.00, available: true }
    ],
    desc: "Muda saudável e orgânica de Aloe Vera cultivada no sítio.",
    usage: "Plante em solo drenado e com boa exposição solar para cultivo doméstico."
  }
};
