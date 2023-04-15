const num = parseInt(process.argv[2]);
let c3 = 0;
let c5 = 0;
let str;
for (let i = 1; i <= num; i++){
    c3++;
    c5++;
    if (c3 == 3) {
        str = str + "Fizz";
        c3 = 0;
    }
    if (c5 == 5) {
        str = str + "Buzz";
        c5 = 0;
    }
    
    if (str != "")
        console.log(str);
    else
        console.log(i);
    str = "";

}