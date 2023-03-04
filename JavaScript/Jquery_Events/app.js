// $('#btn').click(function (e) { //click event on button using jquery
//     alert(e);
//     alert("button clicked");
// })
// $('#btn').on("click", function () {
//     alert('using on function');
//     $(this).css('color','red')
// })
$('div').on('click', function () { // jis block pe click karo vo hide ho jayega
    $(this).hide();
})
// $('input').keypress(function (e){// detect key pressed in input
//     alert('key pressed');
// })
$('input').keypress(function (e) {// detect enter key pressed in input
    if (e.which === 13) {//only for enter key
        alert('Enter key pressed');
    }
})