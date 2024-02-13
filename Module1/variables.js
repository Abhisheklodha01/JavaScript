// variables = let, const, var;

const accountId = 126;
// accountEmail = "ahc@.com"; -> for let keyword this is not allowed
let accountEmail = "abhi@gmail.com";
var accountPass = "123456";
accountCity = "Bhopal"; // this automatically reserve memory for this variable
let accountState = "MP";

// accountId = 2; -> not allowed
accountEmail = "ahc@.com";
accountPass = "0011";
accountCity = "Jaipur";
console.log(accountId);

console.table([
  accountId,
  accountEmail,
  accountPass,
  accountCity,
  accountState,
]); // to get value in table stuctures

/*

  prefer not to use var 
  because of issue in block scope and functional scope

*/
