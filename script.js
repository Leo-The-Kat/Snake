const canvas = document.getElementById("snake-canvas");
const ctx = canvas.getContext("2d");
const snake = [{
  x: canvas.width / 2 - 30,
  y:  canvas.height /2,
},{
  x: canvas.width / 2 - 15,
  y: canvas.height /2,
},{
  x: canvas.width / 2,
  y: canvas.height /2,
}]
addEventListener('keydown', (Pressed) =>{
  if (Pressed.key === "w"){
    Snakedata.up = "yes"
    Snakedata.down = "no"
    Snakedata.left = "no"
    Snakedata.right = "no"
  }
});
addEventListener('keydown', (Pressed) =>{
  if (Pressed.key === "s"){
    Snakedata.up = "no"
    Snakedata.down = "yes"
    Snakedata.left = "no"
    Snakedata.right = "no"
  }
});
addEventListener('keydown', (Pressed) =>{
  if (Pressed.key === "a"){
    Snakedata.up = "no"
    Snakedata.down = "no"
    Snakedata.left = "yes"
    Snakedata.right = "no"
  }
});
addEventListener('keydown', (Pressed) =>{
  if (Pressed.key === "d"){
    Snakedata.up = "no"
    Snakedata.down = "no"
    Snakedata.left = "no"
    Snakedata.right = "yes"
  }
});
let Apple = {
  x:"undefined",
  y:"undefined",
}
let Snakedata = {
    pixelswide: 15,
  left: "no",
  right:"yes",
  up:"no",
  down:"no"
}
function MoveSnake(){
  if (Snakedata.right === "yes"){
    Snakedata.x += Snakedata.pixelswide
  }
  if (Snakedata.left === "yes"){
    Snakedata.x -= Snakedata.pixelswide
  }
  if (Snakedata.up === "yes"){
    Snakedata.y -= Snakedata.pixelswide
  }
  if (Snakedata.down === "yes"){
    Snakedata.y += Snakedata.pixelswide
  }
}
function SpawnApple(){
  return "Spawned"
}
function Draw(){
  canvas.height = document.documentElement.clientHeight;
canvas.width = document.documentElement.clientWidth;
  for (let i = 0; i < snake.length;i++ )[
    ctx.fillRect(snake[i].x,snake[i].y, Snakedata.pixelswide,Snakedata.pixelswide)
  ]
  if (SpawnApple() === "Spawned"){
    ctx.fillStyle = "red"
    ctx.fillRect(Apple.x,Apple.y, 15,15)
    console.log("SPAWNING")
  }
}
 var StopDrawing = setInterval(Draw,50)
setInterval(MoveSnake,50 * 3)
function GameOver(){
  if (Snakedata.x >= canvas.width || Snakedata.x <= -15 || Snakedata.y >= canvas.height || Snakedata.y <= 0){
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

setInterval(function() {
  SpawnApple();
  Apple.x = Math.floor(Math.random() * 800);
  Apple.y = Math.floor(Math.random() * 800);
}, 1000 * 25)