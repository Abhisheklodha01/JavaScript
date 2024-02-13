// Dates in JS

// let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof(myDate));


// let MycreatedDate = new Date(2023, 0, 23, 5, 3)
// console.log(MycreatedDate);
// console.log(MycreatedDate.toDateString());
// console.log(MycreatedDate.toString());
// console.log(MycreatedDate.toLocaleString());


// let MyOwnDate = new Date("2004-01-07")
// let MyDate = new Date("07-01-2004")
// console.log(MyDate.toLocaleString());

// time stamps

let MytimeStamps = Date.now() 
// console.log(MytimeStamps);
// console.log(MyOwnDate.getTime());

// console.log(Math.floor(Date.now()/1000)); // in seconds 

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()); // month start with 0 in JS
console.log(newDate.getMonth() + 1); // month start with 0 in JS to convert with 1 start simply +1

// `${newDate.getDay()} and the time is `

newDate.toLocaleString('default', {   // => costmizable format of tolocaleStrin
    weekday:"long",
    
})
