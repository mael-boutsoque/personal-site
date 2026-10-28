import type { Language } from "@/lib/messages"

export type LegalSection = {
  title: string
  paragraphs: string[]
  contact?: boolean
}

export type LegalContent = {
  title: string
  subtitle: string
  back: string
  metaDescription: string
  contactLabel: string
  sections: LegalSection[]
}

export const legalNoticeContent: Record<Language, LegalContent> = {
  en: {
    title: "Legal Notice",
    subtitle: "Legal notices for the site",
    back: "← Back to home",
    metaDescription:
      "Legal notices for the website of Maël Boutsoque: publisher identification, contact details, intellectual property, hosting and personal data policy.",
    contactLabel: "Contact",
    sections: [
      {
        title: "Publisher",
        paragraphs: [
          "This website is published by Maël Boutsoque. As the publisher, Maël Boutsoque is responsible for the content published on this site and ensures it is kept accurate and up to date as far as reasonably possible.",
        ],
        contact: true,
      },
      {
        title: "Hosting",
        paragraphs: [
          "This site is a static website with no server-side processing. It is built with Next.js and hosted on the deployment platform used to publish this portfolio (Vercel). The host provides the servers, storage and network infrastructure on which the site is delivered to visitors.",
        ],
      },
      {
        title: "Intellectual Property",
        paragraphs: [
          "The structure, texts, images, logos and all other elements presented on this website are the property of Maël Boutsoque unless otherwise stated. They are protected by intellectual property law. Any reproduction, representation, distribution or use, in whole or in part, without prior written consent is prohibited.",
        ],
      },
      {
        title: "Personal Data",
        paragraphs: [
          "In accordance with the French data protection act (Loi Informatique et Libertés) and the General Data Protection Regulation (GDPR), you have the right to access, rectify, erase, restrict and object to the processing of your personal data. You may exercise these rights by contacting the publisher at the email address listed above.",
          "This website does not collect or process personal data. It uses no analytic or tracking cookies beyond what is strictly necessary to deliver the pages you request.",
        ],
      },
      {
        title: "Liability",
        paragraphs: [
          "The information provided on this site is intended for general information. While every effort is made to keep it accurate, it is provided without warranty of any kind and does not constitute professional advice. Access to any external sites linked from this page remains at the visitor's own responsibility.",
        ],
      },
    ],
  },
  fr: {
    title: "Mentions légales",
    subtitle: "Mentions légales du site",
    back: "← Retour à l'accueil",
    metaDescription:
      "Mentions légales du site de Maël Boutsoque : identification de l'éditeur, coordonnées, propriété intellectuelle, hébergement et politique de données personnelles.",
    contactLabel: "Contact",
    sections: [
      {
        title: "Éditeur",
        paragraphs: [
          "Ce site est publié par Maël Boutsoque. En tant qu'éditeur, Maël Boutsoque est responsable du contenu publié sur ce site et veille à ce qu'il soit exact et à jour dans la mesure du raisonnable.",
        ],
        contact: true,
      },
      {
        title: "Hébergement",
        paragraphs: [
          "Ce site est un site statique sans traitement côté serveur. Il est développé avec Next.js et hébergé sur la plateforme de déploiement utilisée pour publier ce portfolio (Vercel). L'hébergeur fournit les serveurs, le stockage et l'infrastructure réseau qui permettent de diffuser le site aux visiteurs.",
        ],
      },
      {
        title: "Propriété intellectuelle",
        paragraphs: [
          "La structure, les textes, les images, les logos et tous les autres éléments présentés sur ce site sont la propriété de Maël Boutsoque, sauf mention contraire. Ils sont protégés par le droit de la propriété intellectuelle. Toute reproduction, représentation, distribution ou utilisation, totale ou partielle, sans autorisation écrite préalable, est interdite.",
        ],
      },
      {
        title: "Données personnelles",
        paragraphs: [
          "Conformément à la loi Informatique et Libertés et au Règlement général sur la protection des données (RGPD), vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation et d'opposition au traitement de vos données personnelles. Vous pouvez exercer ces droits en contactant l'éditeur à l'adresse email indiquée ci-dessus.",
          "Ce site ne collecte ni ne traite de données personnelles. Il n'utilise aucun cookie analytique ou de suivi au-delà de ce qui est strictement nécessaire pour servir les pages demandées.",
        ],
      },
      {
        title: "Responsabilité",
        paragraphs: [
          "Les informations fournies sur ce site sont destinées à l'information générale. Bien que tout soit mis en œuvre pour qu'elles restent exactes, elles sont fournies sans garantie d'aucune sorte et ne constituent pas un conseil professionnel. L'accès aux sites externes liés depuis cette page reste sous la responsabilité du visiteur.",
        ],
      },
    ],
  },
}
