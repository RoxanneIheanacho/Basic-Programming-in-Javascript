# Additionell kopia av array

## Uppgift

Komplettera funktionen `immutablePushNumber` i module `src/arrayExtension.js` enligt beskrivningen nedan.

### Filer

Modulerna `src/app.js` och `src/arrayExtension.js` samverkar enligt beroendediagrammet nedan. Du ser även `test/arrayExtension.test.js` (som du inte ska redigera), vilket är den modul som innehåller de enhetstester som körs med `npm test`.

![Beroendediagram](/.readme/dependency-graph.svg)

### immutablePushNumber

Funktionen `immutablePushNumber`, ska returnera en kopia av en array där ett tal lagts till. Funktionen ska vara en så kallad "_pure function_", d.v.s. vara helt utan sidoeffekter.

Funktionen `immutablePushNumber` har två parametrar. Den första parametern är den array som ska kopieras och till vilken ett tal därefter ska läggas till. Den andra parameter är det tal som ska läggas till kopian av arrayen.

Du ska även implementera viss felhantering, innebärande att undantag kastas om fel inträffar. Om första parametern inte är en `Array` eller om andra parametern inte är av typen `Number` ska ett undantag av typen `TypeError` kastas.

```js
import { immutablePushNumber } from './arrayExtension.js'

const arr = [1, 2, 3]
const newArray = immutablePushNumber(arr, 4) // newArray must be [1, 2, 3, 4]
                                             // arr must be unchanged, i.e. arr !== newArray
```

## Tips

Genom att köra enhetstester som kommer med övningsuppgiften kan du undersöka om koden du skrivit löst uppgiften (i alla fall enligt enhetstesterna...).

Funktioner, metoder, etc. som _kan_ komma till användning beroende hur du väljer att lösa uppgiften.

- [if](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- [Array.isArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)
- [Array.length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length)
- [Array.from](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
- [Array.slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
- [Array.push](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
- [throw](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)
- [TypeError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError)
