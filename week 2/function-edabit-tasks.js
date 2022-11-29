// 1
console.group('https://edabit.com/challenge/ARr5tA458o2tC9FTN');

function hello() {
	return "hello edabit.com";
}

const result = hello();
console.log(result);
console.groupEnd();




// 2
console.group('https://edabit.com/challenge/j7yQbF3J3rToHsDBP');

function cubes(a) {
	return a ** 3;
}

const result2 = cubes(3);
const result3 = cubes(5);
const result4 = cubes(10);
console.log({result2, result3, result4});
console.groupEnd();


// 3
console.group('https://edabit.com/challenge/NAQhEoxbofPidLxm9');

function addition(num) {
    return num + 1;
}

const result5 = addition(0);
const result6 = addition(9);
const result7 = addition(-3);
console.log({result5, result6, result7});
console.groupEnd();



// 4
console.group('https://edabit.com/challenge/wAdE9te55cowBLcPs');

function circuitPower(voltage, current) {
    const calculatedPower = voltage * current;
    return calculatedPower;
}

const result8 = circuitPower(230, 10);
const result9 = circuitPower(110, 3);
const result10 = circuitPower(480, 20);
console.log({result8, result9, result10});
console.groupEnd();



// 5
console.group('https://edabit.com/challenge/8q54MKnRrm89pSLmW');

function convert(minutes) {
    const getMinutes = minutes * 60;
    return getMinutes;
}

const result11 = convert(5);
const result12 = convert(3);
const result13 = convert(2);
console.log({result11, result12, result13});
console.groupEnd();



// 6 
console.group('https://edabit.com/challenge/MvZK536X7fyrWH8Qc');

function giveMeSomething(a) {
    return 'something' + ' ' + a;
}

const result14 = giveMeSomething('is better than nothing');
const result15 = giveMeSomething('Bob Jane');
const result16 = giveMeSomething('something');
console.log({result14, result15, result16});
console.groupEnd();



// 7
console.group('https://edabit.com/challenge/3CaszbdZYGN4otQD8'); 

function triArea(base, height) {
    getTriArea = 1/2 * base * height;
    return getTriArea;
}

const result17 = triArea(3, 2);
const result18 = triArea(7, 4);
const result19 = triArea(10, 10);
console.log({result17, result18, result19});
console.groupEnd();



// 8
console.group('https://edabit.com/challenge/3LpBLgNRyaHMvNb4j');

function addition(a, b) {
    return a + b
}
const result20 = addition(3, 2);
const result21 = addition(-3, -6);
const result22 = addition(7, 3);
console.log({result20, result21, result22});
console.groupEnd();



// 9
console.group('https://edabit.com/challenge/fBJyQSe5Jmbm9hPAG');

function sumPolygon(n) {
    const sum = (n - 2) * 180;
    if(sum > 2);
    return sum;
}

const result23 = sumPolygon(3);
const result24 = sumPolygon(4);
const result25 = sumPolygon(6);
console.log({result23, result24, result25});
console.groupEnd();




// 10
console.group('https://edabit.com/challenge/ZNwHGgHvsdnYwJ5WK');

function nameString(name) {
    return name + 'Edabit'
}

const result26 = nameString('Mubashir');
const result27 = nameString('Matt');
const result28 = nameString('javaScript');
console.log({result26, result27, result28});
console.groupEnd();



// 11 
console.group('https://edabit.com/challenge/XnJ24rWW7iJkNrtsh');

function findPerimeter(length, width) {
    const perimeter = 2 * (length + width);
    return perimeter;
}

const result29 = findPerimeter(6, 7);
const result30 = findPerimeter(20, 10);
const result31 = findPerimeter(2, 9);
console.log({result29, result30, result31});
console.groupEnd();




// 12
console.group('https://edabit.com/challenge/Gpy2qSFnfhGJnWMMj');

function canNest(arr1, arr2) {
    const result = Math.min(...arr1) > Math.min(...arr2) && Math.max(...arr1) < Math.max(...arr2);
    return result;
}

const result32 = canNest([1, 2, 3, 4], [0, 6]);
const result33 = canNest([3, 1], [4, 0]);
const result34 = canNest([9, 9, 8], [8, 9]);
const result35 = canNest([1, 2, 3, 4], [2, 3]);
console.log({result32, result33, result34, result35});
console.groupEnd();


// 13
console.group('https://edabit.com/challenge/Q3n42rEWanZSTmsJm');

function minMax(array) {
    return [Math.min(...array), Math.max(...array)];
}

const result36 = minMax([1, 2, 3, 4, 5]);
const result37 = minMax([2334453, 5]);
const result38 = minMax([1]);
console.log({result36, result37, result38});
console.groupEnd();


// 14
console.group('https://edabit.com/challenge/tYHkTdFrEmWfxpPKF');

function matchHouses(step) {
        if(step === 0) {
            return 0;
        } else {
            return (step*6) - (step-1);
        }
    }
    
const result39 = matchHouses(1);
const result40 = matchHouses(4);
const result41 = matchHouses(87);
console.log({result39, result40, result41});
console.groupEnd();


// 15
console.group('https://edabit.com/challenge/vvuAkYEAArrZvmp6X');

// Bitwise AND
function bitwiseAND(n1, n2) {
    let bitAND = n1 & n2;
    return bitAND;
}
const result42 = bitwiseAND(7, 12);
console.log({result42});


// Bitwise OR
function bitwiseOR(n1, n2) {
    let bitOR = n1 | n2;
    return bitOR;
}
const result43 = bitwiseOR(7, 12);
console.log({result43});
 

// Bitwise XOR
function bitwiseXOR(n1, n2) {
    let bitXOR = n1 ^ n2;
    return bitXOR;
}

const result44 = bitwiseXOR(7, 12) 
console.log({result44});
console.groupEnd();


// 16
console.group('https://edabit.com/challenge/4gzDuDkompAqujpRi');

function addUp(num) {
    let sum = 0;
    for(let i = 1; i <= num; i++) {
        sum = sum + i;
    }
    return sum;
}

const result45 = addUp(4);
const result46 = addUp(13);
const result47 = addUp(600);
console.log({result45, result46, result47});
console.groupEnd();



// 17

console.group();

function nextEdge(side1, side2) {
    let thirdEdge = (side1 + side2) - 1;
    return thirdEdge;
}

const result48 = nextEdge(8, 10);
const result49 = nextEdge(5, 7);
const result50 = nextEdge(9, 2);
console.log({result48, result49, result50});
console.groupEnd();



// 18 
console.group('https://edabit.com/challenge/QaApgtePE6QrCZ64o');

function getFirstValue(arr) {
    for(let arr = 0; arr < 0; arr += 1) {
    } 
        return arr[0];
}

const result51 = getFirstValue([1, 2, 3]);
const result52 = getFirstValue([80, 5, 100]);
const result53 = getFirstValue([-500, 0, 50]);
console.log({result51, result52, result53});

console.groupEnd();


// 19
console.group('https://edabit.com/challenge/bL7hSc6Zh4zZJzGmw');

function calcAge(age) {
    inDays = age * 365;
    return inDays;
}

const result54 = calcAge(65);
const result55 = calcAge(0);
const result56 = calcAge(20);
console.log({result54, result55, result56});
console.groupEnd();



// 20
console.group('https://edabit.com/challenge/hPWnaSckJke5FXNEH');

function timeForMilkAndCookies(date) {
    return date.getMonth() === 11 && date.getDate() === 24;
}

const result57 = timeForMilkAndCookies(new Date(2013, 11, 24));
const result58 = timeForMilkAndCookies(new Date(2013, 0, 23));
const result59 = timeForMilkAndCookies(new Date(3000, 11, 24));
console.log({result57, result58, result59});

console.groupEnd();