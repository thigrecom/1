const PRODUCTS_DATA = {
  cacau100: {
    name: "Cacau 100%",
    tag: "# intenso",
    images: [
      "https://raw.githubusercontent.com/thigrecom/1/refs/heads/main/img/barras1.jpeg",
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
  kitcerimonial: {
    name: "Kit Cacau Cerimonial",
    tag: "# consagre",
    images: [
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&w=600&q=80"
    ],
    variants: [
      { name: "Kit Completo (200g Cacau 100% + Cabaça Ritualística)", price: 120.00, available: true }
    ],
    desc: "Experiência ritualística guiada. Inclui porção de Cacau Cerimonial 100% selecionado e cabaça artesanal para o preparo e consagração da medicina.",
    usage: "Acompanha guia explicativo de consagração e ritual de abertura do Chakra Cardíaco."
  },
  nibs: {
    name: "Nibs de Cacau",
    tag: "# crocante",
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
  cabaca: {
    name: "Cabaça de Cacau",
    tag: "# O Fruto",
    images: [
      "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=600&q=80"
    ],
    variants: [
      { name: "O Fruto (Unidade artesanal)", price: 6.00, available: true }
    ],
    desc: "Fruto de cacau nativo e artesanal (# O Fruto).",
    usage: "Pode ser utilizado para consumo in natura das amêndoas ou uso decorativo e ritualístico."
  },
  cha: {
    name: "Chá de Casca de Cacau",
    tag: "# energia sutil",
    images: [
      "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=600&q=80"
    ],
    variants: [
      { name: "Infusão natural (# energia sutil)", price: 5.00, available: true }
    ],
    desc: "Infusão aromática e leve extraída diretamente da casca natural do cacau.",
    usage: "Infusione 1 colher de sopa em água fervente por 5 a 8 minutos. Sirva quente ou gelado."
  },
  fenogrego: {
    name: "Feno Grego",
    tag: "# estimulante",
    images: [
      "https://images.unsplash.com/photo-1509358271058-acd05cc93898?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=600&q=80"
    ],
    variants: [
      { name: "60g (# estimulante)", price: 5.00, available: true }
    ],
    desc: "Sementes selecionadas de Feno Grego para vitalidade e infusão.",
    usage: "Utilize em decocção para chás fortificantes ou como especiaria em preparos culinários."
  },
  viveiro: {
    name: "Viveiro e Mudas",
    tag: "# plante",
    images: [
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=600&q=80"
    ],
    variants: [
      { name: "Muda de Babosa", price: 12.00, available: true },
      { name: "Muda de Cacau", price: 18.00, available: true },
      { name: "Muda de Pitaya", price: 15.00, available: true },
      { name: "Muda de Arruda", price: 10.00, available: true },
      { name: "Comigo Ninguém Pode (Vaso adulto - 90cm)", price: 45.00, available: true }
    ],
    desc: "Mudas saudáveis e adaptadas ao clima tropical, cultivadas de forma orgânica no sítio.",
    usage: "Plante em solo drenado e com boa iluminação solar. Vaso adulto de Comigo Ninguém Pode requer retirada ou entrega combinada na região."
  }
};
