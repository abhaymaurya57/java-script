// // dates
// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let mycreatedDate = new Date(2025,0,25)
// console.log(mycreatedDate.toLocaleDateString())

// let mycreatedDate1 = new Date(2025,0,25,5,3)
// console.log(mycreatedDate1.toLocaleString());

// let mycreatedDate2 = new Date("2025-01-14")
// console.log(mycreatedDate2.toLocaleString());

// let mycreatedDate3 = new Date("01-14-2025")
// // console.log(mycreatedDate3.toLocaleString());

// let myTimestamp = Date.now()

// console.log(myTimestamp);
// console.log(mycreatedDate3.getTime())

// console.log(Date.now()/1000)
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1)
console.log(newDate.getDate());

newDate.toLocaleString('default',{
    weekday:"narrow",
    timeZone:"delhi"
})
console.log(newDate)