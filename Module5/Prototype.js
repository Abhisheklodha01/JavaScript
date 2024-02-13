
/*
object protoptype
function multiply(num) {
    return num*5
}

multiply.power = 2
console.log(multiply.power);
console.log(multiply.prototype);

function createUser(userName, score) {
    this.userName = userName
    this.score = score
}

createUser.prototype.increament = function() {
    this.score++
}

createUser.prototype.printMe = function() {
    console.log(`price is ${this.score}`);
}

const chai = new createUser("chai", 25)
const tea = new createUser("tea", 250)

chai.printMe()

*/



// let myName = "abhishek     "
// let myLove = "shivani      "

// console.log(myName.truelength);


let myHero = ["thor", 'spiderman']

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getspiderpower: function() {
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.abhi = function() {

    console.log('abhi is present in all object');
}

// heroPower.abhi()

// myHero.abhi()


// inheritance 

const user = {
    name: "chai",
    email: "chai@google.com"
}
const teacher = {
    makeVideo: true
}

const teachingsupport = {
    isAvailable : false
}

const TAsupport = {
    makeAssignment : "Js Assignment",
    fullTime: true,
    __proto__: teachingsupport
}

teacher.__proto__ = user



// modern syntax

Object.setPrototypeOf(teachingsupport, teacher)


let anotherUser = "chaiaurcode           "
String.prototype.truelength = function() {
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`true length  is ${this.trim().length}`);
}

anotherUser.truelength()

"abhi".truelength()
"shiv".truelength()