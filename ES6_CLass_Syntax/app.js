// class person{
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }
// const p1 = new person('kartik', 25);
// console.log(p1); //print full object
// console.log(p1.name); // pirnt the name
// console.log(p1.age);//print age

// ----------------------------------------------- defining the function-------------------------------

// class person{
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     fun() {
//         return this.name;
//     }
// } //class ends
// const p1 = new person('kartik', 25);
// console.log(p1); //print full object but the function is not include in this object of p1
// console.log(p1.name); // pirnt the name
// console.log(p1.age);//print age
// console.log(p1.fun());// function fun is run

// ------------------------------------------Car Example-------------------------------------------

class Car{//parent class
    constructor(name, color, price) {
        this.name = name;
        this.color = color;
        this.price = price;
    }
    getCarName() {
        return this.name;
    }
    get getPrice() {
        return this.price;
    }
    set setPrice(newp)
    {
        this.price = newp;
    }
}
// let c1 =new Car('audi', 'blue', 2500000);
// let c2 =new Car('BMW', 'black', 2000000);
// let c3 =new Car('Maruti', 'White', 500000);
// console.log(c1);
// console.log(c2);
// console.log(c3);
// console.log(c2.getCarName());//return car name of c2 object
// console.log(c2.getPrice);//no need to apply () in getter methods it directly print price of c2 car 2000000
// c2.setPrice=100000;//price opf the c2 car is updated to 100000
// console.log(c2.getPrice);//now print the new price of the car

class RacingCar extends Car{ //inheritance racingcar is child class
    constructor(name,color,price,maxSpeed, isdiscbrake) {
        super(name, color, price)//calling the parent class constructor
        this.maxSpeed = maxSpeed;
        this.isdiscbrake = isdiscbrake;
    }
    get getMaxSpeed() {
        return this.maxSpeed;
    }
}
const r1 = new RacingCar('Farari', 'red', 300000, 400, true);
console.log(r1);
console.log(r1.getCarName())
console.log(r1.getMaxSpeed) 