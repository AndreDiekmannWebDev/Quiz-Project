# Accessibility, specificity, inhertance / Tuesday 16.07.24

- Learnziele :

1. `Barrierefreiheit` (Accessibility) ?

- Traditionell denken wir an Menschen mit Behinderungen

  - Nutzt auch anderen Gruppen
    - Diejenigen, die mobile Geräte verwenden
    - Diejenigen mit langsamen Netzwerkverbindungen
  - Oft verbessert gute Barrierefreiheit auch die SEO
  - Zeigt gute Ethik und Moral, verbessert das öffentliche Image

- Gut strukturiertes, semantisches HTML ist der Schlüssel zum Start

- Stelle sicher, dass deine Seite logisch mit der Tastatur nutzbar ist

- Füge genug Kontrast hinzu

- Verwende genauen `<title>` Text

2. Css `Kaskade` (Cascading)

- Die Kaskade ist, wie der Browser herausfindet, welches CSS pro Element aktiv ist

> Inline-style -> Internal -> Externel, ID -> Class -> Element Tag

3. `Spezifität` (specificity)

- Stärkere Selektoren überschreiben schwächere

- 💀 **!important** 💀

  - Das `!important` überstimmt alle anderen Spezifitätsberechnungen

  - Es macht alles komplizierter und schwieriger auf lange Sicht

4. `Vererbung` (inharite, initial, unset):

- Das Child Element übernimmt die die Eigenschaft von Parent Element (Color, Font-size, font-weight)

## Resources :

- [MDN Cascading specificity and inheritance](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)

- [Contrast Checker](https://webaim.org/resources/contrastchecker/)

- [Specificity Calculator](https://polypane.app/css-specificity-calculator/#selector=)

### Tasks :

- [uib-fundamentals-accessibility](https://classroom.github.com/a/jKpslnaA)

- [uib-fundamentals-css-cascade](https://classroom.github.com/a/st7BIqPz)
