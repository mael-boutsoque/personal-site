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

export const projects: Record<string, Project> = {
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
        description: "Assemblage de précision, Alignement d'arbre",
      },
      {
        title: "Pilote",
        status: "1 compétition",
        description: "Passer l'inspection technique, Suivre les instructions de la course, 4ème place",
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
}

export const projectOrder = Object.keys(projects)
