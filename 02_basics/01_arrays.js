//array
//js arrays are resizable and conatins mix elemnts pf diff datatypes
const myarray= [0,1,2,3,4,5];
const myHeros=["shaktiman","superman"];
const newArry = new Array(1,2,3)
// console.log(myarray[1]);


//array methods


// myarray.push(6);  //add in end of array
// myarray.push(7);
// myarray.pop();

// myarray.unshift(9);  // add in start of array  -generaaly not used as a perspective of optimised.
// myarray.shift();

// console.log(myarray.includes(9));// thorws output in boolean
// console.log(myarray.indexOf(9));
// console.log(myarray.indexOf(3));

//imp topic mostly used

// const newArr = myarray.join(); //it join and  converts the array into stirng
// console.log(myarray);
// console.log(newArr);
// console.log(typeof newArr);

// console.log(myarray);

//****************************** */
//slice and splice  - imp for interview

console.log("A", myarray);

const newA1= myarray.slice(1,3);
console.log(newA1); //slice gives the value from given range by making the copy of main array
console.log("B", myarray); //slice do not change the main array

const newA2= myarray.splice(1,3);
console.log(newA2); //splice takes the values of given range from main array
console.log("c", myarray); //splice changes the main array

// ******************************

