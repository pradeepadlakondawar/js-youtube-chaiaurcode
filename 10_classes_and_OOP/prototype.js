let myName ="pradeep      ";

console.log(myName.length);

// now i want true length of string and ignore whitespaces. ye we can use trim for this but we are learning prototypes so we will create functionallty as "trueLength" and inject it and the we can use the same

// console.log(myName.truelength());


let myHeros=["hulk","thor"];

let heroPowers={
    hulk : "superStrength",
    thor : "LightningGod",

    getHulkPower : function(){
        console.log(`Hulk power is: ${this.hulk}`);
    }
}

Object.prototype.pradeep=function(){
    console.log("pradeep is present in all objects");
}

Array.prototype.heypradeep=function(){
    console.log("pradeep says hello");
}

heroPowers.pradeep()
myHeros.pradeep()

myHeros.heypradeep()
// heroPowers.heypradeep()


//inheritance
const user ={
    username: "chai",
    email: "chai@google.com"
}

const teacher={
    makeVideo:true,
}
const teacherSupport={
    isAvailable:false,
}
const TASupport={
    makeAssignment:"js assignment",
    fullTime: true,

    __proto__:teacherSupport  // it will inherit the properties of teacherSupport to TASupport
}

// teacher.__proto__ = user

//Modern syntax
Object.setPrototypeOf(TASupport, teacher)

// this is the topic prototypal inheritanc


let anotherUserName="ChaiAurCode   "

String.prototype.trueLength = function(){
    console.log(this);
    console.log(`${this}`);
    console.log(`${this.trim().length}`);
}

anotherUserName.trueLength();
"pro  ".trueLength();