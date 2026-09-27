# APK fajl

Stavi produkcioni APK ovdje pod nazivom:

    trening.apk

Puna putanja: `public/downloads/trening.apk`

Dugme "Preuzmi APK" na sajtu (komponenta `components/Download.tsx`, vrijednost
`download.apkPath` u `lib/content.ts`) automatski vodi na tu putanju — nije
potrebno mijenjati kod, samo dodati fajl.

Preporuka: potpiši APK i navedi tačnu minimalnu verziju Androida u
`lib/content.ts` (`download.minVersion`), ako se razlikuje od trenutne.
