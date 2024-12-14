
/*

// class user {

//     constructor(username, email, password) {
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPasswoord() {
//         return `${this.password}abc`
//     }

//     changeUserName() {
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new user("chai", "chai@gmail.com", "123")
// console.log(chai.encryptPasswoord());
// console.log(chai.changeUserName());


// behind the seen (without class)

function User(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
}

User.prototype.encryptPasswoord = function() {

    return `${this.password}abc`
}

User.prototype.changeUserName = function() {

    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPasswoord());
console.log(tea.changeUserName());


*/


///   inheritance

/*
class user {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`USERNAME IS: ${this.username}`);
    }
}

class teacher extends user {
            
         constructor(username, email, password) {
             super(username)  // refer to a parent class
             this.email = email
             this.password = password
         }

         addCourse() {
            console.log(`A new course is added by ${this.username}`);
         }
}


const chai = new teacher("chai", "chai@teacher.com", "123")
chai.addCourse()

const masalaChai = new user("masalaChai")
masalaChai.logMe()
chai.logMe()

// console.log(chai === masalaChai);
// console.log(chai instanceof teacher);
console.log(chai instanceof user);

*/


// static prop

class User {
    constructor(username) {
        this.username = username

    }

    logMe() {
        console.log(`Username : ${this.username}`);
    }

    static createID() {
        return`123`
    }
}

const abhi = new User("abhishek")
console.log(abhi.createID())



class Teacher extends User {
    constructor(username, email) {
        super(username)      
        this.email = email

    }
}


const iphone = new Teacher("iphoneUser", "i@phone.com")
iphone.logMe()
console.log(iphone.createID());



