const ForwardMove = require("./ForwardMove").ForwardMove;
const BackwardMove = require("./BackwardMove").backwardMove;
const DirectionChange = require("./DirectionChange").DirectionChange;

function ProcessCommands(commands, initial) {
    let direction = initial.direction;
    let position = initial.position;
    for (let i = 0; i < commands.length; i++) {

        if (commands[i] === "f") {
            position = ForwardMove(position, direction);
        }
        else if (commands[i] === "b") {
            position = BackwardMove(position, direction);
        }
        else if (commands[i] === "u") {
            direction = DirectionChange(direction, "UP");
        }
        else if (commands[i] === "d") {
            direction = DirectionChange(direction, "DN");
        }
        else if (commands[i] === "l") {
            direction = DirectionChange(direction, "LT");
        }
        else if (commands[i] === "r") {
            direction = DirectionChange(direction, "RT");
        }
        else {
            console.log("Please Enter A Valid Command.");
        }
    }
    console.log(direction, position);
    return { position, direction };
}

module.exports = {
    ProcessCommands,
}