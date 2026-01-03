export function JsonLd() {
  const baseUrl = "https://arthur-papailhau.com";

  // Person Schema - for personal branding and knowledge graph
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${baseUrl}/#person`,
    name: "Arthur Papailhau",
    givenName: "Arthur",
    familyName: "Papailhau",
    url: baseUrl,
    image: `${baseUrl}/og-image.png`,
    email: "papailhau@gmail.com",
    jobTitle: "Senior Software Engineer & Founder",
    description:
      "Senior Software Engineer & Founder based in San Francisco. Previously Tech Lead at Meta AI and iOS Tech Lead at Uber. Building AI-powered products.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "San Francisco",
      addressRegion: "CA",
      addressCountry: "US",
    },
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "INSA Lyon",
        url: "https://www.insa-lyon.fr/",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Linköping University",
        url: "https://liu.se/",
      },
    ],
    worksFor: {
      "@type": "Organization",
      name: "Stealth AI Startup",
      description: "AI-powered SaaS products",
    },
    knowsAbout: [
      "iOS Development",
      "React",
      "TypeScript",
      "Machine Learning",
      "Artificial Intelligence",
      "Swift",
      "Python",
      "Full Stack Development",
      "Mobile Development",
      "Product Development",
    ],
    sameAs: [
      "https://www.linkedin.com/in/arthur-papailhau",
      "https://twitter.com/papay0",
      "https://x.com/papay0",
      "https://github.com/papay0",
    ],
  };

  // ProfilePage Schema - for the portfolio page itself
  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": baseUrl,
    name: "Arthur Papailhau | ArthurGPT Portfolio",
    description:
      "Interactive portfolio of Arthur Papailhau - Senior Software Engineer & Founder. Previously Tech Lead at Meta AI and Uber.",
    url: baseUrl,
    mainEntity: {
      "@id": `${baseUrl}/#person`,
    },
    dateCreated: "2025-01-01",
    dateModified: new Date().toISOString().split("T")[0],
    inLanguage: "en-US",
  };

  // WebSite Schema - for site-wide SEO
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    name: "Arthur Papailhau Portfolio",
    alternateName: "ArthurGPT",
    url: baseUrl,
    description:
      "Personal portfolio and professional profile of Arthur Papailhau",
    publisher: {
      "@id": `${baseUrl}/#person`,
    },
    inLanguage: "en-US",
  };

  // Work Experience as ItemList for rich snippets
  const workExperienceSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Professional Experience",
    description: "Work history of Arthur Papailhau",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Role",
          roleName: "Founder",
          startDate: "2025-10",
          memberOf: {
            "@type": "Organization",
            name: "AI Startup (Stealth)",
            description: "Building AI-powered SaaS products",
          },
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Role",
          roleName: "Tech Lead, Core Experience Team",
          startDate: "2024-01",
          endDate: "2025-10",
          memberOf: {
            "@type": "Organization",
            name: "Meta AI",
            url: "https://ai.meta.com/",
            logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
          },
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Role",
          roleName: "iOS Tech Lead",
          startDate: "2017-06",
          endDate: "2024-01",
          memberOf: {
            "@type": "Organization",
            name: "Uber",
            url: "https://www.uber.com/",
            logo: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png",
          },
        },
      },
    ],
  };

  // BreadcrumbList for navigation
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: `${baseUrl}/#about`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Experience",
        item: `${baseUrl}/#experience`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Projects",
        item: `${baseUrl}/#projects`,
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Contact",
        item: `${baseUrl}/#contact`,
      },
    ],
  };

  // FAQPage Schema for potential featured snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who is Arthur Papailhau?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Arthur Papailhau is a Senior Software Engineer and Founder based in San Francisco. He was previously Tech Lead at Meta AI on the Core Experience Team and iOS Tech Lead at Uber for 6.5 years, where he led approximately 20 engineers.",
        },
      },
      {
        "@type": "Question",
        name: "What is Arthur Papailhau's experience?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Arthur has over 8 years of experience in software engineering. He worked at Uber from 2017-2024 as iOS Tech Lead, then at Meta AI in 2024-2025 as Tech Lead for the Core Experience Team. He is currently a Founder building AI-powered SaaS products.",
        },
      },
      {
        "@type": "Question",
        name: "What technologies does Arthur Papailhau work with?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Arthur is an expert in iOS development (Swift), React, TypeScript, Python, and machine learning. He has extensive experience with full-stack development, mobile development, and building AI-powered applications.",
        },
      },
      {
        "@type": "Question",
        name: "How can I contact Arthur Papailhau?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can contact Arthur via email at papailhau@gmail.com, on LinkedIn at linkedin.com/in/arthur-papailhau, or on Twitter/X at @papay0.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(workExperienceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
