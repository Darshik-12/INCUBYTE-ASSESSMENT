function backwardMove(currentPosition, direction) {
    let newPosition = [...currentPosition];

    if (direction === "NTH") {
        newPosition[1] -= 1;
    } else if (direction === "STH") {
        newPosition[1] += 1;
    } else if (direction === "ET") {
        newPosition[0] -= 1;
    } else if (direction === "WT") {
        newPosition[0] += 1;
    } else if (direction === "UP") {
        newPosition[2] -= 1;
    } else if (direction === "DN") {
        newPosition[2] += 1;
    }

    return newPosition;
}

module.exports = {
    backwardMove
};
