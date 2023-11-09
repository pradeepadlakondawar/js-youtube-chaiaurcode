const promiseOne = new Promise(function(resolve,reject){
    // we can do aync tasks
    // db calls, cryptography releated, network calls
    //
    setTimeout(()=>{
        console.log('async task is complete');
        resolve();
    },1000)
})

//consuming promises
promiseOne.then(function(){
    console.log("promise consumed");
})



new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("async 2 resolved");
})


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){

        resolve({username:"chai", email:"chai@example.com"})
    },1000)
})

promiseThree.then(function (user) {
    console.log(user);
})



const promiseFour = new Promise(function(resolve,reject){
setTimeout(function () {
    let error = false;
    if (!error) {
        resolve({username:"pro", password:"123"})
    }else{
        reject('error something went wrong')
    }
},1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then(function(username){
    console.log(username);
}).catch(function (error) {
    console.log(error)
}).finally(()=>{
    console.log("The promise is either resolved or rejetced");
})




const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
    if (!error) {
        resolve({username:"javascript", password:"123"})
    }else{
        reject('error js went wrong')
    }
    },1000)
})

async function consumePromisefive() {
    try {
        const response= await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
    
}

consumePromisefive();



// async function getAllUsers() {
//     try {
//         const response = await fetch('https://api.github.com/users')
//         // console.log(response);
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// getAllUsers();


fetch('https://api.github.com/users')
.then(function (response) {
    return response.jason();
}).then(function (data) {
    console.log(data);
})
.catch((error)=> console.log(error))