// 2. Sukurtas masyvas iš 8 objektų.

const cars = [

    { 
        brand: 'Ford',
        model: 'T',
        year: 2008,
        color: 'black',
        fuelTypes: ['gasoline', 'diesel'],
        price: 7000,
    
    },
    { 
        brand: 'Ferrari',
        model: '812 GTS',
        year: 2016,
        color: 'red',
        fuelTypes: ['electric', 'gasoline'],
        price: 30000,
    
    },
    { 
        brand: 'BMW',
        model: 'Z4',
        year: 2020,
        color: 'yellow',
        fuelTypes: ['gasoline', 'electric'],
        price: 12000,
    
    },
    { 
        brand: 'Mazda',
        model: 'CX-50',
        year: 2021,
        color: 'orange',
        fuelTypes: ['gasoline'],
        price: 4000,
    
    },
    { 
        brand: 'Toyota',
        model: 'Avalon',
        year: 2010,
        color: 'green',
        fuelTypes: ['diesel', 'electric', 'gasoline'],
        price: 7000,
    
    },
    { 
        brand: 'Audi',
        model: 'A4',
        year: 2012,
        color: 'brown',
        fuelTypes: ['gasoline', 'electric'],
        price: 9000,
    
    },
    { 
        brand: 'Honda',
        model: 'CR-V',
        year: 2013,
        color: 'blue',
        fuelTypes: ['electric'],
        price: 6000,
    
    },
    { 
        brand: 'Peugeot',
        model: '208 GTi',
        year: 2019,
        color: 'gold',
        fuelTypes: ['diesel', 'gasoline'],
        price: 5000,
    
    },
    ]


// 1. Sukurta klasė Car

class Car {
        brand;
        model;
        year;
        color;
        fuelTypes;
        price;
    
    
    constructor({  brand, model, year, color, fuelTypes, price}) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.fuelTypes = fuelTypes;
        this.price = price;
    };

    // Metodai

    getFuelType() {
        return this.fuelTypes.join('/')
    }

}

let allCars;


console.group('1. Sukurkite klasę Car, kuri turėtų savybes ir priskirtų jas naudojant konstruktorių:');    

console.dir(Car)

console.log(new Car({
    brand: 'Audi',
    model: 'A4',
    year: 2012,
    color: 'brown',
    fuelTypes: ['gasoline', 'electric'],
    price: 9000,
}));

console.groupEnd();



console.group('2. Sukurkite masyvą sudarytą iš 8 Car klasės mašinų');

allCars = cars.map((car) => {
    return new Car(car);
})

console.table(allCars);


console.groupEnd();



console.group('3. Klasėje Car sukurkite metodą getFuelType, kuris grąžintų mašinos kurų tipus FuelTypes, kaip stringą atskirtą /')
console.groupEnd();


allCars.forEach((car) => {
    console.log(car.getFuelType());
});


console.group('4. Atspausdinkite kiekvieno automobilio pavadinimą ir 3 punktu sukurto metodo rezultatą');

/*  Example:
    
Tayota Corola - dysel/electric
Nisan Bajam - petrol/gas
Kanagi BaBa - uranus */

  allCars.forEach((car) => {
    console.log(`${car.brand} ${car.model} - ${car.getFuelType()} `)
  })

console.groupEnd();



console.group('5. Atrinkite tik elektrinius automobilius');

const getElectricCars = allCars.filter((car) => {
    // if(car.fuelTypes.includes('electric') && car.fuelTypes.length === 1) 
    if(car.fuelTypes.includes('electric')) {
        return car
    };
});

console.table(getElectricCars);



console.group('6. Atrinkite tik benzininius automobilius, naujesnius nei 2016 metai');

const getGasolineCarsRecent = allCars.filter((car) => {
    if(car.fuelTypes.includes('gasoline') && car.year > 2016) {
        return car
    };
});

console.table(getGasolineCarsRecent);

console.groupEnd();



console.group('7. Atrinkite audi tipo automobilius nuo 2012 iki 2016, kurie nėra dyzeliniai');

const getAudiFrom2012to2016notDiesel = allCars.filter((car) => {
    if(car.year >= 2012 && car.year <= 2016 && !car.fuelTypes.includes('diesel') && car.brand === 'Audi') {
        return car
    };
});

console.table(getAudiFrom2012to2016notDiesel);

console.groupEnd();



console.group('8. Suskaičiuokite 5 punkte gautų automobilių kainos vidurkį');

const electricCarsCount = getElectricCars.length
const getPriceAverage =  getElectricCars.reduce((sum, cur) => {
    return sum + cur.price
}, 0) / electricCarsCount;

console.log(getPriceAverage);


console.groupEnd();



console.group('9. Suskaičiuokite 6 punkte gautų automobilių bendrą vertę');

const sumGasolineCarsPrice = getGasolineCarsRecent.reduce((sum, cur) => {
    return sum + cur.price
}, 0);

console.log(sumGasolineCarsPrice);

console.groupEnd();


console.group('10. Panaudokite pradinį Car objektų masyvą performuoti duomenis į tokių objektų masyvą:');

/* 

 * brand,
  * model,
  * price, // kaina doleriais [Number]
  * fuelType // kuro tipas kaip string'as. galite naudoti 3 punktu sukurtą metodą

*/

const formattedCars = allCars.map((car) => ({
    brand: car.brand,
    model: car.model,
    price: car.price * 1.06,
    fuelType: car.getFuelType()
}));

console.table(formattedCars);

console.groupEnd();