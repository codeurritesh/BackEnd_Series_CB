// function fun(name, age) { // normal function
//     this.name = name;
//     this.age = age;
// }
// fun('kartik', 22); Data created in Window Object

function Fun(name, age) { // Constructor Function function name first letter should be capital
    this.name = name;
    this.age = age;
}
const p1=new Fun('kartik', 22); // by using new keyword constructor function call and the new object create p1 with same property 
const p2 =new  Fun('RItesh', 20);
console.log(p1.name,p2.age)