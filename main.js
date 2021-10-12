function setup(){
    video=createCanvas(VIDEO);
    video.size(300,350);

    canvas=createCanvas(300,350);
    canvas.position(350,350);

    poseNet=ml5.poseNet(video,modelLoaded)
    poseNet.on('pose',gotPoses)
}

function modelLoaded(){
    console.log("Model is loaded");
}

function gotPoses(results,error){
    if(results.length>0)
    {
        console.log(results);
    }
    else{
        console.error(error);
    }
}