const score =400;
// console.log(score);
const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); // generelly used in projects of ecommere
const otherNumber = 23.8966
//console.log(otherNumber.toPrecision(3))  // it returns in string

const hundreds =1000000
// console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString('en-IN'));


//----------------------MATH------------------------------------

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));  //mostly used
// console.log(Math.ceil(5.6));
// console.log(Math.floor(5.6));
// console.log(Math.sqrt(25));
// console.log(Math.min(4,3,1,8));
// console.log(Math.max(4,3,1,8));

//IMP
console.log(Math.random()); //it will always through values b/w 0 to 1.
console.log(Math.random()*10);  
console.log((Math.random()*10)+1); //if we want values from 1 and didn,t want 0 to appear we generaaly add +1 to it
console.log(Math.floor(Math.random()*10)+1); 

const min=10;
const max=20;

console.log(Math.floor(Math.random()*(max-min +1)) + min);



