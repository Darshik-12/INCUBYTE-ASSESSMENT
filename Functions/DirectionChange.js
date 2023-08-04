

function DirectionChange(initialDirection, rotateRoverTo) {
    if (initialDirection === "NTH" && rotateRoverTo === "LT") {
        return "WT";
    }
    if (initialDirection === "NTH" && rotateRoverTo === "RT") {
        return "ET";
    }

    if (initialDirection === "STH" && rotateRoverTo === "LT") {
        return "ET";
    }
    if (initialDirection === "STH" && rotateRoverTo === "RT") {
        return "WT";
    }

    if (initialDirection === "ET" && rotateRoverTo === "LT") {
        return "NTH";
    }
    if (initialDirection === "ET" && rotateRoverTo === "RT") {
        return "STH";
    }

    if (initialDirection === "WT" && rotateRoverTo === "LT") {
        return "STH";
    }
    if (initialDirection === "WT" && rotateRoverTo === "RT") {
        return "NTH";
    }

    if (initialDirection === "UP" && rotateRoverTo === "LT") {
        return "WT";
    }
    if (initialDirection === "UP" && rotateRoverTo === "RT") {
        return "ET";
    }

    if (initialDirection === "DN" && rotateRoverTo === "LT") {
        return "ET";
    }
    if (initialDirection === "DN" && rotateRoverTo === "RT") {
        return "WT";
    }

    if (rotateRoverTo === "UP") {
        return "UP";
    }
    if (rotateRoverTo === "DN") {
        return "DN";
    }
}

module.exports = {
    DirectionChange,
};