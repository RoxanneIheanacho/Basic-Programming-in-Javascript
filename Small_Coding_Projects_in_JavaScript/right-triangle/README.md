# Rätvinklig triangel

## Uppgift

Komplettera funktionen `createRightTriangle` i `src/shape.js` enligt specifikationerna. Du behöver inte tänka på att implementera någon form av felhantering.

### Filer

Modulerna `src/app.js` och `src/shape.js` samverkar enligt beroendediagrammet nedan. Du ser även `test/shape.test.js` (som du inte ska redigera), vilket är den modul som innehåller de enhetstester som körs med `npm test`.

![Beroendediagram](/.readme/dependency-graph.svg)

## src/shape.js

### createRightTriangle

Komplettera funktionen `createRightTriangle(base)`, som endast får använda följande strängar, en gång vardera,

- `'#'`
- `'\n'`

för att skapa en rätvinklig triangel i form av en enda sträng som funktionen returnerar. Vid anrop av funktionen ska det vara möjligt att bestämma hur många tecken som ska finnas i den rätvinkliga triangelns bas.

Anropet `console.log(shape.createRightTriangle(5))` ska ge triangeln

```shell
#
##
###
####
#####
```

Anropet `console.log(shape.createRightTriangle(10))` ska ge triangeln

```shell
#
##
###
####
#####
######
#######
########
#########
##########
```

## Tips

Genom att köra testerna som kommer med övningsuppgiften kan du undersöka om koden du skrivit löst uppgiften (i alla fall enligt testerna...).

Funktioner, metoder, etc. som _kan_ komma till användning beroende hur du väljer att lösa uppgiften.

- [for](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement)
- [string.length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length)
- [+=, tilldelningsoperatorn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Assignment_operators)
- [<=, operatorn mindre än eller lika med](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Comparison_operators)
