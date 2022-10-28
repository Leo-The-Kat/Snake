const canvas = document.getElementById("snake-canvas");
const ctx = canvas.getContext("2d");
addEventListener('keydown', (Pressed) =>{
  if (Pressed.key === "w"){
    Snake.up = "yes"
    Snake.down = "no"
    Snake.left = "no"
    Snake.right = "no"
  }
});
addEventListener('keydown', (Pressed) =>{
  if (Pressed.key === "s"){
    Snake.up = "no"
    Snake.down = "yes"
    Snake.left = "no"
    Snake.right = "no"
  }
});
addEventListener('keydown', (Pressed) =>{
  if (Pressed.key === "a"){
    Snake.up = "no"
    Snake.down = "no"
    Snake.left = "yes"
    Snake.right = "no"
  }
});
addEventListener('keydown', (Pressed) =>{
  if (Pressed.key === "d"){
    Snake.up = "no"
    Snake.down = "no"
    Snake.left = "no"
    Snake.right = "yes"
  }
});
let Apple = {
  x:"undefined",
  y:"undefined",
}
let Snake = {
  pixelswide: 15,
  y: canvas.height / 2,
  x: canvas.width / 2,
  left: "no",
  right:"yes",
  up:"no",
  down:"no"
}
function MoveSnake(){
  if (Snake.right === "yes"){
    Snake.x += 5
  }
  if (Snake.left === "yes"){
    Snake.x -= 5
  }
  if (Snake.up === "yes"){
    Snake.y -= 5
  }
  if (Snake.down === "yes"){
    Snake.y += 5
  }
}
function SpawnApple(){
  return "Spawned"
}
function Draw(){
  canvas.height = document.documentElement.clientHeight;
canvas.width = document.documentElement.clientWidth;
  ctx.fillRect(Snake.x,Snake.y, Snake.pixelswide,15);
  if (SpawnApple() === "Spawned"){
    ctx.fillRect(Apple.x,Apple.y, 15,15)
    console.log("SPAWNING")
  }
}
 var StopDrawing = setInterval(Draw,50)
setInterval(MoveSnake,50)
function GameOver(){
  if (Snake.x >= canvas.width || Snake.x <= -15 || Snake.y >= canvas.height || Snake.y <= 0){
    clearInterval(StopCheckingIfGameIsOver);
    clearInterval(StopDrawing);
    ctx.fillStyle = "white"
    ctx.fillRect(0, 0,  canvas.width,canvas.height)
    ctx.fillStyle = "black"
    ctx.font = "50px monospace";
    ctx.fillText("Game Over!", canvas.width / 2 - 100 , canvas.height / 2)
  }
}
 var StopCheckingIfGameIsOver = setInterval(GameOver,1)
 
setInterval(SpawnApple(); Apple.x = Math.floor(Math.random() * 800) Apple.y = Math.floor(Math.random() * 800),10000)