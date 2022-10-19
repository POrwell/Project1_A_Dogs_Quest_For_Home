# Project1_A_Dogs_Quest_For_Home
A simple game built using HTML, CSS and JS based on canvas and DOM manipulation.
Click here to see deployed game.

## Description
A Dog's Quest for Home is a game where the player must help navigate Blue the dog from her life in an abandoned warehouse to a new cosy home with a loving family. She must traverse many landscapes, collecting resources and dodging dangers as she goes. Resources will help keep her strength up, but dangers will reduce it. The game ends when Blue's strength diminishes to zero and she has failed her quest and must begin again. Certain resources will also allow the player to collect points.

## MVP (DOM - Canvas)
# Splash 
- Static Blue cartoon 
- Name of game 
- List of instructions
- Keys diagram
- Start button in shape of paw

# Gameplay
- Horizontally moving canvas
- Blue is positioned near the start of the canvas and moves up, down, left and right using arrow keys
- Strength bar which increases/decreases with objects
- Score tally which increases with specific resources
- Objects which appear from end of canvas and move along towards Blue and are collected using collision feature.
- Simple background audio on loop 
- When bar diminishes game is over 

# Gameover
- Failure message
- Score printed
- Restart button in shape of bone 

## Backlog
# Splash
- Additional key control (see gameplay) *

# Gameplay
- Canvas images change to add sense of movement
- SFX noises *
- Space or enter key must be hit to collect resources or they are lost. Not simple collision *
- When game is lost, Blue's position reverts to start of canvas and popup failure message appears *

# Gameover
- High score printed *

## Data structure
# main.js
- createSplashScreen()
- createGameScreen()
- createGameoverScreen()

# game.js
- game() 
- startLoop()
- loopId
- clearCanvas()
- moveCanvas()
- drawCanvas()
- scoreCount()
- resourceCount()
- dangerCount()

# blue.js
- positioning
- movement
- canvas boundaries 
- moveBlue()
- drawBlue()

# resource.js
- positioning
- movement
- class Resource
- new Resource() {
    moveResource()
    drawResource()
}
- create map
- create compass
- create bone
- create ball
- create pigeon
- check collision
- add to strength bar

# danger.js
- positioning
- movement
- class Danger
- new Danger() {
    moveDanger()
    drawDanger()
}
- create rubbish1
- create rubbish2
- create poison
- create sinkhole
- create trap
- check collision
- reduce strength bar 

# strengthbar.js
- create
- increaseFill()
- decreaseFill()

# score.js
- create
- update total


## States y States Transitions
- Splash
- Gameplay
- Gameover

## Task
[x] main - build splash screen
[x] main - build gameplay screen
[x] main - build gameover screen
[x] game - build Canvas
[x] game - start animation loop
[x] game - update Canvas
[x] game - draw Canvas
[x] game - update Blue
[x] game - move Blue
[x] game - create resources
[x] game - create dangers
[x] game - fire random resource
[x] game - fire random danger
[x] game - create strength bar
[x] game - update stength bar
[x] game - create score
[x] game - update score
[x] game - check collision
[x] game - game over
[x] game - event listener arrow keys
[x] game - add audio

## Links
Trello - https://trello.com/b/uw0SVOy2/tasks
GitHub - https://github.com/POrwell/Project1_A_Dogs_Quest_For_Home
Slides - https://docs.google.com/presentation/d/1tPmZ_TNNKGFaqCpDe-KGB26cRj28iG9vrj8Mq4VNHdY/edit#slide=id.p