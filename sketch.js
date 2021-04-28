var canvas;
var block1,block2,block3,block4;
var ball, edges;



function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(100,580,200,30);
    block1.shapeColor = "blue";

    block2 = createSprite(300,580,200,30);
    block2.shapeColor = "orange";

    //create two more blocks i.e. block3 and block4 here

    block3 = createSprite(500,580,200,30);
    block3.shapeColor = "red";

    block4 = createSprite(700,580,200,30);
    block4.shapeColor = "yellow";


    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = "green"
    //write code to add velocityX and velocityY
    ball.velocityX = 3;
    ball.velocityY = 4;
    
}
function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);
 

  


    
    //write code to bounce off ball from the block1 
    if(ball.isTouching(block1) ){
        ball.shapeColor = "blue";
        ball.bounceOff(block1);
      
    }



    if(ball.isTouching(block2)){
        ball.shapeColor = "orange";
        ball.bounceOff(block2);
        //write code to set velocityX and velocityY of ball as 0

        //write code to stop music
    }

    //write code to bounce off ball from the block3
    if(ball.isTouching(block3)){
        ball.shapeColor = "red";
        ball.bounceOff(block3);
    
    }

    if(ball.isTouching(block4)){
        ball.shapeColor = "yellow";
      
        ball.bounceOff(block4)
        music.play(music.mp3);
    }

    drawSprites();
}
    //write code to bounce off ball from the block4


   
