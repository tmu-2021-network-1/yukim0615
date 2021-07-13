function setup() {  createCanvas(window.innerWidth, window.innerHeight);
  rectMode(CENTER);
  colorMode(HSB, 360, 100, 100);
}


function draw() {
  const hue = 100 - constrain(window.scrollY / 100, 0, 40);
  background(hue, 20, 100);
  
  noStroke();
  fill((window.scrollY * 0.1) % 360, 50, brightness, 0.5);
}
