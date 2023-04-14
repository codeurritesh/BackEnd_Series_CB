/*
-> take input a number n
-> if i is divisible by 3 then print fizz
-> if i is divisible by 5 then print buzz
-> if i is divisible by 5 & 3 both print FizzBuzz. 

*/

const num = parseInt(process.argv[2]);
for (let i = 1; i <= num; i++){
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    }
    else if (i % 5 == 0) {
        console.log("Buzz");
    }
    else
    {
        console.log(i);
        }
}
