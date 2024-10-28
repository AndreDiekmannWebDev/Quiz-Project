## Objektbereich

- In JavaScript ist `this` ein spezielles Schlüsselwort

- Es ist automatisch im Bereich jeder Funktion definiert

- Es bezieht sich auf das Objekt, dessen Methode die Funktion ist

- Wir haben `this` innerhalb der speak Methode des pet Objekts verwendet

- Wenn wir pet.speak() aufrufen, bezieht sich das `this` innen auf das pet Objekt

- In Funktionen, die nicht mit einem Objekt verbunden sind, existiert `this` trotzdem

- In diesen Fällen ist es eine Referenz auf den "globalen Bereich"
  Der globale Bereich ist ein riesiges Objekt
  Im globalen Bereich sind Funktionen wie parseInt() definiert
  Im globalen Bereich sind Objekte wie console und Math definiert
  Wenn wir wollen, können wir uns das globale Objekt ansehen, aber es ist nicht sehr nützlich

```js
function test() {
  console.log("Globaler Bereich: ", this);
  console.log("Math-Objekt: ", this.Math);
}
test();
```
