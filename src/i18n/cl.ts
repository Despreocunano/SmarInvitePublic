import type { I18n } from './types';

const i18n: I18n = {
  home: {
    title: "Welcome to SmartInvite Canada",
    description: "The best way to manage your event invitations in Canads.",
    hero: {
      title: "Your love story deserves a unique invitation",
      subtitle: "An interactive, original, and eco-friendly experience for your wedding",
      cta: "Create your digital wedding invitation for free",
      button: "Create my invitation",
      secondary: "View features",
      heroScroll: "Scroll down",
      invitationName: "John & Mary",
      invitationDate: "October 12, 2026",
      invitationButtons: [
        "ADD TO CALENDAR",
        "RSVP",
        "DIRECTIONS"
      ]
    },
    features: [
      {
        title: "Real-Time Confirmations",
        description: "Stay up to date with automatic RSVP confirmations. Our digital RSVP system allows your guests to confirm their attendance easily while you receive instant updates and maintain full control over the final guest list.",
        features: [
          "Automatic confirmations",
          "Real-time statistics",
          "Plus-one management",
          "Response tracking"
        ]
      },
      {
        title: "Create and Share in Minutes",
        description: "Choose your favorite design, enter your details, add background music and photo galleries, then share it with your guests for an unforgettable experience from the first moment.",
        features: [
          "Share directly via WhatsApp",
          "Background music",
          "Photo gallery",
          "Interactive details"
        ]
      },
      {
        title: "Guest Management",
        description: "Forget about spreadsheets and paper lists. Our guest management system helps you keep all information organized, updated, and accessible. Easily add, edit, and manage guests, including important details like dietary preferences and plus-ones.",
        features: [
          "Comprehensive guest management",
          "Plus-one tracking",
          "Dietary preferences",
          "Centralized contact information"
        ]
      },
      {
        title: "Table Organizer",
        description: "Design the perfect layout for your wedding with our digital table organizer. Add or remove guests, manage table capacities, and visualize your complete event arrangement. A powerful tool that makes seating planning effortless.",
        features: [
          "Visual table layout",
          "Capacity management",
          "Real-time preview"
        ]
      },
      {
        title: "Gift Registry",
        description: "Create and share your personalized gift registry with guests and receive funds directly to your account. No restrictions on where you can spend your balance.",
        features: [
          "Personalized registry",
          "Integrated payments",
          "Gift tracking"
        ]
      }
    ],
    cta: {
      title: "Create your invitation in under 5 minutes",
      description: "Register now, enter your wedding details, and preview your digital invitation.",
      button: "Create my invitation",
      freeText: "100% free • No credit card required",
      stats: {
        invitations: {
          number: "10K+",
          label: "Invitations created"
        },
        satisfaction: {
          number: "99%",
          label: "Satisfaction"
        },
        rating: {
          number: "5★",
          label: "Rating"
        }
      }
    },
    featuresGrid: {
      title: "Everything you need in one place",
      subtitle: "Create your invitation for free and adjust the design as often as you like.",
      features: [
        { icon: "Globe", title: "Unlimited sharing", description: "Share your invitation via WhatsApp, email, social media, or any digital platform", color: "emerald" },
        { icon: "Music2", title: "Background music", description: "Your chosen music theme plays in the background of your invitation", color: "purple" },
        { icon: "Clock", title: "Countdown", description: "Live countdown to your wedding date", color: "amber" },
        { icon: "MapPin", title: "Location & Directions", description: "Interactive maps ensure guests arrive without issues", color: "rose" },
        { icon: "Music2", title: "Song requests", description: "Guests can suggest must-play songs for your reception", color: "blue" },
        { icon: "Gift", title: "Gifts", description: "Guests can send gifts directly through the platform", color: "pink" },
        { icon: "CalendarDays", title: "Calendar Integration", description: "Guests can save your wedding date with one click", color: "indigo" },
        { icon: "Image", title: "Photo album", description: "Tell your unique story through a photographic journey", color: "violet" },
        { icon: "Shirt", title: "Dress code", description: "Share the preferred attire for your special day", color: "blue" },
        { icon: "Lock", title: "Private Access", description: "Restrict access to invited guests only", color: "gray" },
        { icon: "LinkIcon", title: "Customizable link", description: "Personalize your invitation URL", color: "purple" },
        { icon: "UtensilsCrossed", title: "Menu", description: "Display meal options for your event", color: "rose" }
      ]
    },
    stepsSection: {
      title: "Your invitation ready in just 4 steps",
      subtitle: "A process designed to be simple, fast, and fun. No complications—just amazing results.",
      steps: [
        {
          step: "01",
          title: "Create your account",
          description: "Register for free and access all available designs. It only takes 30 seconds!",
          color: "from-blue-500 via-blue-600 to-indigo-600",
          bgColor: "from-blue-50 to-indigo-50"
        },
        {
          step: "02",
          title: "Choose the design and complete your information",
          description: "Choose from more than 10 unique designs and customize every detail of your invitation.",
          color: "from-purple-500 via-purple-600 to-violet-600",
          bgColor: "from-purple-50 to-violet-50"
        },
        {
          step: "03",
          title: "Preview your digital invitation",
          description: "See how your invitation looks in real time and adjust any details you need.",
          color: "from-emerald-500 via-emerald-600 to-teal-600",
          bgColor: "from-emerald-50 to-teal-50"
        },
        {
          step: "04",
          title: "Publish and share with your guests",
          description: "Activate your invitation with one click and share it instantly with all your guests.",
          color: "from-rose-500 via-rose-600 to-pink-600",
          bgColor: "from-rose-50 to-pink-50"
        }
      ]
    },
    footer: {
      copyright: "© {year} SmartInvite. All rights reserved. A Dreamco LLC product."
    },
    header: {
      menu: {
        comoFunciona: { label: "How it works", href: "/how-it-works" },
        ejemplos: { label: "Examples", href: "/examples" },
        invitados: { label: "Guest Management", href: "/guests" }
      },
      login: "Log in",
      loginSecondary: "I already have an account",
      register: "Create my free invitation",
      flagAlt: "United States"
    },
    templateExamples: {
      title: "Invitation templates",
      description: "Browse designs that inspire you and preview how your digital invitation will appear. Each template creates a unique, elegant experience for your event.",
      buttonText: "Preview template",
      templates: [
        { name: "Minimalist", preview: "https://res.cloudinary.com/sorostica/image/upload/v1750228541/minimalista_01_qheez7.png", link: "/ejemplos/minimalista-en" },
        { name: "Passport", preview: "https://res.cloudinary.com/sorostica/image/upload/v1750994484/passport_qogrop.png", link: "/ejemplos/passport-en" },
        { name: "Boho", preview: "https://res.cloudinary.com/sorostica/image/upload/v1751261232/boho_c3qhu1.png", link: "/ejemplos/boho-en" },
        { name: "Boho Botanic", preview: "https://res.cloudinary.com/sorostica/image/upload/v1751261232/boho_c3qhu1.png", link: "/ejemplos/boho-botanico-en" },
        { name: "Forest", preview: "https://res.cloudinary.com/sorostica/image/upload/v1750919544/bosque_portada_m1kgac.png", link: "/ejemplos/bosque-en" },
        { name: "Infinite Kiss", preview: "https://res.cloudinary.com/sorostica/image/upload/v1751245492/beso_hugmpy.png", link: "/ejemplos/beso-infinito-en" },
        { name: "Infinite Kiss Dark", preview: "https://res.cloudinary.com/sorostica/image/upload/v1751245493/beso_2_asg9yy.png", link: "/ejemplos/beso-infinito-dark-en" },
        { name: "Late Petro", preview: "https://res.cloudinary.com/sorostica/image/upload/v1751168581/late_h6nbzl.png", link: "/ejemplos/late-petro-en" },
        { name: "Late Pastel", preview: "https://res.cloudinary.com/sorostica/image/upload/v1751224934/late_pastel_guspln.png", link: "/ejemplos/late-pastel-en" },
        { name: "Natural Green", preview: "https://res.cloudinary.com/sorostica/image/upload/v1751318234/natural_green_ctmc8g.png", link: "/ejemplos/natural-green-en" },
        { name: "Watercolor", preview: "https://res.cloudinary.com/sorostica/image/upload/v1751344295/acuarela_tjbwpx.png", link: "/ejemplos/acuarela-en" },
        { name: "Signature Azure", preview: "https://res.cloudinary.com/sorostica/image/upload/v1750986148/azure_efbqda.png", link: "/ejemplos/signature-azure-en" },
        { name: "Signature Copper", preview: "https://res.cloudinary.com/sorostica/image/upload/v1750986148/azure_efbqda.png", link: "/ejemplos/signature-cobre-en" },
        { name: "Signature Black", preview: "https://res.cloudinary.com/sorostica/image/upload/v1750986148/azure_efbqda.png", link: "/ejemplos/signature-black-en" }
      ]
    },
    invitationTypes: {
      title: "Choose the perfect invitation type for your event",
      subtitle: "Each type is designed to create unique experiences and adapt to different celebration styles.",
      types: [
        {
          icon: "Heart",
          title: "Wedding",
          description: "Elegant and romantic invitations for your special day with all the details your guests need.",
          features: [
            "Ceremony and reception details",
            "RSVP with meal preferences",
            "Gift registry integration",
            "Photo gallery and timeline"
          ],
          popular: true
        },
        {
          icon: "Users",
          title: "Birthday Party",
          description: "Fun and personalized invitations to celebrate another year of life with style and joy.",
          features: [
            "Age celebration themes",
            "Party games and activities",
            "Gift suggestions",
            "Photo sharing space"
          ]
        },
        {
          icon: "Calendar",
          title: "Corporate Events",
          description: "Professional invitations for business meetings, conferences, and corporate celebrations.",
          features: [
            "Agenda and speakers",
            "Registration management",
            "Networking features",
            "Professional branding"
          ]
        },
        {
          icon: "Gift",
          title: "Special Celebrations",
          description: "Versatile invitations for graduations, anniversaries, baby showers, and unique moments.",
          features: [
            "Customizable themes",
            "Flexible event details",
            "Memory sharing",
            "Celebration timeline"
          ]
        }
      ]
    }
  },
  examplesPage: {
    title: "Invitation Examples",
    description: "Explore available templates for your digital invitation.",
    heroTitle: "Discover our <span class='text-fuchsia-400'>invitation templates</span>",
    heroSubtitle: "Find inspiration in different styles and designs for your digital invitation.",
    examples: [
      { name: "Minimalist", image: "https://res.cloudinary.com/sorostica/image/upload/v1750228541/minimalista_01_qheez7.png", link: "/ejemplos/minimalista-en", color: "rose" },
      { name: "Passport", image: "https://res.cloudinary.com/sorostica/image/upload/v1750994484/passport_qogrop.png", link: "/ejemplos/passport-en", color: "rose" },
      { name: "Boho", image: "https://res.cloudinary.com/sorostica/image/upload/v1751261232/boho_c3qhu1.png", link: "/ejemplos/boho-en", color: "rose" },
      { name: "Boho Botanic", image: "https://res.cloudinary.com/sorostica/image/upload/v1751261232/boho_c3qhu1.png", link: "/ejemplos/boho-botanico-en", color: "rose" },
      { name: "Forest", image: "https://res.cloudinary.com/sorostica/image/upload/v1750919544/bosque_portada_m1kgac.png", link: "/ejemplos/bosque-en", color: "rose" },
      { name: "Infinite Kiss", image: "https://res.cloudinary.com/sorostica/image/upload/v1751245492/beso_hugmpy.png", link: "/ejemplos/beso-infinito-en", color: "rose" },
      { name: "Infinite Kiss Dark", image: "https://res.cloudinary.com/sorostica/image/upload/v1751245493/beso_2_asg9yy.png", link: "/ejemplos/beso-infinito-dark-en", color: "rose" },
      { name: "Late Petro", image: "https://res.cloudinary.com/sorostica/image/upload/v1751168581/late_h6nbzl.png", link: "/ejemplos/late-petro-en", color: "rose" },
      { name: "Late Pastel", image: "https://res.cloudinary.com/sorostica/image/upload/v1751224934/late_pastel_guspln.png", link: "/ejemplos/late-pastel-en", color: "rose" },
      { name: "Natural Green", image: "https://res.cloudinary.com/sorostica/image/upload/v1751318234/natural_green_ctmc8g.png", link: "/ejemplos/natural-green-en", color: "rose" },
      { name: "Watercolor", image: "https://res.cloudinary.com/sorostica/image/upload/v1751344295/acuarela_tjbwpx.png", link: "/ejemplos/acuarela-en", color: "rose" },
      { name: "Signature Azure", image: "https://res.cloudinary.com/sorostica/image/upload/v1750986148/azure_efbqda.png", link: "/ejemplos/signature-azure-en", color: "rose" },
      { name: "Signature Copper", image: "https://res.cloudinary.com/sorostica/image/upload/v1750986148/azure_efbqda.png", link: "/ejemplos/signature-cobre-en", color: "rose" },
      { name: "Signature Black", image: "https://res.cloudinary.com/sorostica/image/upload/v1750986148/azure_efbqda.png", link: "/ejemplos/signature-black-en", color: "rose" }
    ]
  },
  guestPage: {
    title: "Guest Management",
    description: "Learn how to manage guests: traditional RSVPs or email invitations for easy attendance confirmation.",
    heroTitle: "Manage guests in <span class='text-emerald-400'>two simple ways</span>",
    heroSubtitle: "Choose the option that best fits your event and simplify attendance confirmations.",
    heroScroll: "Scroll down",
    traditional: {
      title: "Open Invitation",
      description: "Share your digital invitation link with guests. They can submit their details and RSVP directly from any device.",
      bullets: [
        "Single link for your event",
        "RSVP confirmation in seconds",
        "No guest registration required"
      ],
      cardTitle: "Easy RSVPs",
      cardDescription: "Guests confirm attendance in seconds"
    },
    email: {
      title: "Personalized Invitations",
      description: "Add guests manually to send personalized emails with pre-filled details. Each guest receives a unique link for quick RSVP confirmation.",
      bullets: [
        "Custom emails for each guest",
        "Pre-filled details for convenience",
        "Real-time RSVP tracking"
      ],
      cardTitle: "Personalized Invitations",
      cardDescription: "Guests receive emails with their information pre-loaded"
    }
  },
  howItWorksPage: {
    title: "How SmartInvite Works",
    description: "Learn how to create your digital invitation in 4 simple steps: registration, creation, preview, and sharing.",
    heroTitle: "Create your digital invitation in <span class='text-rose-400'>4 simple steps</span>",
    heroSubtitle: "From registration to guest sharing—we guide you through the entire process.",
    heroButton: "Get started now",
    heroScroll: "Scroll down",
    steps: [
      {
        number: "1",
        title: "Free registration",
        description: "Start by creating a free account. You'll only need your email and basic information—no credit card or sensitive data required.",
        bullets: [
          "Free with no commitments",
          "Instant email verification",
          "Immediate feature access"
        ],
        cardTitle: "Quick Registration",
        cardDescription: "Account setup in under 2 minutes"
      },
      {
        number: "2",
        title: "Complete the form",
        description: "Our intuitive form guides you step by step to create your perfect digital invitation. Include all important details: date, location, times, and special celebration notes.",
        bullets: [
          "Step-by-step guided form",
          "Professional pre-designed templates",
          "Automatic saving of your progress"
        ],
        cardTitle: "Intuitive Form",
        cardDescription: "Guided design for perfect results"
      },
      {
        number: "3",
        title: "Preview and adjust",
        description: "See exactly how your digital invitation will appear before publishing. Edit every detail until it's perfect.",
        bullets: [
          "Real-time preview",
          "Full design customization",
          "Multiple versions to compare"
        ],
        cardTitle: "Live Preview",
        cardDescription: "Edit and customize in real time"
      },
      {
        number: "4",
        title: "Publish and share",
        description: "Once satisfied with your invitation, publish it and share instantly with guests. Enjoy a unique, interactive, and eco-friendly experience.",
        bullets: [
          "Instant publishing",
          "Share via WhatsApp, email, and more",
          "Eco-friendly and paperless"
        ],
        cardTitle: "Share Instantly",
        cardDescription: "Your invitation ready to send in seconds"
      }
    ]
  },
  exampleCard: {
    button: "View example"
  }
};

export default i18n;