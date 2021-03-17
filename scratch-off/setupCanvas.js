/*
 * Created by Jimmy Lan
 * Creation Date: 2021-03-17
 */

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  strokeWeight(50);
  if (mousePressed) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}
