class User{
    constructor(username){
        this.username = username
    }
    logMe(){
    console.log(`USERNAME is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password

    }
    addCourece(){
        console.log(`a new cources was added by ${this.username}`);
        
    }

}

const chai = new Teacher ("chai","abhay@gmail.con","123")
chai.addCourece()
chai.logMe()


const masalachai = new User("masala chai")
masalachai.logMe()

console.log(chai===masalachai);
console.log(chai===Teacher);
console.log(chai instanceof Teacher);
console.log(chai instanceof User);