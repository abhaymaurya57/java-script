function calculatecartprice(num1){
    return num1
}
console.log(calculatecartprice(200,300,400))

function calculatecartprice1(...num1){
    return num1
}
console.log(calculatecartprice1(200,300,400,434,424,533))

function calculatecartprice2(val1,val2,...num1){
    return num1
}
console.log(calculatecartprice2(200,300,400,434,424,533))

const user = {
    username: "Abhay",
    prices:199
}
function handleobject(anyobject){
    console.log(`user name is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleobject(user)
handleobject({
    username: "Abhay",
    price:399
})

const mynewarray = [200,400,200,600]
function returnsecoundvalue(getArray){
    return getArray[1]
}

// console.log(returnsecoundvalue(mynewarray));
console.log(returnsecoundvalue([200,400,500,1000]))