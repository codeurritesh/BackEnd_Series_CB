// function fun(func) {
//     func();
// }
// fun(function () {
//     console.log("Callback function is running!");
// });
//here function in argument is the call back function and the function with function argument is basically the Higher order fnction

// *********************************************Array Methods*******************************************************
 
// ---------------------------------1.Arr.map()-----------------------------------

// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.map(function (num) {
//     console.log("Map is Runing");
//     return num * num;
// });
// console.log(newArr);
// newArr = [1, 4, 9, 16, 25] is Answer

// let newArr = arr.map(function (num,index) {
//     console.log(index); // return index of array 0,1,2,3,4
// });

// ------------------------------2.Arr.filter()----------------------------------

// let arr = [1, 2, 3, 4, 5];
// function iseven(num) {
//     return num % 2 === 0;
// }
// let evenArr = arr.filter(iseven);
// console.log(evenArr); // it return Array with only Even numbers from arr [2,4]
 
//-------------------------------3.Arr.sort()---------------------------------------

// let arr = [5, 4, 2, 3, 6];
// arr.sort();
// console.log(arr);

// let arr = [5, 4, 2, 3, 6];
// arr.sort(function (a,b) {
//     return a - b; //For Acending Order
// });
// console.log(arr); 

// let arr = [5, 4, 2, 3, 6];
// arr.sort(function (a,b) {
//     return b-a; //For decending Order
// });
// console.log(arr);