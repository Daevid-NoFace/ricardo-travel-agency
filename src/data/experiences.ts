export interface Experience {
  slug: string;
  title: string;
  description: string;
  highlights: string[];
  imagePlaceholder: string;
  duration: string;
  difficulty: string;
  price: string;
  included: string[];
  itinerary: {
    day: string;
    title: string;
    description: string;
  }[];
}

export const experiences: Experience[] = [
  {
    slug: "recorrido-clasico-habana",
    title: "Recorrido clásico por La Habana",
    description: "Explora la vibrante capital en autos clásicos estadounidenses. Descubre la arquitectura colonial de La Habana Vieja, camina por el icónico Malecón y siente la energía eléctrica de la ciudad.",
    highlights: [
      "Paseo en un descapotable clásico de los años 50",
      "Recorrido a pie por La Habana Vieja, Patrimonio de la UNESCO",
      "Visita a la Plaza de la Catedral y Plaza Vieja",
      "Atardecer en el Malecón"
    ],
    imagePlaceholder: "Autos antiguos de colores en las calles de La Habana",
    duration: "1 día completo",
    difficulty: "Fácil",
    price: "Desde $120 por persona",
    included: [
      "Transporte en auto clásico",
      "Guía local experto",
      "Almuerzo en restaurante local",
      "Entradas a sitios históricos"
    ],
    itinerary: [
      {
        day: "Mañana",
        title: "La Habana Vieja",
        description: "Comenzamos con un recorrido a pie por el centro histórico, visitando la Plaza de Armas, Plaza de la Catedral y Plaza Vieja. Descubre la arquitectura colonial y la historia fascinante de cada rincón."
      },
      {
        day: "Mediodía",
        title: "Almuerzo tradicional",
        description: "Disfruta de la auténtica cocina cubana en un paladar local, con platos tradicionales como ropa vieja, moros y cristianos, y tostones."
      },
      {
        day: "Tarde",
        title: "Paseo en auto clásico",
        description: "Sube a un descapotable de los años 50 y recorre el Malecón, Vedado y Miramar. Termina con una vista espectacular del atardecer sobre el mar Caribe."
      }
    ]
  },
  {
    slug: "aventura-valle-vinales",
    title: "Aventura en el Valle de Viñales",
    description: "Viaja al corazón tabacalero de Cuba. Admira los mogotes de piedra caliza, visita fincas tradicionales y explora cuevas impresionantes en este valle Patrimonio de la Humanidad.",
    highlights: [
      "Visita a plantaciones de tabaco en funcionamiento",
      "Cabalgata entre los valles de mogotes",
      "Exploración en la Cueva del Indio",
      "Almuerzo tradicional en una finca cubana"
    ],
    imagePlaceholder: "Campos de tabaco verdes con mogotes",
    duration: "1-2 días",
    difficulty: "Moderada",
    price: "Desde $150 por persona",
    included: [
      "Transporte desde La Habana",
      "Guía especializado",
      "Cabalgata o caminata",
      "Almuerzo en finca",
      "Entrada a la Cueva del Indio"
    ],
    itinerary: [
      {
        day: "Día 1 - Mañana",
        title: "Viaje a Viñales",
        description: "Salida temprano desde La Habana hacia el Valle de Viñales (3 horas). Disfruta del paisaje cambiante mientras nos adentramos en la región tabacalera."
      },
      {
        day: "Día 1 - Mediodía",
        title: "Finca de tabaco",
        description: "Visita una plantación familiar donde aprenderás todo el proceso del tabaco, desde la siembra hasta el enrollado de puros. Almuerzo campestre con productos orgánicos."
      },
      {
        day: "Día 1 - Tarde",
        title: "Exploración del valle",
        description: "Cabalgata o caminata entre los mogotes, visita a la Cueva del Indio con paseo en bote subterráneo, y mirador panorámico del valle."
      }
    ]
  },
  {
    slug: "experiencia-colonial-trinidad",
    title: "Experiencia colonial en Trinidad",
    description: "Retrocede en el tiempo en la ciudad colonial mejor conservada de Cuba. Recorre calles empedradas, visita ruinas de ingenios azucareros y disfruta de música en plazas encantadoras.",
    highlights: [
      "Recorrido a pie por el centro colonial UNESCO",
      "Visita al Valle de los Ingenios",
      "Música en vivo en la Casa de la Música",
      "Talleres de artesanos locales"
    ],
    imagePlaceholder: "Edificios coloniales coloridos en Trinidad",
    duration: "2 días",
    difficulty: "Fácil",
    price: "Desde $180 por persona",
    included: [
      "Transporte y alojamiento",
      "Guía histórico local",
      "Entradas a museos",
      "Cena con música en vivo"
    ],
    itinerary: [
      {
        day: "Día 1 - Mañana",
        title: "Centro histórico",
        description: "Recorrido por las calles empedradas de Trinidad, visitando la Plaza Mayor, iglesias coloniales y museos. Aprende sobre la época del azúcar y la arquitectura colonial."
      },
      {
        day: "Día 1 - Tarde",
        title: "Valle de los Ingenios",
        description: "Excursión al valle donde se encuentran las ruinas de antiguos ingenios azucareros. Sube a la Torre Manaca Iznaga para vistas panorámicas."
      },
      {
        day: "Día 2",
        title: "Cultura y artesanía",
        description: "Visita talleres de alfarería y tejido, playa Ancón para relajarte, y termina con música en vivo en la famosa Casa de la Música."
      }
    ]
  },
  {
    slug: "paraiso-playa-varadero",
    title: "Paraíso de playa en Varadero",
    description: "Relájate en 20 kilómetros de playas de arena blanca. Disfruta de aguas turquesas, deportes acuáticos y la atmósfera caribeña más relajada.",
    highlights: [
      "Acceso a las mejores zonas de playa",
      "Oportunidades de snorkel y buceo",
      "Paseo en catamarán al atardecer",
      "Experiencias gastronómicas con mariscos frescos"
    ],
    imagePlaceholder: "Playa de arena blanca con agua turquesa",
    duration: "3-5 días",
    difficulty: "Fácil",
    price: "Desde $200 por persona/día",
    included: [
      "Alojamiento frente al mar",
      "Deportes acuáticos",
      "Excursión en catamarán",
      "Comidas en restaurantes de playa"
    ],
    itinerary: [
      {
        day: "Días 1-2",
        title: "Relax en la playa",
        description: "Disfruta de las aguas cristalinas de Varadero. Practica snorkel, kayak, o simplemente relájate bajo el sol caribeño con un mojito en mano."
      },
      {
        day: "Día 3",
        title: "Aventura en catamarán",
        description: "Excursión de día completo en catamarán visitando cayos vírgenes, snorkel en arrecifes de coral, y almuerzo a bordo con langosta fresca."
      },
      {
        day: "Días 4-5",
        title: "Actividades opcionales",
        description: "Buceo certificado, parasailing, visita a la cueva de Saturno, o excursiones a La Habana y Matanzas."
      }
    ]
  },
  {
    slug: "inmersion-cultura-cubana",
    title: "Inmersión en la cultura cubana",
    description: "Sumérgete en la cultura cubana auténtica. Aprende a bailar salsa, disfruta de la cocina tradicional, visita estudios de arte y conecta con familias locales.",
    highlights: [
      "Clases de salsa con instructores locales",
      "Clase de cocina de platos tradicionales",
      "Visita a estudios y galerías de arte",
      "Cena en casa de una familia cubana"
    ],
    imagePlaceholder: "Bailarines cubanos bailando salsa",
    duration: "3-4 días",
    difficulty: "Fácil",
    price: "Desde $160 por persona/día",
    included: [
      "Clases de baile y cocina",
      "Visitas a estudios de artistas",
      "Experiencia en casa local",
      "Entradas a espectáculos"
    ],
    itinerary: [
      {
        day: "Día 1",
        title: "Ritmos cubanos",
        description: "Clases de salsa y son con bailarines profesionales. Por la noche, visita a una casa de la música para practicar lo aprendido con música en vivo."
      },
      {
        day: "Día 2",
        title: "Sabores de Cuba",
        description: "Clase de cocina donde aprenderás a preparar platos tradicionales como congri, picadillo y flan de coco. Almuerzo con lo que preparaste."
      },
      {
        day: "Día 3",
        title: "Arte y comunidad",
        description: "Recorrido por estudios de artistas locales, galerías de arte en Fusterlandia, y cena en casa de una familia cubana para conocer su vida cotidiana."
      }
    ]
  },
  {
    slug: "cienfuegos-bahia-cochinos",
    title: "Cienfuegos y Bahía de Cochinos",
    description: "Descubre la 'Perla del Sur' y la histórica Bahía de Cochinos. Explora la arquitectura de influencia francesa, playas prístinas y sitios históricos clave.",
    highlights: [
      "Tour por Cienfuegos y el Palacio de Valle",
      "Visita al museo de Playa Girón",
      "Snorkel en Playa Girón",
      "Recorrido panorámico por la costa"
    ],
    imagePlaceholder: "Arquitectura colonial francesa elegante",
    duration: "2 días",
    difficulty: "Fácil",
    price: "Desde $170 por persona",
    included: [
      "Transporte y alojamiento",
      "Guía histórico",
      "Entradas a museos",
      "Equipo de snorkel"
    ],
    itinerary: [
      {
        day: "Día 1",
        title: "Cienfuegos colonial",
        description: "Recorrido por el Parque José Martí, Teatro Terry, Palacio de Valle y el Malecón. Arquitectura neoclásica francesa única en Cuba."
      },
      {
        day: "Día 2",
        title: "Bahía de Cochinos",
        description: "Visita al museo de la invasión en Playa Girón, snorkel en aguas cristalinas, y exploración de la Cueva de los Peces."
      }
    ]
  },
  {
    slug: "naturaleza-vida-silvestre",
    title: "Excursiones de naturaleza y vida silvestre",
    description: "Explora los diversos ecosistemas de Cuba. Desde selvas tropicales hasta humedales costeros, descubre flora y fauna únicas en el mundo.",
    highlights: [
      "Avistamiento de aves (trogón cubano, tocororo)",
      "Senderismo en la Sierra Maestra",
      "Visita a criaderos de cocodrilos",
      "Aventuras en kayak por los manglares"
    ],
    imagePlaceholder: "Paisaje de selva tropical exuberante",
    duration: "3-5 días",
    difficulty: "Moderada a Difícil",
    price: "Desde $190 por persona/día",
    included: [
      "Guía naturalista certificado",
      "Equipo de senderismo",
      "Transporte 4x4",
      "Alojamiento en eco-lodges"
    ],
    itinerary: [
      {
        day: "Días 1-2",
        title: "Observación de aves",
        description: "Excursiones temprano en la mañana para avistar el tocororo (ave nacional), zunzuncito (colibrí más pequeño del mundo), y otras especies endémicas."
      },
      {
        day: "Día 3",
        title: "Sierra Maestra",
        description: "Senderismo en las montañas más altas de Cuba, visitando cascadas escondidas y bosques nubosos. Opción de subir al Pico Turquino."
      },
      {
        day: "Días 4-5",
        title: "Ecosistemas costeros",
        description: "Kayak por manglares, visita a criaderos de cocodrilos, y exploración de ciénagas con biodiversidad única."
      }
    ]
  },
  {
    slug: "herencia-santiago-cuba",
    title: "Herencia de Santiago de Cuba",
    description: "Vive la segunda ciudad de Cuba y capital cultural. Descubre tradiciones afrocubanas, historia revolucionaria y la cuna del son.",
    highlights: [
      "Recorrido por la fortaleza Castillo del Morro",
      "Noche musical en la Casa de la Trova",
      "Visita al Cementerio de Santa Ifigenia",
      "Experiencias culturales afrocubanas"
    ],
    imagePlaceholder: "Fortaleza histórica con vista a la bahía",
    duration: "2-3 días",
    difficulty: "Fácil",
    price: "Desde $165 por persona/día",
    included: [
      "Alojamiento en casa particular",
      "Guía cultural local",
      "Entradas a sitios históricos",
      "Espectáculos musicales"
    ],
    itinerary: [
      {
        day: "Día 1",
        title: "Historia y fortalezas",
        description: "Visita al Castillo del Morro (Patrimonio UNESCO), Parque Céspedes, Catedral, y museo de la lucha clandestina. Atardecer desde la fortaleza."
      },
      {
        day: "Día 2",
        title: "Música y cultura",
        description: "Recorrido por la Casa de la Trova (cuna del son cubano), visita al Cementerio de Santa Ifigenia donde descansan héroes nacionales, y espectáculo de folklore afrocubano."
      },
      {
        day: "Día 3",
        title: "Alrededores",
        description: "Excursión a la Gran Piedra, plantaciones de café históricas, y playas vírgenes de la costa sur."
      }
    ]
  }
];
