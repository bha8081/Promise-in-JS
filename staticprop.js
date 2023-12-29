class User{
    constructor(username){
        this.username = username;
    }

    logNow(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `1234`
    }
}

const bhav = new User("Bhavesh")
// console.log(bhav.createId())

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email;
    }
}

const dev = new Teacher("nitesh", "nitesh@134")
dev.logNow()
console.log(dev.createId())