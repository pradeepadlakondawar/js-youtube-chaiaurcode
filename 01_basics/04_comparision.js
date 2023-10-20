// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2<=1);
// console.log(2==1);
// console.log(2!=1);
// console.log(2===1);


console.log("2">1);
console.log("02">1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
//The reason is that an equality check == and comparisions > < >= <= works differently. 
//comaprision convert null to number, treating it as 0,that is why null > 0 is false and null >= 0 is true.


console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);
//for this 3 comparision it willthrough o/p as false.


// ===  it strictly check the comparasion , it will check datatyes too.
