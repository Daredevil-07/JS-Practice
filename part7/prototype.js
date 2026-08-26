let computer = {cpu : 12}
let lenovo = {
    screen:"4K",
    __proto__:computer,

};
let tomHardware = {}

// console.log( lenovo.__proto__);  

let genericCar = {tyres: 4}

let tesla = {
    driver:"AI"
}
Object.setPrototypeOf(tesla,genericCar)
console.log(`genericCar`,Object.getPrototypeOf(tesla) );