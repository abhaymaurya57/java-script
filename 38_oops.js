//  object releter

const user1={
    username: "Abhay",
    loginCount:9,
    signedIn:true,

    getUserDetails:function(){
        // console.log("got user details from database");
        console.log(`username: ${this.username}`);
        console.log(this);
        
        
    }
}
// console.log(user1.username);
// console.log(user1.getUserDetails());
// console.log(this);

function User(username,loginCount,isLoggedIn){
    this.username=username
    this.loginCount=loginCount
    this.isLoggedIn=isLoggedIn

    this.greeting = function(){
        console.log(`welcome ${this.username}`);
    }

    // return this
}
const userOne = new User("Abhay",12,true)
const userTwo = new User("ChaiAourCode",11,false)
console.log(userOne.constructor);
// console.log(userTwo);