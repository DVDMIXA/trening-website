export type ChangelogEntry = {
  version: string;
  /** ISO datum, YYYY-MM-DD */
  date: string;
  changes: string[];
};

/** Najnovija verzija ide prva. Dodaj novi objekat na vrh liste. */
export const changelog: ChangelogEntry[] = [
  {
    version: "1.4.1",
    // TODO: potvrdi datum (isti kao app.releaseDate) i dopuni izmjene.
    date: "2026-11-04",
    changes: [
      "Aplikacija je preimenovana u XQRep, uz novi logo.",
      "Animacije i ilustracije uz vježbe u katalogu.",
      "Raspored treninga: planove možeš složiti u ciklus izabranim redoslijedom.",
      "Tačniji podsjetnici na treninge (dozvola za tačne alarme).",
      "Uređivanje i brisanje serija, treninga i mjerenja.",
      "Izrezivanje profilne fotografije.",
    ],
  },
  {
    version: "1.1.0",
    date: "2026-10-18",
    changes: [
      "Izvoz i vraćanje rezervne kopije podataka (ZIP).",
      "Uvoz istorije treninga iz starog CSV fajla.",
      "Prikaz Prije i poslije za fotografije napretka.",
      "Izbor jezika: srpski ili engleski.",
    ],
  },
  {
    version: "1.0",
    date: "2026-10-16",
    changes: [
      "Prvo izdanje aplikacije.",
      "Planovi treninga i programi po sedmicama.",
      "Vođenje treninga serija po seriju, uz tajmer odmora.",
      "Katalog vježbi sa pretragom.",
      "Istorija treninga, napredak i rekordi, ciljevi po vježbama.",
      "Kalendar treninga i podsjetnici.",
      "Fotografije napretka i praćenje tjelesne mase.",
      "Izvoz treninga u CSV.",
    ],
  },
];
