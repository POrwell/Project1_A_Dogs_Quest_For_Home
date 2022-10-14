# Project1_A_Dogs_Quest_For_Home
A simple game built using HTML, CSS and JS based on canvas and DOM manipulation.
Click here to see deployed game.

## Description
A Dog's Quest for Home is a game where the player must help navigate Blue the dog from her life in an abandoned warehouse to a new cosy home with a loving family. She must traverse many landscapes, collecting resources and dodging dangers as she goes. Resources will help keep her strength up, but dangers will reduce it. The game ends when Blue's strength diminishes to zero and she has failed her quest and must begin again. 

## MVP (DOM - Canvas)
# Splash 
- Static Blue cartoon
- Name of game
- List of instructions
- Keys diagram
- Start button in shape of paw

# Gameplay
- Horizontally moving canvas flanked by static images of warehouse and house
- Blue is positioned near the start of the canvas and moves up, down, left and right using arrow keys
- Strength bar which increases/decreases with objects
- Score tally which increases every 1000 frames
- Objects which appear from end of canvas and move along towards Blue and are collected using collision feature. Points are collected over time (every 1000 frames).
- Simple background audio on loop
- When bar diminishes game is over

# Gameover
- Failure message
- Score printed
- Restart button in shape of bone

## Backlog
# Splash
- Blue cartoon has simple animation (e.g. bobbing movement/ licks paw)
- Additional key control (see gameplay)

# Gameplay
- Canvas images change to add sense of movement
- Popup messages and SFX noises
- Space or enter key must be hit to collect resources or they are lost. Not simple collision
- Collision with side of screen loses point
- When game is lost, Blue's position reverts to start of canvas and popup failure message appears

# Gameover
- High score printed

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
- create water
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
- create kick
- create rubbish
- create poison
- create sinkhole
- create cat
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
- main - build splash screen
- main - build gameplay screen
- main - build gameover screen
- game - build Canvas
- game - start animation loop
- game - update Canvas
- game - draw Canvas
- game - update Blue
- game - move Blue
- game - create resources
- game - create dangers
- game - fire random resource
- game - fire random danger
- game - create strength bar
- game - update stength bar
- game - create score
- game - update score
- game - check collision
- game - game over
- game - event listener arrow keys
- game - add audio

## Links
Trello - https://trello.com/b/uw0SVOy2/tasks
GitHub - https://github.com/POrwell/Project1_A_Dogs_Quest_For_Home
Slides - https://docs.google.com/presentation/d/1tPmZ_TNNKGFaqCpDe-KGB26cRj28iG9vrj8Mq4VNHdY/edit#slide=id.p