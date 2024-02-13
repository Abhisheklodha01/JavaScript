// JavaScript and  Classes

/***
 *  1. OOP 
 *  2. object
 *  3. constructor function
 *  4. prototypes
 *  5. classes
 *  6. Instances (new, this)
 * * */


// object literals

const user = {
    userName: "Abhishek",
    loginCount: 8,
    SignedIn: true,

    getUserDetails: function() {
        // console.log("Got user details from Database");
        // console.log(`UserName: ${this.userName}`);
        console.log(this); // current context

    }
}


// console.log(user.loginCount);
// console.log(user.getUserDetails());
// console.log(this);


// constructor function

// const Promise1 = new Promise()
const date = new Date()    // new ==>  constructor function


function User(username, loginCount, isLoggedIn) {
    this.username = username
    this.isLoggedIn = isLoggedIn
    this.loginCount = loginCount

    this.greeting = function(){
        console.log(`Welcome ${this.username} in my World `);
    }

    // return this // this is not matter
}

const user1 = new User("abhishek", 12, true)
const userTwo = new User("shivani", 12, true)
// if we dont use new keyword it over right the value 
// new provide instance of object 
// due to new keyword constructor function is called
console.log(user1.constructor);
console.log(userTwo);




