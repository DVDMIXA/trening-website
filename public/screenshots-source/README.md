# Pravi screenshotovi aplikacije

Trenutno se u `/public/screenshots/` nalaze ilustrovani placeholderi (SVG) koji
vizuelno predstavljaju svaki ekran aplikacije, u stilu sajta.

Da zamijeniš pravim screenshotovima:

1. Izvezi screenshotove iz aplikacije (PNG ili JPG, idealno 1080×2280px ili sličan
   omjer 9:19.5).
2. Nazovi ih identično kao placeholdere koje mijenjaju:
   - plans.png / plans.jpg → planovi treninga
   - workout.png / workout.jpg → tok treninga
   - progress.png / progress.jpg → grafikon napretka
   - before-after.png / before-after.jpg → poređenje fotografija
   - exercises.png / exercises.jpg → baza vježbi
   - profile.png / profile.jpg → profil korisnika
3. Stavi ih u `/public/screenshots/`.
4. U `components/PhoneMockup.tsx` pozivi već koriste putanju `/screenshots/<key>.svg` —
   ažuriraj ekstenziju na `.png`/`.jpg` u `components/Hero.tsx`, `components/Showcase.tsx`
   i `components/ScreenshotGallery.tsx` (samo ekstenzija u `src=` propu, 5 mjesta).

Nakon zamjene, ovaj folder (`screenshots-source`) možeš obrisati — služi samo
kao uputstvo.
