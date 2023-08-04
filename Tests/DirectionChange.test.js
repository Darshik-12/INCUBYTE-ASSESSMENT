const DirectionChange = require("../Functions/DirectionChange").DirectionChange;

/** Rover Will Rotate in Right Direction to check this test cases written below */

test("Rover changes direction when it is facing North", () => {
    const initialDirection = "NTH";
    const rotateRoverTo = "RT";
    expect(DirectionChange(initialDirection, rotateRoverTo)).toStrictEqual("ET");
});

test("Rover changes direction when it is facing South", () => {
    const initialDirection = "STH";
    const rotateRoverTo = "RT";
    expect(DirectionChange(initialDirection, rotateRoverTo)).toStrictEqual("WT");
});

test("Rover changes direction when it is facing East", () => {
    const initialDirection = "ET";
    const rotateRoverTo = "RT";
    expect(DirectionChange(initialDirection, rotateRoverTo)).toStrictEqual("STH");
});

test("Rover changes direction when it is facing West", () => {
    const initialDirection = "WT";
    const rotateRoverTo = "RT";
    expect(DirectionChange(initialDirection, rotateRoverTo)).toStrictEqual("NTH");
});

test("Rover changes direction when it is facing Up", () => {
    const initialDirection = "UP";
    const rotateRoverTo = "RT";
    expect(DirectionChange(initialDirection, rotateRoverTo)).toStrictEqual("ET");
});

test("Rover changes direction when it is facing Down", () => {
    const initialDirection = "DN";
    const rotateRoverTo = "RT";
    expect(DirectionChange(initialDirection, rotateRoverTo)).toStrictEqual("WT");
});

/** Rover Will Rotate in Left Direction to check this test cases written below */

test("Rover changes direction when it is facing Down", () => {
    const initialDirection = "DN";
    const rotateRoverTo = "LT";
    expect(DirectionChange(initialDirection, rotateRoverTo)).toStrictEqual("ET");
});

test("Rover changes direction when it is facing Up", () => {
    const initialDirection = "UP";
    const rotateRoverTo = "LT";
    expect(DirectionChange(initialDirection, rotateRoverTo)).toStrictEqual("WT");
});

test("Rover changes direction when it is facing North", () => {
    const initialDirection = "NTH";
    const rotateRoverTo = "LT";
    expect(DirectionChange(initialDirection, rotateRoverTo)).toStrictEqual("WT");
});

test("Rover changes direction when it is facing South", () => {
    const initialDirection = "STH";
    const rotateRoverTo = "LT";
    expect(DirectionChange(initialDirection, rotateRoverTo)).toStrictEqual("ET");
});

test("Rover changes direction when it is facing East", () => {
    const initialDirection = "ET";
    const rotateRoverTo = "LT";
    expect(DirectionChange(initialDirection, rotateRoverTo)).toStrictEqual("NTH");
});

test("Rover changes direction when it is facing West", () => {
    const initialDirection = "WT";
    const rotateRoverTo = "LT";
    expect(DirectionChange(initialDirection, rotateRoverTo)).toStrictEqual("STH");
});

/** Direction changes accordingly input */
test("When given a specific direction as input, the direction is changed accordingly", () => {
    const initialDirection = "DN";
    let rotateRoverTo = "UP";
    expect(DirectionChange(initialDirection, rotateRoverTo)).toStrictEqual("UP");
});

test("When given a specific direction as input, the direction is changed accordingly", () => {
    const initialDirection = "DN";
    let rotateRoverTo = "DN";
    expect(DirectionChange(initialDirection, rotateRoverTo)).toStrictEqual("DN");
});

