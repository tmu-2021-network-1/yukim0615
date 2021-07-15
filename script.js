const x= [];
const y= [];
const r= [];

function setup() {  createCanvas(window.innerWidth, window.innerHeight);
  colorMode(RGB, 255, 255, 255);
  textAlign(CENTER, CENTER);
  textFont("serif, fantasy");
    for(i=0; i<12; i++){
      x[i]= random()* width* 2/ 3;
    }
    for(j=0; j<12; j++){
      y[j]= random()* height* 4/ 5;
    }
    for(k=0; k<12; k++){
      r[k]= (random()* 2- 1)* PI/ 3;
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
  
  let s29= Math.floor(map(window.scrollY%1000, 0, 1000, 1, 29.9));
  let s30= Math.floor(map(window.scrollY%1000, 0, 1000, 1, 30.9));
  let s31= Math.floor(map(window.scrollY%1000, 0, 1000, 1, 31.9));

  if(window.scrollY<1000){
    fill(0,0,0,map(abs(window.scrollY-500),0,500,255,0));
    textSize(300);
    text("睦月",x[0],y[0]);
    if(s31.toString()%7==6){
      fill(0,0,255);
    }
    else if(s31.toString()%7==0){
      fill(255,0,0);
    }
    else{
      fill(0,0,0);
    }
    textSize(100);
    push();
    translate(width- x[0], height- y[0]);
    rotate(r[0]);
    text(s31.toString(), 0, 0);
    pop();
  }
  
  else if(1000<=window.scrollY&&window.scrollY<2000){
    fill(0,0,0,map(abs(window.scrollY-1500),0,500,255,0));
    textSize(300);
    text("如月",x[1],y[1]);
    if(s31.toString()%7==6){
      fill(0,0,255);
    }
    else if(s31.toString()%7==0){
      fill(255,0,0);
    }
    else{
      fill(0,0,0);
    }
    textSize(100);
    push();
    translate(width- x[1], height- y[1]);
    rotate(r[1]);
    text(s29.toString(), 0, 0);
    pop();
  }
  
  else if(2000<=window.scrollY&&window.scrollY<3000){
    fill(0,0,0,map(abs(window.scrollY-2500),0,500,255,0));
    textSize(300);
    text("弥生",x[2],y[2]);
    if(s31.toString()%7==6){
      fill(0,0,255);
    }
    else if(s31.toString()%7==0){
      fill(255,0,0);
    }
    else{
      fill(0,0,0);
    }
    textSize(100);
    push();
    translate(width- x[2], height- y[2]);
    rotate(r[2]);
    text(s31.toString(), 0, 0);
    pop();
  }
  
  else if(3000<=window.scrollY&&window.scrollY<4000){
    fill(0,0,0,map(abs(window.scrollY-3500),0,500,255,0));
    textSize(300);
    text("卯月",x[3],y[3]);
    if(s31.toString()%7==6){
      fill(0,0,255);
    }
    else if(s31.toString()%7==0){
      fill(255,0,0);
    }
    else{
      fill(0,0,0);
    }
    textSize(100);
    push();
    translate(width- x[3], height- y[3]);
    rotate(r[3]);
    text(s30.toString(), 0, 0);
    pop();
  }
  
  else if(4000<=window.scrollY&&window.scrollY<5000){
    fill(0,0,0,map(abs(window.scrollY-4500),0,500,255,0));
    textSize(300);
    text("皐月",x[4],y[4]);
    if(s31.toString()%7==6){
      fill(0,0,255);
    }
    else if(s31.toString()%7==0){
      fill(255,0,0);
    }
    else{
      fill(0,0,0);
    }
    textSize(100);
    push();
    translate(width- x[4], height- y[4]);
    rotate(r[4]);
    text(s31.toString(), 0, 0);
    pop();
  }
  
  else if(5000<=window.scrollY&&window.scrollY<6000){
    fill(0,0,0,map(abs(window.scrollY-5500),0,500,255,0));
    textSize(300);
    text("水無月",x[5],y[5]);
    if(s31.toString()%7==6){
      fill(0,0,255);
    }
    else if(s31.toString()%7==0){
      fill(255,0,0);
    }
    else{
      fill(0,0,0);
    }
    textSize(100);
    push();
    translate(width- x[5], height- y[5]);
    rotate(r[5]);
    text(s30.toString(), 0, 0);
    pop();
  }
  
  else if(6000<=window.scrollY&&window.scrollY<7000){
    fill(0,0,0,map(abs(window.scrollY-6500),0,500,255,0));
    textSize(300);
    text("文月",x[6],y[6]);
    if(s31.toString()%7==6){
      fill(0,0,255);
    }
    else if(s31.toString()%7==0){
      fill(255,0,0);
    }
    else{
      fill(0,0,0);
    }
    textSize(100);
    push();
    translate(width- x[6], height- y[6]);
    rotate(r[6]);
    text(s31.toString(), 0, 0);
    pop();
  }
  
  else if(7000<=window.scrollY&&window.scrollY<8000){
    fill(0,0,0,map(abs(window.scrollY-7500),0,500,255,0));
    textSize(300);
    text("葉月",x[7],y[7]);
    if(s31.toString()%7==6){
      fill(0,0,255);
    }
    else if(s31.toString()%7==0){
      fill(255,0,0);
    }
    else{
      fill(0,0,0);
    }
    textSize(100);
    push();
    translate(width- x[7], height- y[7]);
    rotate(r[7]);
    text(s31.toString(), 0, 0);
    pop();
  }
  
  else if(8000<=window.scrollY&&window.scrollY<9000){
    fill(0,0,0,map(abs(window.scrollY-8500),0,500,255,0));
    textSize(300);
    text("長月",x[8],y[8]);
    if(s31.toString()%7==6){
      fill(0,0,255);
    }
    else if(s31.toString()%7==0){
      fill(255,0,0);
    }
    else{
      fill(0,0,0);
    }
    textSize(100);
    push();
    translate(width- x[8], height- y[8]);
    rotate(r[8]);
    text(s30.toString(), 0, 0);
    pop();
  }
  
  else if(9000<=window.scrollY&&window.scrollY<10000){
    fill(0,0,0,map(abs(window.scrollY-9500),0,500,255,0));
    textSize(300);
    text("神無月",x[9],y[9]);
    if(s31.toString()%7==6){
      fill(0,0,255);
    }
    else if(s31.toString()%7==0){
      fill(255,0,0);
    }
    else{
      fill(0,0,0);
    }
    textSize(100);
    push();
    translate(width- x[9], height- y[9]);
    rotate(r[9]);
    text(s31.toString(), 0, 0);
    pop();
  }
  
  else if(10000<=window.scrollY&&window.scrollY<11000){
    fill(0,0,0,map(abs(window.scrollY-10500),0,500,255,0));
    textSize(300);
    text("霜月",x[10],y[10]);
    if(s31.toString()%7==6){
      fill(0,0,255);
    }
    else if(s31.toString()%7==0){
      fill(255,0,0);
    }
    else{
      fill(0,0,0);
    }
    textSize(100);
    push();
    translate(width- x[10], height- y[10]);
    rotate(r[10]);
    text(s30.toString(), 0, 0);
    pop();
  }
  
  else if(11000<=window.scrollY&&window.scrollY<12000){
    fill(0,0,0,map(abs(window.scrollY-11500),0,500,255,0));
    textSize(300);
    text("師走",x[11],y[11]);
    if(s31.toString()%7==6){
      fill(0,0,255);
    }
    else if(s31.toString()%7==0){
      fill(255,0,0);
    }
    else{
      fill(0,0,0);
    }
    textSize(100);
    push();
    translate(width- x[11], height- y[11]);
    rotate(r[11]);
    text(s31.toString(), 0, 0);
    pop();
  }
  
  if(keyIsPressed){
    if(key== 's'){
      save('birthdayCard.png');
    }
  }
  
}
