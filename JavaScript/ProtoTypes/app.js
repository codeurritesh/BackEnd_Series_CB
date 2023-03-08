const person = {
    name: 'kartik',
    age: 22,  
    isAdult:true
}
let p1 = Object.create(person);// Object.create(Structure)--> it is used to create the new object with the blueprint of given object structure
let p2 = Object.create(p1);
console.log(p1);// Empty Object
console.log(p1.name);//print kartik
console.log(p1.age);//print 22
console.log(person);//print full object
console.log(p1.__proto__ === person);//return true bacause person is ths parent of p1
console.log(p1.hasOwnProperty('name'));//return false because p1 dont has there own property name it is of parent person.
p1.name = "ritesh";
console.log(p2.name);// search for nae in upper object and that object have name so ritesh is printed
console.log(person.__proto__ === Object.prototype);//return true

