/*
 * Created by Jimmy Lan
 * Creation Date: 2021-03-17
 */

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  strokeWeight(100);
  // Color of line drawn;
  // Also the background color because of the blend mode.
  stroke(242, 145, 0);
  if (mouseIsPressed) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}
