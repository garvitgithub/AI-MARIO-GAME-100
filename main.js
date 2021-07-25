function preload() {
	world_start = loadSound("world_start.wav");
mariojump=loadSound("jump.wav");
mariocoin=loadSound("coin.wav");
mariodie=loadSound("mariodie.wav");
mariogameover=loadSound("gameover.wav");
mariokick=loadSound("kick.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas");
	instializeInSetup(mario);
video=createCapture(VIDEO);
video.size(800,400);
video.parent("game_console")
posenet=ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotPoses);
}
function modelLoaded(){
console.log("modelLoaded");
}
function gotPoses(results){
if(results.length>0){
console.log(results);
nosex=results[0].pose.nose.x;
nosey=results[0].pose.nose.y;
}
}






function draw() {
	game()
}






