// loop on arrays

/**************************************  for of loop  ****************************************/

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const str = "hello World"
for (const greet of str) {
    if(greet == " ")
       continue
    // console.log(`each char is ${greet}`);    // its gives value of array
}

// maps 

const map = new Map()
map.set('IN', "India")
map.set('US', "usa")
map.set('FR', "france")
// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ' :- ', value);
    
}


const myobj = {
    game1 : "BGMI",
    game2 : "PUBG"
}

// for (const [key, value] of myobj) {
//     // console.log(key, ' :- ', value) // not working
// }

/*************************************  for in loop  ***********************************************/

const MyObject = {
    js : "javascript",
    cpp: "c++",
    rb : "ruby",
    py: "python"
}

for (const key in MyObject) {
    // console.log(key);
    // console.log(`${key} shortcut for file ${MyObject[key]}`);
}


const programming = ["js", "cpp", "rb", "java", "py"]

for (const key in programming) {
    // console.log(key); // its give keys of array
    // console.log(programming[key]);
}


// for (const key in map) {
//     console.log(key); // not working
// }


/**************************  for each loop   ***************************************/ 

const coding = ["cpp", "rb", "js", "java", "py"]

coding.forEach( function (val) {
       
    //   console.log(val);
})


coding.forEach( (value) => {
    //   console.log(value);
})


function printMe(item)
{
    // console.log(item);
}
coding.forEach(printMe)


coding.forEach((item, index, Arr)=> {
    // console.log(item, index, Arr);
})



const Mycoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
     
    {
        languageName: "java",
        languageFileName: "java"
    },

    {
        languageName: "c++",
        languageFileName: "cpp"
    }
]

Mycoding.forEach( (items)=> {
    console.log(items.languageName);
    
})


