const sub = document.querySelector('button');
let text = document.querySelectorAll('input')
// window.onload = print();

// sub.addEventListener('load', () => {
//     print()
// })
sub.addEventListener('click', () => {
    // localStorage.setItem(Math.random(),JSON.stringify())
    // console.log(text[0].value);//input text
    // console.log(text[1].value);//input color
    // console.log(text[2].value);//input date
    text.innerText = "";
    let arr = [text[0].value, text[1].value, text[2].value]
    // console.log(arr);
    localStorage.setItem(Math.random(), JSON.stringify(arr));
    // console.log(localStorage.length);
    print()

})
const pri = document.querySelector('div');
print();
let newitem = document.createElement('section');

function print() { 
// alert("Printed")

    pri.innerHTML = "";
    let newarr = [];
    for (let i = 0; i < localStorage.length; i++){
        newarr[i] = localStorage.getItem(localStorage.key(i));   
    }
    // console.log(newarr)
    // console.log(newarr[1][1])
    for (let i = 0; i < localStorage.length; i++){
        let one = newarr[i];
        console.log(JSON.parse(one)[1]);
        let h1 = document.createElement('h1');
        let date = document.createElement('h2');
        date.innerHTML = JSON.parse(one)[2];
        h1.innerText = JSON.parse(one)[0];
        newitem.appendChild(h1);
        newitem.appendChild(date);
        newitem.style.backgroundColor = JSON.parse(one)[1];
        newitem.style.padding="10px 20px";
        pri.appendChild(newitem);
    }
    // localStorage.clear();
}
const sec = document.querySelectorAll("section");
newitem.addEventListener('click', function () {
    newitem.remove();
})
