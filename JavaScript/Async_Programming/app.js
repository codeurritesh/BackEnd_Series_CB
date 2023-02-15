// function fun() {
//     for (let i = 1; i <= 5; i++){
//         console.log(i);
//     }
// }
// console.log("START");
// fun();
// console.log('END')
//here every thing isrunnng line by line
//-------------------------------------------Delay Using JS------------------------------------------------

// function delay(n) {//Artificial Delay create without using settimeout method
//     for (let i = 1; i <= n; i++) { //here n=number of second of delay we need
//     const x = new Date().getTime();
//     while (new Date().getTime() < x + 1000) { } //it will create the delay of one second
// }
// }

// function fun() {
//        console.log("Hello");
// }
// console.log("START");
// fun();
// delay(10);
// console.log('END')

// ------------------------------------------------- Delay Using Web API setTimeout()----------------------------------

// function fun() {
//     console.log("Hello");
// }
// console.log("START");
// setTimeout(function cb() { //by using the function we cancreate delay without freaze the brower it is the Broweser Superpower or Web API
//     console.log('Inside CB');
// }, 3000);
// console.log('END')

// -----------------------------------------------------setInterval()---------------------------------------

const id=setInterval(function () { // this function continiously run function infinity and we can stop it using clearInterval(id);
    console.log("Printing");
}, 2000);
setTimeout(function(){
    clearInterval(id);//this function call after 10 second of delay and stops upper setInterval timmer
}, 10000);
