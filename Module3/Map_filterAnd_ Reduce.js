const MyNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let newNums = MyNums.map( (num)=> num + 10)
// console.log(newNums);

/***** chaining ****/

const NewNums = MyNums
               .map((num) => num * 10)
               .map((num) => num + 1)
               .filter( (num) => num > 50 && num < 80) // all are implicity return 

// console.log(NewNums);               


/*************************   reduce   ********************************/

const array = [1, 2, 3]


// const mytotal = array.reduce( function(acc, currValue) {
//         console.log(`acc : ${acc} and currVal: ${currValue}`);
//         return acc + currValue
// }, 0)

// console.log(mytotal);


const mytotal = array.reduce((acc, curr) => acc + curr, 0)
// console.log(mytotal);



const ShoppingCart = [
    {
        itemName: "js",
        price: 2999
    },

    {
        itemName: "python",
        price: 999
    },

    {
        itemName: "mobile dev course",
        price: 5999
    },

    {
        itemName: "Data Sciencen course",
        price: 12999
    },
]


const totalPrice = ShoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(totalPrice);