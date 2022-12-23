// 1 DALIS

console.group('1. Sukurti objektų(žmonių) masyvą su 8 elementais: name, surname, age, height, weight, sex')

const people = [{
    name: 'Jonas',
    surname: 'Jonaitis',
    age: 26,
    height: 190,
    weight: 65,
    sex: 'male'
}, 
{
    name: 'Petras',
    surname: 'Petraitis',
    age: 18,
    height: 170,
    weight: 79,
    sex: 'male'
},
{
    name: 'Ieva',
    surname: 'Ievaitienė',
    age: 35,
    height: 165,
    weight: 60,
    sex: 'female'
},
{
    name: 'Greta',
    surname: 'Gretaitė',
    age: 15,
    height: 157,
    weight: 71,
    sex: 'female'
},
{
    name: 'Povilas',
    surname: 'Povilaitis',
    age: 68,
    height: 172,
    weight: 90,
    sex: 'male'
},
{
    name: 'Ugnė',
    surname: 'Ugnaitė',
    age: 29,
    height: 175,
    weight: 68,
    sex: 'female'
},
{
    name: 'Giedrius',
    surname: 'Giedraitis',
    age: 31,
    height: 185,
    weight: 85,
    sex: 'male'
},
{
    name: 'Miglė',
    surname: 'Miglaitė',
    age: 35,
    height: 165,
    weight: 60,
    sex: 'female'
}
];


console.groupEnd();

console.log(people);

console.group('2. Panaudojant array.forEach metodą')

// Atspausdinti kiekivieną elementą.

people.forEach((person) => {
    console.log(person);
});

console.log('-----------')



// Atspausdinti kiekvieno elemento pilną vardą.

people.forEach((person) => {
    console.log(`${person.name} ${person.surname}`)
});

console.log('-----------')

console.groupEnd();



// Atspausdinti kiekvieno elemento kūno masės indeksą.


people.forEach((person) => {
    const KMI = person.weight / (person.height / 100) ** 2;
    console.log(`Kūno masės indeksas: ${KMI.toFixed(1)}`);
});


console.group('3. Panaudojant array.filter atrinkti į naują masyvą ir po to atspausdinti žmones');

// Atspausdinti žmones, kurių vardas ilgesnis nei 6 simboliai.

const peopleNameOver6Symbols = people.filter((person) => {
    if(person.name.length > 6) {
        return person
    };
});

console.log('Vardas ilgesnis nei 6 simboliai: ')
console.log(peopleNameOver6Symbols);

// Atspausdinti žmones, kurių svoris didesnis nei 80kg.

const peopleWeightOver80kg = people.filter((person) => {
    if(person.weight > 80) {
        return person
    };
});

console.log('Sveria daugiau nei 80kg:')
console.log(peopleWeightOver80kg);


// Atspausdinti žmones, kurie aukštesni nei 185 cm.

const peopleHeightOver185cm = people.filter((person) => {
    if(person.height > 185) {
        return person
    };
});

console.log('Aukštesni nei 185 cm:')
console.log(peopleHeightOver185cm)


console.groupEnd();


console.group('4. Panaudojant array.map atrinkti į naują masyvą ir po to atspausdinti');

// Atspausdinti ūgius.

const printHeight = people.map((person) => {
    return person.height
});

console.log({ Ūgiai: printHeight});



// Atspausdinti svorius.

const printWeight = people.map((person) => {
    return person.weight
});

console.log({ Svoriai: printWeight});


// Atspausdinti ūgius, svorius ir amžius.

const printHeightWeightAge = people.map((person) => {
    // return `${person.height} cm, ${person.weight} kg, ${person.age} age,`
    return ({height: person.height, weight: person.weight, age: person.age})
});

console.log({Ūgis_Svoris_Amžius : printHeightWeightAge});


// Aspausdinti KMI indeksus.

const printKMI = people.map((person) => {
    const KMI = Number((person.weight / (person.height / 100) ** 2).toFixed(1));
    return KMI;
});

console.log({KMI: printKMI});


// Atspausdinti KMI indeksus ir amžius.

const printKMIAge = people.map((person) => {
    const KMI = Number((person.weight / (person.height / 100) ** 2).toFixed(1));
    // return `${KMI.toFixed(1)} KMI, ${person.age} age`
    return ({KMI: KMI, age: person.age})
});


console.log({KMI_Amžius: printKMIAge});
console.groupEnd();


console.group('5. Panaudojant array.reduce suskaičiuoti ir po to atspausdinti');

// Suskaičiuoti svorio vidurkį.

const lengthOfWeight = people.map((person) =>{
    return person.weight
});

const averageSumOfWeight = people.reduce((sum, cur) => {
    return sum + cur.weight / lengthOfWeight.length
}, 0);

console.log(`Average of weight: ${averageSumOfWeight.toFixed(1)}`);



// Suskaičiuoti ūgio vidurkį.


let count = 0;

const averageSumOfHeight = people.reduce((sum, cur) => {
    if(cur.height !== undefined) {
        count += 1;
    }
    return sum + cur.height
}, 0) / count;

console.log(`Average of height: ${averageSumOfHeight.toFixed(1)}`);

console.groupEnd();



// 2 DALIS

console.group('6. Pasinaudojant 1 dalies elementų masyvu, sukurti Person prototipų(Class) masyvą:');

// Sukurti klasę pagal People objektų masyvą.

class Person {
    name;
    surname;
    age;
    height;
    weight;
    sex;


    constructor({name, surname, age, height, weight, sex}) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.sex = sex;
    }


    // Sukurti metodai

    getBMI() {
        const KMI = Number((this.weight / (this.height / 100) ** 2).toFixed(1));
        return KMI
    };

    getString() {
        return `${this.name} ${this.surname}: ${this.age} age, ${this.height} height, ${this.weight} weight, ${this.sex}.`
     };


 }


// Patrikrinimas ar susikūrė klasė Person.
console.dir(Person);

// Patikrinimas kaip veikia klasė Person.
console.log(new Person ({
    name: 'Ieva',
    surname: 'Ievaitienė',
    age: 35,
    height: 165,
    weight: 60,
    sex: 'female'
}));

console.log('--------------');

// Sukuriamas masyvas pagal people masyvų objektą naudojant classę Person.

const allpeople = people.map((person) => {
    return new Person(person);
});

console.log(allpeople);

console.log('--------------');

// Sukurti vidinį metodą: getBMI() - veikimo patikrinimas.

allpeople.forEach((person) => {
    console.log(person.getBMI());
});

console.log('--------------');

// Sukurti vidinį metodą: toString() - veikimo patikrinimas.

allpeople.forEach((person) => {
    console.log(person.getString());
});

console.log('--------------');

// 1. Atrinkti moteris, kurios jaunesnės nei 20 metų ir svoris didesnis nei 70kg.

const gerFemale20yoWeightOver70kg = allpeople.filter((person) => {
    if(person.sex === 'female' && person.age < 20 && person.weight > 70) {
        return person
    }
});

console.log({Underage_Female_Overweight: gerFemale20yoWeightOver70kg});


// 2. Atrinkti vyrus, kurie vyresni nei 25 metai ir KMI mažesnis nei 18,5.

const getMaleOver25yoUnderWeight = allpeople.filter((person) => {
    if(person.sex === 'male' && person.age > 25 && person.getBMI() < 18.5) {
        return person
    };
});

console.log({Male_Underweight: getMaleOver25yoUnderWeight});

// 3. Atrinkti vaikus, su antsvoriu (KMI > 30).

const getKidsKMIOver30 = allpeople.filter((person) => {
    if(person.age < 18 && person.getBMI() > 30) {
        return person
    }
});

console.log({Kids_Overweight: getKidsKMIOver30});


// 4. Atrinkti pensininkus, su antsvoriu (KMI > 30).

const getRetireesKMIOver30 = allpeople.filter((person) => {
    if(person.age >= 65 && person.getBMI() > 30) {
        return person
    };
});

console.log({Retirees_Overweight: getRetireesKMIOver30});


// 5. Atrinkti visus, kieno KMI nepatenka į rėžius [18.5; 25].

const getPeopleHealthyKMI = allpeople.filter((person) => {
    if(person.getBMI() >= 18.5 && person.getBMI() <= 25) {
        return person
    };
});

console.log({People_Healthy_Weight: getPeopleHealthyKMI});


console.groupEnd();