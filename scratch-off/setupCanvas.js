/*
 * Created by Jimmy Lan
 * Creation Date: 2021-03-17
 */

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  strokeWeight(100);
  if (mouseIsPressed) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}
