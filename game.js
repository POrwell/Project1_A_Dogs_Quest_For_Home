const splashScreen = document.getElementById("splash-screen")
const gameplayScreen = document.getElementById("gameplay-screen");
const gameoverScreen = document.getElementById("gameover-screen");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

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
let resourceMove = -5;


const resourcesArr = [
  {img: mapImg, x: canvasWidth, y: Math.floor(Math.random() * ((canvasHeight - mapHeight) - 0 + 1) + 0), width: mapWidth, height: mapHeight},
  {img: compassImg, x: canvasWidth * 1.5, y: Math.floor(Math.random() * ((canvasHeight - compassHeight) - 0 + 1) + 0), width: compassWidth, height: compassHeight},
  {img: boneImg, x: canvasWidth * 2, y: Math.floor(Math.random() * ((canvasHeight - boneHeight) - 0 + 1) + 0), width: boneWidth, height: boneHeight},
  {img: ballImg, x: canvasWidth * 2.5, y: Math.floor(Math.random() * ((canvasHeight - ballHeight) - 0 + 1) + 0), width: ballWidth, height: ballHeight},
  {img: pigeonImg, x: canvasWidth * 3, y: Math.floor(Math.random() * ((canvasHeight - pigeonHeight) - 0 + 1) + 0), width: pigeonWidth, height: pigeonHeight},
]

const newOrderResourcesArr = [];

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
let dangerMove = -5;
let startingX = canvasWidth + 300;

const dangersArr = [
  {img: rubbish1Img, x: startingX, y: Math.floor(Math.random() * ((canvasHeight - rubbish1Height) - 0 + 1) + 0), width: rubbish1Width, height: rubbish1Height},
  {img: rubbish2Img, x: startingX * 1.5, y: Math.floor(Math.random() * ((canvasHeight - rubbish2Height) - 0 + 1) + 0), width: rubbish2Width, height: rubbish2Height},
  {img: poisonImg, x: startingX * 2, y: Math.floor(Math.random() * ((canvasHeight - poisonHeight) - 0 + 1) + 0), width: poisonWidth, height: poisonHeight},
  {img: trapImg, x: startingX * 2.5, y: Math.floor(Math.random() * ((canvasHeight - trapHeight) - 0 + 1) + 0), width: trapWidth, height: trapHeight},
  {img: sinkholeImg, x: startingX * 3, y: Math.floor(Math.random() * ((canvasHeight - sinkholeHeight) - 0 + 1) + 0), width: sinkholeWidth, height: sinkholeHeight}
]

const newOrderDangersArr = [];

// GAME ID
let gameId = 0;
let isGameOver = false;

// STRENGTH AND SCORE
let strengthCounter = 0;
const strength = document.querySelector(".strength-bar");
let scoreCounter = 0;
const score = document.querySelector(".score");
const finalScore = document.querySelector(".final-score");

window.onload = () => {
    
   
    document.getElementById("start-button").onclick = () => {
        
        startGame();
    }

function startGame() {
    splashScreen.style.display = "none"
    gameplayScreen.style.display = "block"
    gameoverScreen.style.display = "none"
    shuffleResources(resourcesArr);
    shuffleDangers(dangersArr);
    animate();    
}

const animate = () => {
animateBackground();
gameId = requestAnimationFrame(animate)
if (gameId % 500 === 0 && resourceMove >= -8 && dangerMove >= -8) {
  resourceMove -= 0.5;
  dangerMove -= 0.5;
}
if (isGameOver) {
  finalScore.innerText = `Score: ${scoreCounter}`
  cancelAnimationFrame(gameId)
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

    const moveBlueYAxis = () => {
              if (blueStartY + blueMoveY >= 0 && blueStartY + blueMoveY <= canvasHeight-blueHeight)
              blueStartY += blueMoveY;
            }

    const shuffleResources = (array) => {
      const shuffledResourcesArr = resourcesArr.sort((a, b) => 0.5 - Math.random());
      shuffledResourcesArr.forEach(resource => {
        newOrderResourcesArr.push(resource)
              });
            };

   const drawResource = () => {
    newOrderResourcesArr.forEach(resource => {
      ctx.drawImage(resource.img, resource.x, resource.y, resource.width, resource.height)
      let resourceCurrentPosition = resource.x += resourceMove;
      if (resourceCurrentPosition > 0) {
        resourceCurrentPosition
      } else {
        resource.x = canvasWidth + 150
      }
      if (resource.x < blueStartX + blueWidth - 30 &&
          resource.x > blueStartX &&
          resource.y > blueStartY - 30 &&
          resource.y < blueStartY + blueHeight)
       {resource.x = canvasWidth * 2
        if ((resource.img === boneImg || resource.img === pigeonImg) && strengthCounter < 3) {
          strengthCounter += 1;
          strength.innerText = `Blue's Strength: ${strengthCounter}`;
        }
        else {
          scoreCounter += 1;
          score.innerText = `Score: ${scoreCounter}`;
        }
      };
    })
    }


    const shuffleDangers = (array) => {
      const shuffledDangersArr = dangersArr.sort((a, b) => 0.5 - Math.random());
      shuffledDangersArr.forEach(danger => {
        newOrderDangersArr.push(danger)
              });
            };

      const drawDanger = () => {
          newOrderDangersArr.forEach(danger => {
          ctx.drawImage(danger.img, danger.x, danger.y, danger.width, danger.height)
           let dangerCurrentPosition = danger.x += dangerMove;
          if (dangerCurrentPosition > 0) {
            dangerCurrentPosition
            } else {
          danger.x = canvasWidth + 150
                }
          if (danger.x < blueStartX + blueWidth - 30 &&
                  danger.x > blueStartX &&
                  danger.y > blueStartY - 30 &&
                  danger.y < blueStartY + blueHeight)
              {strengthCounter -= 2;
              if(strengthCounter <= 0) {
                isGameOver = true;}
                else{danger.x = canvasWidth * 2.5
                strength.innerText = `Blue's Strength: ${strengthCounter}`}
              };
              })
              }

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





gameplayScreen.style.display = "none"
gameoverScreen.style.display = "none"


document.getElementById("restart-button").onclick = () => {
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

resourceMove = -5;

newOrderResourcesArr.splice(0, newOrderResourcesArr.length);

dangerMove = -5;
startingX = canvasWidth + 300;

newOrderDangersArr.splice(0, newOrderDangersArr.length)

 gameId = 0;
 isGameOver = false;

 strengthCounter = 0;
 scoreCounter = 0;
startGame();
}
}