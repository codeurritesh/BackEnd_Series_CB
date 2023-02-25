const btn = document.querySelectorAll('button');

// ---------------------------------------------onclick()----------------------------------

btn[0].onclick = () => {// onclick using external event
    alert("onclick called");
}

//--------------------------------------------addEventListner()---------------------

btn[1].addEventListener("dblclick", () => {//function call when we double click on the button
    alert("double click called")
})
btn[2].addEventListener("mouseenter", () => {//function call when we take mouse over button
     //but not come back to orignal after leave
    btn[2].style.scale = 2;
})
btn[2].addEventListener("mouseleave", () => {//function call when we take mouse over button
    //but not come back to orignal after leave
   btn[2].style.scale = 1;
})
btn[3].addEventListener("click", () => {//function call when we take mouse over button
    //but not come back to orignal after leave
    alert("dont click this button");
})
btn[4].addEventListener("click", () => {//function call when we take mouse over button
    //but not come back to orignal after leave
    alert("not click ");
})

//--------------------------------------Keyboard Evevts-------------------------------------

const inp = document.querySelector('input');
inp.addEventListener('keypress', () => {// keyboard key presses and evevnt fire and value is 
    //being print on every input
    // alert("Key Pressed");
    console.log(inp.value);
})
inp.addEventListener('keyup', () => {// key up is used to when me key releses
    alert("Key Pressed");
    // console.log(inp.value);
})
inp.addEventListener('keydown', () => {// key up is used to when me key pressed
    alert("Key Pressed");
    // console.log(inp.value);
})

//-------------------------------------------other events------------------------------------

const pp = document.querySelector('p');
pp.addEventListener('copy', () => {// while coping anything inside p event fire and alert occur
    alert("Coping Code is not allowed")
})