// Dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toUTCString());
// console.log(typeof(myDate));

// let myCreatedDate = new Date(2023,0,23)
//  let myCreatedDate = new Date(2023,0,23,5,30,29)
let myCreatedDate = new Date("01-15-23")
console.log(myCreatedDate);
console.log(myCreatedDate.toLocaleString());


///////----------TIMESTAMP---------

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());


