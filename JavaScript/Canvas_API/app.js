const canvas = document.querySelector("canvas");
const pen = canvas.getContext('2d');
pen.fillStyle = 'red';// used to define the color of the content we are creating
// pen.fillRect(100, 100, 90, 90);// used to create the rectange with (x,y,width,height)
let init_x = 50;
let init_y = 50;
function init() {
    pen.fillRect(init_x, init_y, 100, 100);
}
function update() { //update the property of the games time to time
    init_x += 50;
    // init_y += 50;
}
function draw() {// draw sonething on to the canvas
    pen.fillRect(init_x, init_y, 100, 100);

}
function gameloop() {// running game loop
    // init();
    pen.clearRect(0, 0, 1200, 735);

    update();
    draw();
}
init();
const id = setInterval(gameloop, 140);