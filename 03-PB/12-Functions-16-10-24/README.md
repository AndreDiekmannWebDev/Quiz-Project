# Functions / Mittwoch 16.10.24

## Lernziele :

1. `Funktionen` sind ... ?

- Eine Funktion ist ein Block von Code, der eine bestimmte Aufgabe ausführt.
- Wir haben eine Menge Funktionen verwendet:
  - `Math.random`
  - `console.log`
  - `someArray.push`

2. Was sind die Vorteile der Verwendung von `Fuktionen` ?

- Die zwei Hauptvorteile der Erstellung von Funktionen

  - 1. Du kannst Code-Wiederholungen stoppen, indem du wiederverwendbaren Code erstellst
  - 2. Du kannst deinen Code in kleine logische Teile aufteilen
  - 3. Du verbirgst die Komplexität einer Operation, das nennt man **Abstraktion**

  ```js
  const colors = ["rot", "gelb", "grün", "blau", "orange", "pink"];
  const color1 = colors[Math.floor(Math.random() * colors.length)];
  const color2 = colors[Math.floor(Math.random() * colors.length)];
  const color3 = colors[Math.floor(Math.random() * colors.length)];

  const color1 = getRandomColor();
  const color2 = getRandomColor();
  const color3 = getRandomColor();
  ```

3. Wie werden `Funktionen` definiert ?

- Es gibt einige verschiedene Möglichkeiten, Funktionen zu erstellen
- Das hier ist eine Funktionsdeklaration

```js
function printHello() {
  console.log("Hello World");
}
```

- Das Schlüsselwort `function`
  - Der Name der Funktion: `printHello`
  - Der Körper der Funktion
    - Dieser enthält nur eine `console.log` Anweisung

4. Funktionseingaben `Argumente uns Parameteren` ?

```js
function printHello(person1, person2) {
  // Parametern
  console.log(`Hello ${person1} and ${person2}`);
}
printHello("John", "Anna"); // Arguments
```

5. Funktionsausgaben `return` Anweisung ?

```js
function printHello(person1, person2) {
  // Parametern
  const text = `Hello ${person1} and ${person2}`;
  return text; // wert zurück geben und beenden mein Funktion
}

//console.log(printHello("John", "Anna")); // Arguments
const result = printHello("John", "Anna");
console.log(result);
```

6. `Funktionen` aufrufen ?

- Du kannst dann die Funktion einfach mit `printHello()` aufrufen

7. `Funktion` scope ?

8. `Funktionen` hoisting ?

```js
printHello(); // hoisting vor difinition aufrufen
function printHello() {
  console.log("Hello World");
}
```

### Resources :

- [Function-tutorial](https://www.youtube.com/watch?v=FOD408a0EzU)

- [Funktion Intro](https://www.youtube.com/watch?v=FOD408a0EzU)

- [Funktion MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

- [Funktion MDN Hoisting](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)

### Exercises :

- [PB-function-1-functions-basic](https://classroom.github.com/a/nrqL1EA1)

- [PB-function-1-simple-functions](https://classroom.github.com/a/trOCFUFo)

- [PB-function-1-challenge-1]()
