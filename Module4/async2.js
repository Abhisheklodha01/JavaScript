//   setInterval method
/*
    // basic structure

   // 1st method
setInterval(function(){
    //console.log("abhishek", Date.now());
}, 1000)

*/

// // 2nd Method
const SayDate = function(str) {

    console.log(str, Date.now());
}

 let IntervalId

// // for stoping

// clearInterval(IntervalId)

document.querySelector('#start').
     addEventListener('click', function(){
           IntervalId = setInterval(SayDate, 1000, "hii")
     })

document.querySelector('#stop').
     addEventListener('click', function(){
           clearInterval(IntervalId)
     })











