// for loop

// for (let index = 0; index < 10; index++) {
//     const element = index;
//     console.log(element);


// }

// let array = [10, 20, 30, 40, 50]
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element);


// }

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if(element == 5)
//     {
//         console.log("5 is the best number");
//     }
//     console.log(element);
// }


// for (let i = 0; i <= 10; i++) {
//     // console.log(`OUTER Loop Value :  ${i}`);
//     for (let j = 0; j <= 10; j++) {
//         // console.log(`INNER Loop Value ${j} and Inner Loop ${i}`);
//         // console.log(i + ' * ' + j + ' = ' + i*j);

//     }   
// }


// const Myarray = ["Flash", "Batman", "SuperMan"]
// for (let index = 0; index < Myarray.length; index++) {
//     const element = Myarray[index];
//     console.log(element);

// }


// break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("Detected 5");
        break
    }
    console.log(`value of i is ${index}`);

}

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("Detected 5");
        continue
    }
    console.log(`value of i is ${index}`);

}
