const user = {
    username: "pradeep",
    loginCount: 8,
    signedIn: true,

   
    // getUserDetails:()=>{
    //     console.log(user.username);
    //     console.log(`login count: ${this.loginCount}`);
    // Inside arrow function, this always refers to its enclosing parent . [lexical scope] 
    // }
    getUserDetails:function(){
        console.log(this);
        console.log(`login count: ${this.loginCount}`);

    }
}
// console.log(user.getUserDetails());
// console.log(this);

// explanation now we have to create user2 , we will copy user1 and edit the details but what if we want to create multiple users, or we need to fetch data from DB of user. in such cases we use constructor function


function user1(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this
}

// const userOne = user1("pro1",11,true)
// const userTwo = user1("pro2",22,true)

const userOne = new user1("pro1",11,true)
const userTwo = new user1("pro2",22,true)

// console.log(userOne);
// console.log(userTwo);

console.log(userOne.constructor);


// new--> 1.a empty object is created ,2. construction fumction s called, 3. this keyword is injected and 4. finallay its gives output.