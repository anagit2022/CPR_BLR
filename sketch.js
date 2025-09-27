let begin_screen,intro_screen;
let cprD;
let cprR;
let currentState = "begin";
function preload(){
  begin_screen = loadImage("begin_screen.png");
  intro_screen = loadImage("intro_screen.png");
  cprD = loadImage("cprD.png");
  

}
function setup(){
  createCanvas(windowWidth,windowHeight);
  imageMode(CENTER);
  // begin button
  beginx = windowWidth*0.3;
  beginy = windowHeight*0.74;
  beginw = 142;
  beginh = 47;
  // next button
  nextx= windowWidth*0.8;
  nexty= 660;
  nextw= 50;
  nexth=50;
  // no button
 nox = windowWidth*0.1;
  noy =638 ;
  now = 142;
 noh= 47;
  // yes button
  yesx =windowWidth*0.5 ;
  yesy = 638;
  yesw = 142;
  yesh= 47;
}
function draw(){
   
  if(currentState=== "begin"){
    background("#F35F3C");
    image(begin_screen,width/2,height/2);
  }else
  if(currentState === "intro"){
     background("#F35F3C");
    image(intro_screen,width/2,height/2);
  }else
    if(currentState === "cprD"){
    background("#F35F3C");
    image(cprD,width/2,height/2);
    }
  // debug helpers
  text("x : " + mouseX,40,40);
   text(" y : " + mouseY,80,40);
  text("width/2 : " + width ,120,40);
  text(" height/2 : " + height ,200,40);
  //______________________________________
  
}
function mousePressed(){
  if (currentState === "begin") {
    if (
      mouseX > beginx &&
      mouseX < beginx + beginw &&
      mouseY > beginy &&
      mouseY < beginy + beginh
    ) {
      currentState = "intro";
      console.log(currentState);
      }
  }else if(currentState == "intro"){
    if (
      mouseX > nextx &&
      mouseX < nextx + nextw &&
      mouseY > nexty &&
      mouseY < nexty + nexth
    ) {
      currentState = "cprD";
      console.log(currentState);
      }
  }else if(currentState == "cprD"){
    if (
      mouseX > yesx &&
      mouseX < yesx + yesw &&
      mouseY > yesy &&
      mouseY < yesy + yesh
    ) {
      currentState = "cprR";
      console.log(currentState);
      }else
        if (
      mouseX > nox &&
      mouseX < nox + now &&
      mouseY > noy &&
      mouseY < noy + noh
    ) {
      currentState = "cprR";
      console.log(currentState);
      }
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function touchStarted() {
  mousePressed(); // Use the same logic
  return false; // Prevent default browser touch behavior
}
