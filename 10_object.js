//***************  singleton******************
// object literals
//Object.create
const mysym = Symbol("key")
console.log(mysym)
const jsUser = {
    [mysym]:"mykey1",
    name: "Abhay",
    "full name":"abhay",
    age:"location",
    location:"agra",
    email:"abhaymaurya54321@gmail.com",
    isLoggedIn:false,
    lastLoginDays: ["monday","saturday"]
}
console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser["full name"])
console.log(jsUser[mysym])
// console.log(jsUser.email)
jsUser.email = "abh.mrya1764764@gmai.com"
// Object.freeze(jsUser)
jsUser.email = "abh.mrya1@gmai.com"
console.log(jsUser)

jsUser.greeting = function(){
    console.log("hello js user");
}
console.log(jsUser.greeting);
//console.log(jsUser.greeting());
jsUser.greetingtwo = function(){
    console.log(`hello, ${this.name}`);

}
console.log(jsUser.greeting());
console.log(jsUser.greetingtwo());
