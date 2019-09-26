
var aster = [], fire = [], expl = [], ship = {x:370, y:500};
var timer=0, score = 0, spead_ast=1, aster_quan = 27;    
var level=1, life = 1, record=0;

var elrecord = document.getElementById("record");
var elscore = document.getElementById("score");
var ellevel = document.getElementById("level");
var elgameover = document.querySelector("#gameover"); 

localStorage.getItem("saferecord")>0 ? record = localStorage.getItem("saferecord") : record=0; 

var canvas=document.getElementById("game");
var context=canvas.getContext("2d");

var asterimg = new Image();   
asterimg.src="img/ast.png";

var fonimg = new Image();
fonimg.src="img/fon.png";

var shipimg = new Image();
shipimg.src="img/ship.png";

var fireimg = new Image();
fireimg.src = "img/fire.png";

var explimg = new Image();
explimg.src = "img/explone.png";

canvas.addEventListener("mousemove", function(event){
  ship.x = event.offsetX-40;
  ship.y = event.offsetY-25;
});

canvas.addEventListener("click", function(){
  if(fire.length<6){
    fire.push({x:ship.x+40, y:ship.y, dx:0.5, dy:-12});
    fire.push({x:ship.x, y:ship.y, dx:-0.5, dy:-12})}  
 }, false);
    
 elgameover.onclick = function(){
  aster = [], ship = {x:370, y:500};
  elgameover.style.display="none";
  level=1, life = 1, spead_ast=1, aster_quan = 3, score = 0, timer=0;
  game();
}
      
explimg.onload = function(){       
 game();}
    
function game(){
   update();
   render();
  if(life>0){
    requestAnimFrame(game);
    }
}

function update(){
   timer++;
   if(timer>16000){spead_ast=18; aster_quan=5; level=5;}
   else if(timer>10000){spead_ast=15; aster_quan=10; level=4;}
   else if(timer>5000){spead_ast=12; aster_quan=15; level=3;} 
   else if(timer>2000){spead_ast=8; aster_quan=20; level=2;}
                                
  //parameters of the asteroid
   if(timer%aster_quan == 0){
   	aster.push(
   	{x:Math.floor(Math.random()*800), 
     y:-50, 
    dx:Math.floor(Math.random()*8)-4, 
    dy:Math.floor(Math.random()*spead_ast)+2,
    del:0});
   } 
  //explosion
   for(i in expl){
     expl[i].animx=expl[i].animx+1.5;
     if(expl[i].animx>7){expl[i].animy++; expl[i].animx=0;}
     if(expl[i].animy>7) expl.splice(i, 1);
    }

   //physics of the asteroid and check for a collision with a projectile
   for(i in aster){
    aster[i].x=aster[i].x+aster[i].dx;
    aster[i].y=aster[i].y+aster[i].dy;
   
    if(aster[i].y>=650 || aster[i].x<-50 || aster[i].x>850) aster[i].del=1;  

    if(Math.abs(aster[i].x+20 - ship.x-40)<60 && Math.abs(aster[i].y+15 - ship.y-15)<30){
      elgameover.style.display="block";                                
     life--;}            

      for(j in fire){
     	  if(Math.abs(aster[i].x+20 - fire[j].x-20)<40 && Math.abs(aster[i].y - fire[j].y)<15){
          expl.push({x:aster[i].x-25, y:aster[i].y-25, animx:0, animy:0});
          score+=level*5;              
          aster[i].del=1;
          fire.splice(j, 1);break;}
          }
        if(aster[i].del==1)aster.splice(i, 1);
       }   

   for (i in fire){
    fire[i].x=fire[i].x + fire[i].dx;
    fire[i].y=fire[i].y + fire[i].dy;
    if(fire[i].y<-30)fire.splice(i, 1);
    }

     elscore.innerHTML = score;
     ellevel.innerHTML = level;
     if(score>localStorage.getItem("saferecord"))
         localStorage.setItem("saferecord", score);   
     elrecord.innerHTML = localStorage.getItem("saferecord");
    };
    
 function render(){
    //rendering of background
  context.drawImage(fonimg, 0, 0, 800, 600);
    
    //rendering of ship      
 	 context.drawImage(shipimg, ship.x, ship.y, 80, 50);

   //rendering of bullets
   for(i in fire){
   	context.drawImage(fireimg, fire[i].x, fire[i].y, 30, 30); 
 	 }
   //asteroid
    for(i in aster){
      context.drawImage(asterimg, aster[i].x, aster[i].y, 40, 40);        
     };
     //explosions
     for (i in expl){
      context.drawImage(explimg, 28*Math.floor(expl[i].animx), 29*Math.floor(expl[i].animy), 28, 27, expl[i].x, expl[i].y, 50, 50);
      }
  } 
    var requestAnimFrame = (function (){
    	return window.requestAnimationFrame ||
    	window.webkitRequestAnimationFrame ||
    	window.mozRequestAnimationFrame ||
    	window.oRequestAnimationFrame ||
    	window.mozRequestAnimationFrame ||
    	  function(callback){
    	  	window.setTimeout(callback, 1000/20);
    	  };
  })();