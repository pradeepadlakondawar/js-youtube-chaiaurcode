class user{
    constructor(username){
        this.username=username;
    }

    logMe(){
        console.log(`username : ${this.username}`);
    }
    //static keyword restrict the accessing of method
    static createID(){
        return `123`
    }
}

const pradeep = new user("pradeep")
pradeep.logMe()
// console.log(pradeep.createID());

class Teacher extends user{
    constructor(username,email){
        super(username)
        this.email=email
    }
}

const iphone = new Teacher("pro","pro@email.com")
iphone.logMe();
console.log(iphone.createID());