function setup() {  createCanvas(window.innerWidth, window.innerHeight);
  rectMode(CENTER);
  colorMode(RGB, 255, 255, 255);
}


function draw() {
  if(scrollY<3000){
    const green = 255 - map(window.scrollY, 0, 3000, 0, 100);
    background(255, green, 255);
  }
  
  else if(3000<=scrollY&&scrollY<6000){
    const red = 255 - map(window.scrollY -3000, 0, 3000, 0, 155);
    const green = 155 + map(window.scrollY -3000, 0, 3000, 0, 45);
    background(red, green, 255);
  }
  
  else if(6000<=scrollY&&scrollY<9000){
    const red = 100 + map(window.scrollY -6000, 0, 3000, 0, 100);
    const green = 200 - map(window.scrollY -6000, 0, 3000, 0, 45);
    const blue = 255 - map(window.scrollY -6000, 0, 3000, 0, 100);
    background(red, green, blue);
  }
  
  else if(9000<=scrollY){
    const red = 200 + map(window.scrollY -9000, 0, 3000, 0, 55);
    const green = 155 + map(window.scrollY -9000, 0, 3000, 0, 100);
    const blue = 155 + map(window.scrollY -9000, 0, 3000, 0, 100);
    background(red, green, blue);
  }
  
  noStroke();
  fill((window.scrollY * 0.1) % 360, 50, brightness, 0.5);

}
