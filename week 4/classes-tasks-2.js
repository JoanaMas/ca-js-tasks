console.groupCollapsed('1. - https://edabit.com/challenge/ZngT4zDckDugt2JGY');
{
  class Player {

    constructor(name, age, height, weight) {
      this.name = name;
      this.age = age;
      this.height = height;
      this.weight = weight;
    }

    getAge() {
      return `${this.name} is age ${this.age}`;
    }

    getHeight() {
      return `${this.name} is ${this.height}cm`;
    }

    getWeight() {
      return `${this.name} weighs ${this.weight}kg`
    }

  }

  p1 = new Player ("David Jones", 25, 175, 75);
  console.log(p1.getAge());
  console.log(p1.getHeight());
  console.log(p1.getWeight());
}
console.groupEnd();

console.groupCollapsed('2. - https://edabit.com/challenge/yxKoCKemzacK6PECM');
{
  class Calculator {

    constructor(a, b) {
      this.a = a;
      this.b = b;
    };

    add() {
      return this.a + this.b;
    }

    subtract() {
      return this.a -this.b;
    }

    multiply() {
      return this.a * this.b;
    }

    divide() {
      return this.a / this.b;
    }
  }

  const calculator = new Calculator(10, 5);
  const calculator1 = new Calculator(10, 5);
  const calculator2 = new Calculator(10, 5);
  const calculator3 = new Calculator(10, 5);

  console.log(
    calculator.add(),
    calculator1.subtract(),
    calculator2.multiply(),
    calculator3.divide()
  )

}
console.groupEnd();

console.groupCollapsed('3. - https://edabit.com/challenge/kGLhgwGaLJsCMS7wS');
{
  class Employee {

    constructor (firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
      this.fullname = `${this.firstname} ${this.lastname}`;
      this.email = `${this.firstname}.${this.lastname}@company.com`.toLowerCase();
    }
 }
        
  const emp1 = new Employee("John", "Smith");
  const emp2 = new Employee("Mary", "Sue");
  const emp3 = new Employee("Antony", "Walker");
  console.log(emp1.fullname)
  console.log(emp2.email)
  console.log(emp3.firstname)
  
}
console.groupEnd();

console.groupCollapsed('4. - https://edabit.com/challenge/iwdZiFucR5wkQsFHu');
{
  class Person {
    
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

   compareAge(other) {

    if(other.age > this.age) {
      return `${other.name} is older than me.`
    } else if (other.age < this.age) {
      return `${other.name} is yourger than me.`
    } else if (other.age === this.age) {
      return `${other.name} is the same age as me.`
    }
   }
  }

  p1 = new Person("Samuel", 24);
  p2 = new Person("Joel", 36);
  p3 = new Person("Lily", 24);
  console.log(p1.compareAge(p2));
  console.log(p2.compareAge(p1));
  console.log(p1.compareAge(p3));

}
console.groupEnd();

console.groupCollapsed('5. - https://edabit.com/challenge/Hgb38yhWGwJCMHbRQ');
{

  class Circle {

    constructor(radius) {
      this.radius = radius
    }

    getArea() {
      return Math.PI * (this.radius ** 2);
    }

    getPerimeter() {
      return 2 * Math.PI * this.radius
    }
  }

  const circle1 = new Circle(11);
  console.log(circle1.getArea().toFixed(1));
  console.log(circle1.getPerimeter().toFixed(1));


}
console.groupEnd();

console.groupCollapsed('6. - https://edabit.com/challenge/qNMtrtizgssAQqP2b');
{
  class Name {

    constructor(fname, lname) {
      this.fname = fname[0].toUpperCase() + fname.substring(1).toLowerCase();
      this.lname = lname[0].toUpperCase() + lname.substring(1).toLowerCase();
      this.fullname = `${this.fname} ${this.lname}`;
      this.initials = `${this.fname[0]}.${this.lname[0]}`;
    }
  }

  let a1 = new Name("john", "SMITH");
  console.log(a1.fname);
  console.log(a1.lname);
  console.log(a1.fullname);
  console.log(a1.initials);
  

}
console.groupEnd();

console.groupCollapsed('7. - https://edabit.com/challenge/HKmJFmZZCX53ff4ke');
{
  class IceCream {

    constructor(flavor, numSprinkles) {
      this.flavor = flavor;
      this.numSprinkles = numSprinkles;
    }
  }

  function sweetestIcecream(arr) {
    let result = []
    let obj = {
      Plain: 0,
      Vanilla: 5,
      ChocolateChip: 5,
      Strawberry: 10,
      Chocolate: 10
    }
    for(let i = 0; i < arr.length; i++) {
      if(obj.hasOwnProperty(arr[i].flavor)) {
        result.push(arr[i].numSprinkles + obj[arr[i].flavor])
      }
    }
    
    return Math.max(...result)
  }

    ice1 = new IceCream("Chocolate", 13)
    ice2 = new IceCream("Vanilla", 0)
    ice3 = new IceCream("Strawberry", 7)
    ice4 = new IceCream("Plain", 18)
    ice5 = new IceCream("ChocolateChip", 3)

    console.log(sweetestIcecream([ice1, ice2, ice3, ice4, ice5]));
    console.log(sweetestIcecream([ice3, ice1]));
    console.log(sweetestIcecream([ice3, ice5]));

}

console.groupEnd();

console.groupCollapsed('8. - https://edabit.com/challenge/9zwdrfW99zmdRhibi');
{
  class OneThreesNines {

    constructor (number) {
      this.number = number;
    }

    get ones() {
      return this.number / 1;
    }

    get threes() {
      return Math.floor(this.number / 3);
    }

    get nines() {
      return Math.floor(this.number / 9);
    }

  }

  const n1 = new OneThreesNines(5);
  console.log(n1.ones);
  console.log(n1.threes);
  console.log(n1.nines);


}
console.groupEnd();

console.groupCollapsed('9. - https://edabit.com/challenge/7PA4jhWqDYJT4ixLp');

{
  class User {
    static userCount = 0;
    
    constructor (username) {
      this.username = username;
      User.userCount += 1
    }
  }

  const u1 = new User ("johnsmith10");
  console.log(u1.username);
  console.log(User.userCount);
  const u2 = new User ("marysue1989");
  console.log(u2.username);
  console.log(User.userCount);
  const u3 = new User ("milan_rodrick");
  console.log(u3.username);
  console.log(User.userCount);
  

  
}
console.groupEnd();

console.groupCollapsed('10. - https://edabit.com/challenge/s5Sz2ovKsvtGxNGgn');
{
  class Book {

    constructor(title, author) {
      this.title = title;
      this.author = author;
    }

    getTitle () {
      return `Title: ${this.title}`
    }
    getAuthor () {
      return `Author: ${this.author}`
    }
  }

  const PP = new Book('Pride and Prejudice', 'Jane Austen' );
  const H = new Book('Hamlet', 'William Shakespeare');
  const WP = new Book('War and Peace', 'Leo Tolstoy');

  console.log(PP.title);
  console.log(PP.author);
  console.log(PP.getTitle());
  console.log(PP.getAuthor());
  console.log('--------')
  console.log(H.title);
  console.log(H.author);
  console.log(H.getTitle());
  console.log(H.getAuthor());
  console.log('--------')
  console.log(WP.title);
  console.log(WP.author);
  console.log(WP.getTitle());
  console.log(WP.getAuthor());
}
console.groupEnd();