/* =============================================
   Main — Luxe Woningen
   Initialisatie en event listeners
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {
  /* Eerste render: alle woningen tonen */
  renderListings(woningen);

  /* Filters activeren */
  initFilters();
});
