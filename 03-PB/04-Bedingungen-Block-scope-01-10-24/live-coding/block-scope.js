// block scope

/*- Der Inhalt unserer if-Anweisungen ist in {} eingefasst
- Das definiert einen neuen Codeblock
    - Innerhalb dieses Blocks ist es wie eine eigene kleine Welt
    - Variablen, die darin deklariert werden, existieren nur in diesem Block
        - Und in allen verschachtelten Blöcken
    - Dies wird "Block Scope" genannt
    - Also, Variablen sind block scope */

const gluecksZahl = Math.floor(Math.random() * 11); // 1 - 10

if (gluecksZahl > 3) {
  console.log(`Ich kann auf gluecksZahl zugreifen, ${gluecksZahl}`);
  const scopeTest = "ConstScopeTest";
  let scopeTest2 = "letScopeTest";
  var scopeTest3 = "varScopeTest";
  console.log(scopeTest); // ConstScopeTest

  if (gluecksZahl > 5) {
    console.log(scopeTest);
    const numTest = 5;
    console.log(numTest); // 5
  }
  //   console.log(numTest); fehler
}

// console.log(scopeTest); fehler;
// console.log(scopeTest2); fehler
console.log("outside:", scopeTest3); // var ist dumm kein fehler
