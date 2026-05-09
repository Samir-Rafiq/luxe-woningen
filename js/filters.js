/* =============================================
   Filters — Luxe Woningen
   Filterlogica en live DOM-manipulatie
   ============================================= */

/* Huidige filterwaarden bijhouden */
const actieveFilters = {
  prijsMin: 100000,
  prijsMax: 5000000,
  stad: '',
  kamers: null,   /* null = geen filter op kamers */
  type: '',
  oppMin: 30,
  oppMax: 500,
  voorzieningen: []
};

/**
 * Past de actieve filters toe op de woningdata en triggert een herrender
 */
function pasFiltersToe() {
  const gefilterd = woningen.filter(woning => {
    /* Prijsfilter */
    if (woning.prijs < actieveFilters.prijsMin) return false;
    if (woning.prijs > actieveFilters.prijsMax) return false;

    /* Stadfilter */
    if (actieveFilters.stad && woning.stad !== actieveFilters.stad) return false;

    /* Kamersfilter — 5+ vangt alles >= 5 */
    if (actieveFilters.kamers !== null) {
      if (actieveFilters.kamers === 5) {
        if (woning.kamers < 5) return false;
      } else {
        if (woning.kamers !== actieveFilters.kamers) return false;
      }
    }

    /* Typefilter */
    if (actieveFilters.type && woning.type !== actieveFilters.type) return false;

    /* Oppervlaktefilter */
    if (woning.oppervlakte < actieveFilters.oppMin) return false;
    if (woning.oppervlakte > actieveFilters.oppMax) return false;

    /* Voorzieningenfilter — woning moet alle geselecteerde hebben */
    if (actieveFilters.voorzieningen.length > 0) {
      const heeftAlles = actieveFilters.voorzieningen.every(v =>
        woning.voorzieningen.includes(v)
      );
      if (!heeftAlles) return false;
    }

    return true;
  });

  renderListings(gefilterd);
}

/**
 * Formatteert prijslabels boven de sliders
 */
function formateerPrijsLabel(waarde) {
  if (waarde >= 1000000) {
    return '€ ' + (waarde / 1000000).toFixed(1).replace('.', ',') + ' mln';
  }
  return '€ ' + waarde.toLocaleString('nl-NL');
}

/**
 * Stelt alle filters terug naar beginwaarden
 */
function resetFilters() {
  /* Prijs */
  document.getElementById('prijsMin').value = 100000;
  document.getElementById('prijsMax').value = 5000000;
  document.getElementById('prijsMinLabel').textContent = formateerPrijsLabel(100000);
  document.getElementById('prijsMaxLabel').textContent = formateerPrijsLabel(5000000);
  actieveFilters.prijsMin = 100000;
  actieveFilters.prijsMax = 5000000;

  /* Stad */
  document.getElementById('filterStad').value = '';
  actieveFilters.stad = '';

  /* Kamers — verwijder actieve klasse van alle toggleknoppen */
  document.querySelectorAll('.filter-toggle').forEach(btn => {
    btn.classList.remove('filter-toggle--active');
  });
  actieveFilters.kamers = null;

  /* Type */
  document.getElementById('filterType').value = '';
  actieveFilters.type = '';

  /* Oppervlakte */
  document.getElementById('oppMin').value = 30;
  document.getElementById('oppMax').value = 500;
  document.getElementById('oppMinLabel').textContent = '30 m²';
  document.getElementById('oppMaxLabel').textContent = '500 m²';
  actieveFilters.oppMin = 30;
  actieveFilters.oppMax = 500;

  /* Voorzieningen */
  document.querySelectorAll('.filter-checkbox__input').forEach(cb => {
    cb.checked = false;
  });
  actieveFilters.voorzieningen = [];

  pasFiltersToe();
}

/**
 * Registreert alle event listeners voor de filtercontroles
 */
function initFilters() {
  /* Prijs min slider */
  const prijsMinSlider = document.getElementById('prijsMin');
  const prijsMaxSlider = document.getElementById('prijsMax');

  prijsMinSlider.addEventListener('input', () => {
    /* Voorkom dat min groter wordt dan max */
    if (parseInt(prijsMinSlider.value) > parseInt(prijsMaxSlider.value)) {
      prijsMinSlider.value = prijsMaxSlider.value;
    }
    actieveFilters.prijsMin = parseInt(prijsMinSlider.value);
    document.getElementById('prijsMinLabel').textContent = formateerPrijsLabel(actieveFilters.prijsMin);
    pasFiltersToe();
  });

  prijsMaxSlider.addEventListener('input', () => {
    if (parseInt(prijsMaxSlider.value) < parseInt(prijsMinSlider.value)) {
      prijsMaxSlider.value = prijsMinSlider.value;
    }
    actieveFilters.prijsMax = parseInt(prijsMaxSlider.value);
    document.getElementById('prijsMaxLabel').textContent = formateerPrijsLabel(actieveFilters.prijsMax);
    pasFiltersToe();
  });

  /* Stad dropdown */
  document.getElementById('filterStad').addEventListener('change', (e) => {
    actieveFilters.stad = e.target.value;
    pasFiltersToe();
  });

  /* Kamers toggle knoppen */
  document.querySelectorAll('.filter-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const waarde = parseInt(btn.dataset.kamers);

      /* Klik op al-actieve knop zet filter uit */
      if (actieveFilters.kamers === waarde) {
        actieveFilters.kamers = null;
        btn.classList.remove('filter-toggle--active');
      } else {
        document.querySelectorAll('.filter-toggle').forEach(b => b.classList.remove('filter-toggle--active'));
        btn.classList.add('filter-toggle--active');
        actieveFilters.kamers = waarde;
      }
      pasFiltersToe();
    });
  });

  /* Type dropdown */
  document.getElementById('filterType').addEventListener('change', (e) => {
    actieveFilters.type = e.target.value;
    pasFiltersToe();
  });

  /* Oppervlakte min slider */
  const oppMinSlider = document.getElementById('oppMin');
  const oppMaxSlider = document.getElementById('oppMax');

  oppMinSlider.addEventListener('input', () => {
    if (parseInt(oppMinSlider.value) > parseInt(oppMaxSlider.value)) {
      oppMinSlider.value = oppMaxSlider.value;
    }
    actieveFilters.oppMin = parseInt(oppMinSlider.value);
    document.getElementById('oppMinLabel').textContent = actieveFilters.oppMin + ' m²';
    pasFiltersToe();
  });

  oppMaxSlider.addEventListener('input', () => {
    if (parseInt(oppMaxSlider.value) < parseInt(oppMinSlider.value)) {
      oppMaxSlider.value = oppMinSlider.value;
    }
    actieveFilters.oppMax = parseInt(oppMaxSlider.value);
    document.getElementById('oppMaxLabel').textContent = actieveFilters.oppMax + ' m²';
    pasFiltersToe();
  });

  /* Voorzieningen checkboxes */
  document.querySelectorAll('.filter-checkbox__input').forEach(cb => {
    cb.addEventListener('change', () => {
      if (cb.checked) {
        actieveFilters.voorzieningen.push(cb.value);
      } else {
        actieveFilters.voorzieningen = actieveFilters.voorzieningen.filter(v => v !== cb.value);
      }
      pasFiltersToe();
    });
  });

  /* Reset knoppen */
  document.getElementById('btnResetFilters').addEventListener('click', resetFilters);
  document.getElementById('btnResetEmpty').addEventListener('click', resetFilters);
}
