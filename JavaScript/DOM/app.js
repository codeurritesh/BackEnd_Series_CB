// const firsth1 = document.getElementsByTagName('h1')[0];//it basicallly return an array of h1 and we are selecting first h1 ,
// //it is used to access the firstt h2 tag inside th html
// firsth1.style.color = 'red';//.style is used to makes changes in css of that perticular selected part
// firsth1.style.backgroundColor = "lightgreen";//change tha background color to green
// firsth1.style.border = '2px black solid';//add border
// const para = document.getElementById('para');//it just selecting element by id
// para.style.textDecoration = 'line-through';//and changing the style of the para
// const favmovies = document.getElementsByClassName('fav');//used to call the element by using the class name
// // console.log(movies);
// // alert(movies);
// for (let m of favmovies) { //applying DOM in only fav movies
//     m.style.backgroundColor='skyblue';
// }
// const im = document.querySelector('input');//only first element is selected
// const bothin = document.querySelectorAll('input');//both input element is selected and return as an array
// const firstli = document.querySelector('ul li:first-child');//print first li of the movies
// const lastli = document.querySelector('ul lli:last-child');//print last child from movies
// const data = document.getElementById('para');
// console.log(data);// return the html live of code wiht this id 'para'
// console.log(data.innerText);//return the inner text of the selected element with aware of style
// console.log(data.textContent);//return the inner text of selected element without aware of style
// console.log(data.innerHtml);//return null
// firsth1.innerText = '<i>Using Inner text</i>';// simply treated as simple text
// firsth1.innerHTML = '<i>Using Inner text</i>';//add the html line inside the selected element and updated in html code
// const image = document.getElementById('images');
// console.log(image.getAttribute('src'));//print the src attribute of the img
// image.setAttribute('src', 'https://images.unsplash.com/photo-1674983337206-3805c684d947?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8RnpvM3p1T0hONnd8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60');
// // setAttribute will set the attribute src to given src
// im.setAttribute('type', 'file');// change the type of the input to file

//-------------------------Flip Image--------------------------------------

const image = document.getElementById('images');
image1();
function image1() {
    setInterval(() => {
        image.setAttribute('src', 'https://images.unsplash.com/photo-1674983337206-3805c684d947?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8RnpvM3p1T0hONnd8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60');
        image2();
    }, 2000)
}
function image2() {
    setInterval(() => {
        image.setAttribute('src', 'https://images.unsplash.com/photo-1675384201056-a716dcc88843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80');
        image1();
    }, 2000)
}
