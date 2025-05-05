// Types
export interface NewsItem {
  id: number;
  title: string;
  summary: string;
  content?: string;
  imageUrl: string;
  date: string;
  category: string;
}

export interface InterviewItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  duration?: string;
  source: string;
  program?: string;
  sourceLogoUrl: string;
  type: 'video' | 'podcast' | 'texto';
  url?: string;
}

export interface GalleryItem {
  id: number;
  title: string;
  date: string;
  imageUrl: string;
  isVideo?: boolean;
  category: string;
}

// Featured News
export const featuredNews: NewsItem[] = [
  {
    id: 1,
    title: "Proposta para desenvolvimento regional ganha apoio no congresso",
    summary: "Nova iniciativa promete trazer investimentos significativos para infraestrutura e preservação ambiental.",
    imageUrl: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=2070&auto=format&fit=crop",
    date: "2023-05-15",
    category: "politica"
  },
  {
    id: 2,
    title: "Reunião com líderes comunitários define prioridades para 2023",
    summary: "Diálogo aberto com representantes locais estabelece metas para melhorias em áreas de educação e saúde.",
    imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop",
    date: "2023-05-10",
    category: "comunidade"
  },
  {
    id: 3,
    title: "Centro cultural abre portas com programação especial",
    summary: "Novo espaço vai oferecer atividades gratuitas para jovens e adultos, com foco em arte e tecnologia.",
    imageUrl: "https://images.unsplash.com/photo-1598818384697-28c4782daa6d?q=80&w=2070&auto=format&fit=crop",
    date: "2023-05-05",
    category: "cultura"
  },
  {
    id: 4,
    title: "Fórum debate soluções sustentáveis para a região amazônica",
    summary: "Especialistas e representantes políticos discutem estratégias para conciliar desenvolvimento e preservação.",
    imageUrl: "https://images.unsplash.com/photo-1599045118108-bf9954418b76?q=80&w=1974&auto=format&fit=crop",
    date: "2023-05-01",
    category: "meio-ambiente"
  }
];

// News Items
export const newsItems: NewsItem[] = [
  ...featuredNews,
  {
    id: 5,
    title: "Projeto de conservação recebe investimento internacional",
    summary: "Nova parceria garante recursos para preservação de áreas de mata nativa e desenvolve programas de educação ambiental.",
    imageUrl: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=2070&auto=format&fit=crop",
    date: "2023-05-18",
    category: "meio-ambiente"
  },
  {
    id: 6,
    title: "Programa de bolsas de estudo beneficiará mais 200 jovens",
    summary: "Iniciativa amplia acesso ao ensino superior para estudantes de baixa renda com foco em áreas estratégicas para o desenvolvimento regional.",
    imageUrl: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?q=80&w=2072&auto=format&fit=crop",
    date: "2023-05-16",
    category: "educacao"
  },
  {
    id: 7,
    title: "Aprovado plano de renovação da infraestrutura urbana",
    summary: "Medidas incluem melhorias no sistema de transporte público e investimentos em saneamento básico para áreas periféricas.",
    imageUrl: "https://images.unsplash.com/photo-1610374792793-f016b77ca51a?q=80&w=2070&auto=format&fit=crop",
    date: "2023-05-14",
    category: "politica"
  },
  {
    id: 8,
    title: "Nova unidade de saúde começa a atender população",
    summary: "Centro especializado oferece atendimento em mais de 15 especialidades médicas e conta com equipamentos de última geração.",
    imageUrl: "https://images.unsplash.com/photo-1594122230689-45899d9e6f69?q=80&w=2070&auto=format&fit=crop",
    date: "2023-05-12",
    category: "saude"
  },
  {
    id: 9,
    title: "Hub de inovação abre inscrições para startups locais",
    summary: "Programa de aceleração oferece mentoria, espaço de trabalho e possibilidade de investimento para empreendedores da região.",
    imageUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop",
    date: "2023-05-10",
    category: "tecnologia"
  },
  {
    id: 10,
    title: "Festival de artes indígenas celebra diversidade cultural",
    summary: "Evento reúne artesanato, música, dança e gastronomia de mais de 20 etnias em celebração às tradições amazônicas.",
    imageUrl: "https://images.unsplash.com/photo-1560523159-4a9692d222f9?q=80&w=2036&auto=format&fit=crop",
    date: "2023-05-08",
    category: "cultura"
  }
];

// Interview Items
export const interviewItems: InterviewItem[] = [
  {
    id: 1,
    title: "A Amazônia e o Futuro: Diálogos para um Desenvolvimento Sustentável",
    description: "Nesta entrevista especial, Jesus Alves Amazonas discute os principais desafios e oportunidades para o desenvolvimento sustentável da região amazônica.",
    imageUrl: "https://images.unsplash.com/photo-1551836022-aadb801c60ae?q=80&w=2070&auto=format&fit=crop",
    date: "22 de abril, 2023",
    duration: "48:32",
    source: "TV Amazonas",
    program: "Programa Amazônia em Foco",
    sourceLogoUrl: "https://images.unsplash.com/photo-1558222218-507dcd2d555e?q=80&w=1974&auto=format&fit=crop",
    type: "video"
  },
  {
    id: 2,
    title: "Políticas Públicas para Comunidades Ribeirinhas",
    description: "Análise das iniciativas e programas voltados para as populações que vivem às margens dos rios amazônicos.",
    imageUrl: "https://images.unsplash.com/photo-1551836022-5ec7d3e124b9?q=80&w=2070&auto=format&fit=crop",
    date: "15 de maio, 2023",
    duration: "32:45",
    source: "Rádio Amazônia",
    sourceLogoUrl: "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?q=80&w=2074&auto=format&fit=crop",
    type: "video"
  },
  {
    id: 3,
    title: "Economia Verde: Oportunidades e Desafios",
    description: "Debate sobre como conciliar crescimento econômico e preservação ambiental na região amazônica.",
    imageUrl: "https://images.unsplash.com/photo-1540317580384-e5d43867caa6?q=80&w=2070&auto=format&fit=crop",
    date: "8 de maio, 2023",
    duration: "45:18",
    source: "Canal Econômico",
    sourceLogoUrl: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1974&auto=format&fit=crop",
    type: "video"
  },
  {
    id: 4,
    title: "Infraestrutura e Desenvolvimento Regional",
    description: "Análise dos projetos de infraestrutura necessários para impulsionar o desenvolvimento da Amazônia.",
    imageUrl: "https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?q=80&w=2074&auto=format&fit=crop",
    date: "2 de maio, 2023",
    duration: "27:36",
    source: "TV Brasil",
    sourceLogoUrl: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=1974&auto=format&fit=crop",
    type: "video"
  },
  {
    id: 5,
    title: "Educação como Pilar do Desenvolvimento",
    description: "Discussão sobre a importância da educação para o futuro sustentável da região amazônica.",
    imageUrl: "https://images.unsplash.com/photo-1567597809630-2d53fbb7964d?q=80&w=2070&auto=format&fit=crop",
    date: "28 de abril, 2023",
    source: "Podcast Futuro da Educação",
    sourceLogoUrl: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?q=80&w=2070&auto=format&fit=crop",
    type: "podcast"
  },
  {
    id: 6,
    title: "Entrevista: \"O Futuro da Amazônia está em Nossas Mãos\"",
    description: "Entrevista exclusiva sobre os desafios e oportunidades para a preservação e desenvolvimento da região.",
    imageUrl: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2070&auto=format&fit=crop",
    date: "20 de abril, 2023",
    source: "Jornal do Amazonas",
    sourceLogoUrl: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop",
    type: "texto"
  },
  {
    id: 7,
    title: "Debate: Políticas Públicas para o Desenvolvimento Sustentável",
    description: "Participação em debate sobre as políticas necessárias para promover o desenvolvimento sustentável.",
    imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop",
    date: "15 de abril, 2023",
    duration: "53:21",
    source: "TV Debate",
    sourceLogoUrl: "https://images.unsplash.com/photo-1574936145840-28808d77a0b6?q=80&w=2070&auto=format&fit=crop",
    type: "video"
  }
];

// Gallery Items
export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Encontro com lideranças comunitárias",
    date: "Maio 2023",
    imageUrl: "https://images.unsplash.com/photo-1561489413-985b06da5bee?q=80&w=2070&auto=format&fit=crop",
    category: "eventos"
  },
  {
    id: 2,
    title: "Entrevista sobre desenvolvimento regional",
    date: "Abril 2023",
    imageUrl: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2070&auto=format&fit=crop",
    isVideo: true,
    category: "eventos"
  },
  {
    id: 3,
    title: "Planejamento estratégico com equipe",
    date: "Abril 2023",
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
    category: "reunioes"
  },
  {
    id: 4,
    title: "Conferência sobre sustentabilidade",
    date: "Março 2023",
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    category: "eventos"
  },
  {
    id: 5,
    title: "Visita a projeto comunitário",
    date: "Março 2023",
    imageUrl: "https://images.unsplash.com/photo-1560439514-4e9645039924?q=80&w=2070&auto=format&fit=crop",
    category: "visitas"
  },
  {
    id: 6,
    title: "Discurso sobre políticas ambientais",
    date: "Fevereiro 2023",
    imageUrl: "https://images.unsplash.com/photo-1599658880436-c61792e70672?q=80&w=2070&auto=format&fit=crop",
    isVideo: true,
    category: "eventos"
  },
  {
    id: 7,
    title: "Painel com especialistas ambientais",
    date: "Fevereiro 2023",
    imageUrl: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop",
    category: "reunioes"
  },
  {
    id: 8,
    title: "Visita a escola municipal",
    date: "Janeiro 2023",
    imageUrl: "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?q=80&w=2074&auto=format&fit=crop",
    category: "visitas"
  }
];
