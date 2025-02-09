const promiseOne = new Promise(function(resolve,reject){
    // do an async task
    // db calls, crypography,network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("promise consumed");
})

//************************************/

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolve")
})

//************************************/
const promisethree =new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai",email:"abh.mry1@gmail.com"})
    },1000)
})
promisethree.then(function(user){
    console.log(user)
})


//********************************
const promiseFour = new promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"Abhay",password:'dsafdaf'})
        }else{
            reject('ERROR: something elese')
        }
    },1000)
})
promiseFour
.then((user)=>{
    console.log(user);
    return user.username
    
}).then((username)=>{
    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
}).finally(()=>console.log("then promise is either resolved or rejected"))

async function consumePromisefive(){
    try {
        const response = await promiseFive
        console.log(response);
    }catch (error){
        console.log(error);
    }
}
consumePromisefive()