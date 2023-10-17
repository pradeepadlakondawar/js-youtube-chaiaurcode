const accountId = 144553;
let accountEmail= "xyz@gmial";
var accountPassword = "12345"; // we wont use var anymore due to scope issue in code
accountCity="pune"; // varaibles can be declared as this, but never use like its nota good practice

let accountState; // if value is not defined only variable is initialised then it will throw undefined

// accountId = 2;

/* Prefer not use VAR beacause of issue in block scope and functional scope */

accountEmail = "abc@gmail.com"
accountPassword = "1234312"
accountCity ="nagpur"

console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

console.table([accountEmail,accountId,accountPassword,accountCity, accountState]);