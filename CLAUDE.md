# 🏠 Project: Luxe Huizen Listings Website

## Doel
Een premium huizen listings website met een luxe, donker design. Denk aan het niveau van een high-end makelaar. De gebruiker kan huizen browsen en filteren op meerdere criteria.

---

## Tech Stack
- **HTML5** — semantische structuur
- **CSS3** — custom properties, flexbox, grid, geen frameworks
- **Vanilla JavaScript** — geen libraries of frameworks
- **Geen jQuery, geen React, geen Bootstrap**

---

## Design & Stijl

### Sfeer
Luxe, donker, premium. Denk aan: Sotheby's, Christie's Real Estate, high-end Amsterdamse makelaar.

### Kleurenpalet (gebruik als CSS custom properties)
```css
:root {
  --color-bg:          #0D0D0D;   /* Diepzwart achtergrond */
  --color-surface:     #161616;   /* Kaart / paneel achtergrond */
  --color-surface-alt: #1F1F1F;   /* Hover states, inputs */
  --color-border:      #2A2A2A;   /* Subtiele randen */
  --color-gold:        #C9A84C;   /* Primaire accent — goud */
  --color-gold-light:  #E2C47A;   /* Hover op goud */
  --color-text:        #F0EDE8;   /* Primaire tekst — warm wit */
  --color-text-muted:  #888888;   /* Secondaire tekst */
  --color-text-subtle: #555555;   /* Placeholder / labels */
}
```

### Typografie
- **Koppen:** `Playfair Display` (Google Fonts) — serif, elegant
- **Body / UI:** `Inter` (Google Fonts) — clean, modern
- Laad beide via Google Fonts in de `<head>`

### Design regels
- Altijd donkere achtergrond, NOOIT wit of lichtgrijs als basiskleur
- Goud (`--color-gold`) alleen gebruiken voor accenten: buttons, highlights, prijzen, iconen
- Kaarten hebben subtiele border (`1px solid var(--color-border)`) en lichte box-shadow
- Hover states zijn subtiel: licht oplichten van surface, goud accent zichtbaar maken
- Veel witruimte (ruime padding/margin) — premium voelt nooit druk
- Afbeeldingen altijd met `object-fit: cover` en vaste hoogte
- Border-radius: `8px` voor kaarten, `4px` voor inputs en buttons
- Geen felle kleuren, geen gradient-regenboogen — alleen donker + goud

---

## Projectstructuur

```
/
├── index.html          ← Hoofdpagina met listings + filters
├── detail.html         ← Detailpagina van één woning
├── css/
│   ├── reset.css       ← CSS reset / normalizatie
│   ├── variables.css   ← Alle custom properties (kleuren, fonts, spacing)
│   ├── main.css        ← Globale layout, typografie, utility classes
│   ├── header.css      ← Navigatie en header
│   ├── filters.css     ← Filterpaneel styling
│   ├── listings.css    ← Grid en woningkaarten
│   └── detail.css      ← Detailpagina styling
├── js/
│   ├── data.js         ← Array met nep-woningdata (minimaal 12 woningen)
│   ├── filters.js      ← Filterlogica en DOM-manipulatie
│   ├── listings.js     ← Kaarten renderen vanuit data
│   └── main.js         ← Init, event listeners
└── assets/
    └── images/         ← Placeholder of Unsplash afbeeldingen
```

---

## Pagina's & Componenten

### `index.html` — Listings overzicht
Bevat:
1. **Header / Navbar** — Logo links, eventueel navigatielinks rechts
2. **Hero sectie** — Korte tagline, geen grote afbeelding (keep it clean)
3. **Filterpaneel** — Zie filters hieronder
4. **Resultaten teller** — "24 woningen gevonden"
5. **Listings grid** — 3 kolommen desktop, 2 tablet, 1 mobiel
6. **Footer** — Minimalistisch

### `detail.html` — Woningdetail
Bevat:
1. Grote afbeeldingsgalerij (of één hero foto)
2. Prijs prominent in goud
3. Alle kenmerken (kamers, m², etc.)
4. Beschrijving
5. Terugknop naar overzicht

---

## Filters

Alle filters werken **live** (geen submit-knop nodig), JavaScript filtert de DOM direct.

| Filter | Type | Details |
|--------|------|---------|
| Prijs | Range slider (min/max) | €100.000 — €5.000.000, stap €25.000 |
| Locatie / stad | Dropdown of tekstveld | Filter op stad in de data |
| Aantal kamers | Buttons (1, 2, 3, 4, 5+) | Toggle-stijl knoppen |
| Type woning | Dropdown | Appartement, Tussenwoning, Hoekwoning, Vrijstaand, Villa, Penthouse |
| Oppervlakte (m²) | Range slider (min/max) | 30m² — 500m², stap 10m² |
| Voorzieningen | Checkboxes | Tuin, Garage, Balkon (meerdere selecteerbaar) |

Filterknop "Reset filters" altijd zichtbaar in goud.

---

## Woningdata (`data.js`)

Maak een array van minimaal 12 nep-woningen. Elk object heeft:

```javascript
{
  id: 1,
  title: "Exclusief penthouse met panoramisch uitzicht",
  stad: "Amsterdam",
  type: "Penthouse",
  prijs: 1850000,
  kamers: 4,
  oppervlakte: 210,
  voorzieningen: ["balkon"],
  afbeelding: "https://images.unsplash.com/...",
  beschrijving: "..."
}
```

Gebruik gevarieerde steden: Amsterdam, Rotterdam, Utrecht, Den Haag, Haarlem.
Zorg voor een mix van prijsklassen en woningtypes zodat filters nuttig zijn.

---

## Conventies & Code stijl

- **Alle comments in het Nederlands**
- **CSS:** BEM naamgeving (`.listing-card__price`, `.filter-panel__title`)
- **JS:** `camelCase` voor variabelen en functies
- **HTML:** Semantische tags (`<main>`, `<section>`, `<article>`, `<nav>`)
- Geen inline styles in HTML
- Geen `!important` in CSS tenzij absoluut noodzakelijk
- Elke CSS-kleur via custom property, **nooit hardcoded hex in components**

---

## Wat Claude NIET mag doen
- Geen Bootstrap, Tailwind of andere CSS frameworks
- Geen jQuery of andere JS libraries
- Geen inline `style=""` attributen in HTML
- Geen lichte / witte achtergronden als hoofdkleur
- Geen generieke of saaie placeholder teksten — gebruik realistische Nederlandse woningdata
- Geen onduidelijke bestandsstructuur — houd je aan de structuur hierboven
- Geen afbeeldingen van echte personen of logo's van bestaande makelaars

---

## Startpunt

Begin altijd met:
1. `css/variables.css` aanmaken met alle custom properties
2. `css/reset.css` aanmaken
3. `js/data.js` aanmaken met 12 woningen
4. Daarna pas `index.html` bouwen

---

## Extra context
- Doelgroep: vermogende kopers, premium uitstraling is essentieel
- De website hoeft niet verbonden te zijn aan een echte database — alles werkt op basis van `data.js`
- Mobile-first CSS schrijven, daarna uitbreiden naar desktop via media queries