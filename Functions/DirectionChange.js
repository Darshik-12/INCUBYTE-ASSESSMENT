const NorthDirection = require("../RoverDirections").NorthDirection;
const SouthDirection = require("../RoverDirections").SouthDirection;
const EastDirection = require("../RoverDirections").EastDirection;
const WestDirection = require("../RoverDirections").WestDirection;
const UpDirection = require("../RoverDirections").UpDirection;
const DownDirection = require("../RoverDirections").DownDirection;


function DirectionChange(initialDirection, rotateRoverTo) {
    if (initialDirection === "NTH" && rotateRoverTo === "LT") {
        return NorthDirection.LT;
    }
    if (initialDirection === "NTH" && rotateRoverTo === "RT") {
        return NorthDirection.RT;
    }

    if (initialDirection === "STH" && rotateRoverTo === "LT") {
        return SouthDirection.LT;
    }
    if (initialDirection === "STH" && rotateRoverTo === "RT") {
        return SouthDirection.RT;
    }

    if (initialDirection === "ET" && rotateRoverTo === "LT") {
        return EastDirection.LT;
    }
    if (initialDirection === "ET" && rotateRoverTo === "RT") {
        return EastDirection.RT;
    }

    if (initialDirection === "WT" && rotateRoverTo === "LT") {
        return WestDirection.LT;
    }
    if (initialDirection === "WT" && rotateRoverTo === "RT") {
        return WestDirection.RT;
    }

    if (initialDirection === "UP" && rotateRoverTo === "LT") {
        return UpDirection.LT;
    }
    if (initialDirection === "UP" && rotateRoverTo === "RT") {
        return UpDirection.RT;
    }

    if (initialDirection === "DN" && rotateRoverTo === "LT") {
        return DownDirection.LT;
    }
    if (initialDirection === "DN" && rotateRoverTo === "RT") {
        return DownDirection.RT;
    }

    if (rotateRoverTo === "UP") {
        return "UP";
    }
    if (rotateRoverTo === "DN") {
        return "DN";
    }

    if (rotateRoverTo === "NTH") {
        return "NTH";
    }
    if (rotateRoverTo === "STH") {
        return "STH";
    }

    if (rotateRoverTo === "ET") {
        return "ET";
    }
    if (rotateRoverTo === "WT") {
        return "WT";
    }
}

module.exports = {
    DirectionChange,
};