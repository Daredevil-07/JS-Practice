/*1. Write a function stringToNumber that takes a string input and tries to convert it to a number. If the conversion fails, return "Not a number".
 */

function stringToNumber(str){
    let num = Number(str);
    if (isNaN(num)) {
        return "Not a number"
    }
    return num;
}
let number = stringToNumber("23")
// console.log(number);

/* 2. Write a function flipBoolean that takes any input and converts it to its boolean equivalent, then flips it. For example, true becomes false, 0 becomes true, etc.
 */

function flipBoolean(value){
    return !Boolean(value);

}
let bool = flipBoolean("true")
console.log(bool);

/* 3. Write a function whatAmI that takes an input and returns a string describing its type after conversion. If it's a number, return "I'm a number!", if it's a string, return "I'm a string!"
 */

function whatAmI(){
    return `I'm a ${typeof}`
let typeOf = whatAmI();
console.log(typeOf);