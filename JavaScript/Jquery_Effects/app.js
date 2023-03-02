// $('#btn').click(function () {
//     // alert(" nk")
//     $('div').fadeOut();//fade ove the all the divs
// })
// $('#btn').click(function () {
//     // alert(" nk")
//     $('div').fadeToggle(1000);//toggle over the all the divs
// })
// $('#btn').click(function () {
//     // alert(" nk")
//     $('div').fadeToggle(1000,() => {
//         alert("fade it out");
//     });//toggle over the all the divs
// })
// $('#btn').click(function () {
//     // alert(" nk")
//     $('div').slideUp(1000,() => { //all divs will slide up
//         // alert("fade it out");
//     });//toggle over the all the divs
// })
$('#btn').click(function () {
    // alert(" nk")
    $('div').slideToggle(1000,() => { //all divs will slide up and down alternativly
        // alert("fade it out");
    });//toggle over the all the divs
})