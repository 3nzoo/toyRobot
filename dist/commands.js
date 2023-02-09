"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tableSize = exports.obs = exports.report = exports.right = exports.left = exports.move = exports.obstruction = exports.place = exports.TABLETOP_SIZE = void 0;
var constants_1 = require("./constants");
exports.TABLETOP_SIZE = 5;
var limit = [
    {
        x: 0,
        y: 0,
    },
];
var place = function (x, y, direction) {
    var robot_details = {
        placed: false,
        position: { x: x, y: y },
        direction: constants_1.Direction.NULL,
    };
    if (x > 4 || x < 0 || y < 0 || y > 4 || isNaN(x) || isNaN(y)) {
        robot_details.placed = false;
        console.log('invalid x or y position value');
        return robot_details;
    }
    if (direction.toUpperCase() in constants_1.Direction &&
        direction.toUpperCase() !== constants_1.Direction.NULL) {
        var entries = Object.entries(constants_1.Direction);
        entries.find(function (_a) {
            var key = _a[0], value = _a[1];
            if (value === direction.toUpperCase()) {
                robot_details.direction = value;
            }
        });
        robot_details.placed = true;
        return robot_details;
    }
    else {
        console.log('invalid Direction');
        robot_details.placed = false;
        robot_details.position.x = 0;
        robot_details.position.y = 0;
        return robot_details;
    }
};
exports.place = place;
var obstruction = function (x, y) {
    limit.push({ x: x, y: y });
    console.log(limit);
};
exports.obstruction = obstruction;
var move = function (robot) {
    if (!robot.placed)
        return null;
    switch (robot.direction) {
        case constants_1.Direction.NORTH:
            if (limit.find(function (num) { return num.y === robot.position.y + 1; }) !== undefined) {
                console.log('error: toy robot is blocked');
                return robot;
            }
            robot.position.y = Math.min(exports.TABLETOP_SIZE - 1, robot.position.y + 1);
            return robot;
        case constants_1.Direction.SOUTH:
            if (limit.find(function (num) { return num.y === robot.position.y - 1; }) !== undefined) {
                console.log('error: toy robot is blocked');
                return robot;
            }
            robot.position.y = Math.max(0, robot.position.y - 1);
            return robot;
        case constants_1.Direction.EAST:
            if (limit.find(function (num) { return num.x === robot.position.x + 1; }) !== undefined) {
                console.log('error: toy robot is blocked');
                return robot;
            }
            robot.position.x = Math.min(exports.TABLETOP_SIZE - 1, robot.position.x + 1);
            return robot;
        case constants_1.Direction.WEST:
            if (limit.find(function (num) { return num.x === robot.position.x - 1; }) !== undefined) {
                console.log('error: toy robot is blocked');
                return robot;
            }
            robot.position.x = Math.max(0, robot.position.x - 1);
            return robot;
        default:
            return robot;
    }
};
exports.move = move;
var left = function (robot) {
    if (!robot.placed)
        return null;
    switch (robot.direction) {
        case constants_1.Direction.NORTH:
            robot.direction = constants_1.Direction.WEST;
            return robot;
        case constants_1.Direction.SOUTH:
            robot.direction = constants_1.Direction.EAST;
            return robot;
        case constants_1.Direction.EAST:
            robot.direction = constants_1.Direction.NORTH;
            return robot;
        case constants_1.Direction.WEST:
            robot.direction = constants_1.Direction.SOUTH;
            return robot;
        default:
            return robot;
    }
};
exports.left = left;
var right = function (robot) {
    if (!robot.placed)
        return null;
    switch (robot.direction) {
        case constants_1.Direction.NORTH:
            robot.direction = constants_1.Direction.EAST;
            return robot;
        case constants_1.Direction.SOUTH:
            robot.direction = constants_1.Direction.WEST;
            return robot;
        case constants_1.Direction.EAST:
            robot.direction = constants_1.Direction.SOUTH;
            return robot;
        case constants_1.Direction.WEST:
            robot.direction = constants_1.Direction.NORTH;
            return robot;
        default:
            return robot;
    }
};
exports.right = right;
var report = function (robot) {
    console.log("x:".concat(robot.position.x, ", y:").concat(robot.position.y, ", Direction:").concat(robot.direction));
};
exports.report = report;
var obs = function (limit) {
    console.log(limit);
};
exports.obs = obs;
var tableSize = function (size) {
    return (exports.TABLETOP_SIZE = size);
};
exports.tableSize = tableSize;
