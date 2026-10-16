export type Shot = { src: string; alt: string };
export type ShowcaseItem = { id: string; title: string; text: string; shots: readonly Shot[] };

/** Tekstovi sajta (srpski, ijekavica). Sve funkcije su potvrđene iz APK-a ili screenshotova. */

export const features = [
  {
    title: "Planiraj",
    text: "Sastavi vlastite planove, a zatim od njih složi program: izaberi redoslijed i broj sedmica. Za početak su tu i spremni primjeri.",
  },
  {
    title: "Treniraj",
    text: "Biraj vježbu i bilježi kilažu i ponavljanja serija po seriju. Zagrijavanje se označava posebno, a tajmer odmora je tu kad ti zatreba.",
  },
  {
    title: "Vježbe",
    text: "Katalog vježbi sa pretragom. Traži po stručnim engleskim nazivima ili terminima koje već koristiš na našem jeziku.",
  },
  {
    title: "Prati napredak",
    text: "Istorija treninga, rekordi i ciljevi po vježbama, uz istoriju tjelesne mase. Treninge možeš izvesti i u CSV.",
  },
  {
    title: "Kalendar",
    text: "Pregledaj treninge u kalendaru i uključi podsjetnike da ti dan za trening ne promakne.",
  },
  {
    title: "Fotografije",
    text: "Dodaj fotografije napretka i prati kako se mijenjaš kroz vrijeme.",
  },
] as const;

export const showcase: readonly ShowcaseItem[] = [
  {
    id: "planovi",
    title: "Planovi treninga",
    text: "Svi tvoji planovi na jednom ekranu. Pokreni trening jednim dodirom, otvori listu vježbi ili izmijeni plan kad ti zatreba.",
    shots: [
      {
        src: "/screenshots/planovi.webp",
        alt: "Ekran Planovi treninga sa dugmetom Sastavi novi plan i listom planova koje možeš pokrenuti",
      },
    ],
  },
  {
    id: "programi",
    title: "Programi",
    text: "Program povezuje tvoje planove u raspored po sedmicama. Ako tek počinješ, tu su i spremni primjeri: osnove za cijelo tijelo (3× sedmično) i gornji / donji dio (4× sedmično). To su opšti primjeri, ne individualni programi.",
    shots: [
      {
        src: "/screenshots/programi.webp",
        alt: "Ekran Programi sa dugmetom Napravi prvi program i spremnim programima Početnik i Napredni",
      },
    ],
  },
  {
    id: "trening",
    title: "Tok treninga",
    text: "Tokom treninga vidiš koliko si vježbi i serija odradio. Za svaku vježbu upisuješ kilažu i ponavljanja, a prethodni rezultati se prikazuju čim ih imaš.",
    shots: [
      {
        src: "/screenshots/trening-u-toku.webp",
        alt: "Ekran treninga u toku sa današnjim napretkom i listom vježbi",
      },
      {
        src: "/screenshots/serija.webp",
        alt: "Ekran vježbe Bench press sa poljima za kilažu i ponavljanja i dugmetom Dodaj seriju",
      },
    ],
  },
  {
    id: "tajmer",
    title: "Tajmer odmora",
    text: "Uključi tajmer i odmaraj tačno koliko ti treba. Vrijeme odmora možeš podesiti, a pokrećeš ga jednim dodirom.",
    shots: [
      {
        src: "/screenshots/tajmer.webp",
        alt: "Ekran vježbe sa tajmerom odmora od 1:30 i dugmadima Pokreni i Podesi",
      },
    ],
  },
];

export const steps = [
  { title: "Napravi plan", text: "Izaberi vježbe, broj serija i raspon ponavljanja." },
  { title: "Odradi trening", text: "Pokreni plan i prolazi vježbu po vježbu." },
  { title: "Zabilježi rezultate", text: "Upiši kilažu i ponavljanja za svaku seriju." },
  { title: "Prati napredak", text: "Pregledaj istoriju, rekorde i ciljeve." },
] as const;

export const installSteps = [
  "Preuzmi APK fajl na telefon.",
  "Otvori fajl i, ako Android to zatraži, dozvoli instalaciju iz ovog izvora.",
  "Potvrdi instalaciju i otvori Repwise.",
] as const;
