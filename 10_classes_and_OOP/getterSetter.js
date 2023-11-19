class user{
    constructor(email, password){
        this.email=email
        this.password=password
    }
    get email(){
        return this._email.toUpperCase();
    }
    set email(val){
        this._email = val
    }

    get password(){
        return this._password.toUpperCase()
    }
    set password(val){
        this._password =val
    }
}

const pro = new user("pro@init.com","pro123");
console.log(pro.password); // here you can directly access the password , but insome cases for privacy issue we want to hide this property from others to acces
console.log(pro.email);