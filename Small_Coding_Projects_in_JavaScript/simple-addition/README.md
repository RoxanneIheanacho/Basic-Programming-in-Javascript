# Enkel addition

## Uppgift

I filerna `src/app.js` och `src/calc.js` saknas det kod. Kommentaren `// TODO: Write your code here.` indikerar var det saknas kod. Sammanhanget TODO-kommentaren står i ger vilken kod som saknas.

## Filer

Modulerna `src/app.js` och `src/calc.js` samverkar enligt beroendediagrammet nedan. Du ser även `test/calc.test.js` (som du inte ska redigera), vilket är den modul som innehåller de enhetstester som körs med `npm test`.

![Beroendediagram](/.readme/dependency-graph.svg)

### src/calc.js

Komplettera funktionen `addNumbers` så att den returnerar summan av de två variabler som är deklarerade lokalt i funktionen.

### src/app.js

Du ska komplettera med kod som anropar funktionen `addNumbers` och sparar det funktionen returnerar i en lokal variabel du skapar. Variabelns värde ska sedan presenteras i konsolfönstret.

## Tips

Genom att köra enhetstestet som kommer med övningsuppgiften kan du undersöka om koden du skrivit löst uppgiften \(i alla fall enligt enhetstestet...\).

Funktioner, metoder, etc. som _kan_ komma till användning beroende hur du väljer att lösa uppgiften.

* [funktioner](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
* [aritmetiska operatorer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators)
* [return](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return)
* [let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
* [const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
* [console.log](https://nodejs.org/api/console.html#console_console_log_data)
