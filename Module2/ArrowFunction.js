// this keyword
/** 
const user = {
    userName: "abhishek",
    Price: 199,
    welcomeMessage: function(){
        console.log(`${this.userName} , welcome to our website`);
        console.log(this);
    }
}

user.welcomeMessage()
user.userName = "shivani"
user.welcomeMessage()
// console.log(this);


function chai()
{
    let userName = "abhi"
    console.log(this.userName); // this keyword is not work with function
}

chai()


*/


/***********  Arrow function  ***********/


// const chai = () =>
// {
//    let userName = "abhi"
//    console.log(this.userName);  // this keyword is not work with arrow function
//    console.log(this);
// }

// chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2  // basic arrow function // expilictly 
// }

// console.log(addTwo(3, 4))


// const addTwo = (num1, num2) =>  num1 + num2  // implicite arrow function 
//                                              // it automatically return the value
// console.log(addTwo(3, 4))

// const returnObject = ()=> ({username: "abhi"}) // if you want to return object
// console.log(returnObject());                  // it is compulsory to rap in curly braces()




/****  Immediatly invoked functions Expression(IIFE) ****/

(function chai() // named IIFE
{
    console.log("DB connected");
})(); // semicolon is compulsory becuase to end IIFE semicolon is needed
//  if we dont give semicolon no other IIFE function is executed  

// ()()  first is for defination of function and second is for calling the function

(() => {
    console.log("DB Connected Two");  // unnamed IIFE
})();


((name) => {
    console.log(`DB Connected Three ${name}`);
})('abhishek');



