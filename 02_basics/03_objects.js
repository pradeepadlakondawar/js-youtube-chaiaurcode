//objects

//singleton == made from constructor
//object litreals

//object.create  -- like this singleton is made

const mysym = Symbol("key1");
const mysym2 = Symbol("key2");

const jsuser= {
    name: "pradeep",
    "full name": "Pradeep Adlakondawar",
    mysym: "myKey1",
    [mysym2]: "myKey2",
    age: 25,
    location: "pune",
    email: "google@mai.com",
    isLoggedIn: false,
    lastLogindays: ["monday", "saturday"]
}


//accesing thr objects
// console.log(jsuser.email);
// console.log(jsuser["email"]);
// console.log(jsuser["full name"]);
// console.log(jsuser["mysym"]);
// console.log(typeof(jsuser.mysym));  //it is not used as symbol
// console.log(jsuser[mysym2]);
// console.log(typeof(jsuser[mysym2]));  //it is used as symbol
// console.log(jsuser);  //it is used as symbol


jsuser.email= "google@chatgpt.com";
console.log(jsuser.email);
// Object.freeze(jsuser); //it will frezze the object and doesnot accept any changes

jsuser.greeting= function(){
    console.log("hello everyone");
}
jsuser.greetingTwo= function(){
    console.log(`hello ${this["full name"]}`);
}

console.log(jsuser);
console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());