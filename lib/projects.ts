import type { Language } from "@/lib/messages"

export type ProjectImage = {
  image: string
  label: string
}

export type ProjectSubProject = {
  title: string
  status: string
  description: string
}

export type Project = {
  title: string
  excerpt: string
  detail: string[]
  images?: ProjectImage[]
  subProjects?: ProjectSubProject[]
}

export const projectImages: Record<string, string> = {
  "communication-protocol-migration": "/projects/communication-protocol-migration/main.webp",
  "multifunction-hub-pcb-design": "/projects/board-design/main.webp",
  "ensem-eco-marathon": "/projects/eco-marathon/main.webp",
  "autonomous-robot": "/projects/autonomous-car/main.webp",
  "arduino-system-design": "/projects/arduino-system-design/main.svg",
}

export const projectContent: Record<Language, Record<string, Project>> = {
  en: {
    "communication-protocol-migration": {
      title: "Communication Protocol Migration",
      excerpt:
        "Migrated 2 proprietary protocols: QDL (RS485, AVR to STM32) using standard C libraries, and QDL Fast (Ethernet, Linux to STM32) using HAL and FreeRTOS.",
      detail: [
        "Migrated two proprietary communication protocols onto a modern STM32 platform. The QDL protocol over RS485 was ported from an AVR microcontroller to STM32 using only standard C libraries, preserving wire compatibility.",
        "The QDL Fast variant over Ethernet was migrated from a Linux host to an embedded STM32 target using the HAL abstraction layer and FreeRTOS, enabling deterministic real-time streaming between endpoints.",
      ],
    },
    "multifunction-hub-pcb-design": {
      title: "Multifunction Hub PCB Design",
      excerpt:
        "Designed a PCB board in Altium integrating Ethernet Hub, RS485 Hub, I2C modules, USB flash, multi-function relays, and servo motors.",
      detail: [
        "Designed a multifunction hub printed circuit board from schematic to layout in Altium Designer. The board integrates an Ethernet hub, an RS485 hub, multiple I2C peripheral modules, USB flash memory, multi-function relays and servo motor drivers.",
        "Delivered a full manufacturing package including stack-up definition, component placement, routing, design rule checks and fabrication outputs, ready for prototype production.",
      ],
    },
    "ensem-eco-marathon": {
      title: "ENSEM Eco Marathon",
      excerpt:
        "Design and manufacture of a test bench to measure vehicle performance for a race organized by Shell. Secondary car driver.",
      detail: [
        "Contributed to the ENSEM Eco-marathon team, which builds an energy-efficient hydrogen prototype vehicle (PEMFC fuel cell, carbon-fibre body) to compete in the Shell Eco-marathon.",
        "Worked across hardware build and validation while also serving as the driver of the car during testing and the competition.",
      ],
      images: [
        { image: "/projects/eco-marathon/bench.webp", label: "Test bench (CAD model)" },
        {
          image: "/projects/eco-marathon/car.jpg",
          label: "The car - hydrogen fuel cell (PEMFC), carbon-fibre body (120 kg)",
        },
        { image: "/projects/eco-marathon/competition.jpg", label: "The competition - organized by Shell" },
      ],
      subProjects: [
        {
          title: "Test bench design",
          status: "Done",
          description: "Technical documentation, 3D modelling, component sourcing",
        },
        {
          title: "Test bench assembly",
          status: "In progress",
          description: "Precision assembly, shaft alignment",
        },
        {
          title: "Driver",
          status: "1 competition",
          description: "Pass technical inspection, follow race instructions, 4th place",
        },
      ],
    },
    "autonomous-robot": {
      title: "Autonomous Robot",
      excerpt:
        "Controlled an autonomous geolocation robot capable of navigating optimally to a list of coordinates using Python and TCP protocols.",
      detail: [
        "Controlled an autonomous geolocation robot able to navigate optimally to a set of coordinates. The system runs in Python and communicates with the robot over TCP protocols.",
        "Implemented path planning and real-time control logic so the robot reaches each waypoint efficiently while reacting to its current position.",
      ],
    },
    "arduino-system-design": {
      title: "Arduino System Design and Development",
      excerpt:
        "Personal projects involving the creation of electronic systems such as a real-time radar, a remote-controlled car, and a robot arm.",
      detail: [
        "Several personal projects involving the design and development of original electronic systems, including a real-time radar, a remote-controlled car and a robot arm.",
        "Each system was built around the Arduino Framework, combining electronic circuit design, embedded programming and mechanical assembly to create fully functional prototypes.",
      ],
    },
  },
  fr: {
    "communication-protocol-migration": {
      title: "Migration de protocoles de communication",
      excerpt:
        "Migration de 2 protocoles propriétaires : QDL (RS485, AVR vers STM32) avec bibliothèques C standard, et QDL Fast (Ethernet, Linux vers STM32) avec HAL et FreeRTOS.",
      detail: [
        "Migration de deux protocoles de communication propriétaires vers une plateforme STM32 moderne. Le protocole QDL sur RS485 a été porté d'un microcontrôleur AVR vers STM32 en utilisant uniquement les bibliothèques C standard, tout en préservant la compatibilité au niveau du bus.",
        "La variante QDL Fast sur Ethernet a été migrée d'un hôte Linux vers une cible STM32 embarquée via la couche d'abstraction HAL et FreeRTOS, permettant un flux temps réel déterministe entre les équipements.",
      ],
    },
    "multifunction-hub-pcb-design": {
      title: "Conception PCB d'un hub multifonction",
      excerpt:
        "Conception d'une carte PCB sous Altium intégrant Hub Ethernet, Hub RS485, modules I2C, mémoire flash USB, relais multifonctions, et servomoteurs.",
      detail: [
        "Conception d'une carte de circuit imprimé multifonction, du schéma à la mise en page, sous Altium Designer. La carte intègre un hub Ethernet, un hub RS485, plusieurs modules périphériques I2C, une mémoire flash USB, des relais multifonctions et des pilotes de servomoteurs.",
        "Livraison d'un dossier de fabrication complet : définition de l'empilement, placement des composants, routage, contrôles de règles de conception et sorties de fabrication, prêt pour la production de prototypes.",
      ],
    },
    "ensem-eco-marathon": {
      title: "ENSEM Eco Marathon",
      excerpt:
        "Conception et réalisation d'un banc d'essai pour mesurer les performances d'un véhicule pour une course organisée par Shell. Second pilote.",
      detail: [
        "Contribution à l'équipe ENSEM Eco-marathon, qui construit un véhicule prototype à hydrogène économe en énergie (pile à combustible PEMFC, carrosserie en fibre de carbone) pour participer au Shell Eco-marathon.",
        "Participation à la construction et à la validation matérielle, ainsi qu'au rôle de pilote de la voiture pendant les essais et la compétition.",
      ],
      images: [
        { image: "/projects/eco-marathon/bench.webp", label: "Banc d'essai (modèle CAO)" },
        {
          image: "/projects/eco-marathon/car.jpg",
          label: "La voiture - cellule hydrogène (PEMFC), corps en fibre de carbone (120 kg)",
        },
        { image: "/projects/eco-marathon/competition.jpg", label: "La compétition - organisée par Shell" },
      ],
      subProjects: [
        {
          title: "Conception de banc d'essai",
          status: "Fait",
          description: "Documentation technique, modélisation 3D, approvisionnement en composants",
        },
        {
          title: "Assemblage du banc d'essai",
          status: "En cours",
          description: "Assemblage de précision, alignement d'arbre",
        },
        {
          title: "Pilote",
          status: "1 compétition",
          description: "Passer l'inspection technique, suivre les instructions de la course, 4ème place",
        },
      ],
    },
    "autonomous-robot": {
      title: "Robot autonome",
      excerpt:
        "Commande d'un robot autonome de géolocalisation capable de naviguer de manière optimale vers une liste de coordonnées en utilisant Python et protocoles TCP.",
      detail: [
        "Commande d'un robot autonome de géolocalisation capable de naviguer de manière optimale vers un ensemble de coordonnées. Le système s'exécute en Python et communique avec le robot via des protocoles TCP.",
        "Mise en œuvre de la planification de trajectoire et de la logique de contrôle en temps réel afin que le robot atteigne chaque point de passage efficacement en réagissant à sa position courante.",
      ],
    },
    "arduino-system-design": {
      title: "Conception et développement de systèmes Arduino",
      excerpt:
        "Projets personnels portant sur la création de systèmes électroniques tels qu'un radar temps réel, une voiture télécommandée et un bras robotique.",
      detail: [
        "Plusieurs projets personnels de conception et de développement de systèmes électroniques originaux, dont un radar temps réel, une voiture télécommandée et un bras robotique.",
        "Chaque système repose sur le framework Arduino, combinant conception de circuits électroniques, programmation embarquée et assemblage mécanique pour créer des prototypes entièrement fonctionnels.",
      ],
    },
  },
}

export const projectOrder = Object.keys(projectContent.en)

export function getProjects(lang: Language) {
  return projectContent[lang]
}

export function getProject(lang: Language, slug: string) {
  return projectContent[lang][slug]
}
