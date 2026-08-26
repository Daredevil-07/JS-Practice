// 1. Declare an array named `teaFlavors` that contains the strings `"green tea"`, `"black tea"`, and `"oolang tea"`.
//     Access the first element of the array and store it in a variable name `firstTea`.

let teaFlavors = ["green tea", "black tea", "oolang tea"]

// let teaFl = new Array ("green tea", "black tea", "oolang tea")

const firstTea = teaFlavors[1]
//  console.log(firstTea);

/* 2. Declare an array named `cities` containing `"London"`,`"Tokyo"`,`"Paris"`,and `"New York"`.
    Access the third element in the array and store it in a variable named `favoriteCity`
 */

let cities = ["London", "Tokyo", "Paris", "New York"]

const favoriteCity = cities[3]
// console.log(favoriteCity);

/* 3. You have an array name `teaTypes` containing `"herbal tea"`, `"white tea"`,and `"masala chai"`.
    Change the second element of an array to `"jasmine tea "`.
 */

let teaTypes = ["herbal tea ", "white tea ", "masala chai"]
teaTypes[2] = "jasmine"
// console.log(teaTypes);

/* 4. Declare an array named `citiesVisited` containing `"Mumbai"` and `"Sydney"`.
  Add `"Berlin"` to the arrya using `push` method.
 */

let citiesVisited = ["Mumbai", "Sydney"]
citiesVisited.push("Berlin")
// console.log(citiesVisited);

/* 5. You have an array named `teaOrders` with `"chai"`,`"iced tea "`,`"matcha"`, and `"earl grey"`.
remove the last element of the array using the `pop` method and store it in a variable named `lastOrder`.
 */

let teaOrders = ["chai", "iced tea", "matcha", "earl grey"]
const lastOrder = teaOrders.pop();
//  console.log(lastOrder);

/* 6. You have an array named `popularTeas` containing  `"green tea"`, `"oolong tea"`, and `"chai"`. Create a soft copy of this island named `softCopyTeas`.
 */

let popularTeas = ["green tea", "oolong tea", "chai"]
let softCopyTeas = popularTeas;
// console.log(softCopyTeas);

/* 7. You have an array named `topCities` containing `"Berlin"`, `"Singapore"`, and `"New York"`. Create a hard copy of this array named `hardCopyCities`.
 */

let topCities = ["Berlin", "Singapore", "New York"]
// let hardCopyCities = [...topCities]
let hardCopyCities = topCities.slice();
topCities.pop()
// console.log(hardCopyCities);
// console.log(topCities);

/* 8. You have to arrays: `europeanCities` conataining
`"Paris"` and `"Rome"`, and `asianCities` containing
`"Tokyo"` and `"Bangkok"`
Merge these two arrays into a new array named `worldCities`.
 */

let europeanCities = ["Paris","Rome",]
let asianCities = [" Tokyo","Bangkok"]
let worldCities = europeanCities.concat(asianCities);
// console.log(worldCities);


/* 9. You have an array named `teaMenu` with `" masala chai"`,`"oolong tea "`,`"green tea"`, and `"earl grey"`.
Find the length of the array and store it in a varaible name `menuLength`.
 */

let teaMenu = ["masala chai ","oolong tea","green tea","earl grey"]
const menuLength = teaMenu.length;

// console.log(menuLength);

/*10. You have an array named `cityBucketList` containing `"Kyoto"`,`"London"`, `"Cape Town"` , and `"Vancouver"`.
 Check if `"London"` is in the array and store the result in a variable named `isLondonInList`
 */

 let cityBucketList = ["Kyoto","London","Cape Town","Vancouver"]
 let isLondonInList = cityBucketList.includes("London")
 console.log(isLondonInList);