// console.log("P");
// console.log("R");
// console.log("A");
// console.log("D");
// console.log("E");
// console.log("E");
// console.log("P");

function sayMyName (){
console.log("P");
console.log("R");
console.log("A");
console.log("D");
console.log("E");
console.log("E");
console.log("P");
}

// sayMyName();

// function funcName (){}; //function defination

function addTwoNumbers (num1,num2){    // values in () parametres
    console.log(num1+num2);
}

// addTwoNumbers(2, 3)   // values passed in ( ) are arguments
// addTwoNumbers(2, "a")  
// addTwoNumbers(2, null)  
// const result=addTwoNumbers(2, 5) ;
// console.log(result);  // it will throgh undefined as nothing is returned in above function

function addTwoNumbers1 (num1,num2){    
    let result1=num1+num2;
    // return num1+num2;
    return result1
    console.log("nothing will be printed, as retrun is executed it will come out of function, so code after return will not be available in o/p")
}

// const result1 =addTwoNumbers(2, 5) ;


function loginUserMessage (username){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} loggedIn`
}
loginUserMessage("Pradeep"); // generally begineers do mistake
// console.log(loginUserMessage("Pradeep"));
// console.log(loginUserMessage());


// default value in parameter
function loginUserMessage1 (username = "pro"){
    return `${username} loggedIn`
}
// console.log(loginUserMessage1("Pradeep"));
// console.log(loginUserMessage1());


//when you dont know the number of args, for example your working on shopping cart and you dont know user will add how many items, he will keep on adding items and we have to calculate the amount of all items. == for this we use REST parameter

function calculateCartPrice (...num1){
    return num1;
}
// console.log(calculateCartPrice(200,300,400));

function calculateCartPrice2 (val1,...num1){
    return num1;
}
// console.log(calculateCartPrice2(200,300,400));


// how to pass object in function and how to acces it

const user ={
    username: "pradeep",
    price: 199
}

function handleObj (anyObject){
    console.log(`user name is ${anyObject.username} and price is ${anyObject.price}`);
}
console.log(handleObj(user));
// here we can directlly pass obj as argument
console.log(handleObj({
    username:"pro",
    price: 200
}))

// we generally face issue in spelling mistakes as we need to check what we accesseing is it present in object or not and datatype of object. this are checks we have to implement.



//passing arrays in function

const myNewArr = [100,200,300];

function retunSecondValue (getarray){
    return getarray[1];
}
// console.log(retunSecondValue(myNewArr));
console.log(retunSecondValue([1000,2000,3000,4000]));
