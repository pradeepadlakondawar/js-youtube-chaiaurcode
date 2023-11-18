class user{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`USERNAME: ${this.username}`);
    }
}

class Teacher extends user{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }

    addCourse(){
        console.log(`A new course is added by ${this.username}`);
    }
}

const chai = new Teacher("chai","chai@fb.com","chai123");
chai.addCourse();
chai.logMe()

const tea =new user("tea","tea@fb.com", "tea1234")
tea.logMe()

console.log(chai instanceof Teacher);
console.log(chai instanceof user);
console.log(tea instanceof Teacher);
console.log(tea instanceof user);