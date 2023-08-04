function ForwardMove(position, direction) {
    let temporary = position;

    if (direction === "NTH") {
        temporary[1] += 1;
    }
    else if (direction === "STH") {
        temporary[1] -= 1;
    }
    else if (direction === "ET") {
        temporary[0] += 1;
    }
    else if (direction === "WT") {
        temporary[0] -= 1;
    }
    else if (direction === "UP") {
        temporary[2] += 1;
    }
    else if (direction === "DOWN") {
        temporary[2] -= 1;
    }
    return temporary;
}

module.exports = {
    ForwardMove,
};