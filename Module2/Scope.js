/*
 variables has a global scope
let a = 10
const b = 20
var c = 30


var c = 30
if(true)
{
    // variables has a block scope
    let a = 12
    const b = 23
    var c = 31 // in var scope is not matter it always available 
              //  no matter where we declare it thats why var is not 
              //  use in javascript
}

// console.log(a);
// console.log(b);
console.log(c);

*/

// nesting scope

// function one()
// {
//     const userName = "abhishek"

//     function two()
//     {
//         const webSite = "youtube"
//         console.log(userName);
//     }
//     // console.log(webSite);
//      two()
// }

// one()

// if (true) {
//   const userName = "abhishek";
//   if (true) {
//     const website = " youtube";
//     //    console.log(userName + website);
//   }
//   // console.log(website);
// }

// console.log(userName);


/************ intresting **************/

console.log(addone(5))
function addone(value)
{
  return value + 1
}
// addone(5)

console.log(addtwo(5)) // this gives error
const addtwo = function(value) // sometiimes is called expression
{
  return value + 2
}

// addtwo(5)




