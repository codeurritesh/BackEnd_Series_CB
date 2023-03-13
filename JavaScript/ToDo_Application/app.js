$('ul').on('click','li',function(){ //word done cute by red line
    $(this).toggleClass('completed');
})
$('input').keypress(function (e) { //adding new note to li by enter key
    if (e.which === 13) {
        const todotext = $('input').val();
        // alert(todotext);
        $('ul').append(`<li type="none" ><span>X</span> ${todotext}</li>`)
        $('input').val("");
    }
});
// const span = document.getElementsByTagName('span');
// span.addEventListener('click', () => {
//     span.remove(); // delete the todo item
// })
// $('span').click(function () {
//     // alert("CLicked")
//     $('this').parent().remove();
// });

// $('span').on('click', function () {//can not delete the newly created LI because in dynamically created li not have that prop.

//     $(this).parent().remove();
// })
$('ul').on('click','span', function () {// it will work and also remove newly dynamically added li
    $(this).parent().fadeOut(1000, function (e) {
        $(this).remove();
    });
    e.stopPropagation();//stops Event bubbling not goes to parent class

})
