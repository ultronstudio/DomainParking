(function () {
  const CONTACT_EMAIL = "info@petrvurm.cz";
  const BRAND_URL = "https://petrvurm.cz";
  const rawHost = window.location.hostname;
  const hostname = rawHost === "localhost" ? "example.cz" : rawHost;

  const domainNameEl = document.getElementById("domainName");
  const labelTextEl = document.getElementById("labelText");
  const subtitleTextEl = document.getElementById("subtitleText");
  const contactCtaTextEl = document.getElementById("contactCtaText");
  const notePrefixTextEl = document.getElementById("notePrefixText");
  const noteMailLinkEl = document.getElementById("noteMailLink");
  const contactLinkEl = document.getElementById("contactLink");
  const metaDescriptionEl = document.getElementById("metaDescription");

  const tld = hostname.split(".").pop()?.toLowerCase() || "com";

  const translationsByLocale = {
    cs: {
      htmlLang: "cs",
      titleSuffix: "Doména na prodej",
      metaDescription: "Tato doména může být k dispozici k odkupu.",
      label: "Doménové parkoviště",
      subtitle: "Tato doména je momentálně zaparkovaná a může být k dispozici k odkupu.",
      contactCta: "Mám zájem",
      contactSubjectPrefix: "Zájem o doménu",
      notePrefix: "Pro více informací napište na"
    },
    sk: {
      htmlLang: "sk",
      titleSuffix: "Doména na predaj",
      metaDescription: "Táto doména môže byť dostupná na odkúpenie.",
      label: "Doménové parkovisko",
      subtitle: "Táto doména je momentálne zaparkovaná a môže byť dostupná na odkúpenie.",
      contactCta: "Mám záujem",
      contactSubjectPrefix: "Záujem o doménu",
      notePrefix: "Pre viac informácií napíšte na"
    },
    en: {
      htmlLang: "en",
      titleSuffix: "Domain for sale",
      metaDescription: "This domain may be available for acquisition.",
      label: "Domain parking",
      subtitle: "This domain is currently parked and may be available for purchase.",
      contactCta: "I am interested",
      contactSubjectPrefix: "Interest in domain",
      notePrefix: "For more information, contact"
    }
  };

  const localeByTld = {
    cz: "cs",
    sk: "sk",
    com: "en",
    eu: "en"
  };

  const locale = localeByTld[tld] || "en";
  const text = translationsByLocale[locale];

  domainNameEl.textContent = hostname;
  labelTextEl.textContent = text.label;
  subtitleTextEl.textContent = text.subtitle;
  contactCtaTextEl.textContent = text.contactCta;
  notePrefixTextEl.textContent = text.notePrefix;
  noteMailLinkEl.href = `mailto:${CONTACT_EMAIL}`;
  noteMailLinkEl.textContent = CONTACT_EMAIL;

  const subject = encodeURIComponent(`${text.contactSubjectPrefix} ${hostname}`);
  contactLinkEl.href = `mailto:${CONTACT_EMAIL}?subject=${subject}`;

  document.documentElement.lang = text.htmlLang;
  document.title = `${hostname} | ${text.titleSuffix}`;

  if (metaDescriptionEl) {
    metaDescriptionEl.setAttribute("content", text.metaDescription);
  }

  const brandLink = document.querySelector('.btn.secondary');
  if (brandLink) {
    brandLink.setAttribute("href", BRAND_URL);
  }
})();