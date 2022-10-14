const splashScreen = document.getElementById("splash-screen")
const gameplayScreen = document.getElementById("gameplay-screen");
const gameoverScreen = document.getElementById("gameover-screen");
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
drawCanvas();
moveCanvas();
gameId = requestAnimationFrame(animate)
};

}


gameplayScreen.style.display = "none"
gameoverScreen.style.display = "none"