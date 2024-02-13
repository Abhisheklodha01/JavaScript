// functions in JS

function sayMyName() {
  console.log("mr.");
  console.log("ab");
  console.log("hi");
  console.log("sh");
  console.log("ek");
  console.log("lodha");
}

// sayMyName();

// function addTwoNumbers(num1, num2)
// {
//    console.log( num1 + num2);
// }

// addTwoNumbers(5, 5)
// addTwoNumbers(5, "5")
// addTwoNumbers(5, "a")
// addTwoNumbers(5, null)
// addTwoNumbers(5, undefined)
// addTwoNumbers(5, true)

function addTwoNumbers(number1, number2) {
  // let result = number1 + number2
  // console.log("hii");
  // return result

  return number1 + number2;
}

const result = addTwoNumbers(5, 6);
// console.log(result);

function loginMassage(userName = "abhi") {
  if (userName === undefined) {
    console.log("please enter a username");
    return;
  }
  return `${userName} just loggedIn`;
}

// console.log(loginMassage("abhishek"))
// console.log(loginMassage())

function calculateCartPrice(val1, val2, ...num) {
  return num;
}

// console.log(calculateCartPrice(200, 300, 400, 500, 600));

const user = {
  userName: "abhishek",
  price: 199,
};

function handleObject(anyObject) {
  console.log(
    `username is ${anyObject.userName} and price is ${anyObject.price}`
  );
}

// handleObject(user)
// handleObject({
//     userName:"shiv",
//     price: 199
// })

const myArray = [200, 400, 100, 600];

function returnSecondArrayValue(getArray) {
  return getArray[1];
}

// console.log(returnSecondArrayValue(myArray));
console.log(returnSecondArrayValue([200, 400, 100, 600]));
