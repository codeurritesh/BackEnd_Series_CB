const pi = 3.14;
const square = num => num * num;
const add = (a, b) => a + b;
console.log(square(2));//return 4
console.log(add(14, 50));//return sum= 64
// ---------------------------------------------------
// module.exports = { padding the data which we want to shift to other files
//     pi,square,add
// }
// ------------------------------------------------------
// module.exports = "hello guys this is ritesh"
// here we are overridding the object with the string
// ----------------------------------------------------------
// module.exports = ()=> {
//     console.log("hello i am from the math file");
// }
// -----------------------------------------------------------------
module.export = square;
 