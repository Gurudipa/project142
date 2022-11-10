song1 = "";
song2 = "";
leftwrist_x = 0;
leftwrist_y = 0;
rightwrist_x = 0;
rightwrist_y = 0;

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();


    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);

}

function modelLoaded() {
    console.log('poseNet Is Initialized')
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function preload() {
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}
 function gotPoses(results)
 {
    if(results.length > 0)
    {
        console.log(results);
        leftwrist_x = results(0).pose.leftwrist.x;
        leftwrist_y = results(0).pose.leftwrist.y;
        console.log("leftwrist_x ="+ leftwrist_x+"leftwrist_y = "+ leftwrist_y);

        console.log(results);
        rightwrist_x = results(0).pose.rightwrist.x;
        rightwrist_y = results(0).pose.rightwrist.y;
        console.log("rightwrist_x ="+ rightwrist_x+"rightwrist_y = "+ rightwrist_y);
    }
 }


























