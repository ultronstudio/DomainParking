(function () {
  const hostname = window.location.hostname;
  const domainNameEl = document.getElementById("domainName");
  const contactLinkEl = document.getElementById("contactLink");

  domainNameEl.textContent = hostname;

  const subject = encodeURIComponent(`Zájem o doménu ${hostname}`);
  contactLinkEl.href = `mailto:info@petrvurm.cz?subject=${subject}`;

  document.title = `${hostname} | Doména na prodej`;
})();