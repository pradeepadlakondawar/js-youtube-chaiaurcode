// const userEmail = "p@pro.ai"

// if (userEmail) {
//     console.log("userEmail received");
// }else{
//     console.log("userEmail didn't received");
// }

// falsy values
// false, 0 ,-0 ,BigInt 0n , "" , null , undefined , NaN

//truthy values
//all other than falsy values are truthy value
// some confusing truthy values  -> "0", "false", " ", {} ,[] , function(){}

//checking for array

// let arr=[];

// if (arr.length === 0) {
//     console.log("array is empty");
// }


// checking for object

// let obj ={}

// if (Object.keys(obj).length ===0) {
//     console.log("obj is empty");
// }



// Nullish coalescing operator '??'  -> null undefined

let val
// val = 5 ?? 10
// val = null ?? 10
// val = undefined ?? 10


// console.log(val);



// Terniary operator

// condition ? true : false

const teaPrice = 70;
teaPrice < 100 ? console.log("less than 100") : console.log("more than 100");