/* =============================================
   Listings — Luxe Woningen
   Woningkaarten genereren vanuit data
   ============================================= */

/**
 * Formatteert een prijs naar Nederlands formaat: € 1.850.000
 */
function formateerPrijs(prijs) {
  return '€ ' + prijs.toLocaleString('nl-NL');
}

/**
 * Genereert de HTML voor één woningkaart
 */
function maakKaartHTML(woning) {
  const voorzieningenHTML = woning.voorzieningen
    .map(v => `<span class="listing-card__amenity">${v}</span>`)
    .join('');

  return `
    <article class="listing-card" data-id="${woning.id}">
      <a class="listing-card__link" href="detail.html?id=${woning.id}" aria-label="${woning.title} — ${formateerPrijs(woning.prijs)}">
        <div class="listing-card__image-wrapper">
          <img
            class="listing-card__image"
            src="${woning.afbeelding}"
            alt="${woning.title}"
            loading="lazy"
          >
          <span class="listing-card__type-badge">${woning.type}</span>
        </div>
      </a>
      <div class="listing-card__body">
        <p class="listing-card__location">
          <svg class="listing-card__location-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
            <circle cx="12" cy="9" r="2.5"/>
          </svg>
          ${woning.stad}
        </p>
        <a href="detail.html?id=${woning.id}" class="listing-card__link">
          <h2 class="listing-card__title">${woning.title}</h2>
        </a>
        <p class="listing-card__price">${formateerPrijs(woning.prijs)}</p>
        <div class="listing-card__specs">
          <span class="listing-card__spec">
            <svg class="listing-card__spec-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 10v8a1 1 0 001 1h16a1 1 0 001-1v-8M3 10l2-6h14l2 6M3 10h18M7 10v9m10-9v9"/>
            </svg>
            ${woning.kamers} kamers
          </span>
          <span class="listing-card__spec">
            <svg class="listing-card__spec-icon" viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="1"/>
              <path d="M3 9h18M9 3v18"/>
            </svg>
            ${woning.oppervlakte} m²
          </span>
        </div>
        ${voorzieningenHTML ? `<div class="listing-card__amenities">${voorzieningenHTML}</div>` : ''}
      </div>
    </article>
  `;
}

/**
 * Rendert een array van woningen in het listings grid
 */
function renderListings(lijst) {
  const grid = document.getElementById('listingsGrid');
  const teller = document.getElementById('aantalGevonden');
  const leegMelding = document.getElementById('listingsEmpty');

  if (lijst.length === 0) {
    grid.innerHTML = '';
    teller.textContent = '0';
    leegMelding.hidden = false;
  } else {
    grid.innerHTML = lijst.map(maakKaartHTML).join('');
    teller.textContent = lijst.length;
    leegMelding.hidden = true;
  }
}
