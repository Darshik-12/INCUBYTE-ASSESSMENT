const ForwardMove = require("./ForwardMove").ForwardMove;
const BackwardMove = require("./BackwardMove").BackwardMove;
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
            position = DirectionChange(position, "UP");
        }
        else if (commands[i] === "d") {
            position = DirectionChange(position, "DN");
        }
        else if (commands[i] === "l") {
            position = DirectionChange(position, "LT");
        }
        else if (commands[i] === "r") {
            position = DirectionChange(position, "RT");
        }
        else {
            console.log("Please Enter A Valid Command.");
        }
    }

    return { position, direction };
}