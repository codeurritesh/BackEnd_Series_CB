const buttons = document.querySelectorAll('button');
const inp=document.querySelector('input');
for (let button of buttons) {
    button.addEventListener('click', () => {
        // alert(button.innerText);// print the text inside the button
        let bvalue = button.innerText;
        if (bvalue === "x") {
            inp.value+="*"
        }else
        if (bvalue === "C") {
            inp.value = "";
        }else
        if (bvalue === "=") {
            try {
                inp.value = eval(inp.value);
            }
            catch {
                inp.value="Invalid Input"
            }
        }
else        inp.value+= bvalue;
    })
}