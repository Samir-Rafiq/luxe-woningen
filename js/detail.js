/* =============================================
   Detail — Luxe Woningen
   Detailpagina renderen vanuit URL parameter
   ============================================= */

/**
 * Leest het woning-ID uit de URL query string
 */
function leesWoningId() {
  const params = new URLSearchParams(window.location.search);
  return parseInt(params.get('id'), 10);
}

/**
 * Formatteert prijs naar Nederlands formaat
 */
function formateerPrijsDetail(prijs) {
  return '€ ' + prijs.toLocaleString('nl-NL');
}

/**
 * Rendert de volledige detailpagina voor één woning
 */
function renderDetailPagina() {
  const woningId = leesWoningId();
  const woning = woningen.find(w => w.id === woningId);
  const container = document.getElementById('detailInhoud');

  /* Onbekend ID — foutmelding tonen */
  if (!woning) {
    container.innerHTML = `
      <div class="listings-empty" style="margin-block: 4rem;">
        <p class="listings-empty__text">Woning niet gevonden. Mogelijk is deze listing verwijderd.</p>
        <a href="index.html" class="btn btn--gold">Terug naar overzicht</a>
      </div>
    `;
    return;
  }

  /* Paginatitel bijwerken */
  document.title = `${woning.title} — Luxe Woningen`;

  /* Voorzieningen als badges */
  const voorzieningenHTML = woning.voorzieningen
    .map(v => `<span class="detail-amenity">${v}</span>`)
    .join('');

  container.innerHTML = `
    <!-- Hero afbeelding -->
    <div class="detail-hero">
      <img
        class="detail-hero__image"
        src="${woning.afbeelding}"
        alt="${woning.title}"
      >
      <div class="detail-hero__overlay"></div>
      <span class="detail-hero__badge">${woning.type}</span>
    </div>

    <!-- Inhoud grid -->
    <div class="detail-content">

      <!-- Linker kolom: hoofdinfo + beschrijving -->
      <div class="detail-main">
        <p class="detail-main__location">${woning.stad}</p>
        <h1 class="detail-main__title">${woning.title}</h1>
        <p class="detail-main__price">${formateerPrijsDetail(woning.prijs)}</p>

        <!-- Kenmerken grid -->
        <div class="detail-specs">
          <div class="detail-spec">
            <span class="detail-spec__label">Type</span>
            <span class="detail-spec__value">${woning.type}</span>
          </div>
          <div class="detail-spec">
            <span class="detail-spec__label">Stad</span>
            <span class="detail-spec__value">${woning.stad}</span>
          </div>
          <div class="detail-spec">
            <span class="detail-spec__label">Kamers</span>
            <span class="detail-spec__value">${woning.kamers}</span>
          </div>
          <div class="detail-spec">
            <span class="detail-spec__label">Oppervlakte</span>
            <span class="detail-spec__value">${woning.oppervlakte} m²</span>
          </div>
        </div>

        <!-- Beschrijving -->
        <div class="detail-description">
          <h2 class="detail-description__title">Over deze woning</h2>
          <p class="detail-description__text">${woning.beschrijving}</p>
        </div>

        <!-- Voorzieningen -->
        ${woning.voorzieningen.length > 0 ? `
          <div class="detail-amenities">
            <h2 class="detail-amenities__title">Voorzieningen</h2>
            <div class="detail-amenities__list">
              ${voorzieningenHTML}
            </div>
          </div>
        ` : ''}
      </div>

      <!-- Rechter kolom: CTA paneel -->
      <aside class="detail-sidebar">
        <div class="detail-cta-panel">
          <p class="detail-cta-panel__label">Vraagprijs</p>
          <p class="detail-cta-panel__price">${formateerPrijsDetail(woning.prijs)}</p>
          <button class="btn btn--gold detail-cta-panel__btn" type="button">
            Bezichtiging aanvragen
          </button>
          <button class="btn btn--outline detail-cta-panel__btn" type="button">
            Brochure downloaden
          </button>
          <p class="detail-cta-panel__note">Kosteloos en vrijblijvend</p>
        </div>
      </aside>

    </div>
  `;
}

document.addEventListener('DOMContentLoaded', renderDetailPagina);
