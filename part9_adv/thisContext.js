const person = {
    name: "Ashish",
    greet() {
        console.log(`Hi, I am ${this.name}`);
    },
}; 

person.greet();

const greetFunction = person.greet;
greetFunction();
// greetFunction.call(person);

const boundGreet = person.greet.bind({ name: "John Doe"});
boundGreet();