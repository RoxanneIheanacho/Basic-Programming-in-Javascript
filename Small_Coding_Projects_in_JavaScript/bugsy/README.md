# Buggig kod

## Uppgift

Modulen `src/bugsy.js` exportera funktionen `getGangster` som tyvärr inte fungerar riktigt som den ska. Gör de förändringar av funktionen `getGangster` som krävs för att koden ska fungera som avsett och klara bifogade enhetstester.

Beroendediagrammet visar att det finns fler moduler utöver `src/bugsy.js`. Ingen kod utöver den som finns i modulen `src/bugsy.js` och funktionen `getGangster` får på något sätt ändras.

![Beroendediagram](/.readme/dependency-graph.svg)

## getGangster (src/bugsy.js)

Funktionen är redan implementerad, d.v.s. den innehåller redan kod. Tyvärr är koden inte korrekt i alla avseenden varför den inte klarar testerna. Din uppgift är att skriva om koden i funktionen så att den klarar samtliga tester.

Denna funktion har en parameter i form av en sträng innehållande initialer tillhörande en misstänkt gangster. Funktionen ska med hjälp av initialerna leta reda på gangsterns fullständiga namn och returnera det. Hittas inget namn som matchar initialerna ska funktionen returnera strängen 'No suspect found!'.

Till din hjälp finns i modulen `src/mostWanted.js` två funktioner `getNames` och `getInitials` som beskrivs nedan.

### getNames (src/mostWanted.js)

Funktionen returnerar en så kallad generator-objekt, som ger namn för namn från en lista över gangstrars namn med hjälp av metoden `next()` och egenskapen `value`.

```js
import * as mostWanted from './mostWanted.js'

const names = mostWanted.getNames() // ger generator-objektet med alla namn
let name = names.next().value  // ger det första namnet 'Bugsy Malone'
name = names.next().value  // ger det andra namnet 'Frank Nitti'
...
name = names.next().value  // finns det inga fler namn returneras undefined
```

### getInitials (src/mostWanted.js)

Funktionen returnerar ett fullständigt namns initialer.

```js
import * as mostWanted from './mostWanted.js'

const name = 'Ellen Nu'
const initials = mostWanted.getInitials(name) // ger 'EN'
```

## Tips

Genom att köra enhetstesterna som kommer med övningsuppgiften kan du undersöka om koden du skrivit löst uppgiften (i alla fall enligt enhetstesterna...).

Funktioner, metoder, etc. som _kan_ komma till användning beroende hur du väljer att lösa uppgiften.

- [for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
- [if...else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- ([while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while))
- ([spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax))
