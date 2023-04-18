console.log(process); // it will print the process object 
console.log(process.argv)// it will return the array where first one shows path of node.exe and second path of current file.
const array = process.argv;
/*[
    'G:\\NodeJS\\node.exe',
    'E:\\BackEnd_Series_CB\\NodeJS\\Process_Object\\app.js',
    'ritesh',
    'verma'
  ]*/
let arr=array.slice(2);
console.log(arr);//only gives the name given in input
//[ 'ritesh', 'verma' ]

let num = parseInt(array[2]);//pick up the number from the console given input
function count(num) {// print all number from 0 to given number
    for (let i = 0; i <= num; i++){
        console.log(i);
    }
}
count(num);

console.log(process.cwd())//it return the path of folder from where file is running
