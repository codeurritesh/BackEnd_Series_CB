const inp = document.querySelector('input');
const submit = document.querySelectorAll('button');
// localStorage.clear();
submit[0].addEventListener('click', () => {
    localStorage.setItem(Math.random(), JSON.stringify(inp.value));
}) 
submit[1].addEventListener('click', print)
function print() {
    let arr = [];
    for (let i = 0; i < localStorage.length; i++) {
        arr[i] = localStorage.getItem(localStorage.key(i));
    }
    console.log(arr)
}
// alert(localStorage.key(0)); 