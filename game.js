const splashScreen = document.getElementById("splash-screen")
const gameplayScreen = document.getElementById("gameplay-screen");
const gameoverScreen = document.getElementById("gameover-screen");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const backgroundImg1 = new Image();
backgroundImg1.src = "./images/canvas-1.jpg"
const backgroundImg2 = new Image();
backgroundImg2.src = "./images/canvas-2.jpg"
let gameId = 0;
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;
let backgrounImg1Start = 0;
let backgroundImg2Start = canvasWidth
let backgroundMove = -1;


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
drawCanvas();
moveCanvas();
drawCanvas2();
moveCanvas2();
gameId = requestAnimationFrame(animate)
};


const clearCanvas = () => {ctx.clearRect(0, 0, canvasWidth, canvasHeight)};

const drawCanvas = () => {ctx.drawImage(backgroundImg1, backgrounImg1Start, 0, canvasWidth, canvasHeight)
console.log("hi")};

const moveCanvas = () => {
    let backgroundCurrentPosition = backgrounImg1Start += backgroundMove;
    if (backgroundCurrentPosition > 0) {
    backgroundCurrentPosition;
    }
    else {
      backgroundStartPosition = canvasWidth;
    }
    };

    const drawCanvas2 = () => {ctx.drawImage(backgroundImg2, backgroundImg2Start, 0, canvasWidth, canvasHeight)}

    const moveCanvas2 = () => {
        let backgroundCurrentPosition2 = backgroundImg2Start += backgroundMove;
        if (backgroundCurrentPosition2 > 0) {
        backgroundCurrentPosition2;
        }
        else {
          backgroundStartPosition2 = canvasWidth * 2;
        }
        };





gameplayScreen.style.display = "none"
gameoverScreen.style.display = "none"

}