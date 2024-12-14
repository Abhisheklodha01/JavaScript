function Person(name, age, salary) {
    this.age = age
    this.name = name
    this.salary = salary
    this.getAge = function () {
        console.log("Age of person is: ", this.age);
        
    }
    this.getName = function () {
        console.log("Age of person is: ", this.name);
        
    }
    this.getsalary = function () {
        console.log("Age of person is: ", this.salary);
        
    }
}

const person = new Person("Abhishek", 20, 250000)
person.getAge()

const person2 = new Person("Yashraj", 21, 250000)
person2.getName()

const person3 = new Person("Abhishek P", 20, 250000)
person3.getsalary()

const person4 = new Person("Sariq", 20, 250000)
person3.getsalary()

const person5 = new Person("Anurag", 20, 250000)
person3.getsalary()

// Person --> capital P denotes it is constructor function that is used to create an object

/*
it is ES5 part 
in ES6 class keyword is introduce thats why its depricated 

Advantages:
this does not acts as blueprint 
simple

*/

