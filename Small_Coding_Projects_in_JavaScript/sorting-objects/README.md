# Subjektiv sortering av objekt

## Uppgift

Modulen src/team.js exportera funktionen `sortByPoints` saknar implementation och måste kompletteras.

![Beroendediagram](/.readme/dependency-graph.svg)

Den exporterade funktionen `sortByPoints` tar emot en array med data som ska sorteras. Arrayen, innehållande referenser till objekt med information om fotbollslag, ska sorterad i fallande ordning med avseende på poäng. Funktionen ska vara en så kallad "pure function", d.v.s. vara helt utan sidoeffekter.

Du ska även implementera viss felhantering, innebärande att undantag kastas om fel inträffar. Om parametern inte refererar till en array ska ett undantag av typen `TypeError` kastas innehållande felmeddelandet `The passed argument is not an array.`.

Uppgiften innehåller kod du inte får ändra. Det finns t.ex. redan funktioner som läser in en fil med JSON (JavaScript Object Notation, [http://json.org/](http://json.org/) och returnerar en array med objekt innehållande inläst data. Filen `data/teams.json` innehåller den JSON som läses in; valda uppgifter om fotbollslag: namn, smeknamn och poäng.

Kodavsnittet nedan är ett exempel på hur funktionen `sortByPoints` ska kunna användas.

```js

import * as team from './team.js'

let arr = [
  { name: 'Arsenal', nickname: 'The Gunners', points: 75 },
  { name: 'Tottenham Hotspur FC', nickname: 'Spurs', points: 86 },
  { name: 'Liverpool', nickname: 'The reds', points: 76 }
]

const result = team.sortByPoints(arr)

// result should be
// [
//   {name: 'Tottenham Hotspur FC', nickname: 'Spurs', points: 86},
//   {name: 'Liverpool', nickname: 'The reds', points: 76},
//   {name: 'Arsenal', nickname: 'The Gunners', points: 75}
// ]
```

## Tips

...
