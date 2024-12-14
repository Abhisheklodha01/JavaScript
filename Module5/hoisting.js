sayName("abhishek") // work
function sayName(name) {
    console.log(name);   
}
sayName("abhi")

console.log(abc); // wrok
var abc = 10 
console.log(abc);  


console.log(a); // error
let a = 10 
console.log(a);

console.log(ab); // error
const ab = 10 
console.log(ab);
// let and const creates a temporal dead zone 


func() // error due to temporal dead zone
const func = () => {
    console.log("Hello abhishek");
    
}

// in case of class it also creates a temporal deadzone