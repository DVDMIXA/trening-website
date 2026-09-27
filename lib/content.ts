// Centralizovan sadržaj sajta. Ovdje mijenjaš tekst bez diranja komponenti.

export const nav = [
  { label: "Početna", href: "#pocetna" },
  { label: "Funkcije", href: "#funkcije" },
  { label: "Kako radi", href: "#kako-radi" },
  { label: "Screenshotovi", href: "#screenshotovi" },
  { label: "Preuzmi", href: "#preuzmi" },
];

export const hero = {
  eyebrow: "Android • APK download",
  title: "Tvoj trening. Tvoj napredak. Na jednom mjestu.",
  subtitle:
    "Planiraj treninge, prati svaku seriju i gledaj svoj napredak kroz vrijeme — bez papira, bez tabela, bez pogađanja.",
  ctaPrimary: "Preuzmi za Android",
  ctaSecondary: "Pogledaj aplikaciju",
};

export const features = [
  {
    title: "Planiraj trening",
    text: "Kreiraj sopstvene planove, biraj vježbe iz baze i podesi broj serija i raspon ponavljanja za svaki dan.",
    size: "lg",
  },
  {
    title: "Prati svaku seriju",
    text: "Kilaža, ponavljanja i serije se unose tokom treninga, a prethodni rezultati su odmah na dohvat ruke.",
    size: "lg",
  },
  {
    title: "Velika baza vježbi",
    text: "Pretraga i filtriranje po mišićnoj grupi, opremi i tipu treninga, uključujući kardio i bodyweight varijante.",
    size: "md",
  },
  {
    title: "Pametnije treniraj",
    text: "Aplikacija predlaže kada povećati ili smanjiti kilažu, na osnovu tvog prethodnog treninga.",
    size: "md",
  },
  {
    title: "Prati napredak",
    text: "Grafikoni tjelesne mase i kompletna istorija svakog odrađenog treninga.",
    size: "sm",
  },
  {
    title: "Uporedi svoj izgled",
    text: "Fotografije napretka sa jasnim Prije / Poslije prikazom.",
    size: "sm",
  },
];

export const steps = [
  {
    n: "01",
    title: "Napravi plan",
    text: "Izaberi vježbe, redoslijed i broj serija — jednom postaviš, koristiš kad god treniraš.",
  },
  {
    n: "02",
    title: "Pokreni trening",
    text: "Timer između serija i pregled prethodnog rezultata drže te fokusiranim na teretani.",
  },
  {
    n: "03",
    title: "Unesi rezultate",
    text: "Kilaža, ponavljanja i bodyweight dodaci se pamte automatski, bez ručnog čuvanja.",
  },
  {
    n: "04",
    title: "Prati napredak",
    text: "Istorija, grafikoni mase i fotografije pokazuju gdje si bio i gdje si sada.",
  },
];

export const showcase = [
  {
    key: "plans",
    title: "Planovi treninga",
    text: "Napravi onoliko planova koliko ti treba — split po danima, po grupama mišića ili potpuno po svom sistemu. Svaka vježba nosi ciljani broj serija i ponavljanja.",
    align: "left" as const,
  },
  {
    key: "workout",
    title: "Tok treninga",
    text: "Tokom treninga unosiš kilažu i ponavljanja za svaku seriju, uz timer za odmor i podatak koliko si dizao prošli put na istoj vježbi.",
    align: "right" as const,
  },
  {
    key: "progress",
    title: "Napredak",
    text: "Grafikoni tjelesne mase i istorija treninga pokazuju trend kroz nedjelje i mjesece, ne samo poslednji unos.",
    align: "left" as const,
  },
  {
    key: "before-after",
    title: "Fotografije",
    text: "Redovne fotografije napretka, poređane u Prije / Poslije prikaz — vidiš promjenu koju vaga ne pokazuje.",
    align: "right" as const,
  },
];

export const gallery = [
  { key: "plans", label: "Planovi" },
  { key: "exercises", label: "Baza vježbi" },
  { key: "workout", label: "Trening" },
  { key: "progress", label: "Napredak" },
  { key: "before-after", label: "Prije / Poslije" },
  { key: "profile", label: "Profil" },
];

export const download = {
  title: "Spreman za sljedeći trening?",
  text: "Preuzmi aplikaciju direktno na svoj Android uređaj — bez prodavnice, bez naloga, bez čekanja.",
  cta: "Preuzmi APK",
  minVersion: "Android 7.0 ili noviji",
  apkPath: "/downloads/trening.apk",
  installSteps: [
    "Preuzmi APK fajl na svoj telefon.",
    "Dozvoli instalaciju iz ovog izvora ako te Android to zatraži.",
    "Instaliraj aplikaciju i otvori je.",
  ],
};

export const footer = {
  links: [
    { label: "Funkcije", href: "#funkcije" },
    { label: "Screenshotovi", href: "#screenshotovi" },
    { label: "Preuzmi", href: "#preuzmi" },
    { label: "Privatnost", href: "/privatnost" },
    { label: "Kontakt", href: "/kontakt" },
  ],
  copyright: "© 2026 Trening. Sva prava zadržana.",
};

export const seo = {
  title: "Trening – Android aplikacija za praćenje treninga",
  description:
    "Planiraj treninge, prati serije, kilažu i napredak uz Trening aplikaciju za Android.",
  url: "https://trening.app",
};
