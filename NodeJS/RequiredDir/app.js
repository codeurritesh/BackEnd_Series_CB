// const animals = require('./Animals');
// // we are accessing the folder fro the outer app.js fiel
// //while accessing the folder it will find index.js file
// console.log(animals);
// // { cat: [Function: cat], dog: [Function: dog] }
// console.log(animals.cat())
// console.log(animals.dog())
const { cat, dog } = require('./Animals');
cat(); //print the function details
dog();
// console.log(dog);
// console.log(cat);