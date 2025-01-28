// if
// const isuserloggedin = true
// const temperature = 41
// if(temperature===40){
// console.log("less than 50 ");
// }
// else{
// console.log("temperature is greter than 50")
// }
// <,>,<=,==,!=,===

// const score = 200
// if(score>100){
//     const power = "fly"
//     console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`); //var

// const balance = 1000
// // if(balance >500) console.log("test"),console.log("text2");

// if(balance<500){
//     console.log("less than 500");   
// }
// else if(balance<750){
//     console.log("less than 750");
// }else if(balance<900){
//     console.log("less than 750")
// }else{
//     console.log("less than 1200");
// }

const userloggedIn = true
const debitcart = true
const loggedinfromgoogle = false
const loggedinfromemail = true

if(userloggedIn && debitcart && 2==2){
    console.log("allow  to buy cource ")

}
if(loggedinfromgoogle || loggedinfromemail){
    console.log("user logged in");
}