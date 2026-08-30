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
    name: "Kit - Experiência Ritualística",
    tag: "# conecte-se",
    images: [
      "https://raw.githubusercontent.com/thigrecom/1/refs/heads/main/img/cerimonial2.jpeg",
      "https://raw.githubusercontent.com/thigrecom/1/refs/heads/main/img/cerimonial3.jpeg",
      "https://raw.githubusercontent.com/thigrecom/1/refs/heads/main/img/cerimonial4.jpeg"
    ],
    variants: [
      { name: "Kit Cacau Cerimonial Completo (1kg de Cacau Cerimonial 100%)", price: 390.00, available: true }
    ],
    desc: "Experiência guiada. Inclui 1kg de Cacau Cerimonial 100% e objetos selecionados de apoio a consagração da medicina.",
    usage: "Acompanha guia explicativo de consagração, com opções de rituais pontuais e rituais de até 21 dias."
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
    desc: "Fruto de cacau nativo e artesanal (unidade).",
    usage: "Pode ser utilizado para consumo in natura das amêndoas, uso ritualístico, decorativo e drinks"
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
      "https://raw.githubusercontent.com/thigrecom/1/refs/heads/main/img/feno-grego.jpg"
    ],
    variants: [
      { name: "60g (em pó)", price: 5.00, available: true }
    ],
    desc: "Power! Feno Grego é estimulante e também para vitalidade.",
    usage: "Infusão para chás e vitaminas fortificantes ou como especiaria em preparos culinários."
  },
  viveiro: {
    name: "Viveiro e Mudas",
    tag: "# plante",
    images: [
      "https://raw.githubusercontent.com/thigrecom/1/refs/heads/main/img/mudas1.jpeg",
      "https://raw.githubusercontent.com/thigrecom/1/refs/heads/main/img/mudas2.jpeg",
      "https://raw.githubusercontent.com/thigrecom/1/refs/heads/main/img/mudas3.jpeg",
      "https://raw.githubusercontent.com/thigrecom/1/refs/heads/main/img/mudas4.jpeg"
    ],
    variants: [
      { name: "Muda de Babosa", price: 12.00, available: true },
      { name: "Muda de Cacau", price: 19.00, available: true },
      { name: "Muda de Arruda", price: 20.00, available: true },
      { name: "Comigo Ninguém Pode (Vaso adulto - 90cm)", price: 95.00, available: true }
    ],
    desc: "Mudas saudáveis e adaptadas ao clima tropical.",
    usage: "Plante em solo drenado e com boa iluminação solar."
  }
};
