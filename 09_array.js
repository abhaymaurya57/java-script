const marvel_heros = ["abhay","anoop","alok","umasankar"]
const dc_heros = ["kushwaha","maurya",]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[2][3])

let ak = marvel_heros.concat(dc_heros);
console.log(ak);

const all_new_heros = [...marvel_heros,...dc_heros]
console.log(all_new_heros)

const another_array = [1,3,5,3,5,3,2,[54,7,8,[9,7]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)

console.log(Array.isArray("abhay"))
console.log(Array.from("abhay"))
console.log(Array.from({name: "abhay"})) // intresting

let score = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score,score2,score3))