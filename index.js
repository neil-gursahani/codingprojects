//ITERATION #1 | The Rover Object
let rover = {
    direction : ["N", "S", "E", "W"],
    x : 0,
    y : 0,
    travelLog : []
};

//ITERATION #2 | Turning the Rover
  function turnLeft(rover) {
    console.log("turnLeft was called!");
    switch (rover.direction) {
        case "N":
            rover.direction = "W";
            break;
        case "W":
            rover.direction = "S";
            break;
        case "S":
            rover.direction = "E";
            break;
        case "E":
            rover.direction = "N";
            break;
        default:
            console.log("Incorrect direction.")
    }
    console.log("The rover has turned left and is now looking in the direction: " + rover.direction);
  }
  
  function turnRight() {
    console.log("turnRight was called!");
    switch (rover.direction) {
        case "N":
            rover.direction = "E";
            break;
        case "W":
            rover.direction = "N";
            break;
        case "S":
            rover.direction = "W";
            break;
        case "E":
            rover.direction = "S";
            break;
        default:
            console.log("Incorrect direction.")
    }
    console.log("The rover has turned right and is now looking in the direction: " + rover.direction);
  }

//ITERATION #3 | Moving the Rover
  function moveForward(rover){
  
    switch(rover.direction){
        case "N":
            rover.y--;
            console.log("The rover's current position is [x,y] --> ["+rover.x+","+rover.y+"].");
            break;
        case "S":
            rover.y++;
            console.log("The rover's current position is [x,y] --> ["+rover.x+","+rover.y+"].");
            break;
        case "W":
            rover.x--;
            console.log("The rover's current position is [x,y] --> ["+rover.x+","+rover.y+"].");
            break;
        case "E":
            rover.x++;
            console.log("The rover's current position is [x,y] --> ["+rover.x+","+rover.y+"].");
            break;
        default:
            console.log("Incorrect movement.")
    }
    console.log("moveForward was called");}

//ITERATION #4 | Commands

function commands(commandsList){
    for (let i=0; i<commandsList.length; i++) {
        switch(commandsList){
            case "f":
                moveForward(rover);
                break;
            case "r":
                turnRight(rover);
                break;
            case "l":
                turnLeft(rover);
                break;
            default:
                console.log('Wrong command.')
        }
    }
}

//ITERATION #5 | Tracking
let roverLocation = { 
    x: rover.x, 
    y: rover.y 
};
  
rover.travelLog.push(roverLocation);

console.log(rover.travelLog);