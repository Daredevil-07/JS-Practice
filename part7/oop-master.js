let car = {
    make: "Toyta",
    model: "Carmy",
    year: 2020,

    start: function () {
        return `${this.make} car got started in ${this.year}`;
    },
};
// console.log(car.start());

function Person(name, age) {
    this.name = name
    this.age = age
}

let john = new Person("John", 20)
// console.log(john.age);

function Animal(type) {
    this.type = type
}

Animal.prototype.speak = function () {
    return `${this.type} makes a sound ${this}`
}

Array.prototype.ashish = function () {
    return `Custom method ${this}`
}

let myArray = [1, 2, 3]
// console.log(myArray.speak());

class Vehicle {
    constructor(make, model) {
        this.make = make
        this.model = model
    }
    start() {
        return `${this.model} is car from ${this.make} `
    }
}

class Car extends Vehicle {
    drive() {
        return `${this.make} : This is an inheritance example`;
    }
}

let myCar = new Car("Tata", "Sierra")
// console.log(myCar.start());
// console.log(myCar.drive());


// Encapsulation

class BankAccount {
    #balance = 1433;

    deposit(amount) {
        this.#balance += amount
        return this.#balance;
    }

    getBalance() {
        return `₹${this.#balance}`
    }
}
let account = new BankAccount()
account.deposit("500");

// console.log(account.getBalance());

//Abstraction

class CoffeeMachine {
    start() {
        //call DB
        // filter value
        return `Starting the machine...`
    }
    brewCoffee() {
        //complex calc
        return `Brewing Coffee`

    }

    pressStartBtn() {
        let msg1 = this.start()
        let msg2 = this.brewCoffee()
        return `${msg1} and ${msg2}`
    }
}

let myMachine = new CoffeeMachine()
// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());
// console.log(myMachine.pressStartBtn());


// Polymorphism

class Bird{

    fly(){
        return `Flying...`
    }
}
class Penguin extends Bird{

    fly(){
        return `Penguins cant fly`;
    }
}

let bird = new Bird()
let penguin = new Penguin();
// console.log(bird.fly());
// console.log(penguin.fly());


// Static Method 

class Calculator{
    static add(a,b){
        return a+b
    }
}

// console.log(Calculator.add(2,3));

// Getters and Setters

class Employee{
    #salary
    constructor(name,salary){
        if (salary <0) {
            throw new Error("Salary cannot be in negative")
        }
        this.name = name
        this.#salary = salary
    }

    get salary(){
        return `You are not allowed to see the salary `
    }

    set salary(value){
        if (value < 0){
            console.error("Invalid Salary");
        }else{
            this.#salary = value;
        }
    }
}

let emp = new Employee("Alice", 90)
console.log(emp.salary);
