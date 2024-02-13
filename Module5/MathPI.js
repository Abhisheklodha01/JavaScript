// object property description

const descr = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descr);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai : function() {
        console.log("chai nhi bani");
    }
}

// console.log(chai);
// console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

Object.defineProperty(chai, 'name', {
  // Writable: false,
    // enumerable: false,
    
})

// console.log(Object.getOwnPropertyDescriptor(chai, 'name'));


// for (let [key, value] of chai) {      // this is not working
//     console.log(`${key} : ${value}`);
// }

for (let [key, value] of Object.entries(chai)) {
     
    if (typeof value !== 'function' ) {
        console.log(`${key} : ${value}`);
    }
   
}





