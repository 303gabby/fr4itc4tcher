// FRUIT CATCHER/ FOOD CATCHER/ IDK WHICH ONE YET 
let backg;
let basket; 
let strawberry;
let peach;
let pomm;
let orange;
let grapes;
let kiwi;
let watermelon;
let apple;
let passionf;
let cherry;
let score;
let fspeed;
let r;
let fruits = [];
let yPos;
let k;
let x;
let begin;

function setup() {
  createCanvas(1350,650);
  backg = loadImage('./bg.png');
  basket = loadImage('./basket.png'); 
  strawberry = loadImage('./strawberry.png');
  peach = loadImage('./peach.png');
  pomm = loadImage('./pomm.png');
  orange = loadImage('./orange.png');
  grapes = loadImage('./grapes.png');
  kiwi = loadImage('./kiwi.png');
  watermelon = loadImage('./watermelon.png');
  apple = loadImage('./apple.png');
  passionf = loadImage('./passionf.png');
  cherry = loadImage('./cherry.png');
  fruits = [strawberry,peach,pomm,orange,grapes,kiwi,watermelon,apple,passionf,cherry];
  score = 0;
  r = random(10,1320);
  yPos = -10;
  k= random(fruits);
  x = 0;
 
 
}

function draw() {
background(backg);
if (x ==0){
  preview();
}
  if (x == 1){
   
    go();
  }
  if (x ==3){
    gameOver();
  }
}

function preview(){
background(backg);
fill(255);
text('WELCOME TO FRUIT CATCHER! PRESS ENTER TO BEGIN!',170,300);
textFont('Georgia');
textSize(40);
 
}
function keyPressed(){
  if(keyCode === ENTER){
    go();
  }
  if(keyCode === BACKSPACE){
    gamestart();
  }
}

function go(){
clear();
 x = 1; 
  if (x = 1){
   
  }
background(backg);
yPos+=2;
image(k,r,yPos,k.height/20,k.width/20 )

image(basket,mouseX,400,100,200);
fill(255);
text('SCORE: ' + score, 20,50);
textFont('Georgia');
textSize(40);

  if (yPos > 400 && r> mouseX - 50  && r< mouseX+50){
   score+=1;
    newFruit();
  }

  if (yPos>height){
   gameOver();
  }


  //speed increments
  if (score > 5){
    yPos+=4;
  }
  if (score > 10){
    yPos+=6;
  }
  if (score > 15){
    yPos+=8;
  }
   if (score > 20){
    yPos+=10;
  }
    if (score > 25){
    yPos+=12;
  }
  if (score > 30){
    yPos+=14;
  }
  if (score > 35){
    yPos+=16;
  }
   if (score > 40){
    yPos+=18;
  }
}


  //game over 
let newGame;
function gameOver(){
    x = 3;
    clear();
    background(backg);
    fill(255);
    text('FINAL SCORE: ' + score,395,400);
    text('TO REPLAY PRESS BACKSPACE ', 375,450);
    textFont('Georgia');
    textSize(50);
   
    
    
    
  }


//generate a new fruit after scoring
function newFruit(){
   k= random(fruits);
   r = random(10,width-10);
   yPos = -10;
}

function gamestart(){
  score = 0;
  x = 0;
  yPos = -10;
  
}
