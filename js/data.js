/* =============================================
   Data — Luxe Woningen
   Array met 12 nep-woningen voor de listings
   ============================================= */

const woningen = [
  {
    id: 1,
    title: "Exclusief penthouse met panoramisch uitzicht",
    stad: "Amsterdam",
    type: "Penthouse",
    prijs: 1850000,
    kamers: 4,
    oppervlakte: 210,
    voorzieningen: ["balkon"],
    afbeelding: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&fit=crop&q=80",
    beschrijving: "Adembenemend penthouse op de 22e verdieping in het hart van Amsterdam. Rondom terras met vrij uitzicht over de Amstel en de historische grachtengordel. Volledig gerenoveerd interieur met Italiaanse marmeren vloeren, inbouwkeuken van Bulthaup en badkamer met vrijstaand bad. Inclusief twee privéparkeerplaatsen en persoonlijke bergruimte."
  },
  {
    id: 2,
    title: "Monumentale villa aan de Vecht",
    stad: "Amsterdam",
    type: "Villa",
    prijs: 3450000,
    kamers: 7,
    oppervlakte: 450,
    voorzieningen: ["tuin", "garage"],
    afbeelding: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&fit=crop&q=80",
    beschrijving: "Unieke villa uit 1924 volledig gerestaureerd naar de hoogste moderne standaard. Imposante entree met originele glas-in-lood ramen, woonkamers met open haarden en bibliotheek. De tuin van 1.200m² grenst direct aan het water met eigen aanlegsteiger. Garage voor vier voertuigen, ruime kelder en separate gastenwoning."
  },
  {
    id: 3,
    title: "Stijlvol appartement met Maaszicht",
    stad: "Rotterdam",
    type: "Appartement",
    prijs: 475000,
    kamers: 2,
    oppervlakte: 95,
    voorzieningen: ["balkon"],
    afbeelding: "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800&fit=crop&q=80",
    beschrijving: "Modern appartement op de 8e verdieping in het prestigieuze Wilhelminapier-complex. Royaal balkon met direct uitzicht op de Maas en het Erasmusbrugsilhouet. Open keuken van Siemens, vloerverwarming door het gehele appartement en badkamer met inloopdouche en dubbele wastafel. Inclusief overdekte parkeerplaats in de onderbouw."
  },
  {
    id: 4,
    title: "Karakteristieke tussenwoning in historisch centrum",
    stad: "Utrecht",
    type: "Tussenwoning",
    prijs: 625000,
    kamers: 3,
    oppervlakte: 130,
    voorzieningen: ["tuin"],
    afbeelding: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&fit=crop&q=80",
    beschrijving: "Charmante woning uit 1895 met behoud van alle authentieke details: originele paneeldeuren, gietijzeren radiatoren en eiken vloerdelen. Volledig vernieuwd dak, nieuwe riolering en energielabel B. De achtertuin op het zuiden biedt privacy en rust, op slechts 5 minuten lopen van de Oudegracht. Ideaal voor wie historisch wonen combineert met modern comfort."
  },
  {
    id: 5,
    title: "Ruime hoekwoning in gewilde villawijk",
    stad: "Den Haag",
    type: "Hoekwoning",
    prijs: 865000,
    kamers: 5,
    oppervlakte: 185,
    voorzieningen: ["tuin", "garage"],
    afbeelding: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&fit=crop&q=80",
    beschrijving: "Vrijstaand ogende hoekwoning uit 1968, grondig gerenoveerd in 2021. Lichte woonkamer van 55m² met doorloop naar een overdekte veranda en zonnige tuin op het zuidwesten. Drie slaapkamers op de eerste verdieping, masterbedroom met ensuite badkamer op de tweede. Inpandige garage met laadpaal voor elektrisch rijden. Gelegen in de rustige Benoordenhout wijk."
  },
  {
    id: 6,
    title: "Moderne vrijstaande woning met zwembad",
    stad: "Haarlem",
    type: "Vrijstaand",
    prijs: 1595000,
    kamers: 5,
    oppervlakte: 295,
    voorzieningen: ["tuin", "garage"],
    afbeelding: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&fit=crop&q=80",
    beschrijving: "Architectonisch pareltje uit 2019, ontworpen door een gerenommeerd Amsterdams bureau. Volledig beglaasde achtergevel geeft uitzicht op de paisagistische tuin met verwarmd zwembad. Duurzaam gebouwd met zonnepanelen, WKO-installatie en volledig gasvrij. Dubbele garage met atelier daarboven. Op 10 minuten fietsafstand van het Haarlemer centrum en station."
  },
  {
    id: 7,
    title: "Herenhuis aan de Keizersgracht",
    stad: "Amsterdam",
    type: "Tussenwoning",
    prijs: 2250000,
    kamers: 5,
    oppervlakte: 265,
    voorzieningen: ["tuin"],
    afbeelding: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&fit=crop&q=80",
    beschrijving: "Monumentaal grachtenpand uit 1687 op één van de meest gewilde adressen van Amsterdam. Hoge plafonds met originele stucornamenten, brede trap met gesmeed ijzeren balustrade en authentieke keldergewelven. Volledig geïsoleerd en voorzien van vloerverwarming. Achtertuin van 80m² met terras en berging. Drie parkeervergunningen beschikbaar via gemeente."
  },
  {
    id: 8,
    title: "Luxe penthouse met daktuin en skyline view",
    stad: "Rotterdam",
    type: "Penthouse",
    prijs: 1275000,
    kamers: 4,
    oppervlakte: 198,
    voorzieningen: ["balkon"],
    afbeelding: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&fit=crop&q=80",
    beschrijving: "Imposant penthouse op de bovenste twee verdiepingen van een iconisch Rotterdams gebouw. De daktuin van 120m² biedt een 360° uitzicht over de skyline. Dubbele woonlaag verbonden door design wenteltrap. Keuken uitgerust met apparatuur van V-Zug, wijnklimaatkast en Bulthaup eiland. Twee parkeerplaatsen en privéopslag in de beveiligde parkeergarage."
  },
  {
    id: 9,
    title: "Statige villa op groot landgoed",
    stad: "Utrecht",
    type: "Villa",
    prijs: 2750000,
    kamers: 7,
    oppervlakte: 385,
    voorzieningen: ["tuin", "garage"],
    afbeelding: "https://images.unsplash.com/photo-1598228723793-52759bba239c?w=800&fit=crop&q=80",
    beschrijving: "Indrukwekkende villa op een landgoed van 5.000m² aan de rand van Utrecht. Imposante oprijlaan met lindenbomen leidt naar deze villa uit 1938. Grote salon, formele eetkamer, bibliotheek en vier slaapkamers alle met eigen badkamer. Koetshuis omgebouwd tot drievoudige garage met penthouse voor personeel of gasten. Formele tuin, boomgaard en vijver completeren dit unieke landgoed."
  },
  {
    id: 10,
    title: "Stijlvol appartement in Benoordenhout",
    stad: "Den Haag",
    type: "Appartement",
    prijs: 395000,
    kamers: 2,
    oppervlakte: 80,
    voorzieningen: ["balkon"],
    afbeelding: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&fit=crop&q=80",
    beschrijving: "Licht en modern appartement in een rustig gelegen complex uit 2015. Ruim balkon op het zuiden, ideaal voor de ochtendzon. Open woonkeuken met apparatuur van AEG en gietvloer door de woonruimtes. Badkamer met Italiaanse tegels en regendouche. Gemeenschappelijke fietsenberging en tuin. Op loopafstand van het Haagse Bos en tramhalte naar het centrum."
  },
  {
    id: 11,
    title: "Markante hoekwoning in gewild Haarlem-Noord",
    stad: "Haarlem",
    type: "Hoekwoning",
    prijs: 945000,
    kamers: 4,
    oppervlakte: 180,
    voorzieningen: ["tuin"],
    afbeelding: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&fit=crop&q=80",
    beschrijving: "Architectonisch bijzondere hoekwoning uit 1932 met invloeden uit de Amsterdamse School stijl. Originele glas-in-lood details bewaard, gecombineerd met moderne comforts: vloerverwarming, luxe badkamer en volledig vernieuwde elektra. Zijdelingse uitbouw in 2020 vergroot de woon- en keukenruimte aanzienlijk. Twee tuinen, een voor- en achtertuin beide op het zuiden, ideaal voor gezinnen."
  },
  {
    id: 12,
    title: "Gerenoveerd appartement met open uitzicht",
    stad: "Rotterdam",
    type: "Appartement",
    prijs: 289000,
    kamers: 2,
    oppervlakte: 68,
    voorzieningen: ["balkon"],
    afbeelding: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&fit=crop&q=80",
    beschrijving: "Volledig gerenoveerd appartement op de 5e verdieping met vrij uitzicht in drie windrichtingen. Recent vernieuwd: nieuwe keuken, badkamer, vloeren en schilderwerk. Energielabel B door nieuwe HR-ramen en extra isolatie. Ruim balkon van 12m² te bereiken vanuit de woonkamer. Fietsenstalling en bergingskast in de gemeenschappelijke onderbouw. Ideale starterswoning of belegging in opkomende buurt."
  }
];
