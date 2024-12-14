const p1 = {
    fName: "Abhishek",
    lName: "Lodha",
    getFullName () {
        return this.fName + " " + this.lName;
    }
}

// console.log(p1.getFullName());

// inherited from p1
const p2 = Object.create(p1)
// console.log(p1);
// console.log(p2);
/*
output
{
  fName: 'Abhishek',
  lName: 'Lodha',
  getFullName: [Function: getFullName]
}
{} ---> p2

when we log p2 this comes empty object but when we try to access the property of p1
p2 has the access of all property of p1 beacuse p2 is inherited from p1 means 
prototype of p2 is point to p1
*/

// console.log(p2.getFullName()); // it works

/*
output of console.log(p2.__proto__);
 {
  fName: 'Abhishek',
  lName: 'Lodha',
  getFullName: [Function: getFullName]
}
 */


/*
when we call getFullName() function on p2 object javascript internally search this function 
in __proto__ of p2 object in our case __proto__ of p2 object points to p1 object 
hence p1 has this function so it run if p1 has not this function it will give error

*/
// another way but this is not prefer
const p3 = {
    __proto__ : p1
}

// console.log(p3.getFullName(), "p3");


let name = "Abhishek Lodha"
let number = 100
let bool = false
console.log(name.__proto__); // {}
console.log(number.__proto__); // {}
console.log(bool.__proto__); // {}

/*
in nodejs its points to empty object but in browser 
__proto__ of name is points to String class
__proto__ of number is points to Number class
__proto__ of bool is points to Boolean class

in wrapper classes(String, Number, Boolean) __proto__ is known as prototype 

prototype of every class is points to Object class and
prototype of object class is points to null 

this is the reason of why every thing is object in javascript

same for class 
*/

 