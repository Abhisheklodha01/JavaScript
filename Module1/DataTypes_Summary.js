// primitive datatypes
/*
   7 types

   1. string
   2. number
   3. boolean
   4. null
   5. undefined
   6. symbol
   7. bigInt => let bigNumber = 24562393374274239n
                console.log(typeof(bigNumber));

   
   // symbol example

   let id = Symbol('123')
   const anotherid = Symbol('123')
   console.log(id);
   console.log(anotherid);
   console.log(id == anotherid);

*/
/*
   non-primitive / refrence datatypes
   1. arrays
   2. objects
   3. functions

*/

const heros = ["saktiman", "naagraj", "doga"]

 let myObj = {
     name: "abhishek",
     age: 22,
}

const myFunc = function()
{
   console.log("hello my dear");
}

console.log(typeof(myFunc));
console.log(typeof(myObj));
console.log(typeof(heros));



// for notes visit --->  JS documentation