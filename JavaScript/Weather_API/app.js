// ---------------------using XMLHttpsRequest-----------------
// const req = new XMLHttpRequest();
// req.onload = function () {
//     // console.log(JSON.parse(this.responseText).UP.dates["2020-03-04"].total.confirmed);
//     // console.log(JSON.parse(this.responseText).UP.dates);
// console.log(JSON.parse(this.responseText))
// }
// req.onerror = function () {
//     console.log("Error Mil gaya");
// }
// req.open('GET', 'https://goweather.herokuapp.com/weather/delhi');//we are just creating request
// req.send();//sending created request
//---------------------------------------input frmo user-------------------------
const sec = document.querySelector('section');
// const detailsbox = document.querySelector('.details');
const cityname = document.querySelector('input');
const but = document.querySelector('button');
but.onclick = function () {
    // console.log(cityname.value);
    sec.classList.add("details");
    while (sec.hasChildNodes()) {//empty bana rahe hai box ko
        sec.removeChild(sec.firstChild);
    }
    event.preventDefault();
// addingimage(data)
    getdata(cityname.value);
    
}
//----------------------------------GEtdata from api-----------------------
function getdata(city) {

    //--------------------------------------------XMLHttpRquest-------------------

/*    const req = new XMLHttpRequest();
req.onload = function () {
    console.log(JSON.parse(this.responseText))//printing
    addingimage(JSON.parse(this.responseText))//adding image data

    printonpage(JSON.parse(this.responseText),city); // page ka data
}
req.onerror = function () {
    console.log("Error Mil gaya");
}
req.open('GET', `https://goweather.herokuapp.com/weather/${city}`);//we are just creating request
req.send();//sending created request */
    
    // ----------------------------------Fetch Keyword---------------------------------

   fetch(`https://goweather.herokuapp.com/weather/${city}`).then((res) => {
        // console.log(res);// it returns response without data
        return res.json();
    }).then((re) => {
        console.log(re);
        addingimage(re);
        printonpage(re,city);
    }).catch((err) => {
        alert("Some error");
    }) 

    //-----------------------------------Axios--------------------------------------
    /* $.get(`https://goweather.herokuapp.com/weather/${city}`).then((res) => {
        console.log(res);
    })*/
}
//-------------------------------------details on webpage----------------------
function printonpage(data,city){
    // console.log(data);
    // console.log(city);
    const printcity = document.createElement('h1');
    printcity.innerText = "CITY: " + city.toUpperCase();//city name printed
    sec.appendChild(printcity);

    const temp = document.createElement('h1');
    temp.innerText ="Temprature: "+ data.temperature;
    sec.appendChild(temp);//temprature printed

    const wind = document.createElement('h1');
    wind.innerText ="Wind: "+ data.wind;
    sec.appendChild(wind);//wind added

    const des = document.createElement('h1');
    des.innerText ="Description: "+ data.description;
    sec.appendChild(des);//printing description
    

// --------------------------------------Forecast details-----------------------
    const fore = document.createElement('div');
    fore.style.border = "1px solid Black";
    fore.innerHTML = "<h1>FORECAST</h1>";
    fore.classList.add("foreC");
    for (let item of data.forecast)
    {
        const div = document.createElement('div');
        div.innerHTML = `<h1>Day: ${item.day}</h1>
                        <h1>Temperature: ${item.temperature}</h1>
                        <h1>Wind: ${item.wind}</h1>`
        div.style.border = "1px white solid";
        div.style.width = "80%";
        div.style.paddingLeft = "20px";

        fore.appendChild(div);
        }


    sec.appendChild(fore);


}
//----------------------------------------------Addimg Image to Section----------------------------------------
function addingimage(data)
{
    if (data.description.includes("Sunny"))
    {

        // sec.style.backgroundColor = 'red';
        sec.style.backgroundImage = "url('https://www.freevector.com/uploads/vector/preview/9827/FreeVector-Sunny-Background.jpg')";
        }
}   