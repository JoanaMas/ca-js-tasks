console.groupCollapsed('1 - https://edabit.com/challenge/nuXdWHAoHv9y38sn7');

const drinks = [
    {name: "lemonade", price: 50},
    {name: "lime", price: 10}
  ];


  function sortDrinkByPrice(drinks) {
    const sorted = drinks.sort(function(a, b) {
        return a.price - b.price;
    });
        return sorted;
}

const result2 = sortDrinkByPrice(drinks);
console.log(result2);
console.groupEnd();



console.groupCollapsed('2 - https://edabit.com/challenge/9KEKJG5PZTFmG3Zau');
{   

    function addName(obj, name, value) {
        obj[name] = value;
        return obj;
      }

    const result12 = addName({}, "Brutus", 300);
    const result13 = addName({ piano: 500 }, "Brutus", 400);
    const result14 = addName({ piano: 500, stereo: 300 }, "Caligula", 440);
    
    console.log(result12);
    console.log(result13);
    console.log(result14);

}
console.groupEnd();

console.groupCollapsed('3 - https://edabit.com/challenge/48EJWLhF224na8po3');
{

    const generationObject = {
        m: {
          '-3': 'great grandfather',
          '-2': 'grandfather',
          '-1': 'father',
          0: 'me!',
          1: 'son',
          2: 'grandson',
          3: 'great grandson',
        },
        f: {
          '-3': 'great grandmother',
          '-2': 'grandmother',
          '-1': 'mother',
          0: 'me!',
          1: 'daughter',
          2: 'granddaughter',
          3: 'great granddaughter',
        }
      };
    
      function generation(gen, sex) {
        return generationObject[sex][gen];
      }

      const result20 = generation(2, 'f');
      const result21 = generation(-3, 'm');
      const result22 = generation(1, 'f');
      console.log(result20);
      console.log(result21);
      console.log(result22);

    }

    
    // function generation(x, y) {
    //     const generations = {
    //         '-3': { m: "great grandfather", f: "great grandmother" },
    //         "-2": { m: "grandfather", f: "grandmother" },
    //         "-1": { m: "father", f: "mother" },
    //         0: { m: "me!", f: "me!" },
    //         1: { m: "son", f: "daughter" },
    //         2: { m: "grandson", f: "granddaughter" },
    //         3: { m: "great grandson", f: "great granddaughter" },
    //         };
    //             return generations[x][y]
    //           }

    // const result3 = generation(0, 'f');
    // console.log(result3);}

    console.groupEnd();

console.groupCollapsed('4 - https://edabit.com/challenge/i6YqzHcSiPiEQKjeX');

{
    const score = [
        { tile: "N", score: 1 },
        { tile: "K", score: 5 },
        { tile: "Z", score: 10 },
        { tile: "X", score: 8 },
        { tile: "D", score: 2 },
        { tile: "A", score: 1 },
        { tile: "E", score: 1 }
    ]

    const score2 = [
        { tile: "B", score: 2 },
        { tile: "V", score: 4 },
        { tile: "F", score: 4 },
        { tile: "U", score: 1 },
        { tile: "D", score: 2 },
        { tile: "O", score: 1 },
        { tile: "U", score: 1 }
    ]

    function maximumScore(tileHand) {
        const sum = tileHand.reduce((p, c) => {
            return p + c.score;
        }, 0);

        return sum        
    }

        const result4 = maximumScore(score);
        const result5 = maximumScore(score2);
        console.log(result4);
        console.log(result5);


    // Using for() cycle
    // 1. padeklaruojamas pradinis elementas
    // 2. Pradedamas ciklas
    // 2.1 Kiekviena iteracija papildo/kei??ia padeklaruot?? kintamaj?? [1.]
    // 3. atliekamas galutinis formavimas (neb??tinas)
    // 4. gr????inama/spausdinama reik??m?? 

    function maxScore(tileHand) {
        let sum = 0;
        for (let i = 0; i < tileHand.length; i +=1) {
        sum += tileHand[i].score};
        return sum; 
     }

       let result40 = maxScore(score);
       let result41 = maxScore(score2);
       console.log(result40);
       console.log(result41);
}

console.groupEnd();

console.groupCollapsed('5 - https://edabit.com/challenge/8s2jy9hR2TAeQinKD');

{

    function calculateDifference (obj, limit) {
        const valueArray = Object.values(obj); // paver??iame objekt?? array, kuriame patalpinta values
        let sum = 0; // nustatome pradin?? i??rai??k??, prie kurios prid??sime iteracijos metu gautas reik??mes
        for(let i = 0; i < valueArray.length; i += 1) {; // naudojant iteracijos metod?? turim pasiekti kiekvien?? value esan??i?? array
        sum += valueArray[i]; 
        }
        return sum - limit
    }

    const result50 = calculateDifference ({ "baseball bat": 20 }, 5);
    const result51 = calculateDifference ({ skate: 10, painting: 20 }, 19);
    const result52 = calculateDifference ({ skate: 200, painting: 200, shoes: 1}, 400);

    console.log(result50);
    console.log(result51);
    console.log(result52);


}
console.groupEnd();

console.groupCollapsed('6 - https://edabit.com/challenge/pPNAs5PvB3WvnDwDM');
{
    // Turning OBJECT to ARRAY
    // 1st method  - Using for loop 
    let objectList = {'a': 1, 'b': 2};
    let arrayList = [ ];
    for(let key in objectList) {
        arrayList.push([key, objectList[key]])
    }
    console.log(arrayList)

    // 2nd method - object.keys
    let objectList2 = {'a': 1, 'b': 2, 'c': 3, 'd': 4};
    let arrList = Object.keys(objectList2).map(key => {
        return [key, objectList2[key]];
    });
    console.log(arrList);

    // 3rd method - object.entries
    let objectList3 = {'a': 1, 'b': 2, 'c': 3, 'd': 4};
    let arrList2 = Object.entries(objectList3);
    console.log(arrList2);
    

    // Solution with funtion
    obj1 = {"a": 1, "b": 2};
    obj2 = {"shrimp": 15, "tots": 12};
    obj3 = {};


    function toArray(obj) {
        let arrList4 = Object.entries(obj);
        return arrList4
        } 

    const result6 = toArray(obj1);
    const result7 = toArray(obj2);
    const result8 = toArray(obj3);
    console.log(result6);    
    console.log(result7);    
    console.log(result8);    

    }

console.groupEnd();

console.groupCollapsed('7 - https://edabit.com/challenge/QXWM2oo7rQNiyDsip');
{
    const inkLevels1 = {
        "cyan": 23,
        "magenta": 12,
        "yellow": 10
    };

    const inkLevels2 = {
        "cyan": 432,
        "magenta": 543,
        "yellow": 777
    };

    const inkLevels3 = {
        "cyan": 700,
        "magenta": 700,
        "yellow": 0
    };

    function inkLevels(inks) {
        const values = Object.values(inks);
            function min(values) {
                let maximum = -Infinity;
                let minimum = Infinity;
                for(let number of values) {
                    if(number > maximum)
                        maximum = number
                    
                    if(number < minimum)
                        minimum = number
                } return minimum
            } return min(values);
    } 

    const result9 = inkLevels(inkLevels1);
    const result10 = inkLevels(inkLevels2);
    const result11 = inkLevels(inkLevels3);
    console.log(result9);
    console.log(result10);
    console.log(result11);
    console.log('break')
    
    // EASY WAY TO SOLVE THIS FUNCTION
    // function inkLevels(inks) {
	//return Math.min(...Object.values(inks))

    // Using 'for' iteration method


    function inkLevels(inks) {
        const arrValues = Object.values(inks); // objekto pavertimas ?? masyv?? (array)
        let min = arrValues[0]; // pa??ymimas pradinis lyginimo ta??kas - 1 masyvo reik??m?? (indeksu 0)
        for(let i = 1; i < arrValues.length; i += 1) { // iteracijos metu einama per elementus
            if(arrValues[i] < min); // s??lyga, kad b??t?? rasta ma??iausia reik??m??
        } return min; 
        }

        const result60 = inkLevels(inkLevels1);
        const result61 = inkLevels(inkLevels2);
        const result62 = inkLevels(inkLevels3);
        console.log(result60);
        console.log(result61);
        console.log(result62);


      }
console.groupEnd();

console.groupCollapsed('8 - https://edabit.com/challenge/pLNavsePxJ87t9Nak');
{
    // Objects
    
    const stolenItems = {
        tv: 30,
        skate: 20,
        stereo: 50
      };
      
    const stolenItems1 = {
        painting: 20000
      };
      
    const stolenItems2 = {};
    


      function calculateLosses(obj) {
        const arrNew = Object.values(obj);
        let sum = 0;
          for(i = 0; i < arrNew.length; i +=1) {
            sum = sum + arrNew[i];
          }

          if(sum > 0) return sum
          return 'Lucky you'

        } 

        const result70 = calculateLosses(stolenItems);
        const result71 = calculateLosses(stolenItems1);
        const result72 = calculateLosses(stolenItems2);
        console.log(result70);
        console.log(result71);
        console.log(result72);
    }

console.groupEnd();


