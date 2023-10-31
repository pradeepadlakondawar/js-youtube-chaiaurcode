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
console.log(loginUserMessage("Pradeep"));
console.log(loginUserMessage());


// default value in parameter
function loginUserMessage1 (username = "pro"){
    return `${username} loggedIn`
}
console.log(loginUserMessage1("Pradeep"));
console.log(loginUserMessage1());