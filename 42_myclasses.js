// ES6

class User{
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password

    }
    encryptPAssward(){
        return `${this.password}abc`
    }
    changeusername(){
        return `${this.username.toUpperCase()}`
    }
}
const chai = new User("Abhay","abhay@gmail.com","123")
console.log(chai.encryptPAssward());
console.log(chai.changeusername());

/// behind the scence

function User(username,email,password){
    this.username = username;
    this.email = email;
    this.password = password
}
User.prototype.encryptPAssward = function(){
    return  `${this.password}abc`
}
User.prototype.changeusername = function(){
    return  `${this.username}abc`
}

const tea  = new User("tea","tea@gmail.com","123")

console.log(tea.encryptPAssward())
console.log(tea.changeusername())
