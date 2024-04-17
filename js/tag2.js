let img;

function preload(){
    img = loadImage("../images/website.jpg"); 
}

function setup() {
    createCanvas(400, 400);
    image(img, 0, 0, 400, 400); 
}
