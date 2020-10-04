# Inför futtiga funktioner

## Uppgift

Komplettera de nio funktionerna i `src/tinyFuncs.js` enligt specifikationerna. Du behöver inte tänka på att implementera någon form av felhantering.

### Filer

Modulerna `src/app.js` och `src/tinyFuncs.js` samverkar enligt beroendediagrammet nedan. Du ser även `test/tinyFuncs.test.js` (som du inte ska redigera), vilket är den modul som innehåller enhetstest som körs med `npm test`.

![Beroendediagram](/.readme/dependency-graph.svg)

## Funktioner

### roundUp

Funktionen ska avrunda parameterns värde uppåt och returnera det avrundade heltalsvärdet.

- Värdet `12.3` ska avrundas uppåt till `13`.
- Värdet `19.8` ska avrundas uppåt till `20`.

### roundDown

Funktionen ska avrunda parameterns värde nedåt och returnera det avrundade heltalsvärdet.

- Värdet `12.3` ska avrundas nedåt till `12`.
- Värdet `19.8` ska avrundas nedåt till `19`.

### round

Funktionen ska avrunda parameterns värde till närmaste heltal och returnera det avrundade heltalsvärdet.

- Värdet `15.1` ska avrundas till `15`.
- Värdet `17.8` ska avrundas till `18`.

### getStringLength

Funktionen ska returnera parameterns, som är av typen string, längd, d.v.s. antalet tecken strängen innehåller.

- Är parameterns värde `'I don't need Google, my wife knows everything!'` ska värdet `46` returneras.

### getFirstLetter

Funktionen ska returnera det första tecknet som parametern, som är av typen string, innehåller.

- Är parameterns värde `'Byte me!'` ska värdet `'B'` returneras.

### getIndexOfQuestionMark

Funktionen ska returnera indexet som det första frågetecknet har som parametern, som är av typen string, innehåller. Innehåller strängen inget frågetecken ska värdet `-1` returneras.

- Är parameterns värde `'What's a programmer? An organism that turns caffeine and pizza into software.'` ska värdet `19` returneras.
- Är parameterns värde `'In c<>de we trust.'` ska värdet `-1` returneras.

### isEqual

Funktionen ska returnera värdet `true` om de två strängarna som skickas till funktionen är lika; annars `false`.

### isOdd

Funktionen ska returnera värdet `true` om heltalet som skickas till funktionen är udda; annars `false`.

### isEven

Funktionen ska returnera värdet `true` om heltalet som skickas till funktionen är jämt; annars `false`.

## Tips

Genom att köra testerna som kommer med övningsuppgiften kan du undersöka om koden du skrivit löst uppgiften (i alla fall enligt testerna...).

Funktioner, metoder, etc. som _kan_ komma till användning beroende hur du väljer att lösa uppgiften.

- [Math.ceil](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil)
- [Math.round](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round)
- [Math.floor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)
- [String.length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length)
- [String.charAt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt)
- [String.indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)
- [%, restoperator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder)
