const mynums = [1,2,3,3,4]
// const myTotal = mynums.reduce(function(acc,currval){
//     console.log(`acc:${acc} and currval:${currval}`);
//     return acc + currval
// },0)
const myTotal = mynums.reduce((acc,curr)=>acc+curr ,0)

// console.log(myTotal);

const shoppingcart =[
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"py cource",
        price:5345
    },
    {
        itemName:"mobile dev  course",
        price:6425
    },
    {
        itemName:"java course",
        price:9424
    },
]
const pricetopay = shoppingcart.reduce((acc,item)=>acc+item.price,0)
console.log(pricetopay);
 