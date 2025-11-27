export interface Experience {
  slug: string;
  title: string;
  description: string | string[];
  highlights: string[];
  imagePlaceholder: string;
  duration: string;
  difficulty: string;
  price: string;
  included: string[];
  itinerary: {
    day: string;
    title: string;
    description: string | string[];
  }[];
}

interface MultiLangExperience {
  slug: string;
  title: Record<string, string>;
  description: Record<string, string | string[]>;
  highlights: Record<string, string[]>;
  imagePlaceholder: Record<string, string>;
  duration: Record<string, string>;
  difficulty: Record<string, string>;
  price: Record<string, string>;
  included: Record<string, string[]>;
  itinerary: Record<string, Array<{
    day: string;
    title: string;
    description: string | string[];
  }>>;
}

const experiencesData: MultiLangExperience[] = [
  // Slug 1
  {
    slug: "habana-trinidad-mar",
    title: {
      es: "La Ruta Perfecta: Habana, Trinidad y Mar por el Precio Justo",
      en: "The Perfect Route: Havana, Trinidad and Sea for the Just Price",
      pt: "Tour Clássico por Havana, Trinidad e Mar por o Preço Justo"
    },
    description: {
      es: [
        "Embárcate en una experiencia única por Cuba, comenzando con un recorrido por La Habana en un descapotable clásico, donde el viento caribeño y la arquitectura histórica te acompañan en cada giro. Continúa tu aventura hacia Trinidad, una joya colonial con calles adoquinadas, que te transportará a otra época con su encanto intacto. Allí podrás disfrutar de música en vivo y cócteles en la Plaza Mayor, un entorno mágico donde la vida nocturna cobra un ritmo propio. Luego, desconéctate en playas de arena blanca y aguas cristalinas, perfectas para descansar y dejarte llevar por la tranquilidad del mar. Y en cada paso del camino, sumérgete en la cultura cubana con encuentros locales espontáneos, llenos de sonrisas, historias y autenticidad que hacen de este viaje una experiencia irrepetible.",
      ],
      en: [
        "Embark on a unique Cuban adventure, starting with a tour of Havana in a classic convertible, where the Caribbean breeze and historic architecture accompany you at every turn. Continue your journey to Trinidad, a colonial gem with cobblestone streets that will transport you to another era with its unspoiled charm. There, you can enjoy live music and cocktails in the Plaza Mayor, a magical setting where the nightlife comes alive. Then, unwind on white-sand beaches and crystal-clear waters, perfect for relaxing and letting yourself be carried away by the tranquility of the sea. And at every step of the way, immerse yourself in Cuban culture with spontaneous local encounters, full of smiles, stories, and authenticity that make this trip an unforgettable experience.",
      ],
      pt: [
        "Embarque numa aventura cubana única, começando com um passeio por Havana num descapotável clássico, onde a brisa caribenha e a arquitetura histórica o acompanham a cada esquina. Continue a sua viagem até Trinidad, uma joia colonial com ruas de paralelepípedos que o transportarão para outra época com o seu charme preservado. Aí, poderá desfrutar de música ao vivo e cocktails na Plaza Mayor, um cenário mágico onde a vida noturna ganha vida. De seguida, relaxe em praias de areia branca e águas cristalinas, perfeitas para relaxar e deixar-se levar pela tranquilidade do mar. E a cada passo, mergulhe na cultura cubana com encontros espontâneos com os habitantes locais, repletos de sorrisos, histórias e autenticidade que fazem desta viagem uma experiência inesquecível."
      ]
    },
    highlights: {
      es: [
        "Explora La Habana en un descapotable clásico",
        "Descubre Trinidad, una joya colonial con calles adoquinadas",
        "Disfruta de música en vivo y cócteles en la Plaza Mayor",
        "Relájate en playas de arena blanca y aguas cristalinas",
        "Sumérgete en la cultura cubana con encuentros locales espontáneos"
      ],
      en: [
        "Explore Havana in a classic convertible",
        "Discover Trinidad, a colonial gem with cobblestone streets",
        "Enjoy live music and cocktails in the Plaza Mayor",
        "Relax on white beaches and crystal-clear waters",
        "Immerse yourself in Cuban culture with spontaneous local encounters"
      ],
      pt: [
        "Explore Havana num clássico descapotável",
        "Descubra Trinidad, uma joia colonial com ruas de paralelepípedos",
        "Disfrute de música ao vivo e cócteis na Praça da Catedral",
        "Relaxe em praias de areia branca e água cristalina",
        "Immerse-se na cultura cubana com encontros locais espontâneos"
      ]
    },
    imagePlaceholder: {
      es: "@/pictures/habana-trinidad-mar/habana-trinidad-mar-1.jpg, @/pictures/habana-trinidad-mar/habana-trinidad-mar-2.jpg, @/pictures/habana-trinidad-mar/habana-trinidad-mar-3.jpg, @/pictures/habana-trinidad-mar/habana-trinidad-mar-4.jpg, @/pictures/habana-trinidad-mar/habana-trinidad-mar-5.jpg, @/pictures/habana-trinidad-mar/habana-trinidad-mar-6.jpg, @/pictures/habana-trinidad-mar/habana-trinidad-mar-7.jpg, @/pictures/habana-trinidad-mar/habana-trinidad-mar-8.jpg",
      en: "@/pictures/habana-trinidad-mar/habana-trinidad-mar-1.jpg, @/pictures/habana-trinidad-mar/habana-trinidad-mar-2.jpg, @/pictures/habana-trinidad-mar/habana-trinidad-mar-3.jpg, @/pictures/habana-trinidad-mar/habana-trinidad-mar-4.jpg, @/pictures/habana-trinidad-mar/habana-trinidad-mar-5.jpg, @/pictures/habana-trinidad-mar/habana-trinidad-mar-6.jpg, @/pictures/habana-trinidad-mar/habana-trinidad-mar-7.jpg, @/pictures/habana-trinidad-mar/habana-trinidad-mar-8.jpg",
      pt: "@/pictures/habana-trinidad-mar/habana-trinidad-mar-1.jpg, @/pictures/habana-trinidad-mar/habana-trinidad-mar-2.jpg, @/pictures/habana-trinidad-mar/habana-trinidad-mar-3.jpg, @/pictures/habana-trinidad-mar/habana-trinidad-mar-4.jpg, @/pictures/habana-trinidad-mar/habana-trinidad-mar-5.jpg, @/pictures/habana-trinidad-mar/habana-trinidad-mar-6.jpg, @/pictures/habana-trinidad-mar/habana-trinidad-mar-7.jpg, @/pictures/habana-trinidad-mar/habana-trinidad-mar-8.jpg"
    },
    duration: {
      es: "11 días",
      en: "11 days",
      pt: "11 dias"
    },
    difficulty: {
      es: "Fácil",
      en: "Easy",
      pt: "Fácil"
    },
    price: {
      es: "Desde 990€ por persona",
      en: "From 990€ per person",
      pt: "A partir de 990€ por pessoa"
    },
    included: {
      es: [
        "Transporte en auto clásico",
        "Guía local experto",
        "Almuerzo en restaurante local",
        "Entradas a sitios históricos"
      ],
      en: [
        "Classic car transportation",
        "Expert local guide",
        "Lunch at local restaurant",
        "Entrance fees to historical sites"
      ],
      pt: [
        "Transporte em carro clássico",
        "Guia local especializado",
        "Almoço em restaurante local",
        "Entradas para locais históricos"
      ]
    },
    itinerary: {
      es: [
        {
          day: "Día 1",
          title: "¡Bienvenidos a casa, sean habaneros por unos días!",
          description: [
            "El primer día en Cuba comienza con el abrazo cálido de la brisa",
            "caribeña al aterrizar. Nuestro chofer les espera sonriente en el",
            "aeropuerto, listo para llevarlos cómodamente a su alojamiento en un",
            "vehículo privado. Mientras recorren estas primeras calles habaneras,",
            "llenas de colores y música que se cuela por las ventanas, compartiremos",
            "esos secretos locales que transforman un viaje en una experiencia:",
            "dónde tomar el mejor café al amanecer, cómo reconocer una paladar",
            "auténtica y en qué esquina escucharán los primeros acordes de son.",
            "La Habana ya late para ustedes... ¿Listos para dejarse seducir?",
            "Comienza la aventura cubana con un mojito en la mano. ¡Saboreen esta",
            "aventura!"
          ]
        },
        {
          day: "Día 2",
          title: "La Habana se revela - Historia, Vintage y Sabor",
          description: [
            "Un descapotable clásico y guía privado les mostrarán el alma de la ciudad: plazas coloniales, balcones de Hemingway y talleres secretos de tabaco.",
            "Después, elijan: Almuerzo en Paladar de La Habana Vieja tipo La Esquina de Cuba. ",
            "Explorar libremente rincones que les roben el corazón.",
            "Tarde abierta para perderse en el Malecón al atardecer o seguir el ritmo de la ciudad.",
            "Hoy no son turistas, son habaneros por un día"
          ]
        },
        {
          day: "Día 3",
          title: "Día Libre: A La Habana se la conquista a pie (y a corazón abierto)",
          description: [
            "Hoy la ciudad es suya. Sin rutas fijas ni horarios, dejen que La Habana los sorprenda: piérdanse entre libros antiguos en",
            "Plaza de Armas, saboreen un café improvisado en un balcón colonial, o sigan la música callejera que los lleve a rincones secretos. ",
            "El Malecón al atardecer será su mejor recompensa. ",
            "Los tesoros más auténticos no están en las guías, sino en las esquinas que elijan explorar con curiosidad y tiempo."
          ]
        },
        {
          day: "Día 4",
          title: "En Taxi Colectivo hacia Trinidad, donde el Tiempo se Durmió bajo el sol caribeño",
          description: [
            "Hoy cambiamos de ritmo: un auténtico taxi colectivo los llevará por carreteras rurales, entre paisajes de palmas y ",
            "pueblos coloridos, hasta la joya colonial de Trinidad (Patrimonio Mundial). En el trayecto (4-5 horas), vivirán esa Cuba ",
            "espontánea: paradas improvisadas, conversaciones con lugareños y el aire dulce de la provincia. ",
            "Al llegar, calles adoquinadas, fachadas pastel y plazas silenciosas les darán la bienvenida. El resto del día es para ",
            "explorar libremente: tal vez subir al Mirador del Campanario o probar una canchánchara (el cóctel local) en algún patio ",
            "lleno de música. Trinidad no se visita... se siente con los ojos cerrados."
          ]
        },
        {
          day: "Días 5 y 6",
          title: "Días Libres en Trinidad: Donde Cada Callejón Guarda una Historia (y un Mojito de Caña)",
          description: [
            "Dos días para explorar a su aire esta joya colonial: suban al campanario al atardecer, compren artesanías en la Casa de ",
            "los Conspiradores o báñense en Playa Ancón (a 15 min). Pero cuando caiga el sol, la Plaza Mayor se transforma: música ",
            "en vivo, bailes espontáneos y el famoso canchánchara (cóctel local) fluyen hasta altas horas.",
            "De día, museo al aire libre; de noche, fiesta bajo las estrellas. Trinidad es así: dual y fascinante."
          ]
        },
        {
          day: "Día 7",
          title: "Adiós Trinidad, Hola [Varadero/Cayo Santa María] – El Mar Elige el Final de su Historia",
          description: [
            "El último trayecto será toda una experiencia cubana: viajarán en taxi colectivo (4-5 horas) a través de: ",
            "- Pueblos coloniales donde el tiempo se detuvo.",
            "- Valles de cultivos tropicales y rústicas casas de tabaco.",
            "- Paradas espontáneas para estirar las piernas y probar frutas frescas.",
            "Elijan su destino final:",
            "- Varadero: 20 km de arena blanca y ambiente vibrante (2h al aeropuerto de La Habana).",
            "- Cayo Santa María: aislamiento y aguas cristalinas (5h al aeropuerto de La Habana). ",
            "Al llegar, solo quedará disfrutar su resort todo incluido con:",
            "- Cócteles al atardecer; Masajes frente al mar; Cenas con los pies en la arena. ",
            "En Cuba, los caminos saben a aventura y los finales a Caribe."
          ]
        },
        {
          day: "Días 8 al 10",
          title: "Ustedes, el Mar y Nada Más – El Caribe en su Estado Más Puro",
          description: [
            "Estos días son para entregarse al ritmo del Caribe:",
            "- Mañanas de chapuzones en aguas turquesas.",
            "- Tardes de cócteles junto a la piscina infinita.",
            "- Atardeceres con los pies en la arena blanca.",
            "- Noches de cenas románticas bajo las estrellas.",
            "En su resort todo incluido, disfrutarán de:",
            "Spa con vistas al mar.",
            "Actividades acuáticas (opcionales).",
            "Shows nocturnos con sabor cubano.",
            "El verdadero lujo es tener tiempo para saborear cada ola, cada risa, cada instante bajo este sol..."
          ]
        },
        {
          day: "Día 11",
          title: "Hasta pronto, Caribe – Rumbo a casa con el corazón lleno de Cuba",
          description: [
            "El último día comienza con mar, arena y sol, y en hora a coordinar un traslado privado directo al aeropuerto de La Habana: ",
            "- Desde Varadero (2 horas de viaje).",
            "- Desde Cayo Santa María (5 horas de viaje).",
            "Mientras recorren la carretera, tendrán tiempo para: ",
            "- Repasar los mejores momentos del viaje.",
            "- Detenerse a comprar últimos souvenirs (si lo desean).",
            "- Disfrutar una última visita al mar Caribe.",
            "No es un adiós, solo un 'hasta pronto'... Cuba siempre guardará un pedacito de arena para ustedes."
          ]
        }
      ],
      en: [
        {
          day: "Day 1",
          title: "Welcome home—be habaneros for a few days!",
          description: [
            "Your first day in Cuba begins with the warm embrace of the Caribbean breeze as you land.",
            "Our smiling driver awaits you at the airport, ready to take you comfortably to your lodging in a private vehicle.",
            "As you ride through Havana's colorful streets, filled with music drifting through the windows, we share the local secrets that turn a trip into an experience:",
            "where to sip the best sunrise coffee, how to recognize an authentic paladar, and which corner will gift you the first chords of son.",
            "Havana is already beating for you... ready to be seduced?",
            "Let the Cuban adventure begin with a mojito in hand. Savor every moment!"
          ]
        },
        {
          day: "Day 2",
          title: "Havana reveals itself – History, vintage flair, and flavor",
          description: [
            "A classic convertible and private guide show you the soul of the city: colonial squares, Hemingway's balconies, and secret tobacco workshops.",
            "Then choose: lunch at a Havana Vieja paladar like La Esquina de Cuba.",
            "Explore freely the corners that steal your heart.",
            "Leave the afternoon open to get lost on the Malecón at sunset or follow the city's rhythm wherever it leads you.",
            "Today you're not tourists—you become habaneros for a day."
          ]
        },
        {
          day: "Day 3",
          title: "Free day: Havana is conquered on foot (and with an open heart)",
          description: [
            "Today the city is yours. With no fixed routes or schedules, let Havana surprise you: lose yourselves among antique books in Plaza de Armas,",
            "sip an improvised coffee on a colonial balcony, or follow street music that leads to secret spots.",
            "The Malecón at sunset will be your best reward.",
            "The most authentic treasures aren't in guidebooks—they're on the corners you explore with curiosity and time."
          ]
        },
        {
          day: "Day 4",
          title: "Collective taxi to Trinidad, where time naps under the Caribbean sun",
          description: [
            "Today we change pace: an authentic colectivo taxi takes you along rural roads, past palm landscapes and colorful towns, until reaching the colonial jewel of Trinidad (UNESCO).",
            "During the 4–5 hour ride, you'll experience spontaneous Cuba: improvised stops, chats with locals, and the sweet provincial breeze.",
            "Upon arrival, cobblestone streets, pastel facades, and quiet plazas welcome you.",
            "The rest of the day is yours—maybe climb the bell-tower lookout or sip a canchánchara (the local cocktail) in a courtyard full of music.",
            "Trinidad isn't visited... it's felt with your eyes closed."
          ]
        },
        {
          day: "Days 5 & 6",
          title: "Free days in Trinidad: every alley holds a story (and a sugarcane mojito)",
          description: [
            "Two days to explore this colonial gem at your own pace: climb the bell tower at sunset, shop for crafts in Casa de los Conspiradores, or swim at Playa Ancón (15 minutes away).",
            "When the sun goes down, Plaza Mayor transforms: live music, spontaneous dancing, and the famous canchánchara flow late into the night.",
            "By day it's an open-air museum; by night, a party under the stars. Trinidad is dual and fascinating."
          ]
        },
        {
          day: "Day 7",
          title: "Goodbye Trinidad, hello Varadero/Cayo Santa María – The sea chooses your ending",
          description: [
            "The final overland stretch is a Cuban experience in itself: travel by colectivo taxi (4–5 hours) through colonial towns frozen in time,",
            "valleys of tropical crops and rustic tobacco houses, and spontaneous stops to stretch your legs or taste fresh fruit.",
            "Choose your grand finale:",
            "- Varadero: 20 km of white sand and vibrant ambiance (2 hrs to Havana airport).",
            "- Cayo Santa María: seclusion and crystal waters (5 hrs to Havana airport).",
            "Upon arrival it's time to enjoy the all-inclusive resort with sunset cocktails, seaside massages, and dinners with your feet in the sand.",
            "In Cuba, roads taste like adventure and endings like the Caribbean."
          ]
        },
        {
          day: "Days 8–10",
          title: "You, the sea, and nothing else – The Caribbean in its purest state",
          description: [
            "These days are for surrendering to the Caribbean rhythm:",
            "- Mornings plunging into turquoise waters.",
            "- Afternoons with cocktails beside the infinity pool.",
            "- Sunsets with your feet in white sand.",
            "- Nights of romantic dinners under the stars.",
            "At your all-inclusive resort you'll enjoy:",
            "Spa sessions with ocean views.",
            "Optional water activities.",
            "Evening shows infused with Cuban flavor.",
            "True luxury is having time to savor every wave, laugh, and sun-kissed instant."
          ]
        },
        {
          day: "Day 11",
          title: "Hasta pronto, Caribbean – Heading home with hearts full of Cuba",
          description: [
            "The last day begins with sea, sand, and sun before coordinating a private transfer straight to Havana airport:",
            "- From Varadero (2-hour drive).",
            "- From Cayo Santa María (5-hour drive).",
            "On the road you'll have time to revisit the best moments,",
            "stop for final souvenirs if you wish,",
            "and enjoy one last glimpse of the Caribbean Sea.",
            "It's not goodbye, just a 'see you soon'...Cuba will always save a bit of sand for you."
          ]
        }
      ],
      pt: [
        {
          day: "Dia 1",
          title: "Bem-vindos a casa, sejam habaneros por alguns dias!",
          description: [
            "O primeiro dia em Cuba começa com o abraço quente da brisa caribenha assim que aterrissam.",
            "Nosso motorista sorridente espera vocês no aeroporto, pronto para levá-los com conforto ao alojamento em veículo privado.",
            "Enquanto percorrem as primeiras ruas de Havana, cheias de cores e música entrando pelas janelas, compartilhamos segredos locais que transformam a viagem em experiência:",
            "onde tomar o melhor café ao amanhecer, como reconhecer um paladar autêntico e em qual esquina ouvirão os primeiros acordes de son.",
            "Havana já pulsa por vocês... prontos para se deixarem seduzir?",
            "Começa a aventura cubana com um mojito na mão. Aproveitem cada instante!"
          ]
        },
        {
          day: "Dia 2",
          title: "Havana se revela – História, vintage e sabor",
          description: [
            "Um conversível clássico e um guia privado mostram a alma da cidade: praças coloniais, varandas de Hemingway e oficinas secretas de tabaco.",
            "Depois, escolham: almoço em um paladar de Havana Velha, como La Esquina de Cuba.",
            "Explorem livremente os cantinhos que roubarem o coração de vocês.",
            "Tarde aberta para se perder pelo Malecón ao entardecer ou seguir o ritmo da cidade.",
            "Hoje vocês não são turistas—são habaneros por um dia."
          ]
        },
        {
          day: "Dia 3",
          title: "Dia livre: Havana se conquista a pé (e de coração aberto)",
          description: [
            "Hoje a cidade é de vocês. Sem rotas fixas nem horários, deixem Havana surpreendê-los: percam-se entre livros antigos na Plaza de Armas,",
            "saboreiem um café improvisado em uma varanda colonial ou sigam a música de rua que leva a recantos secretos.",
            "O Malecón ao pôr do sol será a melhor recompensa.",
            "Os tesouros mais autênticos não estão nos guias, e sim nas esquinas exploradas com curiosidade e tempo."
          ]
        },
        {
          day: "Dia 4",
          title: "Taxi coletivo rumo a Trinidad, onde o tempo adormece sob o sol caribenho",
          description: [
            "Hoje mudamos o ritmo: um autêntico táxi coletivo leva vocês por estradas rurais, entre paisagens de palmeiras e povoados coloridos, até a joia colonial de Trinidad (UNESCO).",
            "Durante as 4–5 horas de viagem, viverão a Cuba espontânea: paradas improvisadas, conversas com moradores e o doce ar do interior.",
            "Ao chegar, ruas de paralelepípedos, fachadas em tons pastéis e praças silenciosas dão as boas-vindas.",
            "O resto do dia é livre: subam ao mirante do campanário ou provem uma canchánchara (coquetel local) em um pátio cheio de música.",
            "Trinidad não se visita... sente-se de olhos fechados."
          ]
        },
        {
          day: "Dias 5 e 6",
          title: "Dias livres em Trinidad: cada viela guarda uma história (e um mojito de cana)",
          description: [
            "Dois dias para explorar essa joia colonial no próprio ritmo: subam ao campanário ao entardecer, comprem artesanatos na Casa dos Conspiradores ou mergulhem na Playa Ancón (15 min).",
            "Quando o sol se põe, a Plaza Mayor se transforma: música ao vivo, dança espontânea e a famosa canchánchara até altas horas.",
            "De dia é um museu a céu aberto; de noite, uma festa sob as estrelas. Trinidad é dual e fascinante."
          ]
        },
        {
          day: "Dia 7",
          title: "Adeus Trinidad, olá Varadero/Cayo Santa María – O mar escolhe o final",
          description: [
            "O último trecho terrestre é uma experiência cubana em si: viagem em táxi coletivo (4–5 horas) por povoados coloniais onde o tempo parou,",
            "vales de cultivos tropicais e casas rústicas de tabaco, com paradas espontâneas para esticar as pernas ou provar frutas frescas.",
            "Escolham o gran finale:",
            "- Varadero: 20 km de areia branca e vibração animada (2h até o aeroporto de Havana).",
            "- Cayo Santa María: isolamento e águas cristalinas (5h até o aeroporto de Havana).",
            "Ao chegar, é hora de aproveitar o resort all inclusive com coquetéis ao pôr do sol, massagens à beira-mar e jantares com os pés na areia.",
            "Em Cuba, os caminhos têm sabor de aventura e os finais, de Caribe."
          ]
        },
        {
          day: "Dias 8 a 10",
          title: "Vocês, o mar e nada mais – O Caribe em estado puro",
          description: [
            "Esses dias são para se entregar ao ritmo caribenho:",
            "- Manhãs de mergulhos em águas turquesa.",
            "- Tardes com coquetéis ao lado da piscina infinita.",
            "- Fins de tarde com os pés na areia branca.",
            "- Noites de jantares românticos sob as estrelas.",
            "No resort all inclusive, desfrutem de:",
            "Spa com vista para o mar.",
            "Atividades aquáticas opcionais.",
            "Shows noturnos com sabor cubano.",
            "O verdadeiro luxo é ter tempo para saborear cada onda, cada riso e cada instante banhado de sol."
          ]
        },
        {
          day: "Dia 11",
          title: "Até breve, Caribe – De volta para casa com o coração cheio de Cuba",
          description: [
            "O último dia começa com mar, areia e sol antes de coordenar um traslado privado direto ao aeroporto de Havana:",
            "- Desde Varadero (2 horas de viagem).",
            "- Desde Cayo Santa María (5 horas de viagem).",
            "Na estrada haverá tempo para relembrar os melhores momentos,",
            "fazer paradas para os últimos souvenirs (se quiserem)",
            "e aproveitar uma última visão do Mar do Caribe.",
            "Não é um adeus, é um 'até logo'... Cuba sempre guardará um pedacinho de areia para vocês."
          ]
        }
      ]
    }
  },

  // Slug 2
  {
    slug: "habana-vinales-mar",
    title: {
      es: "La Ruta Perfecta: Habana, Viñales y Mar por el Precio Justo",
      en: "The Perfect Route: Havana, Viñales and Sea for the Just Price",
      pt: "Tour Clássico por Havana, Viñales e Mar por o Preço Justo"
    },
    description: {
      es: "Vive una experiencia inolvidable en Cuba comenzando por un recorrido panorámico por La Habana en un descapotable clásico, sintiendo su energía única entre avenidas históricas y el icónico Malecón. Luego pon rumbo a Viñales, una joya paisajística declarada Patrimonio Mundial, donde la naturaleza cobra vida entre sus valles verdes y mogotes impresionantes. Allí podrás disfrutar de música en vivo y cócteles en sus encantadores bares, perfectos para relajarte tras un día de exploración. Continúa tu aventura con paseos entre mogotes, ya sea a pie o a caballo, conectando con la serenidad y belleza del valle. Y en cada momento, sumérgete en la cultura campesina cubana a través de encuentros locales espontáneos, donde las historias, la hospitalidad y las tradiciones te harán sentir parte del lugar.",
      en: "Live an unforgettable experience in Cuba starting with a panoramic tour of Havana in a classic convertible, feeling its unique energy between historic avenues and the iconic Malecón. Then head to Viñales, a picturesque gem declared World Heritage, where nature takes life between its green valleys and impressive limestone mogotes. There, you can enjoy live music and cocktails in its enchanting bars, perfect for relaxing after a day of exploration. Continue your adventure with walks between mogotes, either on foot or horseback, connecting with the serenity and beauty of the valley. And at every moment, immerse yourself in Cuban rural culture through spontaneous local encounters, where stories, hospitality, and traditions will make you feel part of the place.",
      pt: "Live an unforgettable experience in Cuba starting with a panoramic tour of Havana in a classic convertible, feeling its unique energy between historic avenues and the iconic Malecón. Then head to Viñales, a picturesque gem declared World Heritage, where nature takes life between its green valleys and impressive limestone mogotes. There, you can enjoy live music and cocktails in its enchanting bars, perfect for relaxing after a day of exploration. Continue your adventure with walks between mogotes, either on foot or horseback, connecting with the serenity and beauty of the valley. And at every moment, immerse yourself in Cuban rural culture through spontaneous local encounters, where stories, hospitality, and traditions will make you feel part of the place."
    },
    highlights: {
      es: [
        "Explora La Habana en un descapotable clásico",
        "Descubre Viñales, una joya paisajística Patrimonio Mundial",
        "Disfruta de música en vivo y cócteles en sus preciosos bares",
        "Relájate en paseos entre mogotes lo mismo a pie que a caballo",
        "Sumérgete en la cultura campesina cubana con encuentros locales espontáneos"
      ],
      en: [
        "Panoramic tour of Havana in a classic convertible",
        "Discover Viñales, a scenic jewel and World Heritage Site",
        "Enjoy live music and cocktails in its beautiful bars",
        "Relax with walks between mogotes on foot or horseback",
        "Immerse yourself in Cuban rural culture through spontaneous local encounters"
      ],
      pt: [
        "Panorâmica de La Habana em um descapotável clássico",
        "Descubra Viñales, uma joia paisagística e Património Mundial da UNESCO.",
        "Disfruta de música em vivo e cócteles em seus belos bares",
        "Relaxe com passeios entre mogotes, seja a pé ou cavalgando",
        "Sumérgete na cultura campesina cubana com encontros locais espontâneos"
      ]
    },
    imagePlaceholder: {
      es: "@/pictures/havana-vinales-mar/3-dias-habana.webp, @/pictures/havana-vinales-mar/3-dias-habana-2.jpg, @/pictures/havana-vinales-mar/3-dias-habana-3.jpg, @/pictures/havana-vinales-mar/3-dias-habana-4.webp, @/pictures/havana-vinales-mar/3-dias-habana-5.jpg, @/pictures/havana-vinales-mar/3-dias-habana-6.jpg, @/pictures/havana-vinales-mar/3-dias-habana-7.jpg",
      en: "@/pictures/havana-vinales-mar/3-dias-habana.webp, @/pictures/havana-vinales-mar/3-dias-habana-2.jpg, @/pictures/havana-vinales-mar/3-dias-habana-3.jpg, @/pictures/havana-vinales-mar/3-dias-habana-4.webp, @/pictures/havana-vinales-mar/3-dias-habana-5.jpg, @/pictures/havana-vinales-mar/3-dias-habana-6.jpg, @/pictures/havana-vinales-mar/3-dias-habana-7.jpg",
      pt: "@/pictures/havana-vinales-mar/3-dias-habana.webp, @/pictures/havana-vinales-mar/3-dias-habana-2.jpg, @/pictures/havana-vinales-mar/3-dias-habana-3.jpg, @/pictures/havana-vinales-mar/3-dias-habana-4.webp, @/pictures/havana-vinales-mar/3-dias-habana-5.jpg, @/pictures/havana-vinales-mar/3-dias-habana-6.jpg, @/pictures/havana-vinales-mar/3-dias-habana-7.jpg"
    },
    duration: {
      es: "11 días",
      en: "11 days",
      pt: "11 dias"
    },
    difficulty: {
      es: "Facil",
      en: "Easy",
      pt: "Facil"
    },
    price: {
      es: "Desde 990€ por persona",
      en: "From 990€ per person",
      pt: "A partir de 990€ por pessoa"
    },
    included: {
      es: [
        "Transporte desde La Habana",
        "Guía especializado",
        "Cabalgata o caminata",
        "Almuerzo en finca",
        "Entrada a la Cueva del Indio"
      ],
      en: [
        "Transportation from Havana",
        "Specialized guide",
        "Horseback riding or hiking",
        "Farm lunch",
        "Entrance to Indian Cave"
      ],
      pt: [
        "Transporte de Havana",
        "Guia especializado",
        "Cavalgada ou caminhada",
        "Almoço na fazenda",
        "Entrada para a Caverna do Índio"
      ]
    },
    itinerary: {
      es: [
        {
          day: "Día 1",
          title: "¡Bienvenidos a casa, sean habaneros por unos días!",
          description: [
            "El primer día en Cuba comienza con el abrazo cálido de la brisa caribeña al aterrizar. ",
            "Nuestro chofer les espera sonriente en el aeropuerto, listo para llevarlos cómodamente a su alojamiento en un vehículo privado. ",
            "Mientras recorren estas primeras calles habaneras, llenas de colores y música que se cuela por las ventanas, ",
            "compartiremos esos secretos locales que transforman un viaje en una experiencia: dónde tomar el mejor café al ",
            "amanecer, cómo reconocer un paladar auténtico y en qué esquina escucharán los primeros acordes de son. ",
            "La Habana ya late para ustedes... ¿Listos para dejarse seducir? Comienza la aventura cubana con un mojito en la mano. ",
            "¡Saboreen esta aventura!"
          ]
        },
        {
          day: "Día 2",
          title: "La Habana se revela - Historia, Vintage y Sabor",
          description: [
            "Un descapotable clásico y guía privado les mostrarán el alma de la ciudad: plazas coloniales, balcones de Hemingway y talleres secretos de tabaco. ",
            "Después, elijan: ",
            "- Almuerzo en Paladar de La Habana Vieja tipo La Esquina de Cuba.",
            "- Explorar libremente rincones que les roben el corazón.",
            "Tarde abierta para perderse en el Malecón al atardecer o seguir el ritmo de la ciudad.",
            "Hoy no son turistas, son habaneros por un día."
          ]
        },
        {
          day: "Día 3",
          title: "En Taxi Colectivo hacia Viñales, donde la Naturaleza se vuelve una Reina",
          description: [
            "Hoy cambiamos de ritmo: un auténtico taxi compartido con otros viajeros los llevará por carreteras rurales, entre ",
            "paisajes de palmas y pueblos coloridos, hasta la joya natural del Valle de Viñales (Patrimonio Mundial). En el trayecto (2 ",
            "horas), vivirán esa Cuba espontánea: paradas improvisadas, conversaciones con lugareños y el aire dulce de la provincia. ",
            "Al llegar, los mogotes serán quienes te sorprenderán, las casitas de techos rojos tan bien organizadas en la calle principal ",
            "te moverán las manos en ademan de bienvenida y el verdor por doquier serán tu esperanza de reencontrarte contigo ",
            "mismo y mudar tu forma de pensar para siempre. El resto del día es para explorar libremente: un paseo a caballo es muy ",
            "recomendado, pregúntame cómo hacerlo y te digo. Viñales no se visita... se siente con el corazón lleno de verde."
          ]
        },
        {
          day: "Día 4 y 5",
          title: "Días Libres en Viñales: Donde cada encuentro es una experiencia transformadora de tus horizontes",
          description: [
            "Dos días para explorar a su aire esta joya Patrimonio Mundial por su Valle fantástico: para los que gustan mucho de la ",
            "playa y ansían conocer un Cayo cubano pues sugiero se vayan para Cayo Jutias. Esplendida playa al norte de Viñales. ",
            "Otros adoraran caminar por el valle y ver a campesinos en sus propias fincas. Otros podrán tomar el Bus tour y darse un ",
            "paseo por todos los puntos icónicos de Viñales como La Cueva del Indio; Mural de la Prehistoria; Mirador de los Jazmines ",
            "entre otros. Pero cuando caiga el sol, la villa campesina de día se torna fiestera de noche: música en vivo, bailes ",
            "espontáneos y el famoso son cubano hoy por hoy mezclado con reparto (especie de reguetón) fluyen hasta altas horas.",
            "De día, campesina y natural; de noche, fiesta bajo las estrellas. Viñales es así: dual y fascinante."
          ]
        },
        {
          day: "Día 6",
          title: "Adiós Viñales, una parada, la última en La Habana y un salto a Varadero al siguiente día – El Mar Elige el Final de su Historia",
          description: [
            "Volvamos a la capital. No se puede negar que allí es donde más se mueve “la cosa” decimos los cubanos. Se sale después ",
            "del desayuno para La Habana y una vez allí (11am) esta queda a tu merced. Buena oportunidad para patearla tu solo. ",
            "Sin rutas fijas ni horarios, dejen que La Habana los sorprenda: piérdanse entre libros antiguos en Plaza de Armas, ",
            "saboreen un café improvisado en un balcón colonial, o sigan la música callejera que los lleve a rincones secretos. El ",
            "Malecón al atardecer será su mejor recompensa.",
            "Los tesoros más auténticos no están en las guías, sino en las esquinas que elijan explorar con curiosidad y tiempo."
          ]
        },
        {
          day: "Día 7",
          title: "Un saltico a Varadero para poder regresar a mi casa con el color bronceado natural.",
          description: [
            "Salimos para Varadero en taxi colectivo y en apenas 2 horas estamos allí. De camino podrán pasar por debajo del ",
            "famoso túnel de La Habana y tomando la llamada Vía Blanca, siempre con el mar de compañero inseparable a la ",
            "izquierda, podrán tomarse una Piña Colada por el camino y echarle un ojo al impresionante Puente de Bacunayagua. ",
            "Luego vendrá Matanzas, la Venecia de Cuba y pasándola ya casi están en Varadero.",
            "En Cuba, los caminos saben a aventura y los finales a Caribe."
          ]
        },
        {
          day: "Día 8 al 10",
          title: "Ustedes, el Mar y Nada Más – El Caribe en su Estado Más Puro",
          description: [
            "Estos días son para entregarse al ritmo del Caribe: ",
            "- Mañanas de chapuzones en aguas turquesas.",
            "- Tardes de cócteles junto a la piscina infinita.",
            "- Atardeceres con los pies en la arena blanca.",
            "- Noches de cenas románticas bajo las estrellas.",
            "En su resort todo incluido, disfrutarán de:",
            "-  Spa con vistas al mar (de pago extra).",
            "- Actividades acuáticas (opcionales).",
            "- Espectáculos nocturnos con sabor cubano.",
            "El verdadero lujo es tener tiempo para saborear cada ola, cada risa, cada instante bajo este sol..."
          ]
        },
        {
          day: "Día 11",
          title: "Hasta pronto, Caribe – Rumbo a casa con el corazón lleno de Cuba",
          description: [
            "El último día comienza con mar, arena y sol, y en hora a coordinar un traslado privado directo al aeropuerto de La Habana:",
            "- Desde Varadero (2 horas de viaje)",
            "Mientras recorren la carretera, tendrán tiempo para: ",
            "- Repasar los mejores momentos del viaje.",
            "- Detenerse a comprar últimos souvenirs (si lo desean).",
            "- Disfrutar una última visita al mar Caribe.",
            "No es un adiós, solo un 'hasta pronto'... Cuba siempre guardará un pedacito de arena para ustedes."
          ]
        }
      ],
      en: [
        {
          day: "Day 1",
          title: "Welcome home—be habaneros for a few days!",
          description: [
            "Your first day in Cuba begins with the warm embrace of the Caribbean breeze as you land.",
            "Our smiling driver awaits you at the airport, ready to take you comfortably to your lodging in a private vehicle.",
            "As you travel through Havana's colorful streets, filled with music drifting through the windows,",
            "we share the local secrets that turn a trip into an experience: where to sip the best sunrise coffee,",
            "how to spot an authentic paladar, and which corner will gift you the first chords of son.",
            "Havana is already beating for you... ready to be seduced? Let the Cuban adventure begin with a mojito in hand.",
            "Savor every moment!"
          ]
        },
        {
          day: "Day 2",
          title: "Havana reveals itself – History, vintage flair, and flavor",
          description: [
            "A classic convertible and private guide show you the soul of the city: colonial squares, Hemingway's balconies, and secret tobacco workshops.",
            "Then choose:",
            "- Lunch at a Havana Vieja paladar such as La Esquina de Cuba.",
            "- Free time to explore whichever corners steal your heart.",
            "Leave the afternoon open to get lost on the Malecón at sunset or simply follow the rhythm of the city.",
            "Today you're not tourists—you become habaneros for a day."
          ]
        },
        {
          day: "Day 3",
          title: "Collective taxi to Viñales, where nature rules like a queen",
          description: [
            "Today we change pace: an authentic shared taxi takes you along rural roads,",
            "past palm landscapes and colorful towns, until reaching the natural jewel of Viñales Valley (UNESCO). During the 2-hour ride,",
            "you'll experience spontaneous Cuba: improvised stops, chats with locals, and the sweet provincial breeze.",
            "Upon arrival, mogotes will leave you speechless, neatly lined red-roof houses wave as if welcoming you,",
            "and the endless green invites you to reconnect and maybe even change your outlook forever.",
            "The rest of the day is yours to explore—horseback riding is highly recommended, just ask me how.",
            "Viñales isn't visited... it's felt with a heart full of green."
          ]
        },
        {
          day: "Days 4 & 5",
          title: "Free days in Viñales: every encounter expands your horizons",
          description: [
            "Two days to explore this World Heritage valley at your own pace: beach lovers eager to see a Cuban key",
            "can head to Cayo Jutías, a splendid beach north of Viñales.",
            "Others will enjoy hiking the valley and meeting farmers on their own land,",
            "or hopping on the hop-on bus to hit every iconic spot like the Indian Cave, Prehistory Mural,",
            "and Los Jazmines lookout.",
            "When night falls, the quiet farming town transforms into a party: live music, spontaneous dancing,",
            "and son fused with reparto flow late into the night.",
            "By day it's rustic and natural; by night, a fiesta under the stars. Viñales is dual and fascinating."
          ]
        },
        {
          day: "Day 6",
          title: "Goodbye Viñales, a quick Havana stop, then springboard to Varadero",
          description: [
            "Back to the capital—there's no denying that's where things move the most. We depart after breakfast",
            "and by late morning Havana is yours again. Perfect chance to wander solo.",
            "With no fixed routes or schedules, let the city surprise you: lose yourself among antique books in Plaza de Armas,",
            "sip an impromptu coffee on a colonial balcony, or follow street music into secret corners.",
            "The Malecón at sunset will be your best reward.",
            "The most authentic treasures aren't in guidebooks—they're on the corners you explore with curiosity and time."
          ]
        },
        {
          day: "Day 7",
          title: "Hop to Varadero and return home with a natural bronze glow",
          description: [
            "We head to Varadero by colectivo taxi and arrive in just two hours. Along the way you'll pass under Havana's tunnel",
            "and cruise along the Vía Blanca with the sea as your constant companion. Grab a piña colada en route",
            "and marvel at the imposing Bacunayagua Bridge.",
            "Soon you'll reach Matanzas, the 'Venice of Cuba', and once you pass it, Varadero is just ahead.",
            "In Cuba, roads taste like adventure and endings like the Caribbean."
          ]
        },
        {
          day: "Days 8–10",
          title: "You, the sea, and nothing else – The Caribbean at its purest",
          description: [
            "These days are for surrendering to the Caribbean rhythm:",
            "- Mornings diving into turquoise waters.",
            "- Afternoons with cocktails beside the infinity pool.",
            "- Sunsets with your feet in white sand.",
            "- Nights of romantic dinners under the stars.",
            "At your all-inclusive resort you'll enjoy:",
            "- Spa sessions with ocean views (extra fee).",
            "- Optional water activities.",
            "- Evening shows infused with Cuban flavor.",
            "True luxury is having time to savor every wave, laugh, and sunlit instant."
          ]
        },
        {
          day: "Day 11",
          title: "Hasta pronto, Caribbean – Heading home with hearts full of Cuba",
          description: [
            "The last day begins with sea, sand, and sun before coordinating a private transfer directly to Havana airport:",
            "- From Varadero (2-hour drive)",
            "On the road you'll have time to:",
            "- Revisit the best moments of the trip.",
            "- Stop for final souvenirs if you wish.",
            "- Enjoy one last glimpse of the Caribbean Sea.",
            "It's not goodbye, just a 'see you soon'... Cuba will always save a little bit of sand for you."
          ]
        }
      ],
      pt: [
        {
          day: "Dia 1",
          title: "Bem-vindos a casa, sejam habaneros por alguns dias!",
          description: [
            "O primeiro dia em Cuba começa com o abraço quente da brisa caribenha ao aterrissar.",
            "Nosso motorista sorridente espera vocês no aeroporto, pronto para levá-los com conforto ao alojamento em veículo privado.",
            "Enquanto percorrem as ruas coloridas de Havana, cheias de música entrando pelas janelas,",
            "compartilhamos segredos locais que transformam a viagem em experiência: onde tomar o melhor café ao amanhecer,",
            "como reconhecer um paladar autêntico e em qual esquina ouvirão os primeiros acordes de son.",
            "Havana já pulsa por vocês... prontos para se deixar seduzir? Comecem a aventura com um mojito na mão.",
            "Aproveitem cada instante!"
          ]
        },
        {
          day: "Dia 2",
          title: "Havana se revela – História, vintage e sabor",
          description: [
            "Um conversível clássico e um guia privado mostram a alma da cidade: praças coloniais, varandas de Hemingway e oficinas secretas de tabaco.",
            "Depois, escolham:",
            "- Almoço em um paladar de Havana Velha como La Esquina de Cuba.",
            "- Explorar livremente os cantinhos que roubarem o coração de vocês.",
            "Tarde aberta para se perder pelo Malecón ao entardecer ou seguir o ritmo da cidade.",
            "Hoje vocês não são turistas—são habaneros por um dia."
          ]
        },
        {
          day: "Dia 3",
          title: "Taxi coletivo rumo a Viñales, onde a natureza é rainha",
          description: [
            "Hoje mudamos o ritmo: um autêntico táxi compartilhado leva vocês por estradas rurais,",
            "entre paisagens de palmeiras e povoados coloridos, até a joia natural do Vale de Viñales (UNESCO). Durante as 2 horas de viagem,",
            "vivem a Cuba espontânea: paradas improvisadas, conversas com moradores e o doce ar do interior.",
            "Ao chegar, os mogotes impressionam, as casinhas de telhado vermelho parecem acenar em boas-vindas",
            "e o verde infinito convida a se reconectar e talvez transformar sua visão para sempre.",
            "O restante do dia é livre para explorar—um passeio a cavalo é super recomendado, é só perguntar como.",
            "Viñales não se visita... sente-se com o coração cheio de verde."
          ]
        },
        {
          day: "Dias 4 e 5",
          title: "Dias livres em Viñales: cada encontro amplia seus horizontes",
          description: [
            "Dois dias para explorar esse vale Patrimônio Mundial no próprio ritmo: quem ama praia e quer conhecer um cayo cubano",
            "pode ir até Cayo Jutías, praia esplêndida ao norte de Viñales.",
            "Outros vão preferir caminhar pelo vale e visitar campesinos em suas fincas,",
            "ou pegar o ônibus turístico para conhecer todos os pontos icônicos como Cueva del Indio, Mural da Pré-História",
            "e o mirante de Los Jazmines.",
            "Quando o sol se põe, a vila campesina vira festa: música ao vivo, dança espontânea",
            "e son misturado com reparto até altas horas.",
            "De dia é natureza pura; de noite, festa sob as estrelas. Viñales é dual e fascinante."
          ]
        },
        {
          day: "Dia 6",
          title: "Adeus Viñales, uma parada em Havana e salto para Varadero",
          description: [
            "De volta à capital—não dá para negar que é lá onde tudo acontece. Saímos após o café",
            "e perto das 11h Havana está de novo aos seus pés. Ótima chance para explorá-la sozinho.",
            "Sem rotas fixas nem horários, deixem que a cidade surpreenda: percam-se entre livros antigos na Plaza de Armas,",
            "tomem um café improvisado numa varanda colonial ou sigam a música de rua até recantos secretos.",
            "O Malecón ao entardecer será a melhor recompensa.",
            "Os tesouros mais autênticos não estão nos guias, e sim nas esquinas exploradas com curiosidade e tempo."
          ]
        },
        {
          day: "Dia 7",
          title: "Um pulinho em Varadero para voltar bronzeado naturalmente",
          description: [
            "Seguimos para Varadero em táxi coletivo e chegamos em apenas duas horas. No caminho passamos pelo túnel de Havana",
            "e seguimos pela Via Blanca com o mar como companheiro constante. Aproveitem para tomar uma piña colada",
            "e observar a imponência da Ponte Bacunayagua.",
            "Logo aparece Matanzas, a 'Veneza de Cuba', e depois dela Varadero está logo ali.",
            "Em Cuba, os caminhos têm sabor de aventura e os finais, de Caribe."
          ]
        },
        {
          day: "Dias 8 a 10",
          title: "Vocês, o mar e nada mais – O Caribe em estado puro",
          description: [
            "Esses dias são para se entregar ao ritmo caribenho:",
            "- Manhãs de mergulhos em águas turquesa.",
            "- Tardes com coquetéis ao lado da piscina infinita.",
            "- Fins de tarde com os pés na areia branca.",
            "- Noites de jantares românticos sob as estrelas.",
            "No resort all inclusive, aproveitem:",
            "- Spa com vista para o mar (custo extra).",
            "- Atividades aquáticas opcionais.",
            "- Shows noturnos com sabor cubano.",
            "O verdadeiro luxo é ter tempo para saborear cada onda, cada riso e cada instante banhado de sol."
          ]
        },
        {
          day: "Dia 11",
          title: "Até breve, Caribe – De volta para casa com o coração cheio de Cuba",
          description: [
            "O último dia começa com mar, areia e sol antes de coordenar um traslado privado direto ao aeroporto de Havana:",
            "- Desde Varadero (2 horas de viagem)",
            "Na estrada haverá tempo para:",
            "- Relembrar os melhores momentos da viagem.",
            "- Fazer paradas para os últimos souvenirs (se quiserem).",
            "- Desfrutar de uma última vista do Mar do Caribe.",
            "Não é um adeus, é um 'até logo'... Cuba sempre guardará um pedacinho de areia para vocês."
          ]
        }
      ]
    }
  },
  {
    slug: "experiencia-colonial-trinidad",
    title: {
      es: "Experiencia colonial en Trinidad",
      en: "Colonial Experience in Trinidad",
      pt: "Experiência Colonial em Trinidad"
    },
    description: {
      es: "Retrocede en el tiempo en la ciudad colonial mejor conservada de Cuba. Recorre calles empedradas, visita ruinas de ingenios azucareros y disfruta de música en plazas encantadoras.",
      en: "Step back in time in Cuba's best-preserved colonial city. Walk cobblestone streets, visit sugar mill ruins, and enjoy music in charming squares.",
      pt: "Volte no tempo na cidade colonial mais bem preservada de Cuba. Percorra ruas de paralelepípedos, visite ruínas de engenhos de açúcar e desfrute de música em praças encantadoras."
    },
    highlights: {
      es: [
        "Recorrido a pie por el centro colonial UNESCO",
        "Visita al Valle de los Ingenios",
        "Música en vivo en la Casa de la Música",
        "Talleres de artesanos locales"
      ],
      en: [
        "Walking tour of UNESCO colonial center",
        "Visit to Valle de los Ingenios",
        "Live music at Casa de la Música",
        "Local artisan workshops"
      ],
      pt: [
        "Tour a pé pelo centro colonial da UNESCO",
        "Visita ao Vale dos Engenhos",
        "Música ao vivo na Casa de la Música",
        "Oficinas de artesãos locais"
      ]
    },
    imagePlaceholder: {
      es: "Edificios coloniales coloridos en Trinidad",
      en: "Colorful colonial buildings in Trinidad",
      pt: "Edifícios coloniais coloridos em Trinidad"
    },
    duration: {
      es: "2 días",
      en: "2 days",
      pt: "2 dias"
    },
    difficulty: {
      es: "Fácil",
      en: "Easy",
      pt: "Fácil"
    },
    price: {
      es: "Desde $180 por persona",
      en: "From $180 per person",
      pt: "A partir de $180 por pessoa"
    },
    included: {
      es: [
        "Transporte y alojamiento",
        "Guía histórico local",
        "Entradas a museos",
        "Cena con música en vivo"
      ],
      en: [
        "Transportation and accommodation",
        "Local history guide",
        "Museum entrance fees",
        "Dinner with live music"
      ],
      pt: [
        "Transporte e acomodação",
        "Guia histórico local",
        "Entradas para museus",
        "Jantar com música ao vivo"
      ]
    },
    itinerary: {
      es: [
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
      ],
      en: [
        {
          day: "Day 1 - Morning",
          title: "Historic Center",
          description: "Tour through Trinidad's cobblestone streets, visiting Plaza Mayor, colonial churches, and museums. Learn about the sugar era and colonial architecture."
        },
        {
          day: "Day 1 - Afternoon",
          title: "Valle de los Ingenios",
          description: "Excursion to the valley where ruins of old sugar mills stand. Climb the Manaca Iznaga Tower for panoramic views."
        },
        {
          day: "Day 2",
          title: "Culture and Crafts",
          description: "Visit pottery and weaving workshops, relax at Ancón beach, and end with live music at the famous Casa de la Música."
        }
      ],
      pt: [
        {
          day: "Dia 1 - Manhã",
          title: "Centro Histórico",
          description: "Tour pelas ruas de paralelepípedos de Trinidad, visitando a Plaza Mayor, igrejas coloniais e museus. Aprenda sobre a era do açúcar e a arquitetura colonial."
        },
        {
          day: "Dia 1 - Tarde",
          title: "Vale dos Engenhos",
          description: "Excursão ao vale onde ficam as ruínas de antigos engenhos de açúcar. Suba na Torre Manaca Iznaga para vistas panorâmicas."
        },
        {
          day: "Dia 2",
          title: "Cultura e Artesanato",
          description: "Visite oficinas de cerâmica e tecelagem, relaxe na praia Ancón e termine com música ao vivo na famosa Casa de la Música."
        }
      ]
    }
  },
  {
    slug: "paraiso-playa-varadero",
    title: {
      es: "Paraíso de playa en Varadero",
      en: "Beach Paradise in Varadero",
      pt: "Paraíso de Praia em Varadero"
    },
    description: {
      es: "Relájate en 20 kilómetros de playas de arena blanca. Disfruta de aguas turquesas, deportes acuáticos y la atmósfera caribeña más relajada.",
      en: "Relax on 20 kilometers of white sand beaches. Enjoy turquoise waters, water sports, and the most laid-back Caribbean atmosphere.",
      pt: "Relaxe em 20 quilômetros de praias de areia branca. Desfrute de águas turquesas, esportes aquáticos e a atmosfera caribenha mais relaxante."
    },
    highlights: {
      es: [
        "Acceso a las mejores zonas de playa",
        "Oportunidades de snorkel y buceo",
        "Paseo en catamarán al atardecer",
        "Experiencias gastronómicas con mariscos frescos"
      ],
      en: [
        "Access to the best beach areas",
        "Snorkeling and diving opportunities",
        "Sunset catamaran cruise",
        "Culinary experiences with fresh seafood"
      ],
      pt: [
        "Acesso às melhores áreas de praia",
        "Oportunidades de snorkel e mergulho",
        "Passeio de catamarã ao pôr do sol",
        "Experiências gastronômicas com frutos do mar frescos"
      ]
    },
    imagePlaceholder: {
      es: "Playa de arena blanca con agua turquesa",
      en: "White sand beach with turquoise water",
      pt: "Praia de areia branca com água turquesa"
    },
    duration: {
      es: "3-5 días",
      en: "3-5 days",
      pt: "3-5 dias"
    },
    difficulty: {
      es: "Fácil",
      en: "Easy",
      pt: "Fácil"
    },
    price: {
      es: "Desde $200 por persona/día",
      en: "From $200 per person/day",
      pt: "A partir de $200 por pessoa/dia"
    },
    included: {
      es: [
        "Alojamiento frente al mar",
        "Deportes acuáticos",
        "Excursión en catamarán",
        "Comidas en restaurantes de playa"
      ],
      en: [
        "Beachfront accommodation",
        "Water sports",
        "Catamaran excursion",
        "Meals at beach restaurants"
      ],
      pt: [
        "Acomodação à beira-mar",
        "Esportes aquáticos",
        "Excursão de catamarã",
        "Refeições em restaurantes de praia"
      ]
    },
    itinerary: {
      es: [
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
      ],
      en: [
        {
          day: "Days 1-2",
          title: "Beach Relaxation",
          description: "Enjoy Varadero's crystal-clear waters. Practice snorkeling, kayaking, or simply relax under the Caribbean sun with a mojito in hand."
        },
        {
          day: "Day 3",
          title: "Catamaran Adventure",
          description: "Full-day catamaran excursion visiting pristine cays, snorkeling in coral reefs, and lunch on board with fresh lobster."
        },
        {
          day: "Days 4-5",
          title: "Optional Activities",
          description: "Certified diving, parasailing, visit to Saturno cave, or excursions to Havana and Matanzas."
        }
      ],
      pt: [
        {
          day: "Dias 1-2",
          title: "Relaxamento na Praia",
          description: "Desfrute das águas cristalinas de Varadero. Pratique snorkel, caiaque ou simplesmente relaxe sob o sol caribenho com um mojito na mão."
        },
        {
          day: "Dia 3",
          title: "Aventura de Catamarã",
          description: "Excursão de dia inteiro de catamarã visitando ilhas virgens, snorkel em recifes de coral e almoço a bordo com lagosta fresca."
        },
        {
          day: "Dias 4-5",
          title: "Atividades Opcionais",
          description: "Mergulho certificado, parasailing, visita à caverna de Saturno ou excursões a Havana e Matanzas."
        }
      ]
    }
  },
  {
    slug: "inmersion-cultura-cubana",
    title: {
      es: "Inmersión en la cultura cubana",
      en: "Cuban Culture Immersion",
      pt: "Imersão na Cultura Cubana"
    },
    description: {
      es: "Sumérgete en la cultura cubana auténtica. Aprende a bailar salsa, disfruta de la cocina tradicional, visita estudios de arte y conecta con familias locales.",
      en: "Immerse yourself in authentic Cuban culture. Learn to dance salsa, enjoy traditional cuisine, visit art studios, and connect with local families.",
      pt: "Mergulhe na autêntica cultura cubana. Aprenda a dançar salsa, desfrute da culinária tradicional, visite estúdios de arte e conecte-se com famílias locais."
    },
    highlights: {
      es: [
        "Clases de salsa con instructores locales",
        "Clase de cocina de platos tradicionales",
        "Visita a estudios y galerías de arte",
        "Cena en casa de una familia cubana"
      ],
      en: [
        "Salsa classes with local instructors",
        "Traditional cooking class",
        "Visit to art studios and galleries",
        "Dinner at a Cuban family's home"
      ],
      pt: [
        "Aulas de salsa com instrutores locais",
        "Aula de culinária de pratos tradicionais",
        "Visita a estúdios e galerias de arte",
        "Jantar na casa de uma família cubana"
      ]
    },
    imagePlaceholder: {
      es: "Bailarines cubanos bailando salsa",
      en: "Cuban dancers dancing salsa",
      pt: "Dançarinos cubanos dançando salsa"
    },
    duration: {
      es: "3-4 días",
      en: "3-4 days",
      pt: "3-4 dias"
    },
    difficulty: {
      es: "Fácil",
      en: "Easy",
      pt: "Fácil"
    },
    price: {
      es: "Desde $160 por persona/día",
      en: "From $160 per person/day",
      pt: "A partir de $160 por pessoa/dia"
    },
    included: {
      es: [
        "Clases de baile y cocina",
        "Visitas a estudios de artistas",
        "Experiencia en casa local",
        "Entradas a espectáculos"
      ],
      en: [
        "Dance and cooking classes",
        "Visits to artist studios",
        "Local home experience",
        "Show tickets"
      ],
      pt: [
        "Aulas de dança e culinária",
        "Visitas a estúdios de artistas",
        "Experiência em casa local",
        "Ingressos para shows"
      ]
    },
    itinerary: {
      es: [
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
      ],
      en: [
        {
          day: "Day 1",
          title: "Cuban Rhythms",
          description: "Salsa and son classes with professional dancers. In the evening, visit a music house to practice what you learned with live music."
        },
        {
          day: "Day 2",
          title: "Flavors of Cuba",
          description: "Cooking class where you'll learn to prepare traditional dishes like congri, picadillo, and coconut flan. Lunch with what you prepared."
        },
        {
          day: "Day 3",
          title: "Art and Community",
          description: "Tour of local artist studios, art galleries in Fusterlandia, and dinner at a Cuban family's home to learn about their daily life."
        }
      ],
      pt: [
        {
          day: "Dia 1",
          title: "Ritmos Cubanos",
          description: "Aulas de salsa e son com dançarinos profissionais. À noite, visite uma casa de música para praticar o que aprendeu com música ao vivo."
        },
        {
          day: "Dia 2",
          title: "Sabores de Cuba",
          description: "Aula de culinária onde você aprenderá a preparar pratos tradicionais como congri, picadillo e pudim de coco. Almoço com o que você preparou."
        },
        {
          day: "Dia 3",
          title: "Arte e Comunidade",
          description: "Tour pelos estúdios de artistas locais, galerias de arte em Fusterlandia e jantar na casa de uma família cubana para conhecer sua vida cotidiana."
        }
      ]
    }
  },
  {
    slug: "cienfuegos-bahia-cochinos",
    title: {
      es: "Cienfuegos y Bahía de Cochinos",
      en: "Cienfuegos and Bay of Pigs",
      pt: "Cienfuegos e Baía dos Porcos"
    },
    description: {
      es: "Descubre la 'Perla del Sur' y la histórica Bahía de Cochinos. Explora la arquitectura de influencia francesa, playas prístinas y sitios históricos clave.",
      en: "Discover the 'Pearl of the South' and the historic Bay of Pigs. Explore French-influenced architecture, pristine beaches, and key historical sites.",
      pt: "Descubra a 'Pérola do Sul' e a histórica Baía dos Porcos. Explore a arquitetura de influência francesa, praias pristinas e locais históricos importantes."
    },
    highlights: {
      es: [
        "Tour por Cienfuegos y el Palacio de Valle",
        "Visita al museo de Playa Girón",
        "Snorkel en Playa Girón",
        "Recorrido panorámico por la costa"
      ],
      en: [
        "Tour of Cienfuegos and Valle Palace",
        "Visit to Playa Girón museum",
        "Snorkeling at Playa Girón",
        "Scenic coastal drive"
      ],
      pt: [
        "Tour por Cienfuegos e Palácio de Valle",
        "Visita ao museu de Playa Girón",
        "Snorkel em Playa Girón",
        "Passeio panorâmico pela costa"
      ]
    },
    imagePlaceholder: {
      es: "Arquitectura colonial francesa elegante",
      en: "Elegant French colonial architecture",
      pt: "Arquitetura colonial francesa elegante"
    },
    duration: {
      es: "2 días",
      en: "2 days",
      pt: "2 dias"
    },
    difficulty: {
      es: "Fácil",
      en: "Easy",
      pt: "Fácil"
    },
    price: {
      es: "Desde $170 por persona",
      en: "From $170 per person",
      pt: "A partir de $170 por pessoa"
    },
    included: {
      es: [
        "Transporte y alojamiento",
        "Guía histórico",
        "Entradas a museos",
        "Equipo de snorkel"
      ],
      en: [
        "Transportation and accommodation",
        "History guide",
        "Museum entrance fees",
        "Snorkeling equipment"
      ],
      pt: [
        "Transporte e acomodação",
        "Guia histórico",
        "Entradas para museus",
        "Equipamento de snorkel"
      ]
    },
    itinerary: {
      es: [
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
      ],
      en: [
        {
          day: "Day 1",
          title: "Colonial Cienfuegos",
          description: "Tour of José Martí Park, Terry Theater, Valle Palace, and the Malecón. Unique French neoclassical architecture in Cuba."
        },
        {
          day: "Day 2",
          title: "Bay of Pigs",
          description: "Visit to the invasion museum at Playa Girón, snorkeling in crystal-clear waters, and exploration of the Fish Cave."
        }
      ],
      pt: [
        {
          day: "Dia 1",
          title: "Cienfuegos Colonial",
          description: "Tour pelo Parque José Martí, Teatro Terry, Palácio de Valle e o Malecón. Arquitetura neoclássica francesa única em Cuba."
        },
        {
          day: "Dia 2",
          title: "Baía dos Porcos",
          description: "Visita ao museu da invasão em Playa Girón, snorkel em águas cristalinas e exploração da Caverna dos Peixes."
        }
      ]
    }
  },
  {
    slug: "naturaleza-vida-silvestre",
    title: {
      es: "Excursiones de naturaleza y vida silvestre",
      en: "Nature and Wildlife Excursions",
      pt: "Excursões de Natureza e Vida Selvagem"
    },
    description: {
      es: "Explora los diversos ecosistemas de Cuba. Desde selvas tropicales hasta humedales costeros, descubre flora y fauna únicas en el mundo.",
      en: "Explore Cuba's diverse ecosystems. From tropical forests to coastal wetlands, discover unique flora and fauna.",
      pt: "Explore os diversos ecossistemas de Cuba. De florestas tropicais a pântanos costeiros, descubra flora e fauna únicas."
    },
    highlights: {
      es: [
        "Avistamiento de aves (trogón cubano, tocororo)",
        "Senderismo en la Sierra Maestra",
        "Visita a criaderos de cocodrilos",
        "Aventuras en kayak por los manglares"
      ],
      en: [
        "Bird watching (Cuban trogon, tocororo)",
        "Hiking in Sierra Maestra",
        "Visit to crocodile farms",
        "Kayak adventures through mangroves"
      ],
      pt: [
        "Observação de aves (trogon cubano, tocororo)",
        "Caminhadas na Sierra Maestra",
        "Visita a criadouros de crocodilos",
        "Aventuras de caiaque pelos manguezais"
      ]
    },
    imagePlaceholder: {
      es: "Paisaje de selva tropical exuberante",
      en: "Lush tropical forest landscape",
      pt: "Paisagem de floresta tropical exuberante"
    },
    duration: {
      es: "3-5 días",
      en: "3-5 days",
      pt: "3-5 dias"
    },
    difficulty: {
      es: "Moderada a Difícil",
      en: "Moderate to Difficult",
      pt: "Moderada a Difícil"
    },
    price: {
      es: "Desde $190 por persona/día",
      en: "From $190 per person/day",
      pt: "A partir de $190 por pessoa/dia"
    },
    included: {
      es: [
        "Guía naturalista certificado",
        "Equipo de senderismo",
        "Transporte 4x4",
        "Alojamiento en eco-lodges"
      ],
      en: [
        "Certified naturalist guide",
        "Hiking equipment",
        "4x4 transportation",
        "Eco-lodge accommodation"
      ],
      pt: [
        "Guia naturalista certificado",
        "Equipamento de caminhada",
        "Transporte 4x4",
        "Acomodação em eco-lodges"
      ]
    },
    itinerary: {
      es: [
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
      ],
      en: [
        {
          day: "Days 1-2",
          title: "Bird Watching",
          description: "Early morning excursions to spot the tocororo (national bird), zunzuncito (world's smallest hummingbird), and other endemic species."
        },
        {
          day: "Day 3",
          title: "Sierra Maestra",
          description: "Hiking in Cuba's highest mountains, visiting hidden waterfalls and cloud forests. Option to climb Pico Turquino."
        },
        {
          day: "Days 4-5",
          title: "Coastal Ecosystems",
          description: "Kayaking through mangroves, visit to crocodile farms, and exploration of swamps with unique biodiversity."
        }
      ],
      pt: [
        {
          day: "Dias 1-2",
          title: "Observação de Aves",
          description: "Excursões matinais para avistar o tocororo (ave nacional), zunzuncito (menor beija-flor do mundo) e outras espécies endêmicas."
        },
        {
          day: "Dia 3",
          title: "Sierra Maestra",
          description: "Caminhadas nas montanhas mais altas de Cuba, visitando cachoeiras escondidas e florestas nubladas. Opção de subir o Pico Turquino."
        },
        {
          day: "Dias 4-5",
          title: "Ecossistemas Costeiros",
          description: "Caiaque pelos manguezais, visita a criadouros de crocodilos e exploração de pântanos com biodiversidade única."
        }
      ]
    }
  },
  {
    slug: "herencia-santiago-cuba",
    title: {
      es: "Herencia de Santiago de Cuba",
      en: "Santiago de Cuba Heritage",
      pt: "Herança de Santiago de Cuba"
    },
    description: {
      es: "Vive la segunda ciudad de Cuba y capital cultural. Descubre tradiciones afrocubanas, historia revolucionaria y la cuna del son.",
      en: "Experience Cuba's second city and cultural capital. Discover Afro-Cuban traditions, revolutionary history, and the birthplace of son music.",
      pt: "Viva a segunda cidade de Cuba e capital cultural. Descubra tradições afro-cubanas, história revolucionária e o berço do son."
    },
    highlights: {
      es: [
        "Recorrido por la fortaleza Castillo del Morro",
        "Noche musical en la Casa de la Trova",
        "Visita al Cementerio de Santa Ifigenia",
        "Experiencias culturales afrocubanas"
      ],
      en: [
        "Tour of Castillo del Morro fortress",
        "Musical night at Casa de la Trova",
        "Visit to Santa Ifigenia Cemetery",
        "Afro-Cuban cultural experiences"
      ],
      pt: [
        "Tour pela fortaleza Castillo del Morro",
        "Noite musical na Casa de la Trova",
        "Visita ao Cemitério de Santa Ifigenia",
        "Experiências culturais afro-cubanas"
      ]
    },
    imagePlaceholder: {
      es: "Fortaleza histórica con vista a la bahía",
      en: "Historic fortress overlooking the bay",
      pt: "Fortaleza histórica com vista para a baía"
    },
    duration: {
      es: "2-3 días",
      en: "2-3 days",
      pt: "2-3 dias"
    },
    difficulty: {
      es: "Fácil",
      en: "Easy",
      pt: "Fácil"
    },
    price: {
      es: "Desde $165 por persona/día",
      en: "From $165 per person/day",
      pt: "A partir de $165 por pessoa/dia"
    },
    included: {
      es: [
        "Alojamiento en casa particular",
        "Guía cultural local",
        "Entradas a sitios históricos",
        "Espectáculos musicales"
      ],
      en: [
        "Casa particular accommodation",
        "Local cultural guide",
        "Historical site entrance fees",
        "Musical performances"
      ],
      pt: [
        "Acomodação em casa particular",
        "Guia cultural local",
        "Entradas para locais históricos",
        "Apresentações musicais"
      ]
    },
    itinerary: {
      es: [
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
      ],
      en: [
        {
          day: "Day 1",
          title: "History and Fortresses",
          description: "Visit to Castillo del Morro (UNESCO Heritage), Céspedes Park, Cathedral, and underground struggle museum. Sunset from the fortress."
        },
        {
          day: "Day 2",
          title: "Music and Culture",
          description: "Tour of Casa de la Trova (birthplace of Cuban son), visit to Santa Ifigenia Cemetery where national heroes rest, and Afro-Cuban folklore show."
        },
        {
          day: "Day 3",
          title: "Surroundings",
          description: "Excursion to Gran Piedra, historic coffee plantations, and pristine beaches of the south coast."
        }
      ],
      pt: [
        {
          day: "Dia 1",
          title: "História e Fortalezas",
          description: "Visita ao Castillo del Morro (Patrimônio UNESCO), Parque Céspedes, Catedral e museu da luta clandestina. Pôr do sol da fortaleza."
        },
        {
          day: "Dia 2",
          title: "Música e Cultura",
          description: "Tour pela Casa de la Trova (berço do son cubano), visita ao Cemitério de Santa Ifigenia onde descansam heróis nacionais e show de folclore afro-cubano."
        },
        {
          day: "Dia 3",
          title: "Arredores",
          description: "Excursão à Gran Piedra, plantações históricas de café e praias virgens da costa sul."
        }
      ]
    }
  }
];

// Helper para obtener experiencia en el idioma correcto
export function getExperience(slug: string, lang: string = 'es'): Experience | undefined {
  const exp = experiencesData.find(e => e.slug === slug);
  if (!exp) return undefined;
  
  return {
    slug: exp.slug,
    title: exp.title[lang] || exp.title.es,
    description: exp.description[lang] || exp.description.es,
    highlights: exp.highlights[lang] || exp.highlights.es,
    imagePlaceholder: exp.imagePlaceholder[lang] || exp.imagePlaceholder.es,
    duration: exp.duration[lang] || exp.duration.es,
    difficulty: exp.difficulty[lang] || exp.difficulty.es,
    price: exp.price[lang] || exp.price.es,
    included: exp.included[lang] || exp.included.es,
    itinerary: exp.itinerary[lang] || exp.itinerary.es,
  };
}

// Obtener todas las experiencias en un idioma
export function getExperiences(lang: string = 'es'): Experience[] {
  return experiencesData.map(exp => getExperience(exp.slug, lang)!).filter(Boolean);
}

// Mantener compatibilidad con código existente
export const experiences: Experience[] = getExperiences('es');
