import type { I18n } from './types';

const i18n: I18n = {
  home: {
    title: "Bienvenido a SmartInvite Panamá",
    description: "Invitaciones Digitales para Matrimonios, Bautizos, Cumpleaños y más.",
    hero: {
      title: "Tu celebración merece una invitación única",
      subtitle: "Una experiencia interactiva, original y eco-friendly para tu evento",
      cta: "Crea tu invitación digital gratis",
      button: "Crear mi invitación",
      secondary: "Ver características",
      heroScroll: "Desliza para ver más",
      invitationName: "Juan y María",
      invitationDate: "12 de Octubre, 2026",
      invitationButtons: [
        "AGENDAR",
        "CONFIRMAR ASISTENCIA",
        "¿CÓMO LLEGAR?"
      ],
      feature1: "Eventos únicos",
      feature2: "Gestión de invitados",
      feature3: "Ubicación interactiva",
      info: "100% gratis • Sin tarjeta de crédito",
      badge: "INVITACIONES DIGITALES"
    },
    phoneMockup: {
      time: "9:41",
      battery: "Batería",
      eventTypes: {
        wedding: "Boda",
        birthday: "Cumpleaños",
        corporate: "Corporativo",
        graduation: "Graduación"
      },
      events: {
        wedding: {
          name: "Juan y María",
          date: "12 de Octubre, 2026",
          buttons: ["AGENDAR", "CONFIRMAR ASISTENCIA", "¿CÓMO LLEGAR?"]
        },
        birthday: {
          name: "25 años de Sarah",
          date: "15 de Diciembre, 2025",
          buttons: ["CONFIRMAR ASISTENCIA", "REGALO", "UBICACIÓN"]
        },
        corporate: {
          name: "Conferencia Tech 2025",
          date: "20 de Marzo, 2025",
          buttons: ["REGISTRARSE AHORA", "AGENDA", "SEDE"]
        },
        graduation: {
          name: "Generación 2025",
          date: "30 de Mayo, 2025",
          buttons: ["ASISTIR CEREMONIA", "RECEPCIÓN", "FOTOS"]
        }
      }
    },
    features: [
      {
        title: "Confirmaciones en tiempo real",
        description: "Mantente al día con las confirmaciones de asistencia de forma automática. Nuestro sistema RSVP digital permite a tus invitados confirmar su asistencia de manera sencilla, mientras tú recibes actualizaciones instantáneas y mantienes un control total sobre la lista final de asistentes.",
        features: [
          "Confirmaciones automáticas",
          "Estadísticas en tiempo real",
          "Gestión de acompañantes",
          "Seguimiento de respuestas"
        ]
      },
      {
        title: "Crea y comparte en minutos",
        description: "Selecciona el diseño que más te guste, completa la información necesaria, música de fondo, galería de fotos y compártela con tus invitados para que tengan una experiencia inolvidable desde el primer momento.",
        features: [
          "Comparte directamente en Whatsapp",
          "Música de fondo",
          "Galería de fotos",
          "Información interactiva"
        ]
      },
      {
        title: "Gestión de invitados",
        description: "Olvídate de las hojas de cálculo y las listas en papel. Nuestra gestión de invitados te permite mantener toda la información organizada, actualizada y accesible. Añade, edita y gestiona tu lista de invitados con facilidad, incluyendo detalles importantes como preferencias alimentarias y acompañantes.",
        features: [
          "Gestión completa de invitados",
          "Control de acompañantes",
          "Preferencias alimentarias",
          "Información de contacto centralizada"
        ]
      },
      {
        title: "Organizador de mesas",
        description: "Diseña la distribución perfecta para tu boda con nuestro organizador de mesas digital. Agrega y elimina invitados, gestiona capacidades y visualiza la disposición completa de tu matrimonio. Una herramienta poderosa que hace que la organización de mesas sea un juego de niños.",
        features: [
          "Distribución visual de mesas",
          "Gestión de capacidades",
          "Vista previa en tiempo real"
        ]
      },
      {
        title: "Lista de regalos",
        description: "Crea y comparte tu lista de regalos personalizada con tus invitados y recibe el dinero directamente en tu cuenta. Que la lista de regalos ya no te obligue a gastar tu saldo en una tienda específica.",
        features: [
          "Lista personalizada",
          "Pagos integrados",
          "Seguimiento de regalos"
        ]
      }
    ],
    cta: {
      title: "Crea tu invitación en menos de 5 minutos",
      description: "Regístrate ahora, ingresa los datos de tu evento y visualiza tu invitación digital.",
      button: "Crear mi invitación",
      freeText: "Prueba 100% gratis • Sin tarjeta de crédito",
      stats: {
        invitations: {
          number: "10K+",
          label: "Invitaciones creadas"
        },
        satisfaction: {
          number: "99%",
          label: "Satisfacción"
        },
        rating: {
          number: "5★",
          label: "Valoración"
        }
      }
    },
    featuresGrid: {
      title: "Todo lo que necesitas en un solo lugar",
      subtitle: "Crea tu invitación gratis y ajusta el diseño todas las veces que quieras.",
      features: [
        { icon: "Globe", title: "Envío ilimitado", description: "Comparte tu invitación por WhatsApp, Email, Redes Sociales y cualquier plataforma digital", color: "emerald" },
        { icon: "Music2", title: "Música de fondo", description: "La canción que quieras sonará de fondo en tu invitación", color: "purple" },
        { icon: "Clock", title: "Cuenta regresiva", description: "Emocionante cuenta regresiva en tiempo real hasta la fecha de tu boda", color: "amber" },
        { icon: "MapPin", title: "Ubicación y cómo llegar", description: "Mapa interactivo con la ubicación de tu boda, tus invitados llegarán sin complicaciones", color: "rose" },
        { icon: "Music2", title: "Lista de canciones", description: "Tus invitados pueden crear la lista de canciones que no pueden faltar en tu fiesta", color: "blue" },
        { icon: "Gift", title: "Regalos", description: "Tus invitados podrán enviarte sus regalos", color: "pink" },
        { icon: "CalendarDays", title: "Agenda", description: "Tus invitados pueden agendar la fecha de tu boda con un solo clic en sus calendarios", color: "indigo" },
        { icon: "Image", title: "Álbum de fotos", description: "Una historia única en un hermoso recorrido fotográfico", color: "violet" },
        { icon: "Shirt", title: "Código de vestimenta", description: "Informa a tus invitados el código de vestimenta o estilo elegido para tu gran día", color: "blue" },
        { icon: "Lock", title: "Acceso VIP", description: "Pon tu invitación en modo privado, solo los invitados con acceso podrán verla", color: "gray" },
        { icon: "LinkIcon", title: "Enlace personalizable", description: "Personaliza el enlace de tu invitación como quieras", color: "purple" },
        { icon: "UtensilsCrossed", title: "Menú", description: "Muestra las opciones de menú para tu fiesta", color: "rose" }
      ]
    },
    stepsSection: {
      title: "En solo 4 pasos tendrás tu invitación lista",
      subtitle: "Un proceso diseñado para ser simple, rápido y divertido. Sin complicaciones, solo resultados increíbles.",
      steps: [
        {
          step: "01",
          title: "Crea tu cuenta",
          description: "Regístrate de forma gratuita y accede a todos los diseños disponibles. ¡Solo toma 30 segundos!",
        },
        {
          step: "02",
          title: "Elige el diseño y completa tu información",
          description: "Elige entre más de 20 diseños únicos y personaliza cada detalle de tu invitación.",
        },
        {
          step: "03",
          title: "Visualiza tu invitación digital",
          description: "Revisa cómo se ve tu invitación en tiempo real y ajusta los detalles que necesites.",
        },
        {
          step: "04",
          title: "Publícalo y comparte con tus invitados",
          description: "Activa tu invitación con un clic y compártela con todos tus invitados al instante.",
        }
      ]
    },
    footer: {
      copyright: "© {year} Smart Invite. Todos los derechos reservados. Un producto de Dreamco LLC."
    },
    header: {
      menu: {
        comoFunciona: { label: "¿Cómo funciona?", href: "/pa/como-funciona" },
        ejemplos: { label: "Ejemplos", href: "/pa/ejemplos" },
        invitados: { label: "Gestión de invitados", href: "/pa/invitados" }
      },
      login: "Ingresar",
      loginSecondary: "Ya tengo cuenta",
      register: "Crear mi invitación gratis",
      flagAlt: "Panamá"
    },
    exampleCard: {
      button: "Ver ejemplo"
    },
    templateExamples: {
      title: "Algunos ejemplos de invitaciones",
      description: "Elige el diseño que más te inspire y visualiza cómo lucirá tu invitación digital antes de decidirte. Cada diseño está pensado para que tu evento sea único, elegante y memorable.",
      buttonText: "Ver ejemplo",
      templates: [
        { name: "Minimalista", preview: "https://res.cloudinary.com/sorostica/image/upload/v1750228541/minimalista_01_qheez7.png", link: "/ejemplos/minimalista" },
        { name: "Passport", preview: "https://res.cloudinary.com/sorostica/image/upload/v1750994484/passport_qogrop.png", link: "/ejemplos/passport" },
        { name: "Boho", preview: "https://res.cloudinary.com/sorostica/image/upload/v1751261232/boho_c3qhu1.png", link: "/ejemplos/boho" },
        { name: "Boho Botánico", preview: "https://res.cloudinary.com/sorostica/image/upload/v1751261232/boho_c3qhu1.png", link: "/ejemplos/boho-botanico" },
        { name: "Bosque", preview: "https://res.cloudinary.com/sorostica/image/upload/v1750919544/bosque_portada_m1kgac.png", link: "/ejemplos/bosque" },
        { name: "Beso infinito", preview: "https://res.cloudinary.com/sorostica/image/upload/v1751245492/beso_hugmpy.png", link: "/ejemplos/beso-infinito" },
        { name: "Beso infinito Oscuro", preview: "https://res.cloudinary.com/sorostica/image/upload/v1751245493/beso_2_asg9yy.png", link: "/ejemplos/beso-infinito-dark" },
        { name: "Late Petro", preview: "https://res.cloudinary.com/sorostica/image/upload/v1751168581/late_h6nbzl.png", link: "/ejemplos/late-petro" },
        { name: "Late Pastel", preview: "https://res.cloudinary.com/sorostica/image/upload/v1751224934/late_pastel_guspln.png", link: "/ejemplos/late-pastel" },
        { name: "Natural Green", preview: "https://res.cloudinary.com/sorostica/image/upload/v1751318234/natural_green_ctmc8g.png", link: "/ejemplos/natural-green" },
        { name: "Acuarela", preview: "https://res.cloudinary.com/sorostica/image/upload/v1751344295/acuarela_tjbwpx.png", link: "/ejemplos/acuarela" },
        { name: "Signature Azure", preview: "https://res.cloudinary.com/sorostica/image/upload/v1750986148/azure_efbqda.png", link: "/ejemplos/signature-azure" },
        { name: "Signature Cobre", preview: "https://res.cloudinary.com/sorostica/image/upload/v1750986148/azure_efbqda.png", link: "/ejemplos/signature-cobre" },
        { name: "Signature Black", preview: "https://res.cloudinary.com/sorostica/image/upload/v1750986148/azure_efbqda.png", link: "/ejemplos/signature-black" }
      ]
    },
    invitationTypes: {
      title: "Elige el tipo de invitación perfecto para tu evento",
      subtitle: "Cada tipo está diseñado para crear experiencias únicas y adaptarse a diferentes estilos de celebración.",
      types: [
        {
          icon: "Heart",
          title: "Matrimonio",
          description: "Invitaciones elegantes y románticas para tu día especial con todos los detalles que tus invitados necesitan.",
          features: [
            "Detalles de ceremonia y recepción",
            "RSVP con preferencias de menú",
            "Integración de lista de regalos",
            "Galería de fotos y cronología"
          ],
          popular: true
        },
        {
          icon: "Users",
          title: "Cumpleaños",
          description: "Invitaciones divertidas y personalizadas para celebrar un año más de vida con estilo y alegría.",
          features: [
            "Temas de celebración de edad",
            "Juegos y actividades de fiesta",
            "Sugerencias de regalos",
            "Espacio para compartir fotos"
          ]
        },
        {
          icon: "Calendar",
          title: "Eventos Corporativos",
          description: "Invitaciones profesionales para reuniones de negocios, conferencias y celebraciones empresariales.",
          features: [
            "Agenda y ponentes",
            "Gestión de registros",
            "Funciones de networking",
            "Branding profesional"
          ]
        },
        {
          icon: "Gift",
          title: "Celebraciones Especiales",
          description: "Invitaciones versátiles para graduaciones, aniversarios, baby showers y momentos únicos.",
          features: [
            "Temas personalizables",
            "Detalles flexibles del evento",
            "Compartir recuerdos",
            "Cronología de celebración"
          ]
        }
      ]
    },
    examplesSection: {
      title: "Algunos ejemplos de invitaciones",
      description: "Elige el diseño que más te inspire y visualiza cómo lucirá tu invitación digital antes de decidirte. Cada diseño está pensado para que tu evento sea único, elegante y memorable.",
      cta: "Ver todos los ejemplos",
      examples: [
        {
          name: "Beso Infinito",
          image: "https://res.cloudinary.com/sorostica/image/upload/v1751245492/beso_hugmpy.png",
          link: "/ejemplos/beso-infinito",
          color: "rose"
        },
        {
          name: "Minimalista",
          image: "https://res.cloudinary.com/sorostica/image/upload/v1750228541/minimalista_01_qheez7.png",
          link: "/ejemplos/minimalista",
          color: "rose"
        },
        {
          name: "Bosque",
          image: "https://res.cloudinary.com/sorostica/image/upload/v1750919544/bosque_portada_m1kgac.png",
          link: "/ejemplos/bosque",
          color: "rose"
        }
      ]
    }
  },
  howItWorksPage: {
    title: "Descubre Cómo funciona",
    description: "Crea tu invitación digital en 4 pasos, olvidate del papel, de los tiempos de espera, tu invitación en minutos!",
    heroTitle: "Crea tu invitación digital en 4 simples pasos",
    heroSubtitle: "Desde el registro hasta compartir con tus invitados, te guiamos en todo el proceso",
    heroButton: "Comenzar ahora",
    heroScroll: "Desliza para ver más",
    steps: [
      {
        number: "1",
        title: "Regístrate gratis",
        description: "Comienza tu viaje creando una cuenta gratuita en nuestra plataforma. Solo necesitas tu email y algunos datos básicos. No requerimos tarjeta de crédito ni información personal sensible.",
        bullets: [
          "Registro gratuito sin compromisos",
          "Verificación instantánea por email",
          "Acceso inmediato a todas las funciones"
        ],
        cardTitle: "Registro Rápido",
        cardDescription: "Menos de 2 minutos para crear tu cuenta"
      },
      {
        number: "2",
        title: "Completa el formulario",
        description: "Nuestro formulario intuitivo te guía paso a paso para crear tu invitación digital perfecta. Incluye toda la información importante: fecha, lugar, horarios, y detalles especiales de tu celebración.",
        bullets: [
          "Formulario guiado paso a paso",
          "Plantillas profesionales predefinidas",
          "Guardado automático de tu progreso"
        ],
        cardTitle: "Formulario Intuitivo",
        cardDescription: "Diseño guiado para resultados perfectos"
      },
      {
        number: "3",
        title: "Visualiza y ajusta",
        description: "Ve exactamente cómo se verá tu invitación digital antes de publicarla. Nuestra plataforma te permite editar cada detalle de tu invitación hasta que quede perfecta.",
        bullets: [
          "Vista previa en tiempo real",
          "Personalización completa de diseño",
          "Múltiples versiones para comparar"
        ],
        cardTitle: "Vista Previa",
        cardDescription: "Edita y personaliza en tiempo real"
      },
      {
        number: "4",
        title: "Publícala y compártela",
        description: "Una vez que estés satisfecho con tu invitación digital, publícala con un solo clic. Compártela fácilmente por WhatsApp, redes sociales, email o genera un enlace directo para tus invitados.",
        bullets: [
          "Publicación instantánea",
          "Compartir por múltiples canales",
          "Seguimiento de visualizaciones"
        ],
        cardTitle: "Compartir Fácil",
        cardDescription: "Múltiples opciones de distribución"
      }
    ]
  },
  examplesPage: {
    title: "Ejemplos de invitaciones",
    description: "Explora nuestro catálogo de diseños y sorpréndete con tu invitación digital",
    heroTitle: "Explora nuestros ejemplos de invitaciones",
    heroSubtitle: "Inspírate con los distintos estilos y diseños que puedes usar para tu invitación digital.",
    heroScroll: "Desliza para ver más",
    examples: [
      { name: "Minimalista", image: "https://res.cloudinary.com/sorostica/image/upload/v1750228541/minimalista_01_qheez7.png", link: "/ejemplos/minimalista", color: "rose" },
      { name: "Passport", image: "https://res.cloudinary.com/sorostica/image/upload/v1750994484/passport_qogrop.png", link: "/ejemplos/passport", color: "rose" },
      { name: "Boho", image: "https://res.cloudinary.com/sorostica/image/upload/v1751261232/boho_c3qhu1.png", link: "/ejemplos/boho", color: "rose" },
      { name: "Boho Botánico", image: "https://res.cloudinary.com/sorostica/image/upload/v1751261232/boho_c3qhu1.png", link: "/ejemplos/boho-botanico", color: "rose" },
      { name: "Bosque", image: "https://res.cloudinary.com/sorostica/image/upload/v1750919544/bosque_portada_m1kgac.png", link: "/ejemplos/bosque", color: "rose" },
      { name: "Beso infinito", image: "https://res.cloudinary.com/sorostica/image/upload/v1751245492/beso_hugmpy.png", link: "/ejemplos/beso-infinito", color: "rose" },
      { name: "Beso infinito Oscuro", image: "https://res.cloudinary.com/sorostica/image/upload/v1751245493/beso_2_asg9yy.png", link: "/ejemplos/beso-infinito-dark", color: "rose" },
      { name: "Late Petro", image: "https://res.cloudinary.com/sorostica/image/upload/v1751168581/late_h6nbzl.png", link: "/ejemplos/late-petro", color: "rose" },
      { name: "Late Pastel", image: "https://res.cloudinary.com/sorostica/image/upload/v1751224934/late_pastel_guspln.png", link: "/ejemplos/late-pastel", color: "rose" },
      { name: "Natural Green", image: "https://res.cloudinary.com/sorostica/image/upload/v1751318234/natural_green_ctmc8g.png", link: "/ejemplos/natural-green", color: "rose" },
      { name: "Acuarela", image: "https://res.cloudinary.com/sorostica/image/upload/v1751344295/acuarela_tjbwpx.png", link: "/ejemplos/acuarela", color: "rose" },
      { name: "Signature Azure", image: "https://res.cloudinary.com/sorostica/image/upload/v1750986148/azure_efbqda.png", link: "/ejemplos/signature-azure", color: "rose" },
      { name: "Signature Cobre", image: "https://res.cloudinary.com/sorostica/image/upload/v1750986148/azure_efbqda.png", link: "/ejemplos/signature-cobre", color: "rose" },
      { name: "Signature Black", image: "https://res.cloudinary.com/sorostica/image/upload/v1750986148/azure_efbqda.png", link: "/ejemplos/signature-black", color: "rose" }
    ]
  },
  guestPage: {
    title: "Gestión de Invitados",
    description: "Descrubre las dos formas que hemos creado para que compartas tu invitación digital.",
    heroTitle: "Gestiona tus invitados en 2 formas realmente sencillas",
    heroSubtitle: "Elige la opción que más se adapte a tu evento y facilita la confirmación de asistencia de tus invitados",
    heroScroll: "Desliza para ver más",
    traditional: {
      title: "Invitación general",
      description: "Crea tu invitación digital y compártela con tus invitados. Ellos podrán ingresar sus datos y confirmar (o no) su asistencia de manera sencilla desde cualquier dispositivo.",
      bullets: [
        "Enlace único para tu evento",
        "Confirmación de asistencia en segundos",
        "Sin necesidad de registro para los invitados"
      ],
      cardTitle: "Confirmación fácil",
      cardDescription: "Tus invitados confirman asistencia en segundos"
    },
    email: {
      title: "Invitación personalizada",
      description: "Agrega los invitados manualmente en el apartado de invitaciones. Se enviará un email personalizado a cada invitado con un enlace único y sus datos precargados para que solo deba confirmar (o no) su asistencia.",
      bullets: [
        "Email personalizado para cada invitado",
        "Datos precargados para mayor comodidad",
        "Seguimiento de confirmaciones en tiempo real"
      ],
      cardTitle: "Invitación personalizada",
      cardDescription: "Tus invitados reciben un email con sus datos listos"
    }
  },
  exampleCard: {
    button: "Ver ejemplo"
  }
};

export default i18n; 