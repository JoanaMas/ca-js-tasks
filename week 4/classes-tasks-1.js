/*
1. Sukurti klasę Automobilis
  - sukurti konstruktorių, su 3 argumentais:
    - marke, modelis, kaina

*/

class Car {
    model;
    price;


    
    /*
      - konstruktoriuje aprašyti, jog perduotus argumentus išsaugotume formuojame objekte savybėmis:
        - this.brand
        - this.model
        - this.price
    */


    constructor(brand, model, price) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }

    getDoublePrice() {
        return this.price + 100
    };
}

/*
2. Sukurkite 3 skirtingus objektus pagal klasę Automobilis kintamuosiuose:
  - const car1 = new Automobilis(..., ..., ...);
  - const car2 = new Automobilis(..., ..., ...);
  - const car3 = new Automobilis(..., ..., ...); */


const car1 = new Car('Ford', '2000', 10000);
const car2 = new Car('Toyota', 'Auris', 20000);
const car3 = new Car('Audi', 'A3', 30000);


/*

3. Atsispausdinkite car1, car2 ir car3 kintamuosius. Peržiūrėkite juos konsolėje, panagrinėkite kas yra tie objektai

*/

console.log(
    car1,
    car2,
    car3
)

/*
4. Atspausdinkite visų kintamųjų (kurie rodo į klasės objektus):
  modelius:
    - console.log(car1.model);
    - console.log(car2.model);
    - console.log(car3.model);
  markes:
    - console.log(car1.brand);
    - console.log(car2.???);
    - console.log(???);
  kainas:
    - console.log(???);
    - console.log(???);
    - console.log(???);

*/    


console.log(
    car1.model,
    car2.model,
    car3.model
)

console.log(
    car1.brand,
    car2.brand,
    car3.brand
)

console.log(
    car1.price,
    car2.price,
    car3.price
)


/*
5. Padidinkite Automobilis objektų kainas šimtu.
  car1.price = car1.price + 100;
  car2.price = ??? + 100;
  ???
  */
 

console.log(
    car1.price = car1.price + 100,
    car2.price = car2.price + 100,
    car3.price = car3.price + 100
)

