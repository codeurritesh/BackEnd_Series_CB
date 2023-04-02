// function add(x,y,z){ //normal function that return the sum

//     return x + y + z;
// }
//----------------------------------async Keyword-----------------------
// async function add(x, y, z) { //function with async keyword will wrapper into a promise
//     //if this function will return something then promise resolved with return value.
//     return x + y + z;
// }

// add(1, 5, 25).then((data) => {// here data will sttore the value return by the function 
//     console.log(data +" Inside resolve");
//     //inside resolved function
// }).catch((err) => {
//     console.log(err);
// })
//----------------------------------Await keyword------------------------
//Await keyword is only used inside asysnc function
async function fun() {
    console.log("Starting the fun function");//2
    console.log("Starting to fet the data");//3
    const fetdata = await fetch('https://catfact.ninja/fact');//it gernally return promise
    console.log("fetchdata: ");
    console.log(fetdata);
    /* fetch function may take time to fetch data from API , So await keyword hold the execution 
     of the function until all data is not fetched*/
    console.log("Staring to parse the fetdata");//6
    const data = await fetdata.json();
    console.log("Printing the data");//7
    console.log(data);//8
    console.log("function is going to End");//9
    console.log("Function End");//10
}

console.log("We are going to Call fun() function")//1
fun();
console.log("AFter fun function");//4
console.log("END");//5

//---------------------------OUTPUT OF FUN FUNTION------------------
/*
We are going to Call fun() function
->Starting the fun function
->Starting to fet the data  --->>> after the fetching starts the
function go to hold state and after commends of fun is runned
->After fun function
->END
->Starting to parse the fetdata
->print the data
->function is going to end
->function end
*/

