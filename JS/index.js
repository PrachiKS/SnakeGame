//Game Constants & Variables
let direction = { x: 0, y: 0 };
const foodSound = new Audio("food.wav");
const gameOverSound = new Audio("gameOver.mp3");
const moveSound = new Audio('move.mp3');
const musicSound = new Audio('bgmusic.mp3');
let speed = 2
let lastPaintTime = 0
let snakeArr = [
    { x: 13, y: 15 }
]
food = {x: 13, y:15};

// Game functions
function main(ctime) {
    window.requestAnimationFrame(main);
    if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
        return;
    }
    lastPaintTime = ctime;
    console.log(ctime);
    gameEngine();

    function gameEngine() {
        //Part 1: updating the snake array & food

        //part 2: Display the snake and food

        //Display the snake
        board.innerHTML = "";
        snakeArr.forEach((e, index) => {
            snakeElement = document.createElement('div');
            snakeElement.style.gridRowStart = e.y;
            snakeElement.style.gridColumnStart = e.x;
            snakeElement.classList.add('snake');
            if(index === 0){
                snakeElement.classList.add('snake');
            }else{
                snakeElement.classList.add('head');
            }
            board.appendChild(snakeElement);
        });

        //Display the food 
        foodElement = document.createElement('div');
        foodElement.style.gridRowStart = e.y;
        foodElement.style.gridColumnStart = e.x;
        foodElement.classList.add('food');
        board.appendChild(foodElement);
    }
}


// main logic start here 
window.requestAnimationFrame(main);

