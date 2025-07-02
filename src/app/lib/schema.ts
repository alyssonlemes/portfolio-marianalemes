export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Mariana Lemes",
  "jobTitle": "Fisioterapeuta Pediátrica",
  "description": "Fisioterapeuta pediátrica especializada em desenvolvimento infantil com atendimento humanizado para crianças com alterações neurológicas, respiratórias e ortopédicas.",
  "url": "https://marianalemes.com.br",
  "sameAs": [
    "https://www.instagram.com/marianalemes.fisio",
    "https://www.linkedin.com/in/marianalemes"
  ],
  "knowsAbout": [
    "Fisioterapia Pediátrica",
    "Desenvolvimento Infantil",
    "Estimulação Precoce",
    "Reabilitação Neurológica Pediátrica",
    "Fisioterapia Respiratória Pediátrica"
  ],
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "degree",
    "educationalLevel": "Bachelor's degree",
    "about": "Fisioterapia"
  }
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Mariana Lemes - Fisioterapia Pediátrica",
  "description": "Consultório especializado em fisioterapia pediátrica e desenvolvimento infantil",
  "url": "https://marianalemes.com.br",
  "telephone": "+55-11-99999-9999",
  "email": "marianaldiamantino@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "São Paulo",
    "addressRegion": "SP",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -23.5505,
    "longitude": -46.6333
  },
  "openingHours": [
    "Mo-Fr 08:00-18:00",
    "Sa 08:00-12:00"
  ],
  "priceRange": "$$",
  "acceptsReservations": true,
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Serviços de Fisioterapia Pediátrica",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Avaliação Fisioterapêutica Pediátrica",
          "description": "Avaliação completa do desenvolvimento motor infantil"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Estimulação Precoce",
          "description": "Intervenção precoce para bebês e crianças pequenas"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Fisioterapia Neurológica Pediátrica",
          "description": "Tratamento especializado para alterações neurológicas"
        }
      }
    ]
  }
};

export const medicalWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "name": "Mariana Lemes - Fisioterapeuta Pediátrica",
  "description": "Site oficial da fisioterapeuta pediátrica Mariana Lemes, especializada em desenvolvimento infantil",
  "url": "https://marianalemes.com.br",
  "mainContentOfPage": {
    "@type": "WebPageElement",
    "cssSelector": "main"
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://marianalemes.com.br"
      }
    ]
  },
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", "h2", ".hero-description"]
  }
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "O que é fisioterapia pediátrica?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A fisioterapia pediátrica é uma especialidade que atua no desenvolvimento motor de bebês e crianças, tratando alterações neurológicas, respiratórias e ortopédicas através de técnicas específicas e lúdicas."
      }
    },
    {
      "@type": "Question",
      "name": "Quando procurar um fisioterapeuta pediátrico?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Deve-se procurar quando há atraso no desenvolvimento motor, alterações posturais, dificuldades respiratórias, ou quando indicado pelo pediatra para estimulação precoce."
      }
    },
    {
      "@type": "Question",
      "name": "A partir de que idade pode fazer fisioterapia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A fisioterapia pediátrica pode ser iniciada desde os primeiros dias de vida, especialmente em casos de prematuridade ou alterações no desenvolvimento."
      }
    }
  ]
};
