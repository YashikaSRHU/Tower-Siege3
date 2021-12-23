const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//To Check Fetch and merge
//to check how to pull from remote to local
var ground, stand, stand2;
var box;
var polygonImage, polygon;

function preload()
{
    polygonImage = loadImage("polygon.png");
}

function setup()
{
    createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(450,390,900,20);
    stand = new Ground(725,240,210,10);
    stand2 = new Ground(325,300,270,10);

    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);
    
    slingshot = new SlingShot(polygon, {x: 100, y: 200});

    //FIRST STRUCTURE
    //level four
    box1 = new BlueBox(235,275);
    box2 = new BlueBox(265,275);
    box3 = new BlueBox(295,275);
    box4 = new BlueBox(325,275);
    box5 = new BlueBox(355,275);
    box6 = new BlueBox(385,275);
    box7 = new BlueBox(415,275);

    //level three
    box8 = new PinkBox(265,235);
    box9 = new PinkBox(295,235);
    box10 = new PinkBox(325,235);
    box11 = new PinkBox(355,235);
    box12 = new PinkBox(385,235);

    //level two 
    box13 = new TurquoiseBox(295,195);
    box14 = new TurquoiseBox(325,195);
    box15 = new TurquoiseBox(355,195);

    //level one (top)
    box16 = new GreyBox(325,155);

    //SECOND STRUCTURE
    //level three 
    box17 = new BlueBox(660,215);
    box18 = new BlueBox(690,215);
    box19 = new BlueBox(720,215);
    box20 = new BlueBox(750,215);
    box21 = new BlueBox(780,215);

    //level two
    box22 = new TurquoiseBox(690,175);
    box23 = new TurquoiseBox(720,175);
    box24 = new TurquoiseBox(750,175);

    //level one (top)
    box25 = new PinkBox(720,135);

    
}

function draw()
{
    background("grey");
    Engine.update(engine);

    ground.display();
    stand.display();
    stand2.display();

    slingshot.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();

    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();

    box13.display();
    box14.display();
    box15.display();

    box16.display();

    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();

    box22.display();
    box23.display();
    box24.display();

    box25.display();

    text("Press Space to Get a Second Chance to Play",600,350);

    imageMode(CENTER);
    image(polygonImage, polygon.position.x, polygon.position.y, 40, 40);

}

function mouseDragged()
{
	Matter.Body.setPosition(polygon, {x: mouseX, y: mouseY});	
}

function mouseReleased()
{
	slingshot.fly();
}

function keyPressed()
{
    if(keyCode === 32)
    {
        slingshot.attach(polygon);
    }
}
