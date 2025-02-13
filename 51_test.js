const myArr = []
// %debugPrint(myArr)

//    continious(packed) , hopley
//const arrTwo = [1,,2,3,4,5]------>hopley

// SMI (small integer)

// packed element

// double(float,atring,function)

const arrTwo = [1,2,3,4,5]
// PACKED_SMI_ELEMENT

arrTwo.push(6.0)
// PACKED_DOUBLE_ELEMENTS

arrTwo.push("7")
//PACKED_ELEMENT

arrTwo[10]=11
// HOLEY_ELEMENTS

console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[19]);

// BOUND CHECK
// hasOwnProprty(arrTwo,9)
// hasOwnProprty(arrTwo,prototype,9)
// hasOwnProprty(object.prototype,10)

// holes arevery expensive in js

const arrThree = [1,2,3,4,5]
console.log(arrThree[2]);

//SMI > DOUBLE > PACKED
// H_SMI > H_DOUBLE > H_PACKED    smi->small enteger

const arrFour = new Array(3)
// just 3 holes. HOLEY_SMI_ELEMENT
arrFour[0]="1"  //HOLEY_ELEMENT
arrFour[1]="2"  //HOLEY_ELEMENT
arrFour[2]="3"  //HOLEY_ELEMENT

const arrFive = []
arrFive.push('1')  //PACKED_ELEMENT
arrFive.push('2')  //PACKED_ELEMENT
arrFive.push('3')  //PACKED_ELEMENT


const arrSix = [1,2,3,4,5]

arrSix.push(NaN)  //PACKED_DOUBLE
arrSix.push(NaN)  //PACKED_DOUBLE

// for,for-of,forEach