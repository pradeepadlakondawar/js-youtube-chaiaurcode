//IIFE - Immediatly invoked function expression
//()() --> (function)()
//generally we face global scope pollution, like any varaible or any element in global space ka pollution hatana hoga tb iife use krte h



// function chai (){
//     console.log("DB Connected");
// }
// chai()

// (function chai (){  //named iife
//     console.log("DB Connected");
// })();   // in iife ; is imp because it will tell the context to end after execution. if ; is missed it will dont know where to close the context and through error for further code below it



// ( ()=>{  //unnamed iife
//     console.log("DB Connected two");
// })()


( (name)=>{  // parameterised iife
    console.log(`DB Connected to ${name}`);
})("pro")
