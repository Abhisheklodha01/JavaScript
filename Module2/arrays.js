// arrays

const myArray = [0, 1, 2, 3, 4, 5]; // combination of ant thing like number string object boolean
const myheros = ["saktiman", "naagraj"];

const myArr = new Array(1, 2, 3, 4, 5);

// console.log(myArr);

// Methods

// myArray.push(6);
// myArray.push(7);
// myArray.pop();
// console.log(myArray);

// myArray.unshift(9)
// myArray.shift()
// console.log(myArray);

// console.log(myArray.includes(9));
// console.log(myArray.indexOf(3));

// const newArr = myArray.join()  // convert in string
// console.log(myArray);
// console.log(newArr);

// slice spice

// console.log("A", myArray);
// const myn1 = myArray.slice(1, 3)
// console.log(myn1);
// console.log("B", myArray);

// const myn2 = myArray.splice(1, 3)
// console.log("C", myArray);
// console.log(myn2);

const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3]);

// const all_heros = marvel_heros.concat(dc_heros)  // return new array
// console.log(all_heros)

// const all_newHeros = [...marvel_heros, ...dc_heros] // both same
// console.log(all_newHeros);

// const another_array = [1, 2 ,3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// const real_another_array = another_array.flat(Infinity)  // spread out array
// console.log(real_another_array);

// console.log(Array.isArray("abhishek"))
// console.log(Array.from("abhishek"))
// console.log(Array.from({name: "abhishek"})) // return empty array

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));
