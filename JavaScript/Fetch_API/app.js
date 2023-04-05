fetch('https://catfact.ninja/fact').then((res) => {
    return res.json();//data comming from API is in String format it is converted into json by using json()
}
).then((data) => {
    console.log(data);//hence data in recived in the form of JS object
    console.log(data.fact);//return fact data
    console.log(data.length)//return value of length fron API data
}).catch((error) => {
    console.log("Error Found!")
    console.log(err);
})
