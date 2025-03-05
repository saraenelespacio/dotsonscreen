function setup() {
  const canvas = document.querySelector('#dots');
  createCanvas(windowWidth, windowHeight, "WEBGL", canvas);
  // background('#f7e8e7');
}

function draw() {
  fill('#ff3300');
  noStroke();
  circle(mouseX, mouseY, 3)
}
