## Objekte

- Objekte sind die wichtigste Art von Datentyp in JavaScript
- Es ist entscheidend zu wissen, wie man mit Objekten und Arrays umgeht

- Objekte sind eine Möglichkeit, mehrere Werte zusammenzufassen

  - Manchmal wird dies als "Namespace" bezeichnet
  - Ein Objekt stellt oft ein Konzept wie Benutzer oder Produkt dar
  - Die Werte in einem Objekt werden als Schlüssel-Wert-Paare gespeichert

  ```js
  // Ein sehr typisches Objekt
  const user = {
    id: 42,
    username: "Nancy",
    email: "nancy@dci.org",
    password: "pass1234",
    verified: true,
  };
  ```

- Hier sind `id`, `username`, `email` und `password` alle Schlüssel

  - Sie haben jeweils ihren eigenen Wert
  - Sie können verschiedene Typen sein
  - Sie werden auch die `Eigenschaften` des Objekts genannt
  - Sie sind so etwas wie einzelne Variablen, aber zusammengefasst

- Die oben genannte Methode zur Erstellung eines Objekts wird als "Objektliteral" bezeichnet

  - Es ist nicht die einzige Möglichkeit, ein Objekt zu erstellen
  - Aber es ist bei weitem die gebräuchlichste

## Objekte und Arrays

- Arrays sind tatsächlich eine Art von Objekt
- Bei Arrays existieren die Werte in einer bestimmten Reihenfolge
- Du kannst Objekte in Arrays speichern, genau wie jeden anderen Wert

## Zusammenfassung

- Objekte sind wie Gruppierungen von Variablen zusammen
- Objekte können viele Eigenschaften enthalten
- Objekteigenschaften sind Schlüssel-Wert-Paare
- Du kannst Eigenschaften zu einem Objekt hinzufügen
- Du kannst Eigenschaften von einem Objekt löschen
- Um zu überprüfen, ob ein Wert ein Array ist: `Array.isArray(someVariable)`
