function setup() {
  createCanvas(400, 400);
  background(250);
  xPos = width / 2;
  yPos = height / 2;

  noStroke();

  for (let x = 0; x < windowWidth; x += 25) {
    for (let y = 0; y < windowHeight; y += 25) {
      fill(random(1, 230));
      circle(y, x, random(0, 30));
    }
  }
}

function draw() {}
