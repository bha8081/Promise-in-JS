class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const product = new Teacher("Sunil", "sunil@gmail.com","1234")
product.addCourse();

const otherUser = new User("deva");
otherUser.logMe();

console.log(product instanceof Teacher)