// Asynchronous JavaScript


//  settimeout function 

//  1st method 
setTimeout(function(){
    console.log("Abhishek lodha");
}, 2000)

// 2nd method
const SayAbhi = function(){


    console.log("abhishek lodha");
}

setTimeout(SayAbhi, 2000) // only give refrence





const changeText = function(){
    document.querySelector('h1').innerHTML
     = "best JS Series"
}

const changeMe = setTimeout(changeText, 2000)



// for stoping the setTimeout

// clearTimeout(changeMe) // 1st way for stoping async timeout


// 2nd way it is better way
document.querySelector('#stop').
addEventListener('click', function(){
    clearTimeout(changeMe)
    console.log("stopped");
})













