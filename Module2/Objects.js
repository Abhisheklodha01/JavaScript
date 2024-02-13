/**************** OBJECTS *************************/
// 1. object literals

// const mysym = Symbol("key1")
// const User = {
//     name: "Abhishek",
//     "full name": "shivani", // it can access only by User["full name"]
//     age: 19,
//     location: "Bhopal",
//     email: "abhi@google.com",
//     isLoggedIn: false,
//     lastLoggedinDays: ["monday", "sunday"],
//     [mysym]: "mykey1"
// }

// ways to accessing objects

// console.log(User.name);
// console.log(User["name"]);
// console.log(User[mysym]);

// User.email = "abhishek@chatgpt.com"
// Object.freeze(User)
// User.email = "abhishek@ms.com"
// console.log(User);

// User.greeting = function(){
//     console.log("Hello My Dear S");
// }

// User.greetingTwo = function(){
//     console.log(`Hello My Dear S, ${this.name}`);
// }

// // console.log(User.greeting);
// console.log(User.greeting());
// console.log(User.greetingTwo());

// 2. singalton / constructor

// const tinderUser = new Object()
// const tinderUser = {}
// tinderUser.id = "abhi"
// tinderUser.name = "Shivani"
// tinderUser.isLoggedIn = false
// console.log(tinderUser);
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('id'));

// const instaUser = {
//     email: "shivani@abhi.com",          // nesting of objects
//     fullname: {
//         userName: {
//             firstName: "abhishek",
//             lastName : "lodha"
//         }
//     }
// }

// console.log(instaUser.fullname);
// console.log(instaUser.fullname.userName.firstName);

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "s", 4: "h"}
// const obj = {5: "l", 6: "o"}

// const obj3 = {obj1, obj2}
// console.log(obj3);
// const obj4 = Object.assign({}, obj1, obj2, obj) // empty object is optional but assign it is good
// console.log(obj4);

// const obj6 = {...obj, ...obj1, ...obj2}  => ... is a spread operator
// console.log(obj6);

// const users = [      // array of objects
//     {
//         id: 1,
//         emai: "s@gmail.com",
//     }
// ]

// destructuring the objects
// const course = {
//         courseName: "js",
//         price: 999,
//         courseInstructor: "hitesh"
//     }

// const {courseInstructor, courseName : cName} = course

// console.log(courseInstructor);
// console.log(cName);

/************  API Introduction ************/
// JSON
// {
//   "name1": "abhishek",
//   "coursename": "js",
//   "Price": "free"
// }
