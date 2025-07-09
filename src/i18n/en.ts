import type { I18n } from './types';

const i18n: I18n = {
  home: {
    title: "Welcome to SmartInvite USA",
    description: "The easiest way to manage event invitations across the USA.",
    hero: {
      title: "Your celebration deserves a standout invitation",
      subtitle: "Interactive, original, and eco-friendly experiences for your special event",
      cta: "Create your digital invitation for free",
      button: "Create my invitation",
      secondary: "See features",
      heroScroll: "Scroll to explore",
      invitationName: "John & Mary",
      invitationDate: "October 12, 2026",
      invitationButtons: [
        "SAVE TO CALENDAR",
        "RSVP NOW",
        "GET DIRECTIONS"
      ],
      feature1: "Unique celebrations",
      feature2: "Guest tracking",
      feature3: "Interactive maps",
      info: "100% free trial • No credit card needed",
      badge: "DIGITAL INVITATIONS"
    },
    phoneMockup: {
      time: "9:41",
      battery: "Battery",
      eventTypes: {
        wedding: "Wedding",
        birthday: "Birthday",
        corporate: "Corporate",
        graduation: "Graduation"
      },
      events: {
        wedding: {
          name: "John & Mary",
          date: "October 12, 2026",
          buttons: ["SAVE TO CALENDAR", "RSVP NOW", "GET DIRECTIONS"]
        },
        birthday: {
          name: "Sarah's 25th",
          date: "December 15, 2025",
          buttons: ["CONFIRM ATTENDANCE", "GIFT REGISTRY", "VIEW LOCATION"]
        },
        corporate: {
          name: "Tech Conference 2025",
          date: "March 20, 2025",
          buttons: ["REGISTER NOW", "SEE AGENDA", "VENUE INFO"]
        },
        graduation: {
          name: "Class of 2025",
          date: "May 30, 2025",
          buttons: ["ATTEND CEREMONY", "RECEPTION DETAILS", "PHOTO GALLERY"]
        }
      }
    },
    features: [
      {
        title: "Instant RSVP Tracking",
        description: "Get real-time attendance updates with our automated RSVP system. Guests confirm with one click while you maintain complete control over your guest list.",
        features: [
          "Auto-confirmations",
          "Live attendance stats",
          "+1 management",
          "Response tracking"
        ]
      },
      {
        title: "Create & Share in Minutes",
        description: "Pick your favorite design, add personal details, include music and photos, then share a memorable experience with guests instantly.",
        features: [
          "Share via WhatsApp/text",
          "Custom background music",
          "Photo galleries",
          "Interactive event details"
        ]
      },
      {
        title: "Smart Guest Management",
        description: "Ditch spreadsheets forever. Our system keeps guest info organized, updated, and accessible—from dietary needs to plus-ones.",
        features: [
          "Complete guest tracking",
          "+1 management",
          "Meal preferences",
          "Centralized contacts"
        ]
      },
      {
        title: "Seating Planner",
        description: "Design your perfect reception layout with our visual planner. Adjust table sizes, move guests, and preview your entire setup effortlessly.",
        features: [
          "Drag-and-drop seating",
          "Table capacity controls",
          "Real-time visualization"
        ]
      },
      {
        title: "Gift Registry",
        description: "Create a custom gift list and receive funds directly to your account—no restrictions on how you use them.",
        features: [
          "Personalized registry",
          "Secure payments",
          "Gift tracking"
        ]
      }
    ],
    cta: {
      title: "Create your invitation in under 5 minutes",
      description: "Sign up now, add your event details, and preview your digital invite instantly.",
      button: "Create my invitation",
      freeText: "Free trial • No card required",
      stats: {
        invitations: {
          number: "10K+",
          label: "Invitations created"
        },
        satisfaction: {
          number: "99%",
          label: "Satisfaction rate"
        },
        rating: {
          number: "5★",
          label: "Average rating"
        }
      }
    },
    featuresGrid: {
      title: "Everything you need in one place",
      subtitle: "Build free invitations and tweak designs anytime",
      features: [
        { icon: "Globe", title: "Unlimited sharing", description: "Share via WhatsApp, email, social media, or any platform", color: "emerald" },
        { icon: "Music2", title: "Custom soundtrack", description: "Personal music plays as guests view your invite", color: "purple" },
        { icon: "Clock", title: "Live countdown", description: "Ticking timer to your event date", color: "amber" },
        { icon: "MapPin", title: "Interactive maps", description: "Guided directions so no one gets lost", color: "rose" },
        { icon: "Music2", title: "Song requests", description: "Guests suggest tunes for your playlist", color: "blue" },
        { icon: "Gift", title: "Digital gifts", description: "Receive gifts directly through your invite", color: "pink" },
        { icon: "CalendarDays", title: "Calendar saves", description: "One-click date saving for guests", color: "indigo" },
        { icon: "Image", title: "Photo stories", description: "Share your journey through images", color: "violet" },
        { icon: "Shirt", title: "Dress code", description: "Show guests what to wear", color: "blue" },
        { icon: "Lock", title: "Private access", description: "Exclusive to invited guests only", color: "gray" },
        { icon: "LinkIcon", title: "Custom URL", description: "Personalize your invitation link", color: "purple" },
        { icon: "UtensilsCrossed", title: "Menu preview", description: "Display meal options", color: "rose" }
      ]
    },
    stepsSection: {
      title: "Your invitation ready in 4 simple steps",
      subtitle: "Simple, fast, and frustration-free. Just beautiful results.",
      steps: [
        {
          step: "01",
          title: "Sign up free",
          description: "30-second registration unlocks all designs",
        },
        {
          step: "02",
          title: "Pick & customize",
          description: "Choose from 20+ designs and make it yours",
        },
        {
          step: "03",
          title: "Preview live",
          description: "See your invite in real-time and tweak details",
        },
        {
          step: "04",
          title: "Share instantly",
          description: "Go live with one click and notify guests",
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
        invitados: { label: "Guest Tools", href: "/guests" }
      },
      login: "Log in",
      loginSecondary: "Existing account",
      register: "Create free invitation",
      flagAlt: "United States"
    },
    templateExamples: {
      title: "Invitation templates",
      description: "Find inspiration in our designs. Preview how your event will look with any template.",
      buttonText: "Preview design",
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
      title: "Find your perfect invitation style",
      subtitle: "Tailored experiences for every celebration",
      types: [
        {
          icon: "Heart",
          title: "Weddings",
          description: "Elegant invitations for your big day with all essential details",
          features: [
            "Ceremony & reception info",
            "RSVP with meal choices",
            "Gift registry",
            "Photo timeline"
          ],
          popular: true
        },
        {
          icon: "Users",
          title: "Birthdays",
          description: "Fun invites to celebrate in style",
          features: [
            "Theme customization",
            "Activity details",
            "Gift ideas",
            "Memory sharing"
          ]
        },
        {
          icon: "Calendar",
          title: "Corporate",
          description: "Professional invites for business events",
          features: [
            "Agenda management",
            "Registration tracking",
            "Brand customization",
            "Networking tools"
          ]
        },
        {
          icon: "Gift",
          title: "Special Events",
          description: "For graduations, baby showers, and milestones",
          features: [
            "Flexible themes",
            "Custom details",
            "Memory sharing",
            "Event timelines"
          ]
        }
      ]
    }
  },
  examplesPage: {
    title: "Invitation Examples",
    description: "Browse templates for your digital invitation",
    heroTitle: "Explore our invitation designs",
    heroSubtitle: "Get inspired by different styles for your event",
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
    description: "Manage guests: Simple links or personalized email invites",
    heroTitle: "Two ways to handle guests",
    heroSubtitle: "Choose what works best for your event",
    heroScroll: "Scroll to learn more",
    traditional: {
      title: "Shareable Link",
      description: "Send one link to all guests. They RSVP directly from any device.",
      bullets: [
        "Single event link",
        "Instant RSVPs",
        "No guest setup needed"
      ],
      cardTitle: "Effortless RSVPs",
      cardDescription: "Guests confirm in seconds"
    },
    email: {
      title: "Personal Invites",
      description: "Send custom emails with pre-filled details for quick responses.",
      bullets: [
        "Personalized emails",
        "Pre-loaded guest info",
        "Real-time tracking"
      ],
      cardTitle: "Tailored Invitations",
      cardDescription: "Guests get ready-to-confirm emails"
    }
  },
  howItWorksPage: {
    title: "How SmartInvite Works",
    description: "Create digital invitations in 4 steps: Sign up, design, preview, share.",
    heroTitle: "Create your invite in 4 easy steps",
    heroSubtitle: "From signup to sharing—we've got you covered",
    heroButton: "Get started",
    heroScroll: "See how it works",
    steps: [
      {
        number: "1",
        title: "Sign up free",
        description: "Create your account in seconds—no credit card needed.",
        bullets: [
          "Free with no commitments",
          "Instant access",
          "Email verification"
        ],
        cardTitle: "Quick start",
        cardDescription: "Ready in under 2 minutes"
      },
      {
        number: "2",
        title: "Build your invite",
        description: "Our step-by-step builder helps create your perfect invitation.",
        bullets: [
          "Guided design process",
          "Professional templates",
          "Auto-saves your work"
        ],
        cardTitle: "Intuitive builder",
        cardDescription: "Design made simple"
      },
      {
        number: "3",
        title: "Preview & polish",
        description: "See your live invitation and perfect every detail.",
        bullets: [
          "Real-time preview",
          "Full customization",
          "Compare versions"
        ],
        cardTitle: "Live editing",
        cardDescription: "Tweak until it's perfect"
      },
      {
        number: "4",
        title: "Go live & share",
        description: "Publish instantly and share your eco-friendly digital invite.",
        bullets: [
          "One-click publishing",
          "Share anywhere",
          "Paperless solution"
        ],
        cardTitle: "Instant sharing",
        cardDescription: "Guests receive it immediately"
      }
    ]
  },
  exampleCard: {
    button: "See example"
  }
};

export default i18n;