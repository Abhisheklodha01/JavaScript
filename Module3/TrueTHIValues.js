// true thi value or false thi value


const useremail = "a@email.com"

if (useremail) {
    console.log("got User Email");
}
else {
    console.log("Don't Have User Email");
}

const useremail1 = ""

if (useremail1) {
    console.log("got User Email");
}
else {
    console.log("Don't Have User Email");
}

const useremail2 = []

if (useremail2) {
    console.log("got User Email");
}
else {
    console.log("Don't Have User Email");
}



/*
 false values
     false, 0, -0, bigINT 0n, "", null, undefined, NaN
     ecept here all are truthy values

 truthy values
     [], "0", 'false', " ", {}, function() {}
        
*/

// detection of array and object it is empty or not
if (useremail2.length === 0) {
    console.log("Array is empty");
}

const obj = {}
if (Object.keys(obj).length === 0) {
    console.log("Object is empty");
}


// Nullish Coalescing Operator (??)  it work on null, undefined

let val1
// val1 = 5 ?? 10  => 5 will be assign
// val1 = null ?? 10  => 10 will be assign
// val1 = undefined ?? 20 => 20 will be assing 
// val1 = null ?? 10 ?? 15
// val1 = null ?? undefined

console.log(val1);


// Turniary Operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")


