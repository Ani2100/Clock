var hr,mn,sc;
var minuteAngle, secondAngle, hourAngle;







function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  angleMode(DEGREES);
  hr = hour();
  mn = minute();
  sc = second();
  
}

function draw() {
  background(0);
  translate(200,200);
  rotate(-90);
   
  strokeWeight(4);
  stroke(255);
  noFill();
  //ellipse(200,200,300,300);
  stroke(255,100,150);
  secondAngle = map(sc,0,60,0,360);
  arc(0,0,300,300,0,secondAngle);
  

  

  stroke(150,100,255);
  minuteAngle = map(mn,0,60,0,360);
  arc(0,0,280,280,0,minuteAngle);
  

  stroke(150,255,100);
  hourAngle = map(hr%12,0,12,-90,360);
  arc(0,0,260,260,0,hourAngle);
  
  push();
  rotate(secondAngle);
  stroke(255,100,150);
  line(0,0,100,0);
  pop();

  push();
  rotate(minuteAngle);
  stroke(150,100,255);
  line(0,0,75,0);
  pop();

  push();
  rotate(hourAngle);
  stroke(150,255,100);
  line(0,0,50,0);
  pop();

  stroke(255);
  point(0,0);


  

  drawSprites();
}