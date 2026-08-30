const PRODUCTS_DATA = {
  cacau100: {
    name: "Cacau 100%",
    tag: "# intenso",
    images: [
      "https://raw.githubusercontent.com/thigrecom/1/refs/heads/main/img/barras1.jpeg",
      "https://raw.githubusercontent.com/thigrecom/1/refs/heads/main/img/barras2.jpeg",
      "https://raw.githubusercontent.com/thigrecom/1/refs/heads/main/img/cerimonial1.jpeg"
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
      "https://raw.githubusercontent.com/thigrecom/1/refs/heads/main/img/cerimonial2.jpeg",
      "https://raw.githubusercontent.com/thigrecom/1/refs/heads/main/img/cerimonial3.jpeg",
      "https://raw.githubusercontent.com/thigrecom/1/refs/heads/main/img/cerimonial4.jpeg"
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
      "https://raw.githubusercontent.com/thigrecom/1/refs/heads/main/img/nibs3.jpeg",
      "https://raw.githubusercontent.com/thigrecom/1/refs/heads/main/img/nibs2.jpeg",
      "https://raw.githubusercontent.com/thigrecom/1/refs/heads/main/img/nibs1.jpeg"
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
      "https://raw.githubusercontent.com/thigrecom/1/refs/heads/main/img/frutos1.jpeg",
      "https://raw.githubusercontent.com/thigrecom/1/refs/heads/main/img/frutos2.jpeg",
      "https://raw.githubusercontent.com/thigrecom/1/refs/heads/main/img/frutos3.jpeg"
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
      "https://raw.githubusercontent.com/thigrecom/1/refs/heads/main/img/casca.jpeg"
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
      "https://raw.githubusercontent.com/thigrecom/1/refs/heads/main/img/mudas1.jpeg",
      "https://raw.githubusercontent.com/thigrecom/1/refs/heads/main/img/mudas2.jpeg",
      "https://raw.githubusercontent.com/thigrecom/1/refs/heads/main/img/mudas3.jpeg",
      "https://raw.githubusercontent.com/thigrecom/1/refs/heads/main/img/mudas4.jpeg",
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
