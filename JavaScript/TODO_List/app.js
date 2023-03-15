const btn = document.querySelector('button');
const ul = document.querySelector('ul');
btn.addEventListener('click', () => {
    const newli = document.createElement('li');
    const note = document.querySelector('input');
    // alert(note.value);
    newli.innerText=note.value;
    // console.log(newli);
    note.value = "";//clear input box
    newli.addEventListener('click', () => {
        newli.remove(); // delete the todo item
    })
    ul.appendChild(newli);// add new child li
})
