// ----------------------------Normal Function--------------------------------

function a() {
    console.log("inside a");//normal function declearation
}

//--------------------------function expression-----------------------

const square = function (num) { // First Class Function
    return num * num;
}

//--------------------------Arrow Function------------------------------

const add = function sum(x, y) {   //with name
    return x + y;
}
const add1 = function (x, y) {  //without Name
    return x + y;
}
const add2 = (x, y)=>{    // Arrow Function with 2 arguments
    return x + y;
}
const add3 = x=>{    // Arrow Function with 1 argument
    return x ;
}
const add4 = x => Math.sqrt(num);    // Arrow Function with 1 argument and one return implicit return

// const car = {
//     name: 'wagon r',
//     color: "black",
//     getColor: function () {
//         console.log(this);//{ name: 'wagon r', color: 'black', getColor: [Function: getColor] }
//         console.log(this.color);//black
//     }
// }

const car = {
    name: 'wagon r',
    color: "black",
    getColor: ()=>{
        console.log(this);//{} because of arrow function this refer to window object so we not to use this keyword with arrow function;
        console.log(this.color);//undefined
    }
}
console.log(car.getColor());