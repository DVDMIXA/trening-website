// Jednokratna skripta: preimenuje Repwise u XQRep u tekstovima projekta
// i briše stare Repwise fajlove iz public/. Pokreni: node scripts/rebrand.mjs
// Sigurno je pokrenuti više puta. Nakon uspjeha folder `scripts` možeš obrisati.
import { readdirSync, readFileSync, writeFileSync, rmSync, existsSync, statSync } from "node:fs";
import path from "node:path";

const roots = ["app", "components", "config", "lib", "README.md"];
const exts = new Set([".ts", ".tsx", ".md", ".mjs", ".css", ".json"]);

// Konkretna zamjena teksta u Hero komponenti (novi screenshot nema "Započni trening").
const literal = [
  [
    "sa sedmičnim ritmom i dugmetom Započni trening",
    "sa dugmetom Napravi svoj program i pregledom sedmičnog ritma",
  ],
];

function* walk(p) {
  if (!existsSync(p)) return;
  const s = statSync(p);
  if (s.isFile()) return yield p;
  for (const f of readdirSync(p)) yield* walk(path.join(p, f));
}

let changed = 0;
for (const r of roots) {
  for (const file of walk(r)) {
    if (!exts.has(path.extname(file))) continue;
    const before = readFileSync(file, "utf8");
    let after = before;
    for (const [a, b] of literal) after = after.split(a).join(b);
    after = after.replace(/Repwise/g, "XQRep").replace(/repwise/g, "xqrep");
    if (after !== before) {
      writeFileSync(file, after);
      changed++;
      console.log("izmijenjen:", file);
    }
  }
}

// Stari Repwise fajlovi u public/ (novi XQRep fajlovi su već tu).
for (const dir of ["public/brand", "public/og", "public/downloads"]) {
  if (!existsSync(dir)) continue;
  for (const f of readdirSync(dir)) {
    if (f.toLowerCase().startsWith("repwise")) {
      rmSync(path.join(dir, f));
      console.log("obrisan:", path.join(dir, f));
    }
  }
}
console.log(`Gotovo. Izmijenjeno fajlova: ${changed}.`);
