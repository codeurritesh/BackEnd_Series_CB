//-----------------------------------------Implicit Binding-------------------------------------

    // implicit binding of this keyword - Automaticall done by the JS Engin e

// const person = {
//     name: 'ritesh',
//     age: 22,
//     sayname: function () {
//         console.log(this);//{ name: 'ritesh', age: 22, sayname: [Function: sayname] }
//         console.log(`hello from ${this.name}`);//hello from ritesh
//     }
// }
// console.log(person.sayname())


//------------------------------------------Explicit Binding--------------------------------------

function func(name, age) {
    console.log(this);//here this refers to object a
    this.name = name;//value  added in object a
    console.log(this);

}
const a = {
    l: 10,
    m: true,
    k:'hello'
}
// func.call(a, 'ritesh', 21);
// func('ritesh')
const f = func.bind(a);
f('ritesh', 25);