
const descriptor=Object.getOwnPropertyDescriptor(Math, 'PI');
// console.log(descriptor);
// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
// }



// que can we change value of PI if yes/no then explain why
// console.log(Math.PI);
// Math.PI=5
// console.log(Math.PI);


const chai ={
    name: "chai",
    proce: 250,
    isAvailable: true
}
console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai , "name"));
// the chai object is created by us so we can define properties for this

Object.defineProperty(chai , "name", {
    writable: false,
    enumerable: false
})

// console.log(Object.getOwnPropertyDescriptor(chai , "name"));


for (const [key, val] of Object.entries(chai)) {
    if (typeof val !== 'function') {
        console.log(`${key} : ${val}`);
    }
    
}
