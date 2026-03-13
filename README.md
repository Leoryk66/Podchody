# 🗺️ Wielkie Podchody — Instrukcja

Gotowa aplikacja do gry terenowej w podchody z kodami QR.

## Struktura plików

```
podchody/
├── index.html              ← Strona startowa gry
├── generator-qr.html       ← Generator kodów QR do wydruku
├── css/
│   └── riddle.css          ← Style dla zagadek
├── js/
│   └── riddle.js           ← Logika sprawdzania odpowiedzi
└── zagadki/
    ├── zagadka-1.html      ← Zagadka nr 1
    ├── zagadka-2.html      ← Zagadka nr 2
    └── zagadka-3.html      ← Zagadka nr 3
```

## Jak dodać/zmienić zagadki

W pliku każdej zagadki znajdź fragment:
```js
checkAnswer(
  ['odpowiedz', 'alternatywna odpowiedz'],  // <- możliwe odpowiedzi
  'answer', 'result',
  'Tu wpisz wskazówkę do następnego miejsca!',  // <- wskazówka po dobrej odpowiedzi
  'zagadka-2.html'  // <- link do następnej zagadki (null jeśli ostatnia)
)
```

## Jak dodać nową zagadkę

1. Skopiuj plik `zagadki/zagadka-1.html`
2. Zmień treść zagadki w `<div class="riddle-box">`
3. Zmień emoji w `<span class="riddle-emoji">`
4. Ustaw prawidłowe odpowiedzi, wskazówkę i link do następnej zagadki
5. Zaktualizuj badge (`Zagadka X z Y`) i kropki postępu (`.progress`)

## Jak wrzucić na GitHub Pages

1. Załóż konto na [github.com](https://github.com)
2. Utwórz nowe repozytorium o nazwie `podchody` (Public)
3. Wgraj wszystkie pliki
4. Settings → Pages → Source: main branch → Save
5. Strona będzie pod: `https://TWOJANAZWA.github.io/podchody`

## Generowanie kodów QR

Otwórz `generator-qr.html` w przeglądarce, wpisz swój URL z GitHub Pages
i kliknij "Drukuj / Zapisz PDF".
