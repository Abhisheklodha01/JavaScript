const obj = {
    name: "abhishek",
    age: 20,
    // getAge:  function() {
    //     console.log(this)
    //     return this.age;
    // }
}

const obj2 = {
    name: "Yashraj",
    age: 21,
}

function getAge(){
    return this.age;
}

// console.log(obj.getAge())

// bind method
const getBindAge = getAge.bind(obj);
console.log(getBindAge());

//call method 
const ans = getAge.call(obj2)
console.log(ans);

// apply method 
const ans2 = getAge.apply(obj2)
console.log(ans2);

/* 

call and apply is similar the only difference is way of passing arguments 
in call(obj, "arg1", "arg2", "arg3")
in apply(obj, ["arg1", "arg2", "arg3"])

*/