const marvel_heros =["thor","ironman","spiderman"]
const dc_heros =["superman","flash","batman"]

marvel_heros.push(dc_heros)
// console.log("Marvel Heros",marvel_heros);

const all_heros = marvel_heros.concat(dc_heros)
// console.log("All Heros",all_heros);

//spread operator
const all_new_hetos=[...marvel_heros,...dc_heros]
// console.log("All new Heros",all_new_hetos);



const anotherArray=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
// console.log(anotherArray);
const real_another_array=anotherArray.flat(Infinity)
//flat used for conactenated all array in new array. and infintity is depth or level of array

console.log("Rearl array",real_another_array);
console.log(Array.isArray("hitesh")) // isArray check this is array or not
console.log(Array.from("hitesh")) //convert in arrayusing from method

let score1 =100
let score2 =200
let score3 =300
console.log(Array.of(score1,score2,score3));



