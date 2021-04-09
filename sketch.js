const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;
var gameState = "Sling";
var score = 0;

function preload() {
    backgroundManager();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
    //var AnyName = "data";
   /**   var alsoAnyName = 1203847857367;
    var Bool = true
    var Now 
    var ksdjf = null;
    var array = [
        "value1",
        "value2",
        "value3"
    ]
    var numArray = [
        1,2,3,4,5

    ]
    var nestedArray = [[1,2], ["word","more words"], [3,4]]
    console.log(AnyName);
    console.log(alsoAnyName);
    console.log(Bool)
    console.log(Now)
    console.log(ksdjf);
    console.log(array);
    console.log(numArray);
    console.log(nestedArray);
    console.log(numArray[0]);
    nestedArray.push("this word is at last");
    console.log(nestedArray);
    nestedArray.pop();
    nestedArray.pop();
    console.log(nestedArray); */
}

function draw(){
    if(backgroundImg){
        background(backgroundImg);
    }
    else{
        background(0);
    }
    textSize(35);
    fill(255);
    text("score: "+score,width-300,50);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();   
    pig1.score();
    pig3.score(); 
}

function mouseDragged(){
    if (gameState === "Sling"){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}
}


function mouseReleased(){
    slingshot.fly();
    gameState = "Deployed";
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(bird.body);
        Matter.Body.setPosition(bird.body, {x:200,y:50})
        gameState = "Sling";
    }
}

async function backgroundManager(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJ = await response.json();
    console.log(responseJ);
    console.log(responseJ.datetime);
    var dateTime = responseJ.datetime;
    var ourTime = dateTime.slice(11,13);
    console.log(ourTime);
    if(ourTime>=6&&ourTime<19){
        bg = "sprites/bg.png"
    }
    else{
        bg = "sprites/bg2.jpg"
    }
    backgroundImg = loadImage(bg);

}
