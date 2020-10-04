# Sorterad kopia av array

## Uppgift

Modulen `src/arrayExtension.js` exportera funktionerna `immutableSort` och `immutableSortDescending`, som saknar implementation och måste kompletteras.

![Beroendediagram](/.readme/dependency-graph.svg)

Respektive exporterad funktion tar emot en array med data som ska sorteras på lite olika sätt. `immutableSort` ska returnera en array där elementen ska vara sorterade numeriskt i stigande ordning. `immutableSortDescending` ska returnera en array där elementen ska vara sorterade numeriskt i fallande ordning. Ingen av funktionerna får ha några som helst sidoeffekter.

Du ska även implementera viss validering av det indata som skickas till respektive funktion. Om en funktions parameters värde inte refererar till en `Array` ska ett undantag av typen `TypeError` kastas.

I kodavsnittet nedan, hämtat från `src/app.js`, finns exempel på hur de exporterade funktionerna ska kunna användas.

```js
// src/app.js
import { immutableSort, immutableSortDescending } from './arrayExtension.js'

const originalArray = [2, 5, 1, 6]

try {
  console.log('Original array: ', originalArray)

  // should return [1, 2, 5, 6]
  let result = immutableSort(originalArray)
  console.log('\nOriginal array: ', originalArray)
  console.log('Sorted array: ', result)

  // should return [6, 5, 2, 1]
  result = immutableSortDescending(originalArray)
  console.log('\nOriginal array: ', originalArray)
  console.log('Sorted (descending) array: ', result)
} catch (e) {
  console.error(`An exception caught: ${e.message}`)
}

console.log()

try {
  // should throw a TypeError
  immutableSort()
  console.log('immutableSort throws no TypeError!')
} catch (e) {
  console.error(`An exception caught: ${e.message}`)
}

try {
  // should throw a TypeError
  immutableSortDescending('This is not an array!')
  console.log('immutableSortDescending throws no TypeError!')
} catch (e) {
  console.error(`An exception caught: ${e.message}`)
}
```

## Tips

Genom att köra enhetstester som kommer med övningsuppgiften kan du undersöka om koden du skrivit löst uppgiften (i alla fall enligt enhetstesterna...).

Funktioner, metoder, etc. som _kan_ komma till användning beroende hur du väljer att lösa uppgiften.

- [if](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- [Array.isArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)
- [Array.from](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
- [Array.slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
- [throw](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)
- [TypeError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError)
