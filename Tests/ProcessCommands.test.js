const ProcessCommands = require("../Functions/ProcessCommands").ProcessCommands;

test("The function should return the updated position and direction when provided with a single command", () => {
    const commands = ["f"];
    const initial = {
        position: [0, 0, 0],
        direction: "NTH",
    };
    const expected = {
        position: [0, 1, 0],
        direction: "NTH",
    };
    const actual = ProcessCommands(commands, initial);
    expect(actual).toStrictEqual(expected);
});

test("Test Case that is given in an assessment", () => {
    const commands = ["f", "r", "u", "b", "l"];
    const initial = {
        position: [0, 0, 0],
        direction: "NTH",
    };
    const expected = {
        position: [0, 1, -1],
        direction: "WT",
    };
    const actual = ProcessCommands(commands, initial);
    expect(actual).toStrictEqual(expected);
});
