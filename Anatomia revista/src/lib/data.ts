import {
  BookOpen,
  Bone,
  PersonStanding,
  BrainCircuit,
  Heart,
  Laugh,
  Grape,
  Droplets,
  FlaskConical,
  Venus,
  Lightbulb,
  Book,
  ClipboardList,
  Home,
} from "lucide-react";

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
}

interface Image {
  src: string;
  alt: string;
  hint: string;
}

interface SubSection {
  subtitle: string;
  text: (string | { type: 'list'; items: string[] })[];
  images?: Image[];
}

interface SectionData {
  slug: string;
  title: string;
  anatomicalSystem: string;
  mainImage?: Image;
  introduction: string[];
  subSections?: SubSection[];
  content?: (string | { type: "list"; items: string[] })[];
  images?: Image[];
  glossary?: { term: string; definition: string }[];
  quiz?: QuizQuestion[];
}


export const SECTIONS = [
  { slug: "editorial", title: "Editorial e Índice", icon: Home, anatomicalSystem: "General" },
  { slug: "introduccion", title: "Introducción a la Anatomía", icon: BookOpen, anatomicalSystem: "General" },
  { slug: "sistema-oseo", title: "Sistema Óseo", icon: Bone, anatomicalSystem: "Skeletal System" },
  { slug: "sistema-muscular", title: "Sistema Muscular", icon: PersonStanding, anatomicalSystem: "Muscular System" },
  { slug: "sistema-nervioso", title: "Sistema Nervioso", icon: BrainCircuit, anatomicalSystem: "Nervous System" },
  { slug: "sistema-circulatorio", title: "Sistema Circulatorio", icon: Heart, anatomicalSystem: "Circulatory System" },
  { slug: "sistema-respiratorio", title: "Sistema Respiratorio", icon: Laugh, anatomicalSystem: "Respiratory System" },
  { slug: "sistema-digestivo", title: "Sistema Digestivo", icon: Grape, anatomicalSystem: "Digestive System" },
  { slug: "sistema-excretor", title: "Sistema Excretor", icon: Droplets, anatomicalSystem: "Excretory System" },
  { slug: "sistema-endocrino", title: "Sistema Endocrino", icon: FlaskConical, anatomicalSystem: "Endocrine System" },
  { slug: "sistema-reproductor", title: "Sistema Reproductor", icon: Venus, anatomicalSystem: "Reproductive System" },
  { slug: "curiosidades", title: "Curiosidades Anatómicas", icon: Lightbulb, anatomicalSystem: "General" },
  { slug: "glosario", title: "Glosario", icon: Book, anatomicalSystem: "General" },
  { slug: "cuestionario", title: "Cuestionario Final", icon: ClipboardList, anatomicalSystem: "General" },
];

const ALL_SECTIONS_DATA: SectionData[] = [
  {
    slug: "editorial",
    title: "Editorial e Índice",
    anatomicalSystem: "General",
    introduction: [
        "¡Bienvenidos a 'Anatomía al Día'! Esta revista digital es una invitación a un viaje fascinante a través del cuerpo humano. Nuestro objetivo es desmitificar la complejidad de la anatomía, presentándola de una manera clara, organizada y visualmente atractiva. Creemos que comprender nuestro propio cuerpo es un pilar fundamental para cuidar nuestra salud y maravillarnos con la increíble maquinaria que somos.",
        "En estas páginas, exploraremos cada uno de los sistemas que nos componen, desde la sólida estructura del sistema óseo hasta la intrincada red del sistema nervioso. A través de explicaciones detalladas, esquemas claros y datos curiosos, esperamos despertar su interés y facilitar el aprendizaje. Esta revista está diseñada tanto para estudiantes que buscan un recurso de apoyo como para cualquier persona curiosa por saber más sobre sí misma.",
        "Acompáñenos en este recorrido por el microcosmos que habita en cada uno de nosotros."
    ],
    subSections: [{
      subtitle: "Índice de Contenidos",
      text: [{
            type: "list",
            items: [
                "1. Introducción a la Anatomía: Conceptos básicos, importancia y ramas.",
                "2. Sistema Óseo: La estructura que nos sostiene.",
                "3. Sistema Muscular: El motor de nuestro movimiento.",
                "4. Sistema Nervioso: El centro de comando del cuerpo.",
                "5. Sistema Circulatorio: La red de transporte vital.",
                "6. Sistema Respiratorio: El intercambio de gases que nos da vida.",
                "7. Sistema Digestivo: El procesamiento de la energía.",
                "8. Sistema Excretor: La purificación de nuestro organismo.",
                "9. Sistema Endocrino: Los mensajeros químicos que nos regulan.",
                "10. Sistema Reproductor: La continuación de la vida.",
                "11. Curiosidades Anatómicas: Datos sorprendentes sobre el cuerpo.",
                "12. Glosario: Un diccionario de términos anatómicos.",
                "13. Cuestionario Final: Pon a prueba tus conocimientos."
            ]
        }],
      images: [
        { src: "https://placehold.co/600x400.png", alt: "Editorial", hint: "science magazine" },
        { src: "https://placehold.co/600x400.png", alt: "Indice", hint: "library books" },
      ]
    }]
  },
  {
    slug: "introduccion",
    title: "Introducción a la Anatomía",
    anatomicalSystem: "General",
    introduction: [
      "La anatomía humana es la ciencia dedicada al estudio de las estructuras del cuerpo humano. Su nombre proviene del griego 'anatome', que significa 'cortar' o 'diseccionar'. Es una de las ciencias básicas más antiguas, fundamental para la medicina y otras áreas de la salud.",
      "Estudiar anatomía no solo es crucial para los profesionales de la salud, sino para todos. Nos permite entender cómo funciona nuestro cuerpo, cómo prevenir enfermedades y lesiones, y cómo mantener un estilo de vida saludable. Es el manual de instrucciones de nuestra propia existencia."
    ],
    mainImage: { src: "https://placehold.co/1200x600.png", alt: "Introducción a la anatomía", hint: "anatomy history" },
    subSections: [
      {
        subtitle: "Ramas de la Anatomía",
        text: [
          "La anatomía es un campo vasto que se puede abordar desde diferentes perspectivas, dando lugar a varias ramas especializadas:",
          {
            type: "list",
            items: [
              "Anatomía Macroscópica: Estudia las estructuras visibles a simple vista, como órganos, huesos y músculos. Es la anatomía clásica.",
              "Anatomía Microscópica (Histología): Se enfoca en el estudio de los tejidos y sus células a través del microscopio.",
              "Anatomía del Desarrollo (Embriología): Analiza los cambios estructurales desde la concepción hasta la vida adulta, con un fuerte enfoque en el desarrollo fetal.",
              "Anatomía Patológica: Estudia las alteraciones estructurales en órganos y tejidos causadas por enfermedades.",
              "Anatomía Topográfica (o Regional): Divide el cuerpo en regiones principales (cabeza, cuello, tórax, etc.) y estudia todas las estructuras (huesos, músculos, nervios, vasos) dentro de esa región.",
              "Anatomía Sistémica: Estudia el cuerpo por sistemas de órganos que trabajan juntos para una función común (ej. sistema digestivo, sistema nervioso)."
            ]
          }
        ],
        images: [
          { src: "https://placehold.co/600x400.png", alt: "Modelo anatómico", hint: "anatomical model" },
          { src: "https://placehold.co/600x400.png", alt: "Microscopio", hint: "microscope laboratory" },
          { src: "https://placehold.co/600x400.png", alt: "Libros de anatomía", hint: "anatomy textbook" },
          { src: "https://placehold.co/600x400.png", alt: "Clase de anatomía", hint: "science classroom" },
        ]
      },
      {
        subtitle: "Organización Jerárquica del Cuerpo",
        text: [
          "El cuerpo humano está organizado en una jerarquía de niveles, desde lo más simple a lo más complejo:",
          {
            type: "list",
            items: [
              "Nivel Químico: Átomos (carbono, hidrógeno, oxígeno) se combinan para formar moléculas (agua, proteínas, ADN).",
              "Nivel Celular: Las moléculas se agrupan para formar células, las unidades básicas de la vida.",
              "Nivel Tisular: Grupos de células similares se unen para formar tejidos (epitelial, conectivo, muscular, nervioso).",
              "Nivel Orgánico: Diferentes tipos de tejidos se combinan para formar órganos (corazón, hígado, cerebro), cada uno con una función específica.",
              "Nivel de Sistemas: Órganos que trabajan juntos forman un sistema (sistema digestivo, sistema cardiovascular).",
              "Nivel de Organismo: Todos los sistemas trabajan en conjunto para mantener vivo al organismo."
            ]
          }
        ],
        images: [
            { src: "https://placehold.co/600x400.png", alt: "Jerarquía del cuerpo", hint: "body organization" },
            { src: "https://placehold.co/600x400.png", alt: "Composición química", hint: "chemical composition" },
            { src: "https://placehold.co/600x400.png", alt: "Células humanas", hint: "human cells" },
            { src: "https://placehold.co/600x400.png", alt: "Organismo completo", hint: "human body" },
        ]
      }
    ]
  },
  {
    slug: "sistema-oseo",
    title: "Sistema Óseo",
    anatomicalSystem: "Skeletal System",
    introduction: [
      "El sistema óseo es el andamiaje interno de nuestro cuerpo. Compuesto por 206 huesos en la edad adulta, este sistema no solo nos da forma y soporte, sino que también protege órganos vitales, permite el movimiento y participa en funciones metabólicas cruciales. Los huesos son estructuras dinámicas, vivas, que se remodelan constantemente a lo largo de nuestra vida."
    ],
    mainImage: { src: "https://placehold.co/1200x600.png", alt: "Esqueleto Humano", hint: "human skeleton" },
    subSections: [
      {
        subtitle: "Funciones del Sistema Óseo",
        text: [{
          type: "list",
          items: [
              "Soporte: Proporciona la estructura y el marco rígido para los tejidos blandos del cuerpo.",
              "Protección: Forma cavidades que protegen órganos internos delicados, como el cráneo que protege el encéfalo o la caja torácica que resguarda el corazón y los pulmones.",
              "Movimiento: Actúa como un sistema de palancas. Los músculos se insertan en los huesos y, al contraerse, tiran de ellos para generar movimiento.",
              "Hematopoyesis: En el interior de ciertos huesos, la médula ósea roja es la fábrica de células sanguíneas: glóbulos rojos, glóbulos blancos y plaquetas.",
              "Almacenamiento de Minerales: Los huesos son la principal reserva de minerales del cuerpo, especialmente calcio y fósforo. Liberan estos minerales a la sangre cuando son necesarios para mantener el equilibrio homeostático."
          ]
        }],
        images: [
          { src: "https://placehold.co/600x400.png", alt: "Esqueleto humano completo", hint: "skeleton diagram" },
          { src: "https://placehold.co/600x400.png", alt: "Caja torácica protegiendo el corazón", hint: "rib cage heart" },
          { src: "https://placehold.co/600x400.png", alt: "Médula ósea", hint: "bone marrow" },
          { src: "https://placehold.co/600x400.png", alt: "Palanca de movimiento del brazo", hint: "arm movement" }
        ]
      },
      {
        subtitle: "División del Esqueleto",
        text: [
          "El esqueleto se divide en dos partes principales para su estudio:",
          "Esqueleto Axial: Forma el eje central del cuerpo. Incluye los huesos del cráneo, la columna vertebral, las costillas y el esternón. Su función principal es la protección de los órganos del sistema nervioso central y los órganos torácicos.",
          "Esqueleto Apendicular: Comprende los huesos de las extremidades superiores e inferiores, así como las cinturas que los unen al esqueleto axial (la cintura escapular para los brazos y la cintura pélvica para las piernas). Su función principal es el movimiento y la manipulación de objetos."
        ],
        images: [
          { src: "https://placehold.co/600x400.png", alt: "Esqueleto axial resaltado", hint: "axial skeleton" },
          { src: "https://placehold.co/600x400.png", alt: "Esqueleto apendicular resaltado", hint: "appendicular skeleton" },
          { src: "https://placehold.co/600x400.png", alt: "Cintura pélvica", hint: "pelvic girdle" },
          { src: "https://placehold.co/600x400.png", alt: "Cintura escapular", hint: "shoulder girdle" }
        ]
      }
    ]
  },
  {
    slug: "sistema-muscular",
    title: "Sistema Muscular",
    anatomicalSystem: "Muscular System",
    introduction: [
      "El sistema muscular es el motor que impulsa cada uno de nuestros movimientos, desde el parpadeo de un ojo hasta correr un maratón. Formado por más de 600 músculos, este sistema no solo genera movimiento, sino que también mantiene nuestra postura, estabiliza las articulaciones y produce calor para regular la temperatura corporal."
    ],
    mainImage: { src: "https://placehold.co/1200x600.png", alt: "Sistema Muscular", hint: "human muscles" },
    subSections: [
      {
        subtitle: "Tipos de Tejido Muscular",
        text: [
          "No todos los músculos son iguales. Existen tres tipos de tejido muscular, clasificados por su estructura, función y tipo de control:",
          {
            type: "list",
            items: [
              "Músculo Esquelético: Es el tipo más abundante. Se une a los huesos a través de tendones y es responsable de los movimientos voluntarios del cuerpo. Sus células (fibras) son largas, cilíndricas y presentan un patrón de bandas claras y oscuras, por lo que se denomina músculo estriado.",
              "Músculo Liso: Se encuentra en las paredes de órganos internos huecos, como el estómago, los intestinos, la vejiga y los vasos sanguíneos. No es estriado y su contracción es involuntaria, regulando procesos como la digestión y la presión arterial.",
              "Músculo Cardíaco: Es exclusivo del corazón. Al igual que el músculo esquelético, es estriado, pero su contracción es involuntaria y rítmica, asegurando el bombeo constante de sangre a todo el organismo. Sus células están interconectadas para funcionar como una unidad sincronizada."
            ]
          }
        ],
        images: [
          { src: "https://placehold.co/600x400.png", alt: "Músculo esquelético", hint: "skeletal muscle" },
          { src: "https://placehold.co/600x400.png", alt: "Músculo liso", hint: "smooth muscle" },
          { src: "https://placehold.co/600x400.png", alt: "Músculo cardíaco", hint: "cardiac muscle" },
          { src: "https://placehold.co/600x400.png", alt: "Hombre flexionando bíceps", hint: "flexing bicep" }
        ]
      },
      {
        subtitle: "Principales Músculos y sus Funciones",
        text: [
          "Aunque hay cientos de músculos, algunos son clave para nuestros movimientos diarios:",
          {
            type: "list",
            items: [
              "Deltoides: Músculo del hombro, permite levantar y rotar el brazo.",
              "Pectoral Mayor: En el pecho, principal responsable de mover el brazo hacia adelante y a través del cuerpo.",
              "Bíceps Braquial: En la parte anterior del brazo, flexiona el codo.",
              "Tríceps Braquial: En la parte posterior del brazo, extiende el codo.",
              "Recto Abdominal: Los 'abdominales', flexionan el tronco.",
              "Glúteo Mayor: El músculo más grande del cuerpo, extiende la cadera (esencial para levantarse, subir escaleras).",
              "Cuádriceps Femoral: Grupo de cuatro músculos en la parte anterior del muslo, extienden la rodilla.",
              "Isquiotibiales: Grupo de tres músculos en la parte posterior del muslo, flexionan la rodilla."
            ]
          }
        ],
        images: [
          { src: "https://placehold.co/600x400.png", alt: "Anatomía de los músculos del brazo", hint: "arm muscles" },
          { src: "https://placehold.co/600x400.png", alt: "Anatomía de los músculos de la pierna", hint: "leg muscles" },
          { src: "https://placehold.co/600x400.png", alt: "Músculos abdominales", hint: "abdominal muscles" },
          { src: "https://placehold.co/600x400.png", alt: "Músculos de la espalda", hint: "back muscles" }
        ]
      }
    ]
  },
   {
    slug: "sistema-nervioso",
    title: "Sistema Nervioso",
    anatomicalSystem: "Nervous System",
    introduction: [
        "El sistema nervioso es la red de comunicaciones y control del cuerpo. Coordina las acciones y transmite señales entre diferentes partes del cuerpo. Se divide en dos componentes principales: el Sistema Nervioso Central (SNC) и el Sistema Nervioso Periférico (SNP)."
    ],
    mainImage: { src: "https://placehold.co/1200x600.png", alt: "Sistema Nervioso", hint: "nervous system" },
    subSections: [
        {
            subtitle: "Sistema Nervioso Central (SNC)",
            text: [
                "El SNC es el centro de procesamiento y comando. Está compuesto por:",
                {
                    type: "list",
                    items: [
                        "Encéfalo: Alojado en el cráneo, es el órgano principal del SNC. Se subdivide en: cerebro (responsable de funciones superiores como el pensamiento, la memoria, el lenguaje y la conciencia), cerebelo (coordina el movimiento, la postura y el equilibrio) y tronco encefálico (conecta el encéfalo con la médula espinal y controla funciones vitales como la respiración, el ritmo cardíaco y la presión arterial).",
                        "Médula Espinal: Es un largo y delgado cordón nervioso que se extiende desde el tronco encefálico hasta la región lumbar, protegido por la columna vertebral. Actúa como una autopista para la información entre el encéfalo y el resto del cuerpo, y también media en los arcos reflejos."
                    ]
                }
            ],
            images: [
              { src: "https://placehold.co/600x400.png", alt: "Encéfalo y sus partes", hint: "human brain" },
              { src: "https://placehold.co/600x400.png", alt: "Médula Espinal", hint: "spinal cord" },
              { src: "https://placehold.co/600x400.png", alt: "Cerebelo", hint: "cerebellum anatomy" },
              { src: "https://placehold.co/600x400.png", alt: "Tronco encefálico", hint: "brainstem anatomy" },
            ]
        },
        {
            subtitle: "Sistema Nervioso Periférico (SNP)",
            text: [
                "El SNP está formado por todos los nervios que se ramifican desde el SNC hacia el resto del cuerpo. Su función es conectar el SNC con las extremidades y los órganos. Se divide en:",
                {
                    type: "list",
                    items: [
                        "Sistema Nervioso Somático: Controla los movimientos voluntarios de los músculos esqueléticos.",
                        "Sistema Nervioso Autónomo (o Vegetativo): Regula las funciones involuntarias del cuerpo, como los latidos del corazón, la digestión y la respiración. A su vez, se subdivide en el sistema simpático (prepara al cuerpo para situaciones de 'lucha o huida') y el sistema parasimpático (promueve el estado de 'descanso y digestión')."
                    ]
                },
                "La célula fundamental de todo el sistema nervioso es la neurona, una célula especializada en recibir, procesar y transmitir información a través de señales eléctricas y químicas."
            ],
            images: [
              { src: "https://placehold.co/600x400.png", alt: "Neurona y sinapsis", hint: "neurons synapse" },
              { src: "https://placehold.co/600x400.png", alt: "Red de nervios periféricos", hint: "peripheral nerves" },
              { src: "https://placehold.co/600x400.png", alt: "Sistema simpático y parasimpático", hint: "autonomic nervous" },
              { src: "https://placehold.co/600x400.png", alt: "Arco reflejo", hint: "reflex arc" },
            ]
        }
    ]
  },
  {
    slug: "sistema-circulatorio",
    title: "Sistema Circulatorio",
    anatomicalSystem: "Circulatory System",
    introduction: [
        "El sistema circulatorio, también conocido como sistema cardiovascular, es la vasta red de transporte del cuerpo. Impulsado por el corazón, este sistema asegura que la sangre, rica en oxígeno y nutrientes, llegue a cada célula, mientras recoge los productos de desecho para su eliminación. Es una corriente vital que nunca se detiene."
    ],
    mainImage: { src: "https://placehold.co/1200x600.png", alt: "Sistema Circulatorio", hint: "circulatory system" },
    subSections: [
        {
            subtitle: "Componentes del Sistema",
            text: [{
                type: "list",
                items: [
                    "Corazón: Es una potente bomba muscular del tamaño aproximado de un puño. Dividido en cuatro cavidades (dos aurículas superiores que reciben sangre y dos ventrículos inferiores que la expulsan), su contracción rítmica impulsa la sangre a través de todo el sistema.",
                    "Vasos Sanguíneos: Son los conductos por los que viaja la sangre. Se clasifican en: Arterias (vasos de paredes gruesas y elásticas que transportan sangre oxigenada desde el corazón), Venas (vasos que devuelven la sangre desoxigenada hacia el corazón, a menudo con válvulas para evitar el retroceso) y Capilares (vasos microscópicos que forman redes en los tejidos, permitiendo el intercambio de gases, nutrientes y desechos).",
                    "Sangre: Es un tejido conectivo líquido vital. Se compone de: Plasma (la matriz líquida, principalmente agua, que transporta células, proteínas y otras sustancias), Glóbulos Rojos o eritrocitos (contienen hemoglobina y transportan oxígeno), Glóbulos Blancos o leucocitos (parte del sistema inmunitario) y Plaquetas o trombocitos (fragmentos celulares que inician la coagulación)."
                ]
            }],
            images: [
              { src: "https://placehold.co/600x400.png", alt: "Corazón humano con sus cavidades", hint: "human heart" },
              { src: "https://placehold.co/600x400.png", alt: "Arterias, venas y capilares", hint: "blood vessels" },
              { src: "https://placehold.co/600x400.png", alt: "Componentes de la sangre", hint: "blood cells" },
              { src: "https://placehold.co/600x400.png", alt: "Glóbulos rojos fluyendo", hint: "red blood" },
            ]
        },
        {
            subtitle: "Circuitos Circulatorios",
            text: [
                "El sistema circulatorio humano es doble y completo, lo que significa que la sangre pasa dos veces por el corazón en cada vuelta completa. Esto se organiza en dos circuitos principales:",
                {
                    type: "list",
                    items: [
                        "Circulación Pulmonar (o Menor): El ventrículo derecho bombea sangre pobre en oxígeno hacia los pulmones a través de las arterias pulmonares. En los pulmones, la sangre libera CO2 y se carga de oxígeno. Esta sangre oxigenada regresa a la aurícula izquierda del corazón a través de las venas pulmonares.",
                        "Circulación Sistémica (o Mayor): El ventrículo izquierdo bombea la sangre rica en oxígeno al resto del cuerpo a través de la arteria aorta. La sangre distribuye el oxígeno y los nutrientes a los tejidos y recoge el CO2 y otros desechos. La sangre desoxigenada regresa a la aurícula derecha del corazón a través de las venas cavas."
                    ]
                }
            ],
            images: [
              { src: "https://placehold.co/600x400.png", alt: "Esquema de la circulación pulmonar y sistémica", hint: "circulatory diagram" },
              { src: "https://placehold.co/600x400.png", alt: "Válvulas del corazón", hint: "heart valves" },
              { src: "https://placehold.co/600x400.png", alt: "Arteria Aorta", hint: "aorta artery" },
              { src: "https://placehold.co/600x400.png", alt: "Red de capilares en un tejido", hint: "capillary network" },
            ]
        }
    ]
  },
  {
    slug: "sistema-respiratorio",
    title: "Sistema Respiratorio",
    anatomicalSystem: "Respiratory System",
    introduction: [
        "El sistema respiratorio es el portal de nuestro cuerpo para el gas más esencial de la vida: el oxígeno. Su función principal es facilitar el intercambio de gases entre el aire que respiramos y nuestra sangre, un proceso vital que alimenta nuestras células y nos permite vivir. No solo introduce oxígeno, sino que también elimina el dióxido de carbono, un producto de desecho del metabolismo celular."
    ],
    mainImage: { src: "https://placehold.co/1200x600.png", alt: "Sistema Respiratorio", hint: "respiratory system" },
    subSections: [
        {
            subtitle: "Anatomía del Sistema Respiratorio",
            text: [
                "El aire sigue un camino específico a través de una serie de órganos y conductos:",
                {
                    type: "list",
                    items: [
                        "Vías Respiratorias Superiores: Incluyen las fosas nasales y la boca (donde el aire entra, se filtra, calienta y humedece), la faringe (un conducto común para el aire y los alimentos) y la laringe (donde se encuentran las cuerdas vocales y la epiglotis, que evita que la comida pase a las vías respiratorias).",
                        "Vías Respiratorias Inferiores: Comienzan con la tráquea, un tubo flexible reforzado con anillos de cartílago que conduce el aire hacia los pulmones. La tráquea se divide en dos bronquios principales, uno para cada pulmón. Estos bronquios se ramifican en conductos cada vez más pequeños llamados bronquiolos.",
                        "Pulmones y Alvéolos: Los pulmones son los órganos principales de la respiración. Dentro de ellos, los bronquiolos terminan en millones de pequeños sacos de aire de paredes delgadas llamados alvéolos. Es en estos alvéolos, rodeados por una densa red de capilares sanguíneos, donde ocurre el intercambio de gases."
                    ]
                }
            ],
            images: [
                { src: "https://placehold.co/600x400.png", alt: "Esquema del sistema respiratorio", hint: "respiratory diagram" },
                { src: "https://placehold.co/600x400.png", alt: "Laringe y cuerdas vocales", hint: "larynx vocal" },
                { src: "https://placehold.co/600x400.png", alt: "Ramificaciones de bronquios a bronquiolos", hint: "bronchial tree" },
                { src: "https://placehold.co/600x400.png", alt: "Pulmones humanos", hint: "human lungs" },
            ]
        },
        {
            subtitle: "Mecánica de la Respiración e Intercambio Gaseoso",
            text: [
                "La respiración implica dos fases:",
                {
                    type: "list",
                    items: [
                        "Inspiración (Inhalación): Es un proceso activo. El diafragma (un gran músculo en forma de cúpula debajo de los pulmones) se contrae y se aplana, y los músculos intercostales levantan la caja torácica. Esto aumenta el volumen de la cavidad torácica, disminuye la presión dentro de los pulmones y hace que el aire entre.",
                        "Espiración (Exhalación): Generalmente es un proceso pasivo. El diafragma y los músculos intercostales se relajan, la cavidad torácica disminuye de volumen, la presión en los pulmones aumenta y el aire es expulsado.",
                        "Intercambio Gaseoso: En los alvéolos, el oxígeno del aire inhalado se difunde a través de las delgadas paredes alveolares y capilares hacia la sangre, donde se une a la hemoglobina de los glóbulos rojos. Al mismo tiempo, el dióxido de carbono, transportado por la sangre desde los tejidos, se difunde en la dirección opuesta, desde la sangre hacia los alvéolos, para ser eliminado durante la exhalación."
                    ]
                }
            ],
            images: [
                { src: "https://placehold.co/600x400.png", alt: "Músculos de la respiración (diafragma e intercostales)", hint: "diaphragm breathing" },
                { src: "https://placehold.co/600x400.png", alt: "Alvéolos y capilares", hint: "pulmonary alveoli" },
                { src: "https://placehold.co/600x400.png", alt: "Proceso de difusión de gases", hint: "gas exchange" },
                { src: "https://placehold.co/600x400.png", alt: "Molécula de hemoglobina unida al oxígeno", hint: "hemoglobin oxygen" },
            ]
        }
    ]
  },
  {
    slug: "sistema-digestivo",
    title: "Sistema Digestivo",
    anatomicalSystem: "Digestive System",
    introduction: [
      "El sistema digestivo es la increíble planta de procesamiento de nuestro cuerpo. Es un complejo y eficiente conjunto de órganos que trabajan en perfecta armonía para descomponer los alimentos que comemos en los nutrientes esenciales que nuestras células necesitan para obtener energía, crecer y repararse. Este viaje de transformación comienza en la boca y termina en el ano, abarcando un largo y sinuoso camino."
    ],
    mainImage: { src: "https://placehold.co/1200x600.png", alt: "Sistema Digestivo", hint: "digestive system" },
    subSections: [
      {
        subtitle: "El Tubo Digestivo: Un Viaje Paso a Paso",
        text: [{
          type: "list",
          items: [
            "Boca: El punto de partida. Aquí, los dientes inician la digestión mecánica a través de la masticación, mientras que las glándulas salivales comienzan la digestión química con enzimas que descomponen los carbohidratos.",
            "Faringe y Esófago: Una vez masticado, el bolo alimenticio es tragado, pasando por la faringe hacia el esófago, un tubo muscular que lo transporta hasta el estómago mediante contracciones peristálticas.",
            "Estómago: Este órgano en forma de J almacena el alimento y lo mezcla con jugos gástricos muy ácidos. El ácido clorhídrico mata las bacterias y la enzima pepsina comienza la digestión de las proteínas.",
            "Intestino Delgado: Es la sección más larga (¡más de 6 metros!) y el principal lugar de digestión y absorción. El quimo (alimento parcialmente digerido) del estómago se mezcla aquí con la bilis del hígado y los jugos del páncreas para descomponer grasas, proteínas y carbohidratos en sus unidades más pequeñas. Las paredes del intestino, cubiertas de vellosidades, absorben estos nutrientes y los pasan a la sangre.",
            "Intestino Grueso: Lo que no se absorbe pasa al intestino grueso. Su función principal es absorber agua y electrolitos de los restos, y formar las heces. También alberga una vasta comunidad de bacterias beneficiosas (microbiota) que ayudan en el proceso.",
            "Recto y Ano: Las heces se almacenan en el recto hasta que se eliminan del cuerpo a través del ano."
          ]
        }],
        images: [
          { src: "https://placehold.co/600x400.png", alt: "Esquema completo del sistema digestivo", hint: "digestive diagram" },
          { src: "https://placehold.co/600x400.png", alt: "Anatomía del estómago", hint: "stomach anatomy" },
          { src: "https://placehold.co/600x400.png", alt: "Vellosidades intestinales en primer plano", hint: "intestinal villi" },
          { src: "https://placehold.co/600x400.png", alt: "Movimiento peristáltico en el esófago", hint: "peristalsis movement" },
        ]
      },
      {
        subtitle: "Órganos Accesorios: Los Ayudantes Esenciales",
        text: [
          "Estos órganos no forman parte del tubo digestivo por el que pasa el alimento, pero son cruciales para la digestión:",
          {
            type: "list",
            items: [
              "Hígado: El órgano interno más grande, con múltiples funciones. En la digestión, su papel clave es producir bilis, una sustancia que emulsiona las grasas (las descompone en gotitas más pequeñas) para que las enzimas puedan actuar sobre ellas.",
              "Vesícula Biliar: Un pequeño saco debajo del hígado que almacena y concentra la bilis. La libera en el intestino delgado cuando comemos grasas.",
              "Páncreas: Una glándula situada detrás del estómago que tiene una doble función. Produce un potente jugo pancreático lleno de enzimas para digerir carbohidratos, proteínas y grasas. También es una glándula endocrina, que produce insulina y glucagón para regular el azúcar en sangre."
            ]
          }
        ],
        images: [
          { src: "https://placehold.co/600x400.png", alt: "Hígado, vesícula biliar y páncreas", hint: "liver pancreas" },
          { src: "https://placehold.co/600x400.png", alt: "Estructura del hígado", hint: "liver anatomy" },
          { src: "https://placehold.co/600x400.png", alt: "Estructura del páncreas", hint: "pancreas anatomy" },
          { src: "https://placehold.co/600x400.png", alt: "Acción de la bilis sobre las grasas", hint: "bile action" },
        ]
      }
    ]
  },
  {
    slug: "sistema-excretor",
    title: "Sistema Excretor",
    anatomicalSystem: "Excretory System",
    introduction: [
      "El sistema excretor es el sofisticado sistema de purificación y equilibrio del cuerpo. Su principal componente, el sistema urinario, trabaja incansablemente para filtrar la sangre, eliminando los productos de desecho del metabolismo y el exceso de sustancias para mantener nuestro medio interno estable y libre de toxinas. Es un guardián silencioso de la homeostasis corporal."
    ],
    mainImage: { src: "https://placehold.co/1200x600.png", alt: "Sistema Excretor", hint: "urinary system" },
    subSections: [
      {
        subtitle: "El Sistema Urinario: Filtración y Eliminación",
        text: [
          "Este sistema es el protagonista de la excreción y está formado por:",
          {
            type: "list",
            items: [
              "Riñones: Son dos órganos vitales en forma de frijol, situados a ambos lados de la columna vertebral. Actúan como filtros de alta tecnología. Cada riñón contiene aproximadamente un millón de unidades funcionales microscópicas llamadas nefronas. En las nefronas, la sangre es filtrada, y las sustancias útiles (como glucosa, agua y sales) son reabsorbidas, mientras que los desechos (como la urea) y el exceso de agua forman la orina.",
              "Uréteres: Son dos tubos delgados que conectan cada riñón con la vejiga. Transportan la orina desde los riñones mediante contracciones peristálticas.",
              "Vejiga Urinaria: Es un saco muscular hueco y elástico que se expande para almacenar la orina. Puede contener entre 400 y 600 ml de orina cómodamente.",
              "Uretra: Es el tubo a través del cual la orina sale del cuerpo desde la vejiga. En los hombres, también es la vía de salida del semen."
            ]
          }
        ],
        images: [
          { src: "https://placehold.co/600x400.png", alt: "Esquema del sistema urinario", hint: "urinary diagram" },
          { src: "https://placehold.co/600x400.png", alt: "Anatomía del riñón humano", hint: "human kidney" },
          { src: "https://placehold.co/600x400.png", alt: "Estructura detallada de una nefrona", hint: "nephron diagram" },
          { src: "https://placehold.co/600x400.png", alt: "Vejiga urinaria y uretra", hint: "urinary bladder" },
        ]
      },
      {
        subtitle: "Regulación y Otros Órganos Excretores",
        text: [
          "Más allá de eliminar desechos, el sistema urinario es clave para mantener el equilibrio del cuerpo (homeostasis):",
          {
            type: "list",
            items: [
              "Regulación del Volumen Hídrico y la Presión Arterial: Los riñones ajustan la cantidad de agua que se reabsorbe, controlando así el volumen de sangre y la presión arterial.",
              "Regulación del Equilibrio Electrolítico: Mantienen niveles estables de iones importantes como sodio, potasio y calcio.",
              "Regulación del Equilibrio Ácido-Base: Ayudan a mantener el pH de la sangre en un rango muy estrecho y saludable.",
              "Otros órganos también contribuyen a la excreción: Los pulmones eliminan dióxido de carbono, la piel elimina agua y sales a través del sudor, y el hígado procesa muchas toxinas y productos de desecho para que puedan ser excretados por los riñones."
            ]
          }
        ],
        images: [
          { src: "https://placehold.co/600x400.png", alt: "Equilibrio hídrico corporal", hint: "water balance" },
          { src: "https://placehold.co/600x400.png", alt: "Piel sudando", hint: "sweating skin" },
          { src: "https://placehold.co/600x400.png", alt: "Diagrama de equilibrio de pH", hint: "ph balance" },
          { src: "https://placehold.co/600x400.png", alt: "Hígado como órgano detoxificante", hint: "liver detox" },
        ]
      }
    ]
  },
  {
    slug: "sistema-endocrino",
    title: "Sistema Endocrino",
    anatomicalSystem: "Endocrine System",
    introduction: [
      "El sistema endocrino es la red de comunicación química del cuerpo. A diferencia del sistema nervioso, que utiliza impulsos eléctricos para una comunicación rápida, el sistema endocrino utiliza hormonas, mensajeros químicos que viajan a través del torrente sanguíneo para regular procesos lentos y continuos como el crecimiento, el desarrollo, el metabolismo, el estado de ánimo y la función reproductiva."
    ],
    mainImage: { src: "https://placehold.co/1200x600.png", alt: "Sistema Endocrino", hint: "endocrine system" },
    subSections: [
      {
        subtitle: "Las Glándulas Endocrinas y sus Hormonas",
        text: [
          "Este sistema está compuesto por un conjunto de glándulas que producen y secretan hormonas directamente a la sangre:",
          {
            type: "list",
            items: [
              "Hipófisis (o Pituitaria): Situada en la base del cerebro, es la 'glándula maestra' porque regula la actividad de muchas otras glándulas endocrinas.",
              "Tiroides: Ubicada en el cuello, produce hormonas tiroideas que son cruciales para regular el metabolismo general del cuerpo.",
              "Paratiroides: Cuatro pequeñas glándulas en la parte posterior de la tiroides que controlan los niveles de calcio en la sangre, esenciales para la función nerviosa y muscular.",
              "Glándulas Suprarrenales: Localizadas encima de cada riñón, secretan hormonas como el cortisol (que ayuda a responder al estrés) y la adrenalina (que prepara al cuerpo para la acción de 'lucha o huida').",
              "Páncreas: Además de su función digestiva, produce insulina y glucagón, hormonas vitales que regulan los niveles de azúcar (glucosa) en la sangre.",
              "Gónadas: Los ovarios en las mujeres y los testículos en los hombres. Producen hormonas sexuales (estrógenos y progesterona en mujeres, testosterona en hombres) responsables de las características sexuales secundarias y la reproducción.",
              "Glándula Pineal: En el cerebro, produce melatonina, que regula los ciclos de sueño y vigilia."
            ]
          }
        ],
        images: [
          { src: "https://placehold.co/600x400.png", alt: "Mapa del sistema endocrino", hint: "endocrine map" },
          { src: "https://placehold.co/600x400.png", alt: "Glándula pituitaria en el cerebro", hint: "pituitary gland" },
          { src: "https://placehold.co/600x400.png", alt: "Glándula tiroides en el cuello", hint: "thyroid gland" },
          { src: "https://placehold.co/600x400.png", alt: "Glándulas suprarrenales sobre el riñón", hint: "adrenal gland" },
        ]
      },
      {
        subtitle: "Cómo Funcionan las Hormonas",
        text: [
          "El mecanismo de acción hormonal es específico y se basa en un sistema de 'llave y cerradura':",
          "Las hormonas viajan por todo el cuerpo, pero solo afectan a células específicas, llamadas células diana. Estas células tienen receptores en su superficie o en su interior que encajan perfectamente con una hormona determinada, como una llave en una cerradura. Cuando la hormona se une a su receptor, desencadena una respuesta específica dentro de la célula. Este sistema asegura que cada hormona realice su función solo donde es necesario.",
          "La regulación hormonal a menudo funciona mediante un sistema de retroalimentación negativa (feedback negativo), donde el aumento del nivel de una hormona o su efecto inhibe la producción de la misma, manteniendo así el equilibrio."
        ],
        images: [
          { src: "https://placehold.co/600x400.png", alt: "Mecanismo de acción hormonal 'llave-cerradura'", hint: "hormone receptor" },
          { src: "https://placehold.co/600x400.png", alt: "Diagrama de retroalimentación negativa", hint: "negative feedback" },
          { src: "https://placehold.co/600x400.png", alt: "Moléculas de insulina", hint: "insulin molecule" },
          { src: "https://placehold.co/600x400.png", alt: "Ciclo de la melatonina y el sueño", hint: "melatonin cycle" },
        ]
      }
    ]
  },
  {
    slug: "sistema-reproductor",
    title: "Sistema Reproductor",
    anatomicalSystem: "Reproductive System",
    introduction: [
      "El sistema reproductor es único entre los sistemas del cuerpo, ya que su función principal no es mantener la homeostasis del individuo, sino asegurar la perpetuación de la especie. Presenta notables diferencias entre los sexos, con órganos y hormonas especializados para la producción de gametos (células sexuales) y, en el caso femenino, para la gestación de una nueva vida."
    ],
    mainImage: { src: "https://placehold.co/1200x600.png", alt: "Sistema Reproductor", hint: "reproductive system" },
    subSections: [
      {
        subtitle: "Sistema Reproductor Masculino",
        text: [
          "La función principal del sistema masculino es la producción y entrega de espermatozoides para la fertilización.",
          {
            type: "list",
            items: [
              "Testículos: Las gónadas masculinas, ubicadas en el escroto. Tienen una doble función: producir espermatozoides (espermatogénesis) y secretar testosterona, la principal hormona sexual masculina.",
              "Epidídimo y Conductos Deferentes: Los espermatozoides maduran y se almacenan en el epidídimo, desde donde viajan por los conductos deferentes.",
              "Glándulas Accesorias (Vesículas Seminales, Próstata): Estas glándulas producen el líquido seminal, que se mezcla con los espermatozoides para formar el semen. Este líquido nutre y protege a los espermatozoides.",
              "Pene: Órgano copulador que deposita el semen en el sistema reproductor femenino."
            ]
          }
        ],
        images: [
          { src: "https://placehold.co/600x400.png", alt: "Esquema del sistema reproductor masculino", hint: "male reproductive" },
          { src: "https://placehold.co/600x400.png", alt: "Espermatozoides", hint: "sperm cells" },
          { src: "https://placehold.co/600x400.png", alt: "Anatomía del testículo", hint: "testicle anatomy" },
          { src: "https://placehold.co/600x400.png", alt: "Glándula prostática", hint: "prostate gland" },
        ]
      },
      {
        subtitle: "Sistema Reproductor Femenino",
        text: [
          "El sistema femenino es más complejo, ya que debe producir óvulos, permitir la fertilización, albergar y nutrir al embrión en desarrollo, y dar a luz.",
          {
            type: "list",
            items: [
              "Ovarios: Las gónadas femeninas. Producen los óvulos y secretan las hormonas sexuales femeninas, principalmente estrógeno y progesterona.",
              "Trompas de Falopio: Conductos que conectan los ovarios con el útero. Es aquí donde generalmente ocurre la fertilización.",
              "Útero: Un órgano muscular y hueco donde el óvulo fertilizado se implanta y se desarrolla el feto durante el embarazo.",
              "Vagina: Un canal que conecta el útero con el exterior del cuerpo. Recibe el pene durante el coito y sirve como canal de parto.",
              "Ciclo Menstrual: Es un ciclo de aproximadamente 28 días regulado por hormonas que prepara al cuerpo femenino para un posible embarazo, culminando en la ovulación (liberación del óvulo) y, si no hay fecundación, en la menstruación."
            ]
          }
        ],
        images: [
          { src: "https://placehold.co/600x400.png", alt: "Esquema del sistema reproductor femenino", hint: "female reproductive" },
          { src: "https://placehold.co/600x400.png", alt: "Óvulo siendo fecundado", hint: "egg sperm" },
          { src: "https://placehold.co/600x400.png", alt: "Anatomía del útero y ovarios", hint: "uterus anatomy" },
          { src: "https://placehold.co/600x400.png", alt: "Desarrollo fetal en el útero", hint: "fetus development" },
        ]
      }
    ]
  },
  {
    slug: "curiosidades",
    title: "Curiosidades Anatómicas",
    anatomicalSystem: "General",
    introduction: [
      "El cuerpo humano es una fuente inagotable de hechos sorprendentes. Aquí te dejamos algunos datos curiosos que te dejarán asombrado:"
    ],
    content: [{
        type: "list",
        items: [
          "El hueso más pequeño del cuerpo es el estribo, en el oído medio, y mide solo 2.5 mm.",
          "El músculo más fuerte en proporción a su tamaño es el masetero, el músculo de la mandíbula.",
          "Si extendieras todos los vasos sanguíneos de un adulto, podrían dar la vuelta a la Tierra más de dos veces.",
          "El cerebro humano genera más impulsos eléctricos en un día que todos los teléfonos del mundo juntos.",
          "Estornudamos a una velocidad de hasta 160 km/h.",
          "El ácido del estómago es tan fuerte que podría disolver una cuchilla de afeitar.",
          "El corazón humano latirá aproximadamente 3 mil millones de veces en una vida promedio.",
          "Tu cuerpo produce 25 millones de células nuevas cada segundo.",
          "Los humanos compartimos el 99.9% de nuestro ADN. Las diferencias entre nosotros se deben a solo el 0.1%.",
          "El ojo humano puede distinguir unos 10 millones de colores diferentes.",
          "No puedes hacerte cosquillas a ti mismo porque tu cerebro anticipa la sensación y la cancela."
        ]
    }],
    images: [
      { src: "https://placehold.co/600x400.png", alt: "Signo de interrogación", hint: "question mark" },
      { src: "https://placehold.co/600x400.png", alt: "Ojo humano en primer plano", hint: "human eye" },
      { src: "https://placehold.co/600x400.png", alt: "Huella dactilar", hint: "fingerprint macro" },
      { src: "https://placehold.co/600x400.png", alt: "Cadena de ADN", hint: "dna strand" },
    ]
  },
  {
    slug: "glosario",
    title: "Glosario",
    anatomicalSystem: "General",
    glossary: [
        { term: "Abducción", definition: "Movimiento que aleja una parte del cuerpo del plano medio." },
        { term: "Aducción", definition: "Movimiento que acerca una parte del cuerpo al plano medio." },
        { term: "Alvéolo", definition: "Pequeño saco de aire en los pulmones donde ocurre el intercambio de gases." },
        { term: "Anatomía", definition: "Ciencia que estudia la estructura de los seres vivos." },
        { term: "Arteria", definition: "Vaso sanguíneo que transporta sangre desde el corazón al resto del cuerpo." },
        { term: "Articulación", definition: "Unión entre dos o más huesos." },
        { term: "Aurícula", definition: "Cada una de las dos cavidades superiores del corazón que reciben sangre." },
        { term: "Axón", definition: "Prolongación de una neurona que transmite impulsos nerviosos." },
        { term: "Bilis", definition: "Líquido producido por el hígado que ayuda a la digestión de las grasas." },
        { term: "Bolo alimenticio", definition: "Masa de alimento masticado y mezclado con saliva." },
        { term: "Bronquio", definition: "Cada uno de los dos conductos en que se divide la tráquea." },
        { term: "Calcio", definition: "Mineral esencial para la formación de huesos y dientes, y la función muscular." },
        { term: "Capilar", definition: "Vaso sanguíneo muy fino que conecta arterias y venas." },
        { term: "Cartílago", definition: "Tejido conectivo flexible que se encuentra en articulaciones, nariz y orejas." },
        { term: "Cerebelo", definition: "Parte del encéfalo que coordina el movimiento y el equilibrio." },
        { term: "Cerebro", definition: "Órgano principal del sistema nervioso, centro del pensamiento y la memoria." },
        { term: "Cigoto", definition: "Célula resultante de la unión de un óvulo y un espermatozoide." },
        { term: "Coagulación", definition: "Proceso por el cual la sangre líquida se convierte en un coágulo sólido." },
        { term: "Columna vertebral", definition: "Eje del esqueleto que protege la médula espinal, formado por vértebras." },
        { term: "Corazón", definition: "Órgano muscular que bombea sangre a todo el cuerpo." },
        { term: "Córnea", definition: "Capa transparente en la parte frontal del ojo." },
        { term: "Cortisol", definition: "Hormona del estrés producida por las glándulas suprarrenales." },
        { term: "Cráneo", definition: "Caja ósea que protege el encéfalo." },
        { term: "Cuerdas vocales", definition: "Pliegues en la laringe que vibran para producir sonido." },
        { term: "Deltoides", definition: "Músculo del hombro con forma triangular." },
        { term: "Dendrita", definition: "Prolongación de una neurona que recibe señales de otras neuronas." },
        { term: "Dermis", definition: "Capa de piel situada debajo de la epidermis." },
        { term: "Diafragma", definition: "Músculo principal de la respiración, situado debajo de los pulmones." },
        { term: "Diástole", definition: "Fase de relajación del ciclo cardíaco." },
        { term: "Encéfalo", definition: "Conjunto de órganos del sistema nervioso central contenidos en el cráneo." },
        { term: "Endocrino", definition: "Relativo a las glándulas que secretan hormonas directamente en la sangre." },
        { term: "Enzima", definition: "Proteína que acelera las reacciones químicas en el cuerpo." },
        { term: "Epidermis", definition: "Capa más externa de la piel." },
        { term: "Epiglotis", definition: "Cartílago que cierra la laringe durante la deglución." },
        { term: "Esófago", definition: "Tubo que conecta la faringe con el estómago." },
        { term: "Espermatozoide", definition: "Célula reproductora masculina." },
        { term: "Esternón", definition: "Hueso plano en el centro del pecho al que se unen las costillas." },
        { term: "Estrógeno", definition: "Hormona sexual femenina." },
        { term: "Faringe", definition: "Conducto común a los sistemas digestivo y respiratorio." },
        { term: "Fémur", definition: "Hueso del muslo, el más largo del cuerpo." },
        { term: "Fertilización", definition: "Unión del óvulo y el espermatozoide." },
        { term: "Fisiología", definition: "Ciencia que estudia las funciones de los seres vivos." },
        { term: "Gametos", definition: "Células reproductoras (óvulos y espermatozoides)." },
        { term: "Glándula", definition: "Órgano que produce y secreta sustancias como hormonas o enzimas." },
        { term: "Glucagón", definition: "Hormona que eleva el nivel de azúcar en la sangre." },
        { term: "Glóbulo rojo (eritrocito)", definition: "Célula sanguínea que transporta oxígeno." },
        { term: "Glóbulo blanco (leucocito)", definition: "Célula sanguínea que forma parte del sistema inmunitario." },
        { term: "Hematopoyesis", definition: "Proceso de formación de células sanguíneas en la médula ósea." },
        { term: "Hemoglobina", definition: "Proteína en los glóbulos rojos que se une al oxígeno." },
        { term: "Hígado", definition: "Órgano grande que desempeña múltiples funciones, incluida la producción de bilis." },
        { term: "Hipófisis (pituitaria)", definition: "Glándula endocrina en la base del cerebro que regula a otras glándulas." },
        { term: "Histología", definition: "Estudio de los tejidos orgánicos." },
        { term: "Hormona", definition: "Sustancia química producida por una glándula endocrina que actúa como mensajero." },
        { term: "Húmero", definition: "Hueso del brazo, entre el hombro y el codo." },
        { term: "Insulina", definition: "Hormona que reduce el nivel de azúcar en la sangre." },
        { term: "Intestino delgado", definition: "Parte del tubo digestivo donde ocurre la mayor parte de la absorción de nutrientes." },
        { term: "Intestino grueso", definition: "Parte del tubo digestivo que absorbe agua y forma las heces." },
        { term: "Laringe", definition: "Órgano de la voz, situado en el cuello." },
        { term: "Ligamento", definition: "Banda de tejido conectivo fibroso que une huesos entre sí." },
        { term: "Médula espinal", definition: "Parte del SNC que se encuentra dentro de la columna vertebral." },
        { term: "Médula ósea", definition: "Tejido blando en el interior de los huesos donde se producen las células sanguíneas." },
        { term: "Melanina", definition: "Pigmento que da color a la piel, el pelo y los ojos." },
        { term: "Metabolismo", definition: "Conjunto de reacciones químicas que ocurren en las células para mantener la vida." },
        { term: "Miocardio", definition: "Tejido muscular del corazón." },
        { term: "Músculo esquelético", definition: "Tipo de músculo que se une a los huesos para producir movimiento voluntario." },
        { term: "Nefrona", definition: "Unidad funcional del riñón." },
        { term: "Nervio", definition: "Haz de fibras nerviosas que transmite impulsos entre el SNC y otras partes del cuerpo." },
        { term: "Neurona", definition: "Célula fundamental del sistema nervioso." },
        { term: "Óvulo", definition: "Célula reproductora femenina." },
        { term: "Páncreas", definition: "Glándula que produce enzimas digestivas y hormonas como la insulina." },
        { term: "Plaqueta (trombocito)", definition: "Fragmento celular en la sangre que participa en la coagulación." },
        { term: "Plasma", definition: "Parte líquida de la sangre." },
        { term: "Próstata", definition: "Glándula del sistema reproductor masculino." },
        { term: "Pulmón", definition: "Órgano principal del sistema respiratorio." },
        { term: "Quimo", definition: "Masa pastosa de alimento parcialmente digerido que pasa del estómago al intestino." },
        { term: "Reflejo", definition: "Respuesta involuntaria y rápida a un estímulo." },
        { term: "Retina", definition: "Capa sensible a la luz en la parte posterior del ojo." },
        { term: "Riñón", definition: "Órgano que filtra la sangre y produce orina." },
        { term: "Sinapsis", definition: "Conexión funcional entre dos neuronas." },
        { term: "Sístole", definition: "Fase de contracción del ciclo cardíaco." },
        { term: "Tendón", definition: "Banda de tejido conectivo fibroso que une el músculo al hueso." },
        { term: "Testosterona", definition: "Hormona sexual masculina." },
        { term: "Timo", definition: "Glándula linfoide y endocrina donde maduran los linfocitos T." },
        { term: "Tiroides", definition: "Glándula endocrina en el cuello que regula el metabolismo." },
        { term: "Tráquea", definition: "Tubo que conduce el aire desde la laringe a los bronquios." },
        { term: "Útero", definition: "Órgano del sistema reproductor femenino donde se desarrolla el feto." },
        { term: "Vejiga urinaria", definition: "Órgano que almacena la orina." },
        { term: "Vena", definition: "Vaso sanguíneo que transporta sangre hacia el corazón." },
        { term: "Ventrículo", definition: "Cada una de las dos cavidades inferiores del corazón que bombean sangre." },
        { term: "Vértebra", definition: "Cada uno de los huesos que forman la columna vertebral." },
    ]
  },
  {
    slug: "cuestionario",
    title: "Cuestionario Final",
    anatomicalSystem: "General",
    quiz: [
        { question: "¿Cuántos huesos tiene un esqueleto humano adulto?", options: ["206", "300", "150", "270"], correctAnswer: "206" },
        { question: "¿Cuál es el hueso más largo del cuerpo humano?", options: ["Húmero", "Tibia", "Fémur", "Peroné"], correctAnswer: "Fémur" },
        { question: "La médula ósea roja es responsable de:", options: ["Almacenar grasa", "Producir células sanguíneas", "Dar rigidez al hueso", "Unir músculos"], correctAnswer: "Producir células sanguíneas" },
        { question: "¿Qué tipo de músculo forma las paredes del corazón?", options: ["Liso", "Esquelético", "Estriado voluntario", "Cardíaco"], correctAnswer: "Cardíaco" },
        { question: "El músculo principal de la respiración es el:", options: ["Diafragma", "Pectoral", "Intercostal", "Deltoides"], correctAnswer: "Diafragma" },
        { question: "¿Cuál es la unidad funcional y estructural del sistema nervioso?", options: ["Nefrona", "Alvéolo", "Neurona", "Sarcolema"], correctAnswer: "Neurona" },
        { question: "El Sistema Nervioso Central (SNC) está formado por:", options: ["Nervios y ganglios", "Encéfalo y médula espinal", "Cerebro y nervios craneales", "Médula espinal y nervios espinales"], correctAnswer: "Encéfalo y médula espinal" },
        { question: "La parte del encéfalo que controla el equilibrio y la coordinación es:", options: ["Cerebro", "Tronco encefálico", "Hipotálamo", "Cerebelo"], correctAnswer: "Cerebelo" },
        { question: "Los vasos sanguíneos que llevan sangre desde el corazón son:", options: ["Venas", "Capilares", "Arterias", "Vénulas"], correctAnswer: "Arterias" },
        { question: "Los componentes de la sangre que transportan oxígeno son los:", options: ["Glóbulos blancos", "Plaquetas", "Plasma", "Glóbulos rojos"], correctAnswer: "Glóbulos rojos" },
        { question: "El intercambio de gases en los pulmones ocurre en:", options: ["Los bronquios", "La tráquea", "Los alvéolos", "La laringe"], correctAnswer: "Los alvéolos" },
        { question: "¿Qué gas eliminamos al exhalar?", options: ["Oxígeno", "Nitrógeno", "Dióxido de carbono", "Hidrógeno"], correctAnswer: "Dióxido de carbono" },
        { question: "La estructura que evita que la comida entre en las vías respiratorias es la:", options: ["Epiglotis", "Faringe", "Úvula", "Tráquea"], correctAnswer: "Epiglotis" },
        { question: "¿En qué parte del sistema digestivo comienza la digestión de los carbohidratos?", options: ["Estómago", "Intestino delgado", "Boca", "Hígado"], correctAnswer: "Boca" },
        { question: "La mayor parte de la absorción de nutrientes ocurre en:", options: ["El estómago", "El intestino grueso", "El esófago", "El intestino delgado"], correctAnswer: "El intestino delgado" },
        { question: "La bilis, que ayuda a digerir las grasas, es producida por:", options: ["El páncreas", "El estómago", "La vesícula biliar", "El hígado"], correctAnswer: "El hígado" },
        { question: "La función principal del intestino grueso es:", options: ["Digerir proteínas", "Absorber nutrientes", "Absorber agua", "Producir bilis"], correctAnswer: "Absorber agua" },
        { question: "¿Cuál es la unidad funcional del riñón?", options: ["Alvéolo", "Neurona", "Nefrona", "Vellosidad"], correctAnswer: "Nefrona" },
        { question: "El órgano que almacena la orina es:", options: ["El riñón", "El uréter", "La vejiga", "La uretra"], correctAnswer: "La vejiga" },
        { question: "El principal producto de desecho nitrogenado en la orina humana es:", options: ["Amoníaco", "Ácido úrico", "Creatinina", "Urea"], correctAnswer: "Urea" },
        { question: "Las hormonas son producidas por el sistema:", options: ["Nervioso", "Excretor", "Endocrino", "Linfático"], correctAnswer: "Endocrino" },
        { question: "¿Qué glándula es conocida como la 'glándula maestra'?", options: ["Tiroides", "Suprarrenal", "Páncreas", "Hipófisis"], correctAnswer: "Hipófisis" },
        { question: "La insulina y el glucagón, que regulan el azúcar en sangre, son producidos por:", options: ["El hígado", "Los riñones", "El páncreas", "La tiroides"], correctAnswer: "El páncreas" },
        { question: "La adrenalina, la hormona de 'lucha o huida', es secretada por:", options: ["La glándula pineal", "Las glándulas suprarrenales", "Los ovarios", "La paratiroides"], correctAnswer: "Las glándulas suprarrenales" },
        { question: "¿Dónde se producen los espermatozoides?", options: ["En la próstata", "En las vesículas seminales", "En los testículos", "En el epidídimo"], correctAnswer: "En los testículos" },
        { question: "¿Cuál es la principal hormona sexual masculina?", options: ["Estrógeno", "Progesterona", "Testosterona", "Cortisol"], correctAnswer: "Testosterona" },
        { question: "El órgano donde se desarrolla el feto es:", options: ["El ovario", "La trompa de Falopio", "La vagina", "El útero"], correctAnswer: "El útero" },
        { question: "La liberación de un óvulo desde el ovario se llama:", options: ["Menstruación", "Fertilización", "Ovulación", "Gestación"], correctAnswer: "Ovulación" },
        { question: "¿Qué tejido une un hueso con otro hueso?", options: ["Tendón", "Músculo", "Ligamento", "Cartílago"], correctAnswer: "Ligamento" },
        { question: "¿Cuál es el órgano más grande del cuerpo humano?", options: ["Hígado", "Cerebro", "Piel", "Intestino"], correctAnswer: "Piel" },
    ]
  }
];

export const getSectionBySlug = (slug: string) => {
  return SECTIONS.find((section) => section.slug === slug);
};

export function getSectionData(slug: string): SectionData | undefined {
  return ALL_SECTIONS_DATA.find((section) => section.slug === slug);
}
