function preload(){
}
function setup(){
canvas=createCanvas(500,500);
canvas.position(250,350);
video=createCapture(VIDEO);
video.hide();
video.size(500,500);
tintcolour="";

}
function draw(){
    image(video,0,0,500,500);
    tint(tintcolour);
    fill("green");
    stroke("green");
    circle(50,50,50)
    fill("blue");
    stroke("blue");
    rect(70,35,350,30)
    fill("green");
    stroke("green");
    circle(440,50,50)
    fill("green");
    stroke("green");
    circle(50,450,50)
    fill("blue");
    stroke("blue");
    rect(70,435,350,30)
    fill("green");
    stroke("green");
    circle(440,450,50)
    fill("blue");
    stroke("blue");
    rect(35,75,30,350)
    fill("blue");
    stroke("blue");
    rect(425,75,30,350)
}
function take_snapshot(){
    save("filterImage.png");
    
}
function filterColour(){
    tintcolour=document.getElementById("colourName").value;
}