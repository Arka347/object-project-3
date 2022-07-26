img = "";
statuus = "";
objects = [];

function preload(){
    img = loadImage('176-1761601_simple-home-interior-design-bedroom.jpg')
}
function setup(){
    canvas = createCanvas(380, 380);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("statuus").innerHTML = "status: detecting objects";
    
}
function draw(){
    image(video, 0, 0, 380, 380);
    if(statuus !=""){
      
      for(i = 0; i < objects.length; i++){
        document.getElementById("statuus").innerHTML = "status: object detected";
        

        fill("#FF000");
        percent = floor(objects[i].confidence*100);
        text(objects[i].label+""+percent+"%", objects[i].x, objects[i].y);
        noFill();
        stroke("#FF000");
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
      }      
    }
}
function modelLoaded(){
    console.log("Model Loaded!");
    statuus = true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results){
if(error){
  console.log(error);
}
console.log(results);
objects = results;

}
