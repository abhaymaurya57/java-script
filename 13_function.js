// console.log("A")
// console.log("b")
// console.log("h")
// console.log("a")
// console.log("y")

function myname(){
    console.log("A")
console.log("b")
console.log("h")
console.log("a")
console.log("y")
}
// 

// function addTwoNumber(num1,num2){
//     console.log(num1 + num2)
// }
function addTwoNumber(num1,num2){
    // let result = num1 + num2
    // return result

    return  num1 + num2
}
const result = addTwoNumber(5,9)
console.log("result:",result)
// addTwoNumber(9,null)

function loginUserMessage(username){
    if(username===undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Abhay"))
console.log(loginUserMessage())