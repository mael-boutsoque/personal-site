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
    education: {
      schools: {
        ensem: {
          name: "Digital/Embedded Systems Engineer",
          school: "ENSEM",
          location: "Nancy, France",
          date: "2023 - 2026",
          courses: [
            "System Control",
            "Optimization",
            "Computing",
            "Electronics",
            "Real-Time Systems",
            "Data Analysis",
            "System Safety",
          ],
        },
        upc: {
          name: "Exchange Program",
          school: "ETSEIB (UPC)",
          location: "Barcelona, Spain",
          date: "Sept 2025 - Jan 2026",
          courses: [
            "Embedded & Real-Time Systems",
            "Digital Control",
            "Microcomputers",
            "Artificial Intelligence Applied to Engineering",
          ],
        },
        cpge: {
          name: "CPGE PC",
          school: "Lycée de Troyes",
          location: "Troyes, France",
          date: "2021 - 2023",
          courses: [
            "Mathematics",
            "Physics",
            "Chemistry",
            "Computer Science",
            "Engineering Science",
          ],
        },
      },
    },
    experience: {
      items: {
        quandela: {
          name: "Internship - Software & Hardware Designer",
          school: "Quandela",
          location: "Massy, France",
          date: "2025",
          courses: [
            "Communication Protocol Migration",
            "Hardware Design",
            "PCB Testing",
            "Integration",
          ],
        },
      },
    },
    projects: {
      items: {
        protocol: {
          title: "Communication Protocol Migration",
          excerpt:
            "Migrated 2 proprietary protocols: QDL (RS485, AVR to STM32) using standard C libraries, and QDL Fast (Ethernet, Linux to STM32) using HAL and FreeRTOS.",
          tags: ["Embedded", "Protocols"],
        },
        hub: {
          title: "Multifunction Hub PCB Design",
          excerpt:
            "Designed a PCB board in Altium integrating Ethernet Hub, RS485 Hub, I2C modules, USB flash, multi-function relays, and servo motors.",
          tags: ["Hardware", "PCB"],
        },
        eco: {
          title: "ENSEM Eco Marathon",
          excerpt:
            "Design and manufacture of a test bench to measure vehicle performance for a race organized by Shell. Secondary car driver.",
          tags: ["Automotive", "Testing"],
        },
        robot: {
          title: "Autonomous Robot",
          excerpt:
            "Controlled an autonomous geolocation robot capable of navigating optimally to a list of coordinates using Python and TCP protocols.",
          tags: ["Robotics", "Autonomous"],
        },
        arduinoSystem: {
          title: "Arduino System Design and Development",
          excerpt:
            "Personal projects involving the creation of electronic systems such as a real-time radar, a remote-controlled car, and a robot arm.",
          tags: ["Electronics", "Arduino"],
        },
      },
    },
    skills: {
      categories: {
        "low-level": "Low Level",
        "high-level": "High Level",
        apps: "Apps",
        pcb: "PCB",
        data: "Data",
        languages: "Languages",
      },
      lowLevel: {
        c: {
          title: "C",
          description: "Low-level systems programming",
        },
        cpp: {
          title: "C++",
          description: "Object-oriented / embedded C++",
        },
        assembly: {
          title: "Assembly",
          description: "Low-level architecture programming",
        },
        arduino: {
          title: "Arduino",
          description: "Embedded prototyping framework",
        },
        hal: {
          title: "HAL",
          description: "Hardware Abstraction Layer (STM32)",
        },
        bareMetal: {
          title: "Bare Metal",
          description: "No-OS embedded programming",
        },
        rtos: {
          title: "FreeRTOS",
          description: "Real-time operating systems",
        },
      },
      highLevel: {
        python: {
          title: "Python",
          description: "Data analysis / automation / scripting",
        },
        java: {
          title: "Java",
          description: "Enterprise application development",
        },
        matlab: {
          title: "MATLAB",
          description: "Numerical computing / simulation",
        },
        git: {
          title: "Git",
          description: "Version control / collaboration",
        },
        cicd: {
          title: "CI/CD",
          description: "Automated pipelines / integration",
        },
        cmake: {
          title: "CMake",
          description: "Cross-platform build system",
        },
      },
      apps: {
        office: {
          title: "MS Office Suite",
          description: "Word / Excel / PowerPoint",
        },
        latex: {
          title: "LaTeX",
          description: "Technical / scientific documentation",
        },
        vscode: {
          title: "VS Code",
          description: "Primary code editor",
        },
        eclipse: {
          title: "Eclipse",
          description: "Java / embedded IDE",
        },
        stm32Suite: {
          title: "STM32 Suite",
          description: "CubeMX / CubeIDE / Programmer",
        },
      },
      pcb: {
        altium: {
          title: "Altium",
          description: "Professional PCB design",
        },
        kicad: {
          title: "KiCad",
          description: "Open-source EDA suite",
        },
        fusion360: {
          title: "Fusion 360",
          description: "3D CAD / mechanical design",
        },
        eurocircuit: {
          title: "Eurocircuit",
          description: "PCB prototyping / manufacturing",
        },
      },
      data: {
        sql: {
          title: "SQL",
          description: "Relational databases / queries",
        },
        json: {
          title: "JSON",
          description: "Data interchange format",
        },
        aiDatasets: {
          title: "AI Datasets",
          description: "Dataset preparation / curation",
        },
        aiTraining: {
          title: "AI Training",
          description: "Model training pipelines",
        },
      },
      languages: {
        french: {
          title: "French",
          description: "Native",
        },
        english: {
          title: "English",
          description: "B2+ (920 TOEIC)",
        },
        spanish: {
          title: "Spanish",
          description: "Intermediate (B)",
        },
      },
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
    education: {
      schools: {
        ensem: {
          name: "Ingénieur Systèmes Numériques / Embarqués",
          school: "ENSEM",
          location: "Nancy, France",
          date: "2023 - 2026",
          courses: [
            "Commande de systèmes",
            "Optimisation",
            "Informatique",
            "Électronique",
            "Systèmes temps réel",
            "Analyse de données",
            "Sûreté de fonctionnement",
          ],
        },
        upc: {
          name: "Programme d'échange",
          school: "ETSEIB (UPC)",
          location: "Barcelone, Espagne",
          date: "Sept 2025 - Jan 2026",
          courses: [
            "Systèmes embarqués & temps réel",
            "Commande numérique",
            "Microcontrôleurs",
            "Intelligence artificielle appliquée à l'ingénierie",
          ],
        },
        cpge: {
          name: "CPGE PC",
          school: "Lycée de Troyes",
          location: "Troyes, France",
          date: "2021 - 2023",
          courses: [
            "Mathématiques",
            "Physique",
            "Chimie",
            "Informatique",
            "Sciences de l'ingénieur",
          ],
        },
      },
    },
    experience: {
      items: {
        quandela: {
          name: "Stage - Concepteur Logiciel & Matériel",
          school: "Quandela",
          location: "Massy, France",
          date: "2025",
          courses: [
            "Migration de protocoles de communication",
            "Conception matérielle",
            "Tests PCB",
            "Intégration",
          ],
        },
      },
    },
    projects: {
      items: {
        protocol: {
          title: "Migration de protocoles de communication",
          excerpt:
            "Migration de 2 protocoles propriétaires : QDL (RS485, AVR vers STM32) avec bibliothèques C standard, et QDL Fast (Ethernet, Linux vers STM32) avec HAL et FreeRTOS.",
          tags: ["Embarqué", "Protocoles"],
        },
        hub: {
          title: "Conception PCB Hub Multifonction",
          excerpt:
            "Conception d'une carte PCB sous Altium intégrant Hub Ethernet, Hub RS485, modules I2C, mémoire flash USB, relais multifonctions, et servomoteurs.",
          tags: ["Matériel", "PCB"],
        },
        eco: {
          title: "ENSEM Eco Marathon",
          excerpt:
            "Conception et réalisation d'un banc d'essai pour mesurer les performances d'un véhicule pour une course organisée par Shell. Second pilote.",
          tags: ["Automobile", "Tests"],
        },
        robot: {
          title: "Robot autonome",
          excerpt:
            "Commande d'un robot autonome de géolocalisation capable de naviguer de manière optimale vers une liste de coordonnées en utilisant Python et protocoles TCP.",
          tags: ["Robotique", "Autonome"],
        },
        arduinoSystem: {
          title: "Conception et développement de systèmes Arduino",
          excerpt:
            "Projets personnels portant sur la création de systèmes électroniques tels qu'un radar temps réel, une voiture télécommandée et un bras robotique.",
          tags: ["Électronique", "Arduino"],
        },
      },
    },
    skills: {
      categories: {
        "low-level": "Niveau Bas",
        "high-level": "Niveau Haut",
        apps: "Applications",
        pcb: "PCB",
        data: "Données",
        languages: "Langues",
      },
      lowLevel: {
        c: {
          title: "C",
          description: "Programmation système bas niveau",
        },
        cpp: {
          title: "C++",
          description: "C++ orienté objet / embarqué",
        },
        assembly: {
          title: "Assembleur",
          description: "Programmation architecture bas niveau",
        },
        arduino: {
          title: "Arduino",
          description: "Framework de prototypage embarqué",
        },
        hal: {
          title: "HAL",
          description: "Couche d'abstraction matériel (STM32)",
        },
        bareMetal: {
          title: "Bare Metal",
          description: "Programmation embarquée sans OS",
        },
        rtos: {
          title: "FreeRTOS",
          description: "Systèmes d'exploitation temps réel",
        },
      },
      highLevel: {
        python: {
          title: "Python",
          description: "Analyse de données / automatisation / scripting",
        },
        java: {
          title: "Java",
          description: "Développement d'applications d'entreprise",
        },
        matlab: {
          title: "MATLAB",
          description: "Calcul numérique / simulation",
        },
        git: {
          title: "Git",
          description: "Contrôle de version / collaboration",
        },
        cicd: {
          title: "CI/CD",
          description: "Pipelines automatisés / intégration",
        },
        cmake: {
          title: "CMake",
          description: "Système de build multiplateforme",
        },
      },
      apps: {
        office: {
          title: "Suite MS Office",
          description: "Word / Excel / PowerPoint",
        },
        latex: {
          title: "LaTeX",
          description: "Documentation technique / scientifique",
        },
        vscode: {
          title: "VS Code",
          description: "Éditeur de code principal",
        },
        eclipse: {
          title: "Eclipse",
          description: "IDE Java / embarqué",
        },
        stm32Suite: {
          title: "Suite STM32",
          description: "CubeMX / CubeIDE / Programmer",
        },
      },
      pcb: {
        altium: {
          title: "Altium",
          description: "Conception PCB professionnelle",
        },
        kicad: {
          title: "KiCad",
          description: "Suite EDA open-source",
        },
        fusion360: {
          title: "Fusion 360",
          description: "CAO 3D / conception mécanique",
        },
        eurocircuit: {
          title: "Eurocircuit",
          description: "Prototypage / fabrication PCB",
        },
      },
      data: {
        sql: {
          title: "SQL",
          description: "Bases de données relationnelles / requêtes",
        },
        json: {
          title: "JSON",
          description: "Format d'échange de données",
        },
        aiDatasets: {
          title: "Datasets IA",
          description: "Préparation / curation de datasets",
        },
        aiTraining: {
          title: "Entraînement IA",
          description: "Pipelines d'entraînement de modèles",
        },
      },
      languages: {
        french: {
          title: "Français",
          description: "Langue maternelle",
        },
        english: {
          title: "Anglais",
          description: "B2+ (920 TOEIC)",
        },
        spanish: {
          title: "Espagnol",
          description: "Intermédiaire (B)",
        },
      },
    },
  },
} as const

export type MessageKey = typeof messages.en

export type NestedKeyOf<T> = {
  [K in keyof T]: T[K] extends object
    ? `${K & string}.${NestedKeyOf<T[K]>}`
    : K & string
}[keyof T]