//        primitiv

// 7 type :  string,  number , boolean , null ,  undefined , symbol , bigInt

const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const ooutsideTemp = null
let userEmail;

const id = Symbol('2323')
const anotherId = Symbol('2323')
console.log(id===anotherId);

const bigNumber = 5346576363735235623n  // n se big number ban jata hai
//      refrence type (non primitiv)

// array , object , function

const heros = ["shaktiman","naagraj","doga"]
let myobj = {
    name : "abhay",
    age : 21,
}
const myFunction = function(){
    console.log("Abhay");
}
console.log(typeof myobj)
console.log(typeof myFunction)
console.log(typeof anotherId)