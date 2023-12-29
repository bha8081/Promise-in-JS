class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}2r3sf24dsf34`;
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const myUser = new User("Bhavesh", "bhavesh@1234", "Yadav@124");
console.log(myUser.encryptPassword())
console.log(myUser.changeUsername());

// behind the seen.

function User1(username, email,password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    User1.prototype.encryptPassword = function(){
        return `${this.password}2r3sf24dsf34`;
    }
    User1.prototype.changeUsername = function(){
        return `${this.username.toUpperCase()}`
    }

const otherUser = new User1("Shubham", "Shubham@1234", "Yadav@124");
console.log(otherUser.encryptPassword())
console.log(otherUser.changeUsername());
