export type Language = "en" | "fr"

export const messages = {
  en: {
    nav: {
      home: "Home",
      education: "Education",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
      email: "Email",
      github: "GitHub",
      linkedin: "LinkedIn",
      downloadCv: "Download CV",
    },
    meta: {
      title: "Maël Boutsoque | Digital Systems Engineer",
      description:
        "Embedded systems and hardware design portfolio by Maël Boutsoque, a Digital Systems Engineering student at ENSEM specializing in low-level programming and PCB design.",
    },
    home: {
      education: "Education",
      experience: "Experience",
      projects: "Projects",
      hoverTitle: "Missions",
      legalNotice: "Legal Notice",
      rights: "All rights reserved.",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      education: "Formation",
      projects: "Projets",
      skills: "Compétences",
      contact: "Contact",
      email: "Email",
      github: "GitHub",
      linkedin: "LinkedIn",
      downloadCv: "Télécharger le CV",
    },
    meta: {
      title: "Maël Boutsoque | Ingénieur Systèmes Numériques",
      description:
        "Portfolio de conception matérielle et systèmes embarqués par Maël Boutsoque, étudiant en Ingénierie des Systèmes Numériques à l'ENSEM, spécialisé en programmation bas niveau et conception de PCB.",
    },
    home: {
      education: "Formation",
      experience: "Expérience",
      projects: "Projets",
      hoverTitle: "Missions",
      legalNotice: "Mentions légales",
      rights: "Tous droits réservés.",
    },
  },
} as const

export type MessageKey = typeof messages.en