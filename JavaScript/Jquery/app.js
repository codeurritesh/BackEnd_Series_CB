// $('h1') //h1 selected
console.log($('h2').css('color'));// return the color of h2
$('h1').css('color', 'red');// change color of h1 to red
console.log($('ul').css('color'));// return the color of ul
$('ul').css('color', 'blue');// change color of ul to blue
$('img').css('border', '10px black solid');// add the border to the image 
$('.fav').css('color', 'purple');//change color of fav movies directly
const styl = { //creating object to add css directly 
    color: 'red',
    backgroundColor: 'blue',
    border:'10px red solid'
}
$('h2').css(styl);
$('p').text();//return the text inside p tag
$('p').text("Hello guys this is new data");//Add new text data to p tag
$('ul').html();//retun html code inside it.
// $('ul').html("<h1>Ritesh</h1>");// change whole html code inside to this one h1 ritesh
$('input').first().attr('type');//return attribute type of first input
$('input').first().attr('type','color');// Change type to color
$('ul:first-of-type li:first-child')//return first li of first ul
$('ul:first-of-type li:last-child')//return last li of first ul
$('.fav').addClass('animals');// add class to all fav li
$('.fav').removeClass('animals');// animals class removed 
$('.fav').toggleClass('animals');// toggle add class to all fav li
$('.fav').toggleClass('animals');// toggle  remove class to all fav li



















