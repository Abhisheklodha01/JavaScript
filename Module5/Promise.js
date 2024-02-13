/**************  promises in JS    ************/

// creation of promise

const promiseOne = new Promise(function (resolve, reject) {
    // do an async task
    // db calls, cryptography, network

    setTimeout(function () {
        console.log("Async task is complete");
        resolve()
    }, 1000)
})

// consuming promises

promiseOne.then(function () {
    console.log("Promise is consumed");
})

// another way to declare

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("async task 2 ");
        resolve()
    }, 1000)
}).then(function () {
    console.log("async2 resolved");
})


// third promise

const promisThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ userName: "chai", Email: "chai@example.com" })
    }, 1000)
})

promisThree.then(function (user) {
    console.log(user);
})



const Promisefourth = new Promise(function (resolve, reject) {
    setTimeout(function () {
        // let error = true;
        let error = false;
        if (!error) {
            resolve({ userName: "abhishek", PassWord: 123 })
        }
        else {
            reject('Error : something Went Wrong')
        }
    }, 1000)
})

// chaining
Promisefourth.then((user) => {  // cannot hold in variable
    console.log(user);
    return user.userName
}).then((username) => {
    console.log(username);
}).catch(function (error) {
    console.log(error);
}).finally(function() {
    console.log("The Promise is either is resolved or rejected");
})

// async await with try catch
const PromiseFive = new Promise(function(resolve, reject) {
    setTimeout(function () {
        let error = true;   
        // let error = false;
        if (!error) {
            resolve({ userName: "javascript", PassWord: 123 })
        }
        else {
            reject('Error : JS Went Wrong')
        }
    }, 1000)
}) 


async function consumePromisFive(){
    try {
        const response = await PromiseFive
        console.log(response);
    }
     catch (error) {
        console.log(error);   
    }
}

consumePromisFive()


async function getallUsers() {
    try {
        const respone = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await respone.json()
        console.log(data);
        
    } catch (error) {
        console.log('E: ', error);
    }
}

// getallUsers()
 
//  https://jsonplaceholder.typicode.com/users

fetch('https://api.github.com/users/hiteshchoudhary')
.then((respone) => {
    return respone.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))











