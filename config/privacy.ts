/**
 * Politika privatnosti: SAMO tehničke činjenice potvrđene iz APK-a (v1.0).
 * Dok je `reviewed` false, stranica prikazuje napomenu da je nacrt i
 * ne indeksira se. Kad potvrdiš sve stavke iz `toConfirm`, postavi `reviewed: true`.
 */
export const privacy = {
  reviewed: false,

  /** Potvrđeno iz AndroidManifest.xml i koda aplikacije (verzija 1.0). */
  facts: {
    storedOnDevice: [
      "Planovi, programi i istorija treninga (serije, kilaža, ponavljanja, bilješke).",
      "Profil: visina, tjelesna masa, ciljevi i profilna fotografija.",
      "Fotografije napretka koje sam dodaš u aplikaciju.",
    ],
    permissions: [
      "Obavještenja: za podsjetnike na treninge.",
      "Prijem događaja pokretanja uređaja: da se podsjetnici obnove nakon restarta telefona.",
    ],
    noInternetPermission:
      "Ova verzija aplikacije ne traži dozvolu za pristup internetu.",
  },

  /** Stavke koje vlasnik mora potvrditi prije javne objave. */
  toConfirm: [
    "Da li aplikacija ikad šalje podatke van uređaja (analitika, crash reporting, cloud, nalozi).",
    "Da li se koriste biblioteke trećih strana koje prikupljaju podatke.",
    "Kako korisnik briše svoje podatke (deinstalacija, opcija u aplikaciji).",
    "Kontakt adresa za pitanja o privatnosti.",
    "Datum zadnje izmjene politike.",
  ],
} as const;
