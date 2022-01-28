leftWristX = 0;
rightWristX = 0;
difference = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log("Posenet is initialized");
}
function draw(){
    background("#28a9d4");
    document.getElementById("square_side").innerHTML = "Font size of the text will be = "+difference+"px";
    textSize(difference);
    fill('Red');
    text('Akshar', 50, 400);
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = Math.round(leftWristX - rightWristX);
    }
}