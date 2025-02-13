function SetUsername(username){
    // complex DB calls
    this.username = username
    console.log("callled");
    
}

function createUser(username,email,password){
    SetUsername.call(this,username)

    this.email = email
    this.password = password
}

const chai = new createUser("Abhay","abh.mrya1@gmail.com","123")
console.log(chai);
