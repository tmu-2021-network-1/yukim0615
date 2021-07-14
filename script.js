const x= [];
const y= [];

function setup() {  createCanvas(window.innerWidth, window.innerHeight);
  rectMode(CENTER);
  colorMode(RGB, 255, 255, 255);
    for(i=0; i<12; i++){
      x[i]= random()* 1000;
    }
    for(j=0; j<12; j++){
      y[j]= random()* 800- 100;
    }
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
    text("睦月",x[0],y[0]);
    textSize(300);
  }
  
  else if(1000<=window.scrollY&&window.scrollY<2000){
    fill(0,0,0,map(abs(window.scrollY-1500),0,500,255,0));
    text("如月",x[1],y[1]);
    textSize(300);
  }
  
  else if(2000<=window.scrollY&&window.scrollY<3000){
    fill(0,0,0,map(abs(window.scrollY-2500),0,500,255,0));
    text("弥生",x[2],y[2]);
    textSize(300);
  }
  
  else if(3000<=window.scrollY&&window.scrollY<4000){
    fill(0,0,0,map(abs(window.scrollY-3500),0,500,255,0));
    text("卯月",x[3],y[3]);
    textSize(300);
  }
  
  else if(4000<=window.scrollY&&window.scrollY<5000){
    fill(0,0,0,map(abs(window.scrollY-4500),0,500,255,0));
    text("皐月",x[4],y[4]);
    textSize(300);
  }
  
  else if(5000<=window.scrollY&&window.scrollY<6000){
    fill(0,0,0,map(abs(window.scrollY-5500),0,500,255,0));
    text("水無月",x[5],y[5]);
    textSize(300);
  }
  
  else if(6000<=window.scrollY&&window.scrollY<7000){
    fill(0,0,0,map(abs(window.scrollY-6500),0,500,255,0));
    text("文月",x[6],y[6]);
    textSize(300);
  }
  
  else if(7000<=window.scrollY&&window.scrollY<8000){
    fill(0,0,0,map(abs(window.scrollY-7500),0,500,255,0));
    text("葉月",x[7],y[7]);
    textSize(300);
  }
  
  else if(8000<=window.scrollY&&window.scrollY<9000){
    fill(0,0,0,map(abs(window.scrollY-8500),0,500,255,0));
    text("長月",x[8],y[8]);
    textSize(300);
  }
  
  else if(9000<=window.scrollY&&window.scrollY<10000){
    fill(0,0,0,map(abs(window.scrollY-9500),0,500,255,0));
    text("神無月",x[9],y[9]);
    textSize(300);
  }
  
  else if(10000<=window.scrollY&&window.scrollY<11000){
    fill(0,0,0,map(abs(window.scrollY-10500),0,500,255,0));
    text("霜月",x[10],y[10]);
    textSize(300);
  }
  
  else if(11000<=window.scrollY){
    fill(0,0,0,map(abs(window.scrollY-11500),0,500,255,0));
    text("師走",x[11],y[11]);
    textSize(300);
  }
  
}
