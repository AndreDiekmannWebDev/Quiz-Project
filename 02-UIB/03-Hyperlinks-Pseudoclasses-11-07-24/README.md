# Hyperlinks, PseudoKlassen, CSS Farben / Thursday 11.07.24

- Lernziele :

1. Was sind Hyperlinks ?

- Links führen uns zu verschiedenen Seiten, wenn wir darauf klicken
- Links können uns auch zu einem anderen Abschnitt auf unserer Seite führen
- Links können uns auch dabei helfen, eine E-Mail zu schreiben
- Einige Links öffnen sich im gleichen Tab, den du gerade benutzt, andere in einem neuen Tab
- Links werden mit "Anker"-Elementen erstellt: `<a>`

2. Pseudoklassen ?

- Unbesuchte, besuchte und aktiv angeklickte Links haben unterschiedliche Farben
- Das hilft dem Benutzer
- Bitte mache nicht alles einfach schwarz, das macht deine Seite schwerer zu benutzen!
  - Benutzer sollten in der Lage sein, einen Link zu identifizieren
  - Benutzer sollten in der Lage sein, vorherzusagen, was passiert, wenn sie auf etwas klicken
  - Benutzer sollten in der Lage sein, zu sehen, dass etwas passiert (Feedback erhalten)
- Aber du _kannst_ die Farben ändern... mit Pseudoklassen!

3. Css Colors, `Named` colors, `HEX` colors, `RGB` colors ?

- `Benannte Farben` sind tatsächlich ein spezieller Datentyp in CSS

- `Hex-Farben` sind viel flexibler
  - Zahlen sind in "hexadezimal" von 0 bis 255; 255 ist "FF" in Hex
  - 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F
  - A=10, B=11, C=12, D=13, E=14, F=15

-`RGB farben` Sehr ähnlich zu Hex-Farben, aber andere Notation

```css
.first-section {
  background-color: rgb(255, 98, 0);
}
/* Alpha value 0.5 ist 50% Transparenz */
.second-section {
  background-color: rgb(255, 98, 0, 0.5);
}
```

## Resources :

- [The Anchor element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)

- [Html elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

- [Named Colors](https://developer.mozilla.org/en-US/docs/Web/CSS/named-color)

- [Hex Colors code](https://www.color-hex.com/)

- [RGB Color](https://www.w3schools.com/colors/colors_rgb.asp)

### Tasks :

- [uib-fundamentals-linking](https://classroom.github.com/a/6bNE0bBa)

- [uib-fundamentals-toc](https://classroom.github.com/a/pez6bz-8)

- [uib-fundamentals-the-sweet-spot](https://classroom.github.com/a/X1NUiq8Z)

### selbst lernen :

- [CSS Selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors)
