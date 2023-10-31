const marvelHeros = ["thor","ironman","spiderman"];
const dcHeros = ["superman","flash","batman"];

//*****merging arrays******/
//1.push

// marvelHeros.push(dcHeros); //it will push whole array as single element 
// console.log(marvelHeros); 
// console.log(marvelHeros[3][1]);

//2. concat  - it will not manipulate main array and returns a new array

const allheros= marvelHeros.concat(dcHeros); 
// console.log(allheros); 
// console.log(marvelHeros);
// console.log(dcHeros);

// spread operator - generally we are using spread operator more than concat

// const allNewHeros = [...marvelHeros,...dcHeros]
// console.log(allNewHeros);

//*****************************/

// const anotherArr =[1,2,[3,4,5],6,7,[8,9,10,[11,12,13]],14,15]
// const new_anotherArr = anotherArr.flat(2);
// // const new_anotherArr = anotherArr.flat(Infinity);
// console.log(anotherArr);
// console.log(new_anotherArr);

// *******************************************

console.log(Array.isArray("pradeep"));
console.log(Array.from("pradeep"));
console.log(Array.from({name: "pradeep"})); // it gives a empty array as we didnt specified to make key array or values array


let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3));

