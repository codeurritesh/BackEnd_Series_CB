// ------------------------------------------------------Basic Documentation--------------------------------------------------

// const req = '{"buildTime":"2021-06-01T07:02:53.446Z","production":true,"runNumber":"6244"}';
// console.log(req);//return data in string format
// const data = JSON.parse(req);//return data in the form of JS object.
// console.log(data);
// /*  it return this {
//   buildTime: '2021-06-01T07:02:53.446Z',
//   production: true,
//   runNumber: '6244'
// }*/
// console.log(data.runNumber);//it return the runNumber which is 6244


// ---------------------------------------------------XMLHttpRequest----------------------------------------------------------

let req = new XMLHttpRequest();
req.onload = function () {//calls when every thing is working well
    console.log(JSON.parse(this.responseText).entries[0].Description);
    // All data comes inside this.responseText as String then to convert text String into JS object 
}
req.onerror = function () {// runs on Error
    console.log(this);
}
//      https://catfact.ninja/fact    API for Dynamic Facts
req.open("GET", "https://api.publicapis.org/entries");// Creating request
req.send();//sending request
