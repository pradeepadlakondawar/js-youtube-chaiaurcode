// const tinderUser = new Object();  //singleton object

const tinderUser={}; //non singleton object

tinderUser.id ="123abc"
tinderUser.name= "samy"
tinderUser.isLoggedIn= false

// console.log(tinderUser);

const regularUser={
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "pradeep",
            lastname: "adlakondawar"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

//merging objects

const obj1= {1:"a", 2:"b"}
const obj2= {3:"c", 4:"d"}

// const obj3=Object.assign(obj1,obj2);
// const obj3=Object.assign({},obj1,obj2); // rarely used

const obj3={...obj1,...obj2}  // commonly used 

// console.log(obj3);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("isLoggedIn"));



