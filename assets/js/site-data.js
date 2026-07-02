const CF_BASE = "https://imagedelivery.net/SRt55pBu4n6Lz33qNPNE1g";

export const DSG_BRAND = {
  tagline: "Talent is everywhere. Opportunity starts here.",
  positioningLine: "Discovery Sound Garden cultivates possibility. Vanguard Voices lets the world hear what it becomes.",
  corePromise: "Talent should never be limited by circumstance.",
  pipeline: ["Education", "Recording opportunity", "Performance outcomes", "Community proof", "Donor story"],
  typography: {
    display: "Playfair Display",
    body: "Gilroy"
  },
  colors: {
    cloud: "#f5f5f7",
    ink: "#1d1d1f",
    deepGardenGreen: "#053527",
    sageGreen: "#4b6553",
    warmStone: "#e3dec9",
    earthBrown: "#6f4121",
    harvestGold: "#c4a25d",
    softCream: "#fefae0"
  }
};

export const DSG_LINKS = {
  internalPages: {
    home: "/",
    programs: "#programs",
    donate: "#donate",
    impact: "#impact",
    vanguardVoices: "#vanguard-voices",
    foundations: "#foundations",
    partners: "#partners",
    contact: "#contact",
    transparency: "#transparency",
    privacy: "#privacy"
  },
  legacyPages: {
    currentHome: "https://discoverysoundgarden.com/",
    currentProgramOfferings: "https://discoverysoundgarden.com/program-offerings",
    currentWhyOurSoundGarden: "https://discoverysoundgarden.com/why-our-sound-garden",
    currentAboutDsg: "https://discoverysoundgarden.com/about-dsg",
    currentDonateToDsg: "https://discoverysoundgarden.com/donate-to-dsg",
    currentDonateCanonicalFromFounder: "https://discoverysoundgarden.com/donate",
    currentVanguardVoices: "https://discoverysoundgarden.com/vanguard-voices",
    currentFoundations: "https://discoverysoundgarden.com/foundations-of-musicianship",
    currentFounders: "https://discoverysoundgarden.com/founders",
    currentKickstarter: "https://discoverysoundgarden.com/kickstarter",
    currentTerms: "https://discoverysoundgarden.com/terms-conditions"
  },
  donation: {
    status: "ACTIVE",
    provider: "Zeffy",
    canonicalUrl: "https://www.zeffy.com/en-US/donation-form/donate-to-dsg",
    preferredVisibleCta: "Sponsor Opportunity",
    alternateCta: "Donate to DSG",
    note: "Discovery Sound Garden is a 501(c)(3) nonprofit. Confirm final tax-deductible donation language before launch."
  },
  legacyDonation: {
    status: "INACTIVE / LEGACY REFERENCE",
    provider: "Fractured Atlas",
    url: "",
    note: "Old donation flow discovered on prior site. Do not use as active donation CTA unless leadership reactivates it."
  },
  newsletter: {
    provider: "Zeffy",
    embedUrl: "https://www.zeffy.com/en-US/embed/newsletter-form/get-notifications-for-events",
    fallbackUrl: "https://www.zeffy.com/en-US/embed/newsletter-form/get-notifications-for-events",
    ctaLabel: "Get Notifications for Events"
  },
  social: {
    instagram: "https://www.instagram.com/discoverysoundgarden/?utm_source=ig_embed&ig_rid=AiLeIGBfsbzvnTIXAc5oqQ4",
    instagramDmCta: "DM “MUSIC”"
  },
  cloudflareImages: {
    accountHash: "SRt55pBu4n6Lz33qNPNE1g",
    deliveryPattern: "https://imagedelivery.net/SRt55pBu4n6Lz33qNPNE1g/<image_id>/<variant_name>"
  },
  tracking: {
    googleTagManager: "TODO",
    ga4: "TODO",
    metaPixel: "TODO",
    donationConversionEvent: "TODO",
    interestFormSubmitEvent: "TODO",
    findYourPathClickEvent: "TODO",
    instagramDmClickEvent: "TODO"
  }
};

function image(label, cloudflareId, variant, alt, notes) {
  return {
    label,
    cloudflareId,
    variant,
    url: `${CF_BASE}/${cloudflareId}/${variant}`,
    alt,
    sourceType: "placeholder",
    sourceUrl: "",
    license: "Needs final image approval",
    creditRequired: false,
    creditText: "",
    consentStatus: "Not applicable until final image is selected",
    approved: false,
    notes
  };
}

export const DSG_IMAGES = {
  hero: image("Homepage hero", "homepage/hero-placeholder", "hero", "A welcoming music learning moment representing opportunity through Discovery Sound Garden", "Replace with a real DSG or approved licensed image before launch."),
  startLearning: image("Start Learning card", "homepage/start-learning-placeholder", "card", "Beginner-friendly music materials with notes and an instrument", "Use for learning pathway visuals."),
  vanguardVoices: image("Vanguard Voices", "homepage/vanguard-voices-placeholder", "card", "A warm community singing or rehearsal moment", "Use real DSG singing photography if available."),
  createRecord: image("Create or Record", "homepage/create-record-placeholder", "card", "A microphone, notebook, and recording setup for turning ideas into songs", "Avoid luxury studio imagery."),
  partnerProgramming: image("Partner Programming", "homepage/partner-programming-placeholder", "card", "A community music workshop setup prepared for participants", "Avoid corporate handshake stock photos."),
  donationImpact: image("Donation impact", "homepage/donation-impact-placeholder", "card", "Music materials representing sponsored opportunity and creative growth", "Use human or symbolic pathway imagery."),
  founderTrust: image("Founder and trust", "homepage/founder-trust-placeholder", "portrait", "Founder or instructor portrait placeholder for Discovery Sound Garden", "Replace with approved founder/instructor photo."),
  newsletter: image("Newsletter and event notifications", "homepage/newsletter-placeholder", "card", "A warm music and garden-inspired graphic for event notifications", "Keep calm and simple."),
  openGraph: image("Open Graph social share", "social/open-graph-placeholder", "og", "Discovery Sound Garden branded image with the tagline Talent is everywhere. Opportunity starts here.", "Create a branded social sharing image before launch.")
};
