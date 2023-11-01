const user = {
    username: "Pradeep",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);


// browser k andr jo golabl value h vo window h


// function chai(){
//     let username = "pradeep"
//     console.log(this);
// }
// chai()

const chai=()=>{
    let username = "pradeep"
    console.log(this);
}
// chai()

//The 'this' keyword inside a function refers to the object that the function is a property of or the object that the function is called on. However, the behavior of the this keyword inside an arrow function is different from regular functions.
// In an arrow function, the this keyword is lexically scoped, meaning it takes on the value of the this keyword in the surrounding code. The this keyword in an arrow function does not get rebound when the function is invoked, unlike regular functions. It keeps the same value as the this keyword in the surrounding code.


// () => {}  -arrow function syntax
//const name = () => {}  -arrow function syntax

// const addTwo = (num1,num2)=>{
//     return num1+num2;
// }

// console.log(addTwo(2,3));

//impelecit return
// const addTwo = (num1, num2)=> num1+num2;
// const addTwo = (num1, num2)=> (num1+num2);    // we will use this in react
// const addTwo = (num1, num2)=> ({username: "pro"});    

console.log(addTwo(2,3));