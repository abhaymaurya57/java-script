// const tinderUser = new object()
const tinderUser = {}
tinderUser.id = "2324"
tinderUser.name="abhay"
tinderUser.isloggedIn=false
//console.log(tinderUser);
const regularUser ={
    email:"abhay@gmail.com",
    fullname:{
        userfullname:{
            firstname:"abhay",
            lastname:"maurya"
        }
    }
}
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);

const obje1 = {1:"a",2:"b"}
const obje2 = { 3: "a",4:"b"}
// const obje3={obje1 , obje2}
//const obje3 = Object.assign({},obje1,obje2)
const obje3={...obje1,...obje2}
console.log(obje3);

const user = [
    {
        id:1,
        email:"Abha1@gmail.com",
    }
]
// user[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnproperty('name'))