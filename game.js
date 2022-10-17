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
let blueMoveUp = -5
let blueMoveDown = +5
let blueMoveRight = +5
let blueMoveLeft = -5

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
let resourcesMove = -5;

const resourcesArr = [
  {img: mapImg, x: 700, y: 500, width: mapWidth, height: mapHeight},
  {img: compassImg, x: 700, y: 500, width: compassWidth, height: compassHeight},
  {img: boneImg, x: 700, y: 500, width: boneWidth, height: boneHeight},
  {img: ballImg, x: 700, y: 500, width: ballWidth, height: ballHeight},
  {img: pigeonImg, x: 700, y: 500, width: pigeonWidth, height: pigeonHeight},
]

const selectedResourcesArr = [];

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

const dangersArr = [
  {img: rubbish1Img, x: 700, y: 500, width: rubbish1Width, height: rubbish1Height},
  {img: rubbish2Img, x: 700, y: 500, width: rubbish2Width, height: rubbish2Height},
  {img: poisonImg, x: 700, y: 500, width: poisonWidth, height: poisonHeight},
  {img: trapImg, x: 700, y: 500, width: trapWidth, height: trapHeight},
  {img: sinkholeImg, x: 700, y: 500, width: sinkholeWidth, height: sinkholeHeight}
]

// GAME ID
let gameId = 0;


window.onload = () => {
    
   
    document.getElementById("start-button").onclick = () => {
        
        startGame();
    }


function startGame() {
    splashScreen.style.display = "none"
    gameplayScreen.style.display = "block"
    gameoverScreen.style.display = "none"
    animate();    
}

const animate = () => {
clearCanvas();
animateBackground();
console.log(gameId)
gameId = requestAnimationFrame(animate)
if (gameId === 5000) {
  cancelAnimationFrame(gameId)
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
  if (gameId % 500 === 0) {
    selectRandomResource();
    console.log(selectedResourcesArr);
  };
  selectedResourcesArr.forEach((resource) => {
    drawResource(resource.img, resource.x, resource.y, resource.width, resource.height)
  });
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

            const selectRandomResource = () => {
              let randomNumGen = Math.floor(Math.random() * ((resourcesArr.length - 1) - 0 + 1) + 0);
              let randomResource = resourcesArr[randomNumGen];
              selectedResourcesArr.push(randomResource)};

              const drawResource = (image, x, y, width, height) => {
                ctx.drawImage(image, x, y, width, height)
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

}