const name = "abhay"
const repoCount = 50
// console.log(name + repoCount + "value")

console.log('hello my name is ${name}');
const gamename = new String('Abhaymaurya')
console.log(gamename[0]);
console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.toLocaleLowerCase())
console.log(gamename.charAt(5));
console.log(gamename.indexOf('m'));

const gamename1 = new String('Abhaymaurya')

const newString =  gamename1.substring(0,3)
console.log(newString);
const anotherString = gamename1.slice(-2,3)
console.log(anotherString);

const gamename2 = new String('abhay-hc-com')
console.log(gamename2.split('-'));
