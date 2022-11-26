console.groupCollapsed('1. Parašykite funkciją, kuri grąžina pirmą masyvo elementą.');
{
// ...sprendimas ir spausdinimas

function returnFirstArrayElement(array) {
    return array[0];
}

const res1 = returnFirstArrayElement([1, 2, 3]);
const res2 = returnFirstArrayElement(['vienas', 'du', 'trys']);
console.log(res1, res2);


}
console.groupEnd();

console.groupCollapsed('2. Parašykite funkciją, kuri pašalina pirmą masyvo elementą ir jį grąžina.');
{
  // ...sprendimas ir spausdinimas

  function deleteFirstArrayElenent(array){
    const firstElement = array[0];
    delete array[0];
        for (let i = 1; i < array.length; i++) {
            array[i - 1] = array[i];
        }
    array.length = array.length - 1;
    return firstElement;
  }

  const numbers = [1, 2, 3, 4, 5];
  console.log('numbers before removal', numbers);
  const firstElement = deleteFirstArrayElenent(numbers);
  console.log('numbers after removal', numbers);
  console.log('removed element', firstElement)

}

console.groupEnd();

console.groupCollapsed('3. Parašykite funkciją, kuri grąžina paskutinį masyvo elementą.');
{
  // ...sprendimas ir spausdinimas

  function returnLastArrayElement(array) {
    return array[3];
  }

  const res1 = returnLastArrayElement([1, 5, 7, 10]);
  console.log({res1});
}

console.groupEnd();

console.groupCollapsed('4. Parašykite funkciją, kuri pašalina paskutinį masyvo elementą ir jį grąžina.');
{
  // ...sprendimas ir spausdinimas

  function deleteElementLast(array) {
    let lastElement = array[array.length - 1];
    return lastElement;
  }

  const res1 = deleteElementLast([3, 12, 22, 45]);
  const res2 = deleteElementLast(['obuolys', 'bananas', 'ananasas']);
  console.log({res1});
  console.log({res2});

}
console.groupEnd();


console.groupCollapsed('5. Parašykite funkciją, kuri grąžina elementų kiekį masyve');
{
  // ...sprendimas ir spausdinimas

  function returnAllElements (array) {
    return array.length
  }

  const res1 = [10, 20, 30, 40, 55, 56];
  console.log(res1);

}
console.groupEnd();

console.groupCollapsed('6. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą');

{
  // ...sprendimas ir spausdinimas
  function lastElementIndex (array) {
    // return array === 19; ---> another way
    for(let i = 5; i < array.length; i += 1) {
        console.log(i);
    }
    return array;
  }

  const res2 = lastElementIndex ([1, 3, 5, 6, 8, 19]);
  // console.log(res2.findIndex(lastElementIndex)); ---> another way
  console.log(res2);

}

console.groupEnd();

console.groupCollapsed('7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis');
{
  // ...sprendimas ir spausdinimas
  function getAllIndexInLine(array) {
    for(let i = 0; i < array.length; i++) {
    console.log(i) }

  }

  getAllIndexInLine(['bulve', 'pomidoras', 'agurkas']);

  console.log(' ')  

  getAllIndexInLine([35, 67, 87, 89, 56]);

}

console.groupEnd();

console.groupCollapsed('8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis');
{
  // ...sprendimas ir spausdinimas

  function getAllElementsInLine(array) {
      for(i = 0; i < array.length; ++i) {
        console.log(array[i]);
      }

        // console.log(array[0]);
        // console.log(array[1]);
        // console.log(array[2]);
        // console.log(array[3]);
        // console.log(array[4]);
  
  }

  getAllElementsInLine([45, 67, 467, 78, 845]);
  //                    0    1    2   3   4

}
console.groupEnd();

console.groupCollapsed('9. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  ');
// [0] => reikšmė
// [1] => reikšmė
// [2] => reikšmė
{
  // ... sprendimas ir spausdinimas

  function getElementsAndIndex(array) {
    for(i = 0; i < array.length; i++) {
    console.log(`[${i}] => ${array[i]}`); 
    }
  }

  getElementsAndIndex(['Vilnius', 1, 'Kaunas', 2, 'Klaipeda', 3]);
}
console.groupEnd();

console.groupCollapsed('10. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo.');
{
  // ...sprendimas ir spausdinimas
  function getElementsReverse(array) { 
    for(i = array.length-1; i >= 0; i--)
    console.log(array[i]);
  }
  
  getElementsReverse([1, 2, 3, 4, 5, 6, 7]);
}
console.groupEnd();

console.groupCollapsed('11. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ...');
{
  // ...sprendimas ir spausdinimas

  function printIndexesRow(arr) {
    let resultRow = '';
    for (let i = 0; i < arr.length; i++) {
      const isNotLastElement = i < arr.length - 1;
      resultRow += arr[i];

      if (isNotLastElement) {
        resultRow += ', ';
      }
    }
    console.log(resultRow);
  }
  const testArr1 = [1, 2, 3];
  const testArr2 = ['trys', 'du', 'vienas'];
  
  printIndexesRow(testArr1);
  printIndexesRow(testArr2);
}


console.groupEnd();

console.groupCollapsed('12. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48');
{
  // ...sprendimas ir spausdinimas

  function getElementsInRow(array) {
    getRow = ' ';
    for(let i = 0; i < array.length; i++)
    getRow = getRow + (`${array[i]} `); 
    {
      console.log(getRow);
    }
    // getRow = ' ' + array; ----> šis atsakymas gaunamas su kableliais po kiekvieno masyvo elemento
    // console.log(getRow);
  }

  getElementsInRow([2 ,4 ,6 ,7 ,9, 24]);
}

console.groupEnd();

console.groupCollapsed('13. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:');
//  [0]=>17 [1]=>8 [2]=>88 ..
{
  // ...sprendimas ir spausdinimas
  function getElementsAndIndexInRow(array) {
    getRow = ' ';
    for(i = 0; i < array.length; i++) {
    getRow = getRow + (`[${i}]=>${array[i]}`) + ' '; //  ' ' ---> paverčia sąlyga stringu ir sustato elementus į vieną eilutę}
  }
    console.log(getRow);
    }

  getElementsAndIndexInRow(['Audi', 'BMW', 'Toyota', 'Tesla', 'Volvo']);
}
console.groupEnd();