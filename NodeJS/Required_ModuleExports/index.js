//const math = require('./math');
//console.log(math);// return the empty Object
/*here math contains module.exports object which is empty by default
*/
//after adding module.exports to the math file we can access those functions and variable decleard
//console.log(math)
//return the  data coming from tha math.js file
//math is the object of the data comming fromt he math.js file
// { pi: 3.14, square: [Function: square], add: [Function: add] }
/*console.log(math.pi);
console.log(math.add(14, 52))
console.log(math.square(5));*/

// ---------------------------by catching data in variable--------- 

// const { pi, square, add } = require('./math')
//name of the catching varible should be same as in math.js file.
//data comming fro the module.exports is get in same order
// console.log(square(2));
// console.log(pi);

//----------------------------catching string from Module.exports----------------

// const strdata = require('./math');
// console.log(strdata);// it will return tha string in same manner it is comming

//---------------------------catching function from the module.exports----------------------

const fundata = require('./math');
console.log(fundata(2));// [Function (anonymous)]
