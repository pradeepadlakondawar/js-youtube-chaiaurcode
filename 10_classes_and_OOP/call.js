function setUsername (username){
    this.username =username
}

function createUser(username,email,password){
    setUsername(username)
    setUsername.call(this, username) // call jo hai hamara vo khud ka current execution context dusre ko deta hai. best example for interview
    this.email=email;
    this.password=password;

}

const chai = new createUser("pradeep","pro@google.com","try4yyuhuh");
console.log(chai);