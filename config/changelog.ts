export type ChangelogEntry = {
  version: string;
  /** ISO datum, YYYY-MM-DD */
  date: string;
  changes: string[];
};

/** Najnovija verzija ide prva. Dodaj novi objekat na vrh liste. */
export const changelog: ChangelogEntry[] = [
  {
    version: "1.1.0",
    // TODO: potvrdi datum (isti kao app.releaseDate).
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
    // TODO: potvrdi datum (isti kao app.releaseDate).
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
