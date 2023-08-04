const ForwardMove = require("../Functions/ForwardMove").ForwardMove;

test("forward moves when rover facing North", () => {
    const direction = "NTH";
    let position = [0, 0, 0];
    position = ForwardMove(position, direction);
    expect(position).toStrictEqual([0, 1, 0]);
});

test("forward moves when rover facing South", () => {
    const direction = "STH";
    let position = [0, 0, 0];
    position = ForwardMove(position, direction);
    expect(position).toStrictEqual([0, -1, 0]);
});

test("forward moves when rover facing East", () => {
    const direction = "ET";
    let position = [0, 0, 0];
    position = ForwardMove(position, direction);
    expect(position).toStrictEqual([1, 0, 0]);
});

test("forward moves when rover facing West", () => {
    const direction = "WT";
    let position = [0, 0, 0];
    position = ForwardMove(position, direction);
    expect(position).toStrictEqual([-1, 0, 0]);
});

test("forward moves when rover facing Up", () => {
    const direction = "UP";
    let position = [0, 0, 0];
    position = ForwardMove(position, direction);
    expect(position).toStrictEqual([0, 0, 1]);
});

test("forward moves when rover facing Down", () => {
    const direction = "DN";
    let position = [0, 0, 0];
    position = ForwardMove(position, direction);
    expect(position).toStrictEqual([0, 0, -1]);
});

/** Invalid Instruction */

