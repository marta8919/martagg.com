const robot = document.querySelector('.robot')

//Challenge: Make the robot move when you click it. Don't forget to share you robot on
//Discord! Feel free to play around with the styling before doing so!

let number = 0
let direction = "right"
let clicks = 0

function mouseover() {
    document.getElementById("textRobot").textContent = "Click me!"
}

robot.addEventListener("click", function moveRobot(){
    robot.addEventListener("mouseover", mouseover)
    clicks ++
    document.getElementById("textRobot").textContent =  clicks
    if (direction == "right" && number < 400 && clicks < 10){
        number += 100
        robot.style.left = number + 'px'
    } else if (number == 400 && clicks < 10) {
        direction = "left"
        number -= 100
        robot.style.left = number + 'px'
    } else if (direction == "left" && number < 400 && number != 0 && clicks < 10) {
        number -= 100
        robot.style.left = number + 'px'
    } else if (number == 0 && clicks < 10) {
        direction = "right"
        number += 100
        robot.style.left = number + 'px'
    } else if (clicks <= 10){
        clicks = 0
        document.getElementById("textRobot").textContent =  "Stop it stupid!"
    } 
})

