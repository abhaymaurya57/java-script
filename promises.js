const promiseOne = new Promise(function(resolve,reject){
    // do an async task
    // db calls, crypography,network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },2000)
})

promiseOne.then(function(){
    console.log("promise consumed");
})

//*********************************** */
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    },4000)
}).then(function(){
    console.log("Async 2 resolve")
})

//**************************** */
const promisethree =new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai",email:"abh.mry1@gmail.com"})
    },6000)
})
promisethree.then(function(user){
    console.log(user)
})