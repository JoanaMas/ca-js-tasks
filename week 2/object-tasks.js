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


}
console.groupEnd();

console.groupCollapsed('3 - https://edabit.com/challenge/48EJWLhF224na8po3');
{
    function generation(x, y) {
        const generations = {
            '-3': { m: "great grandfather", f: "great grandmother" },
            "-2": { m: "grandfather", f: "grandmother" },
            "-1": { m: "father", f: "mother" },
            0: { m: "me!", f: "me!" },
            1: { m: "son", f: "daughter" },
            2: { m: "grandson", f: "granddaughter" },
            3: { m: "great grandson", f: "great granddaughter" },
            };
                return generations[x][y]
              }

    const result3 = generation(0, 'f');
    console.log(result3);}
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
}

console.groupEnd();

console.groupCollapsed('5 - https://edabit.com/challenge/8s2jy9hR2TAeQinKD');

{

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
    
    // EASY WAY TO SOLVE THIS FUNCTION
    // function inkLevels(inks) {
	//return Math.min(...Object.values(inks))
    }
    

console.groupEnd();

console.groupCollapsed('8 - https://edabit.com/challenge/pLNavsePxJ87t9Nak');
{

}
console.groupEnd();




