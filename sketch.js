const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player;
var playerBase;
var computer;
var computerBase;

function setup() {

    //to create canvas
    canvas = createCanvas(windowWidth, windowHeight);

    engine = Engine.create();
    world = engine.world;

    //to create Player Base, player, Computer Base and computer Object
    playerBase = new PlayerBase(400, random(450, height - 300), 180, 150);

    player = new Player(400, playerBase.body.position.y - 153, 50, 180);

    computerBase = new ComputerBase(1100, random(450, height - 300), 180, 150);

    computer = new Computer(1100, computerBase.body.position.y - 153, 50, 180);

}

function draw() {

    //to give background
    background("lightblue");

    Engine.update(engine);

    //to give the title
    fill("#FFFF");
    textAlign("center");
    textSize(40);
    text("EPIC ARCHERY", width / 2, 100);

    //to display Playerbase and computer base 
    playerBase.display();
    computerBase.display();

    //to display Player and computerplayer
    player.display();
    computer.display();
}