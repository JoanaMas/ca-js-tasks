console.group("28. Sukurkite funkciją, kuri atspausdina žodį atvirkščiai 'abc' -> 'cba'");
{
  function strReverse(str) {
    let splitString = str.split("");
    let reverseString = splitString.reverse();
    let joinString = reverseString.join("");
    return joinString;
  }

// 2nd way

/*  function reverseString(str) {
    return str.split("").reverse().join("");
} */


// 3rd way

/* function reverseString(str) {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
      newString += str[i];
  }
  return newString;
} */

  console.log('---');
  console.log(strReverse('viens du trys'));
  console.log(strReverse('as tave myliu'));
  console.log(strReverse('Bairis seniuk'));
  console.log('---');
}
console.groupEnd();
console.log();




// 29. Sukurkite funkciją, kuri grąžina <true>, jeigu žodis yra palindromas (taip pat skaitosi iš abiejų pusių)
//  mama -> false
//  mamam -> true
//  123321 -> true
//  123456 -> false
console.group("29. Sukurkite funkciją, kuri grąžina <true>, jeigu žodis yra palindromas (taip pat skaitosi iš abiejų pusių)");
{
  function isPalyndrome(str) {
    let re = /[W_]/g;
    let lowerCaseString = str.toLowerCase().replace(re, '');
    let reverseStr = lowerCaseString.split("").reverse().join("");
    return reverseStr === lowerCaseString;
  }


  // function isPalyndrome(str) {
  //   let i = 0;
  //   let k = str.length - 1;
  //   while (i < k) {
  //     if (str[i] !== str[k]) return false;
  //     i++;
  //     k--;
  //   }
  //   return true;
  // }

// /[W_]/g ----> checks non word characters
// [^A-Z] matches anything that is not enclosed between A and Z
// [^a-z] matches anything that is not enclosed between a and z
// [^0-9] matches anything that is not enclosed between 0 and 9
// [^_] matches anything that does not enclose _



  console.log('---');
  console.log({
    'mama': isPalyndrome('mama'),
    'mamam': isPalyndrome('mamam'),
    '123321': isPalyndrome('123321'),
    '123456': isPalyndrome('123456'),
  })
  console.log('---');

}
console.groupEnd();
console.log();





// 30. Sukurkite funkciją, kuri taiso pastraipos klaidas:
//  Pirma sakinio raidė didžioji
//  Po skiriamojo ženklo tarpas, o prieš skiriamajį ženklą nėra tarpo (skiriamieji ženklai: .,!?)
//  Bet kokį kiekį tapų pakeičia vienu tarpu
//    mėgstu pieną , bet medų nelabai.labanakt. -> Mėgstu pieną, bet medų nelabai. Labanakt.
console.group("30. Sukurkite funkciją, kuri taiso pastraipos klaidas");
{

  // Solution no: 1
  function capitalizeFirstLetter(str) {
    const sentence = reduceEmptySpaces(str);
    const nameCapital = sentence.replace('jonas', "Jonas")
    const sentenceCapitalFirstLetter = nameCapital[0].toUpperCase() + nameCapital.slice(1);

    return sentenceCapitalFirstLetter;
  }

  const reduceEmptySpaces = function (str) {
      let stringDoubleSpacesRemoved = str.trim();
      const noSpace = stringDoubleSpacesRemoved.replace(/ +(?= )/g,'').replace(' .', '.').replace(' ,', ',').replace(' !', '!').replace(' ?', '?');
      return noSpace;
    }


  // Solution no: 2 - IMPROVED FUNCTIONALITY.
  // Regex will work with any sentence + specific changes made for the sentence will work for particular sentence only.

  function fixParagraph(paragraph) {
    // return capitalizeFirstLetter(paragraph);
    const result = paragraph
    .trim() // removed spaces from front & back;
    .replaceAll(/\s+/g, ' ') // removed more 1+ blank spaces from the text;
    .replaceAll(/\s+([!?.,])/g, '$1') // removes spaces before special characters; 
    .replaceAll(/\s*([!?.])\s*(.)\s*/g, (_, g1, g2) => `${g1} ${g2.toUpperCase()}`); // Every sentence starts with Capital;
    const FirstLetterUpperCase = result[0].toUpperCase() + result.slice(1); // First letter of a string capital;

    const resultWithAllFixes = FirstLetterUpperCase.replace('jonas', "Jonas").replace('as ', 'aš '); // Correcting typos for given sentence;
    return resultWithAllFixes

  }

  const paragraph = '    labas , as jonas . Tave      vadina Kęstu? Taip ir žinojau  !    ';
  const fixedParagraph = fixParagraph(paragraph);
  console.log(fixedParagraph);
  console.log('---');
}

console.groupEnd();
console.log();


console.group("31. Sukurkite funkciją, kuri pirmu parametru priima sakinį ir sudeda atskirus sakinio žodžius į masyvą");
//  Example: labas, aš esu grybas -> ['labas', 'aš', 'esu', 'grybas'];


{
  function splitSentence(sentence) {
      const wordsArray = sentence.split(' ');
      return wordsArray;
    }

  console.log('---');
  console.log({
    'Labas aš Jonas': splitSentence('Labas aš Jonas'),
    'Kėgliai yra gerai': splitSentence('Kėgliai yra gerai'),
  })
  console.log('---');


}
console.groupEnd();
console.log();




console.group("32. Sukurkite funkciją, kuri pirmu parametru priimą <string>'ą, o antruoju skiriklį");

//  Ši funkcija turi grąžinti masyvą sudarytą iš atskirtų dalių:
//  explode('Man patinka sniegas', ' ');  -> ['man', 'patinka', 'sniegas'];  
//  explode('home/about/13', '/');        -> ['home', 'about', '13']; 


{
  function explode(str, separator) {
      return str.split(separator);
  }


  console.log('---');
  console.log({
    "'Man patinka sniegas', ' '": explode('Man patinka sniegas', ' '),
    "'home/about/13', '/'": explode('home/about/13', '/'),
  })
  console.log('---');


}
console.groupEnd();
console.log();