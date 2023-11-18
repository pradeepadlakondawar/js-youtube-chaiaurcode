function multiply (num){
    return num*5;
}

multiply.power=2;

console.log(multiply(5));
console.log(multiply.power);
console.log(multiply.prototype);


function createuser(username, score){
    this.username=username;
    this.score=score;
}
// injecting own functionality 
createuser.prototype.increment = function(){
    return this.score++  //ya this. isiliye use kr rahe hi ki ham use context smja sake , means jise call kiya wahi chale 
    
}
createuser.prototype.decrement = function(){
   return this.score--
}
createuser.prototype.print = function(){
   console.log(`score is : ${this.score}`);
}

// const chai = createuser("chai", 25);
// const tea = createuser("tea", 250);

// console.log(chai.increment());
// console.log(tea.decrement());
// ab ye o/p error throw karega undefine ka, jo hamne create kiya prototype ki functionally vo to bn gya but acces nhi kr para.

// then how to resolve this.

//yahi pe hamara new key word kam atta h vo sare updated functionally read krta h new object bana k

const chai =new createuser("chai", 25);
const tea =new createuser("tea", 250);

console.log(chai.increment());
console.log(tea.print());


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/


