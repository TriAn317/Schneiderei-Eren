
# Schneiderei-Eren# Schneiderei Eren — Website

Statische One-Page-Website, reines HTML/CSS/JS, keine Build-Tools, kein
Framework. Läuft direkt über GitHub Pages oder jeden anderen Webspace.

## Struktur

```
index.html
css/style.css
js/script.js
images/            (bereits komprimiert für's Web)
favicon.svg
```

## Lokal ansehen

Einfach `index.html` per Doppelklick öffnen, oder mit Live Server /
`python3 -m http.server` im Ordner starten.

## Auf GitHub Pages veröffentlichen

1. Neues Repository auf GitHub anlegen (z. B. `schneiderei-eren`).
2. Diesen kompletten Ordnerinhalt (nicht den Ordner selbst, sondern die
   Dateien darin) in das Repo pushen bzw. hochladen.
3. Im Repo unter **Settings → Pages** als Quelle den `main`-Branch und
   Root-Verzeichnis (`/`) auswählen.
4. Nach ein bis zwei Minuten ist die Seite unter
   `https://<dein-github-name>.github.io/schneiderei-eren/` erreichbar.

## Noch offen

- **Öffnungszeiten**: In `index.html` im Abschnitt `<!-- TODO (Tristan) -->`
  (Bereich "Kontakt") die Platzhalter-Zeilen `auf Anfrage` durch die
  tatsächlichen Zeiten ersetzen, z. B.:
  ```html
  <span>Mo – Fr</span><span>09:00 – 18:00</span>
  <span>Sa</span><span>09:00 – 13:00</span>
  ```
  Danach die `<em>`-Zeile darunter (Hinweistext) einfach löschen.

## Bilder austauschen

Alle Bilder liegen unter `images/` und sind bereits auf sinnvolle
Web-Größen komprimiert (ca. 100–270 KB je Datei). Neue Bilder am besten
in ähnlicher Auflösung (max. ca. 1800–2400 px breite Seite, JPEG
Qualität ~75–80) einfügen, damit die Seite schnell lädt.
