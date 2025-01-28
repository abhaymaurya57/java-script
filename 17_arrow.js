const user = {
    username : "Abhay",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`)
        console.log(this)
    }
}
// user.welcomeMessage()
// user.username = "kushwaha"
// user.welcomeMessage()

// console.log(this)

// function chai(){
//     let username = "Abhay"
//     console.log(this.username);
// }
// chai()

// const chai = function(){
//     let username = "Abhay"
//     console.log(this.username)
// }

const chai = () =>{
    let username = "Abhay"
 
    console.log(this)
}
// chai()
// const addTwo=(num1,num2) => {
//     return num1 + num2
// }
// const addTwo=(num1,num2) => num1 + num2
// const addTwo=(num1,num2) =>( num1 + num2)
const addTwo=(num1,num2) =>( {username: "Abhay"})
console.log(addTwo(5,8))

const myArray = [3,4,2,5,6]
// myArray.forEach(function() {})
myArray.forEach(() => {})