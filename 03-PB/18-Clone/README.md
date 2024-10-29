## Klonen von Objekten

- Flaches Klonen von Objekten und Arrays
- Tiefes Klonen mit https://developer.mozilla.org/en-US/docs/Web/API/structuredClone

### Beispiel 1

- Du hast ein Benutzerobjekt

  ```js
  const user = {
    id: 1002,
    name: "Nancy",
    email: "nancy2000@gmx.de",
    username: "dance",
    password: "fly&&12345",
  };
  ```

- Du musst dieses Benutzerobjekt von deinem Code irgendwohin senden

  - Aber du darfst das Passwort nicht preisgeben
  - Und du kannst es nicht aus dem Original löschen

- Du willst wahrscheinlich das Original klonen und das Passwort aus dem Klon entfernen

### Beispiel 2

- Du hast ein Kampfspiel

  - Dein Spieler kämpft eins nach dem anderen gegen Monster
  - Du speicherst den Zustand in einem einzigen Objekt

  ```js
  const game = {
    round: 14,
    player: {
      name: "Javi",
      class: "mage",
      hp: 28,
      maxHp: 120,
      strength: 9,
      armor: 2,
      moves: ["firebolt", "heal"],
    },
    currentOpponent: {
      name: "Nilbog",
      class: "Goblin Warrior",
      hp: 4,
      maxHp: 40,
      strength: 3,
      armor: 3,
      moves: ["hit", "bite"],
    },
  };
  ```

  - Willst du eine Runde zurückgehen? Gehe einfach zum vorherigen Spielzustand zurück
  - Jede Runde **klonst** du den aktuellen Spielzustand
    - Du fügst den alten Zustand dem Array hinzu
    - Und ersetzt den aktuellen Zustand durch das, was passiert ist

### Wie?

- Es gibt zwei Arten von Klonen

  - Flach
  - Tief

- Flaches Klonen

  - Erstellen eines neuen Objekts, das eine Kopie des Originals ist
  - Jede Eigenschaft im Originalobjekt wird zum Klon kopiert...
  - Allerdings "flaches" Klonen, weil nur die obersten Eigenschaften kopiert werden

- Tiefes Klonen

  - Erstellen eines neuen Objekts, das eine Kopie des Originals ist
  - Jede Eigenschaft im Originalobjekt wird zum Klon kopiert...
  - Einschließlich aller verschachtelten Objekte oder Arrays

## Referenzen

- Objekte werden im Speicher deines Computers gespeichert
- Variablen halten **Referenzen** zu diesen Objekten

- Wenn du einem Objekt eine Variable zuweist, speicherst du eine Referenz
- Mehrere Variablen können Referenzen zum selben Objekt halten

- Dies passiert mit der Eigenschaft "Garantie"
- Sowohl das Original als auch der flache Klon verweisen auf dasselbe Objekt im Speicher

- Dies ist auch der Grund, warum du die mit const erstellten Objekte verändern kannst
- Das Schlüsselwort const verhindert nur, dass die Variable neu zugewiesen wird
- Der Wert in der Variable ist eine Referenz zum Objekt
- Das referenzierte Objekt kann immer noch verändert werden

- So funktioniert auch der Vergleich
- Wenn du zwei Objekte vergleichst, vergleichst du die Referenzen
- Nicht die Werte der Objekte selbst

- Hinweis: Dies passiert nicht mit primitiven Werten wie Zahlen
- Diese sind anders
