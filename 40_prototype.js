let myName = "Abhay        "
// console.log(myName.trim().length);


let myHeros = ["thor","spiderman"]

let heroPower = { 
    thor:"hamar",
    spiderman:"sling",

    getSpiderPower:function(){
        console.log(`spidy power is ${this.spiderman}`)
    }
}

Object.prototype.hitesh=function(){
    console.log(`hitesh is present in all object`);
}
Array.prototype.heyHitesh=function(){
    console.log(`hitesh says hello`);
    
}
// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()


//       inheritance

const User={
    name:"chai",
    gmail:"Abh.mrya1@gmail.com"
}

const Teacher  = {
    makeVideo:true

}
const TeachingSupport = {
    isAvailable:false
}

const TASupport ={
    makeAssignment:'js Assignment',
    fullTime:true,
    __proto__:TeachingSupport
}

Teacher.__proto__=User

//  mordern synatax

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername = "chaiaaourcode         "
String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`true length is : ${this.trim().length}`);
}
 anotherUsername.trueLength()
 "Abhay".trueLength()
 "iceTea".trueLength()