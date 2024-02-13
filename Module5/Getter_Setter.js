
/*
class User {
    constructor(email, password) {
           
        this.email = email
        this.password = password
    }

    // if getter is defined than defined the setter is must

    get email() {
        return this._email.toUpperCase()
    }

    set email(value) {
         this._email = value
    }

    get password() {
        // return this._password.toUpperCase()
        return `${this._password}123`
    }

    set password(value) {

         this._password = value

    }
}

const abhi = new User("abhi@sv.lo", "as")
console.log(abhi.password);
console.log(abhi.email);
*/

// old syntax 

function User(email, password) {
    this._email = email
    this._password = password


    Object.defineProperty(this, 'email', {
        get : function() {
            return this._email.toUpperCase()
        },
        set: function(value) {
            this._email = value
        }
    })

    Object.defineProperty(this, 'password', {
        get : function() {
            return this._password.toUpperCase()
        },
        set: function(value) {
            this._password = value
        }
    })
}


const chai = new User("chai@chai.com", "chai")
// console.log(chai.email);


// object base get set

const user = {
    _email : 'abhi@sv.lo',
    _password: "absv",


    get email() {
        return this._email.toUpperCase()
    },

    set email(value) {
       this._email = value
    },

    get password() {
        return this._password.toUpperCase()
    },

    set password(value) {
       this._password = value
    }

}

const AS = Object.create(user)
console.log(AS.email);
console.log(AS.password);





