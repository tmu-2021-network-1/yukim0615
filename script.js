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
  
  else if(9000<=scrollY&&scrollY<12000){
    const red = 200 + map(window.scrollY -9000, 0, 3000, 0, 55);
    const green = 155 + map(window.scrollY -9000, 0, 3000, 0, 100);
    const blue = 155 + map(window.scrollY -9000, 0, 3000, 0, 100);
    background(red, green, blue);
  }
  
    noStroke();
    fill((window.scrollY * 0.1) % 360, 50, brightness, 0.5);

  if(window.scrollY<1000){
    fill(0,0,0,map(abs(window.scrollY-500),0,500,255,0));
    text("睦月",width/3,height/2);
    textSize(300);
  }
  
  else if(1000<=window.scrollY&&window.scrollY<2000){
    fill(0,0,0,map(abs(window.scrollY-1500),0,500,255,0));
    text("如月",width/3,height/2);
    textSize(300);
  }
  
  else if(2000<=window.scrollY&&window.scrollY<3000){
    fill(0,0,0,map(abs(window.scrollY-2500),0,500,255,0));
    text("弥生",width/3,height/2);
    textSize(300);
  }
  
  else if(3000<=window.scrollY&&window.scrollY<4000){
    fill(0,0,0,map(abs(window.scrollY-3500),0,500,255,0));
    text("卯月",width/3,height/2);
    textSize(300);
  }
  
  else if(4000<=window.scrollY&&window.scrollY<5000){
    fill(0,0,0,map(abs(window.scrollY-4500),0,500,255,0));
    text("皐月",width/3,height/2);
    textSize(300);
  }
  
  else if(5000<=window.scrollY&&window.scrollY<6000){
    fill(0,0,0,map(abs(window.scrollY-5500),0,500,255,0));
    text("水無月",width/3,height/2);
    textSize(300);
  }
  
  else if(6000<=window.scrollY&&window.scrollY<7000){
    fill(0,0,0,map(abs(window.scrollY-6500),0,500,255,0));
    text("文月",width/3,height/2);
    textSize(300);
  }
  
  else if(7000<=window.scrollY&&window.scrollY<8000){
    fill(0,0,0,map(abs(window.scrollY-7500),0,500,255,0));
    text("葉月",width/3,height/2);
    textSize(300);
  }
  
  else if(8000<=window.scrollY&&window.scrollY<9000){
    fill(0,0,0,map(abs(window.scrollY-8500),0,500,255,0));
    text("長月",width/3,height/2);
    textSize(300);
  }
  
  else if(9000<=window.scrollY&&window.scrollY<10000){
    fill(0,0,0,map(abs(window.scrollY-9500),0,500,255,0));
    text("神無月",width/3,height/2);
    textSize(300);
  }
  
  else if(10000<=window.scrollY&&window.scrollY<11000){
    fill(0,0,0,map(abs(window.scrollY-10500),0,500,255,0));
    text("霜月",width/3,height/2);
    textSize(300);
  }
  
  else if(11000<=window.scrollY){
    fill(0,0,0,map(abs(window.scrollY-11500),0,500,255,0));
    text("師走",width/3,height/2);
    textSize(300);
  }
  
}
