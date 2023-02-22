function a() {
    let b = 100;
    function c() {
        b++;
        console.log(b);
    }
    return c;
}
let f = a();
f(); //print 101 function c get the value of the b from the closure of the function 