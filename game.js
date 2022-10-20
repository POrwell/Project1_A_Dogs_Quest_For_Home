const splashScreen = document.getElementById("splash-screen")
const gameplayScreen = document.getElementById("gameplay-screen");
const gameoverScreen = document.getElementById("gameover-screen");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// AUDIO
const backgroundMusic = new Audio("./sound/background-song.mp3");
backgroundMusic.volume = 0.2;

const gameoverMusic = new Audio("./sound/gameover-song.mp3");
gameoverMusic.volume = 0.2; 

const pigeonSound = new Audio("./sound/pigeon.mp3");
pigeonSound.volume = 0.3;

const dingSound = new Audio("./sound/ding.mp3")
dingSound.volume = 0.3;

const failSound = new Audio("./sound/fail.mp3");
failSound.volume = 0.3;

const slurpSound = new Audio("./sound/slurp.mp3");
slurpSound.volume = 0.3;

// BACKGROUND IMAGES
const backgroundImg1 = new Image();
backgroundImg1.src = "./images/canvas-1.jpg"
const backgroundImg2 = new Image();
backgroundImg2.src = "./images/canvas-2.jpg"
const backgroundImg3 = new Image();
backgroundImg3.src = "./images/canvas-3.jpg"
const backgroundImg4 = new Image();
backgroundImg4.src = "./images/canvas-4.jpg"
const backgroundImg5 = new Image();
backgroundImg5.src = "./images/canvas-5.jpg"
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;
let backgroundImg1Start = 0;
let backgroundImg2Start = canvasWidth;
let backgroundImg3Start = canvasWidth * 2;
let backgroundImg4Start = canvasWidth * 3;
let backgroundImg5Start = canvasWidth * 4;
let backgroundMove = -3;

// BLUE IMAGE
const blueImg = new Image();
blueImg.src = "./images/blue.png"
let blueWidth = 300;
let blueHeight = 171;
let blueStartX = 20;
let blueStartY = canvasHeight - blueHeight;
let blueMoveX = 0;
let blueMoveY = 0;
let blueMoveUp = -8
let blueMoveDown = +8
let blueMoveRight = +8
let blueMoveLeft = -8

// RESOURCE IMAGES
const mapImg = new Image ();
mapImg.src = "./images/map.png"
const compassImg = new Image ();
compassImg.src = "./images/compass.png"
const boneImg = new Image ();
boneImg.src = "./images/bone.png"
const ballImg = new Image ();
ballImg.src = "./images/ball.png"
const pigeonImg = new Image ();
pigeonImg.src = "./images/pigeon.png"
let mapWidth = 80;
let mapHeight = 87;
let compassWidth = 80;
let compassHeight = 95;
let boneWidth = 80;
let boneHeight = 80;
let ballWidth = 60;
let ballHeight = 60;
let pigeonWidth = 80;
let pigeonHeight = 80;
let resourceMove = -3.5;

let resourcesArr = [
  {img: mapImg, x: Math.floor(Math.random() * ((canvasWidth * 1.5) - canvasWidth + 1) + canvasWidth), y: Math.floor(Math.random() * ((canvasHeight - mapHeight) - 0 + 1) + 0), width: mapWidth, height: mapHeight},
  {img: compassImg, x: Math.floor(Math.random() * ((canvasWidth * 1.25) - canvasWidth + 1) + canvasWidth), y: Math.floor(Math.random() * ((canvasHeight - compassHeight) - 0 + 1) + 0), width: compassWidth, height: compassHeight},
  {img: boneImg, x: Math.floor(Math.random() * ((canvasWidth * 1) - canvasWidth + 1) + canvasWidth), y: Math.floor(Math.random() * ((canvasHeight - boneHeight) - 0 + 1) + 0), width: boneWidth, height: boneHeight},
  {img: ballImg, x: Math.floor(Math.random() * ((canvasWidth * 1.25) - canvasWidth + 1) + canvasWidth), y: Math.floor(Math.random() * ((canvasHeight - ballHeight) - 0 + 1) + 0), width: ballWidth, height: ballHeight},
  {img: pigeonImg, x: Math.floor(Math.random() * ((canvasWidth * 1.5) - canvasWidth + 1) + canvasWidth), y: Math.floor(Math.random() * ((canvasHeight - pigeonHeight) - 0 + 1) + 0), width: pigeonWidth, height: pigeonHeight},
]

// DANGERS IMAGES
const rubbish1Img = new Image ();
rubbish1Img.src = "./images/rubbish1.png"
const rubbish2Img = new Image ();
rubbish2Img.src = "./images/rubbish2.png"
const poisonImg = new Image ();
poisonImg.src = "./images/poison.png"
const trapImg = new Image ();
trapImg.src = "./images/trap.png"
const sinkholeImg = new Image ();
sinkholeImg.src = "./images/sinkhole.png"
let rubbish1Width = 60;
let rubbish1Height = 69;
let rubbish2Width = 65;
let rubbish2Height = 49;
let poisonWidth = 50;
let poisonHeight = 76;
let trapWidth = 91;
let trapHeight = 60;
let sinkholeWidth = 150;
let sinkholeHeight = 55;
let dangerMove = -3.5;

let dangersArr = [
  {img: rubbish1Img, x: Math.floor(Math.random() * ((canvasWidth * 1.5) - canvasWidth + 1) + canvasWidth), y: Math.floor(Math.random() * ((canvasHeight - rubbish1Height) - 0 + 1) + 0), width: rubbish1Width, height: rubbish1Height},
  {img: rubbish2Img, x: Math.floor(Math.random() * ((canvasWidth * 2.5) - canvasWidth + 1) + canvasWidth), y: Math.floor(Math.random() * ((canvasHeight - rubbish2Height) - 0 + 1) + 0), width: rubbish2Width, height: rubbish2Height},
  {img: poisonImg, x: Math.floor(Math.random() * ((canvasWidth * 1.25) - canvasWidth + 1) + canvasWidth), y: Math.floor(Math.random() * ((canvasHeight - poisonHeight) - 0 + 1) + 0), width: poisonWidth, height: poisonHeight},
  {img: trapImg, x: Math.floor(Math.random() * ((canvasWidth * 2.25) - canvasWidth + 1) + canvasWidth), y: Math.floor(Math.random() * ((canvasHeight - trapHeight) - 0 + 1) + 0), width: trapWidth, height: trapHeight},
  {img: sinkholeImg, x: Math.floor(Math.random() * ((canvasWidth * 1.75) - canvasWidth + 1) + canvasWidth), y: Math.floor(Math.random() * ((canvasHeight - sinkholeHeight) - 0 + 1) + 0), width: sinkholeWidth, height: sinkholeHeight},
  {img: rubbish1Img, x: Math.floor(Math.random() * ((canvasWidth * 2.5) - canvasWidth + 1) + canvasWidth), y: Math.floor(Math.random() * ((canvasHeight - rubbish1Height) - 0 + 1) + 0), width: rubbish1Width, height: rubbish1Height},
  {img: sinkholeImg, x: Math.floor(Math.random() * ((canvasWidth * 3.25) - canvasWidth + 1) + canvasWidth), y: Math.floor(Math.random() * ((canvasHeight - sinkholeHeight) - 0 + 1) + 0), width: sinkholeWidth, height: sinkholeHeight},
  {img: poisonImg, x: Math.floor(Math.random() * ((canvasWidth * 3) - canvasWidth + 1) + canvasWidth), y: Math.floor(Math.random() * ((canvasHeight - poisonHeight) - 0 + 1) + 0), width: poisonWidth, height: poisonHeight},
  {img: trapImg, x: Math.floor(Math.random() * ((canvasWidth * 1.75) - canvasWidth + 1) + canvasWidth), y: Math.floor(Math.random() * ((canvasHeight - trapHeight) - 0 + 1) + 0), width: trapWidth, height: trapHeight},
  {img: rubbish2Img, x: Math.floor(Math.random() * ((canvasWidth * 1.25) - canvasWidth + 1) + canvasWidth), y: Math.floor(Math.random() * ((canvasHeight - rubbish2Height) - 0 + 1) + 0), width: rubbish2Width, height: rubbish2Height}
]

// GAME ID
let gameId = 0;
let isGameOver = false;

// STRENGTH AND SCORE
const strength = document.querySelector(".strength-bar");
const strengthHearts = document.querySelector(".strength-bar-img")
let strengthCounter = 0;

const score = document.querySelector(".score");
const scoreNumber = document.querySelector(".score span");
const finalScore = document.querySelector(".final-score");
let scoreCounter = 0;
const highScore = document.querySelector(".high-score");
let highScoreCounter = 0;

const gameoverMsg = document.querySelector(".message");

//ON LOAD
window.onload = () => {

 //START BUTTON  
document.getElementById("start-button").onclick = () => {
  backgroundMusic.play();
  startGame() }

const startGame = () => {
    splashScreen.style.display = "none"
    gameplayScreen.style.display = "block"
    gameoverScreen.style.display = "none"
    backgroundMusic.play();
    animate();
}

const animate = () => {
  
animateBackground();
gameId = requestAnimationFrame(animate)
if (gameId % 500 === 0 && resourceMove >= -5 && dangerMove >= -5) {
  resourceMove -= 0.25;
  dangerMove -= 0.25;
}
if(gameId >= 50000) {
  cancelAnimationFrame(gameId)
}
if (isGameOver) {
  finalScore.innerText = `Score: ${scoreCounter}`
  if(scoreCounter > highScoreCounter) {
    highScoreCounter = scoreCounter
  }
  highScore.innerText = `High Score: ${highScoreCounter}`

  // GAMEOVER MESSAGES
  if (scoreCounter >= 0 && scoreCounter <= 5) {
    gameoverMsg.innerText = "A bit of a paw effort!"
  }
  else if (scoreCounter >= 6 && scoreCounter <= 10) {
    gameoverMsg.innerText = "You are terrwoofic!"
  }
  
  else {
    gameoverMsg.innerText = "Home is just around the corner!"
  }
  clearCanvas();
  cancelAnimationFrame(gameId)
  backgroundMusic.pause();
  gameoverMusic.play();
  splashScreen.style.display = "none"
  gameplayScreen.style.display = "none"
  gameoverScreen.style.display = "block"
}
};

// ANIMATION FUNCTIONS
const animateBackground = () => {
  clearCanvas();
  drawCanvas();
  moveCanvas();
  drawCanvas2();
  moveCanvas2();
  drawCanvas3();
  moveCanvas3();
  drawCanvas4();
  moveCanvas4();
  drawCanvas5();
  moveCanvas5();
  drawBlue();
  moveBlueXAxis();
  moveBlueYAxis();   
  drawResource();         
  drawDanger();
  };


  // CANVAS FUNCTIONS
const clearCanvas = () => {ctx.clearRect(0, 0, canvasWidth, canvasHeight)};
const drawCanvas = () => {ctx.drawImage(backgroundImg1, backgroundImg1Start, 0, canvasWidth, canvasHeight)};
const moveCanvas = () => {
    let backgroundCurrentPosition = backgroundImg1Start += backgroundMove;
    if (backgroundImg1Start >= -canvasWidth) {
    backgroundCurrentPosition;
    }
    else {
      backgroundImg1Start = canvasWidth * 4;
    }
    };
const drawCanvas2 = () => {ctx.drawImage(backgroundImg2, backgroundImg2Start, 0, canvasWidth, canvasHeight)}
const moveCanvas2 = () => {
        let backgroundCurrentPosition2 = backgroundImg2Start += backgroundMove;
        if (backgroundImg2Start >= -canvasWidth) {
        backgroundCurrentPosition2;
        }
        else {
          backgroundImg2Start = canvasWidth * 4;
        }
        };
const drawCanvas3 = () => {ctx.drawImage(backgroundImg3, backgroundImg3Start, 0, canvasWidth, canvasHeight)};
const moveCanvas3 = () => {
        let backgroundCurrentPosition = backgroundImg3Start += backgroundMove;
        if (backgroundImg3Start >= -canvasWidth) {
        backgroundCurrentPosition;
        }
        else {
          backgroundImg3Start = canvasWidth * 4;
        }
        };
const drawCanvas4 = () => {ctx.drawImage(backgroundImg4, backgroundImg4Start, 0, canvasWidth, canvasHeight)};
const moveCanvas4 = () => {
          let backgroundCurrentPosition = backgroundImg4Start += backgroundMove;
          if (backgroundImg4Start >= -canvasWidth) {
          backgroundCurrentPosition;
          }
          else {
            backgroundImg4Start = canvasWidth * 4;
          }
          };
const drawCanvas5 = () => {ctx.drawImage(backgroundImg5, backgroundImg5Start, 0, canvasWidth, canvasHeight)};
const moveCanvas5 = () => {
            let backgroundCurrentPosition = backgroundImg5Start += backgroundMove;
            if (backgroundImg5Start >= -canvasWidth) {
            backgroundCurrentPosition;
            }
            else {
              backgroundImg5Start = canvasWidth * 4;
            }
            };

            const drawBlue = () => {ctx.drawImage(blueImg, blueStartX, blueStartY, blueWidth, blueHeight)};

            const moveBlueXAxis = () => {
              if (blueStartX + blueMoveX >= 0 && blueStartX + blueMoveX <= canvasWidth - blueWidth) {
              blueStartX += blueMoveX;
              }
            }

  // BLUE FUNCTIONS
    const moveBlueYAxis = () => {
              if (blueStartY + blueMoveY >= 0 && blueStartY + blueMoveY <= canvasHeight-blueHeight)
              blueStartY += blueMoveY;
            }

  // RESOURCE FUNCTIONS

   const drawResource = () => {
    resourcesArr.forEach(resource => {
      ctx.drawImage(resource.img, resource.x, resource.y, resource.width, resource.height)
      resource.x += resourceMove;
      if (resource.x < 0) {
        resource.x = Math.floor(Math.random() * ((canvasWidth * 3) - (canvasWidth * 2) + 1) + (canvasWidth * 2))
      }
      if (resource.x < blueStartX + blueWidth - 40 &&
          resource.x > blueStartX &&
          resource.y > blueStartY - 40 &&
          resource.y < blueStartY + blueHeight)
       {resource.x = Math.floor(Math.random() * ((canvasWidth * 3.5) - (canvasWidth * 2.5) + 1) + (canvasWidth * 2.5))
        if(resource.img === boneImg) {
          slurpSound.play();
        }
        if(resource.img === pigeonImg) {
          pigeonSound.play();
        }
        if ((resource.img === boneImg || resource.img === pigeonImg) && strengthCounter < 3) {
          strengthCounter += 1;
          if(strengthCounter === 3) {
          strengthHearts.setAttribute("src", "./images/full-strength.png") }
          else if (strengthCounter === 2) {
            strengthHearts.setAttribute("src", "./images/medium-strength.png")
          }
          else if (strengthCounter === 1) {
            strengthHearts.setAttribute("src", "./images/low-strength.png")
          }
        }
        else {
          dingSound.play();
          scoreCounter += 1;
          scoreNumber.setAttribute("style", "font-size: 45px")
          scoreNumber.innerText = `${scoreCounter}`;
        }
      };
    })
    }

// DANGER FUNCTIONS

      const drawDanger = () => {
          dangersArr.forEach(danger => {
          ctx.drawImage(danger.img, danger.x, danger.y, danger.width, danger.height)
           danger.x += dangerMove;
          if (danger.x < 0) {
          danger.x = Math.floor(Math.random() * ((canvasWidth * 1.75) - canvasWidth + 1) + canvasWidth)
                }
          if (danger.x < blueStartX + blueWidth - 40 &&
                  danger.x > blueStartX &&
                  danger.y > blueStartY - 40 &&
                  danger.y < blueStartY + blueHeight)
              {failSound.play();
                strengthCounter -= 2;
          if(strengthCounter < 0) {
                danger.x = Math.floor(Math.random() * ((canvasWidth * 3) - (canvasWidth * 1.5) + 1) + (canvasWidth * 1.5))
                isGameOver = true;
              }
          else{danger.x = Math.floor(Math.random() * ((canvasWidth * 3) - (canvasWidth * 1.5) + 1) + (canvasWidth * 1.5))
           if(strengthCounter === 3) {
                  strengthHearts.setAttribute("src", "./images/full-strength.png") }
           else if (strengthCounter === 2) {
                    strengthHearts.setAttribute("src", "./images/medium-strength.png")
            }
             else if (strengthCounter === 1) {
                    strengthHearts.setAttribute("src", "./images/low-strength.png")
            }
          }
         };
       })
     }


// EVENT LISTENERS
 document.addEventListener("keydown", event => {
   if(event.key === "ArrowUp") {
    blueMoveY = blueMoveUp;
    } else if (event.key === "ArrowDown") {
                blueMoveY = blueMoveDown;
     }
    else if (event.key === "ArrowRight") {
                blueMoveX = blueMoveRight;
   }
     else if (event.key === "ArrowLeft") {
      blueMoveX = blueMoveLeft;
    }
    });

document.addEventListener("keyup", event => {
  blueMoveX = 0;
   blueMoveY = 0;
   })

backgroundMusic.addEventListener("ended", event => {
backgroundMusic.play();
 })

gameoverMusic.addEventListener("ended", event => {
gameoverMusic.play();
})

gameplayScreen.style.display = "none"
gameoverScreen.style.display = "none"

// RESTART BUTTON
document.getElementById("restart-button").onclick = () => {
  gameoverMusic.pause();
  clearCanvas();
  backgroundImg1Start = 0;
  backgroundImg2Start = canvasWidth;
  backgroundImg3Start = canvasWidth * 2;
  backgroundImg4Start = canvasWidth * 3;
  backgroundImg5Start = canvasWidth * 4;
  backgroundMove = -3;
  blueStartX = 20;
  blueStartY = canvasHeight - blueHeight;
  blueMoveX = 0;
  blueMoveY = 0;
  blueMoveUp = -8
  blueMoveDown = +8
  blueMoveRight = +8
  blueMoveLeft = -8
  resourceMove = -3.5;
  resourcesArr = [
    {img: mapImg, x: Math.floor(Math.random() * ((canvasWidth * 3) - canvasWidth + 1) + canvasWidth), y: Math.floor(Math.random() * ((canvasHeight - mapHeight) - 0 + 1) + 0), width: mapWidth, height: mapHeight},
    {img: compassImg, x: Math.floor(Math.random() * ((canvasWidth * 1.5) - canvasWidth + 1) + canvasWidth), y: Math.floor(Math.random() * ((canvasHeight - compassHeight) - 0 + 1) + 0), width: compassWidth, height: compassHeight},
    {img: boneImg, x: Math.floor(Math.random() * ((canvasWidth * 2) - canvasWidth + 1) + canvasWidth), y: Math.floor(Math.random() * ((canvasHeight - boneHeight) - 0 + 1) + 0), width: boneWidth, height: boneHeight},
    {img: ballImg, x: Math.floor(Math.random() * ((canvasWidth * 2.5) - canvasWidth + 1) + canvasWidth), y: Math.floor(Math.random() * ((canvasHeight - ballHeight) - 0 + 1) + 0), width: ballWidth, height: ballHeight},
    {img: pigeonImg, x: Math.floor(Math.random() * ((canvasWidth * 3) - canvasWidth + 1) + canvasWidth), y: Math.floor(Math.random() * ((canvasHeight - pigeonHeight) - 0 + 1) + 0), width: pigeonWidth, height: pigeonHeight},
  ]
  dangerMove = -3.5;
  dangersArr = [
    {img: rubbish1Img, x: Math.floor(Math.random() * ((canvasWidth * 1.5) - canvasWidth + 1) + canvasWidth), y: Math.floor(Math.random() * ((canvasHeight - rubbish1Height) - 0 + 1) + 0), width: rubbish1Width, height: rubbish1Height},
    {img: rubbish2Img, x: Math.floor(Math.random() * ((canvasWidth * 2.5) - canvasWidth + 1) + canvasWidth), y: Math.floor(Math.random() * ((canvasHeight - rubbish2Height) - 0 + 1) + 0), width: rubbish2Width, height: rubbish2Height},
    {img: poisonImg, x: Math.floor(Math.random() * ((canvasWidth * 1.25) - canvasWidth + 1) + canvasWidth), y: Math.floor(Math.random() * ((canvasHeight - poisonHeight) - 0 + 1) + 0), width: poisonWidth, height: poisonHeight},
    {img: trapImg, x: Math.floor(Math.random() * ((canvasWidth * 2.25) - canvasWidth + 1) + canvasWidth), y: Math.floor(Math.random() * ((canvasHeight - trapHeight) - 0 + 1) + 0), width: trapWidth, height: trapHeight},
    {img: sinkholeImg, x: Math.floor(Math.random() * ((canvasWidth * 1.75) - canvasWidth + 1) + canvasWidth), y: Math.floor(Math.random() * ((canvasHeight - sinkholeHeight) - 0 + 1) + 0), width: sinkholeWidth, height: sinkholeHeight},
    {img: rubbish1Img, x: Math.floor(Math.random() * ((canvasWidth * 2.5) - canvasWidth + 1) + canvasWidth), y: Math.floor(Math.random() * ((canvasHeight - rubbish1Height) - 0 + 1) + 0), width: rubbish1Width, height: rubbish1Height},
    {img: sinkholeImg, x: Math.floor(Math.random() * ((canvasWidth * 3.25) - canvasWidth + 1) + canvasWidth), y: Math.floor(Math.random() * ((canvasHeight - sinkholeHeight) - 0 + 1) + 0), width: sinkholeWidth, height: sinkholeHeight},
    {img: poisonImg, x: Math.floor(Math.random() * ((canvasWidth * 3) - canvasWidth + 1) + canvasWidth), y: Math.floor(Math.random() * ((canvasHeight - poisonHeight) - 0 + 1) + 0), width: poisonWidth, height: poisonHeight},
    {img: trapImg, x: Math.floor(Math.random() * ((canvasWidth * 1.75) - canvasWidth + 1) + canvasWidth), y: Math.floor(Math.random() * ((canvasHeight - trapHeight) - 0 + 1) + 0), width: trapWidth, height: trapHeight},
    {img: rubbish2Img, x: Math.floor(Math.random() * ((canvasWidth * 1.25) - canvasWidth + 1) + canvasWidth), y: Math.floor(Math.random() * ((canvasHeight - rubbish2Height) - 0 + 1) + 0), width: rubbish2Width, height: rubbish2Height}
  ]

  isGameOver = false;
  
  strengthCounter = 0;
  scoreCounter = 0;
  scoreNumber.innerText = 0;
  strengthHearts.setAttribute("src", "./images/zero-strength.png");
  gameoverMsg.innerText = "";
  startGame();
}
}