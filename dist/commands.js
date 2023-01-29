"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.report = exports.right = exports.left = exports.move = exports.place = void 0;
var constants_1 = require("./constants");
var constants_2 = require("./constants");
var place = function (x, y, direction) {
    var robot_details = {
        placed: false,
        position: { x: x, y: y },
        direction: constants_2.Direction.NULL,
    };
    if (x > 4 || x < 0 || y < 0 || y > 4 || isNaN(x) || isNaN(y)) {
        robot_details.placed = false;
        console.log('invalid x or y position value');
        return robot_details;
    }
    if (direction.toUpperCase() in constants_2.Direction) {
        var entries = Object.entries(constants_2.Direction);
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
var move = function (robot) {
    if (!robot.placed)
        return null;
    switch (robot.direction) {
        case constants_2.Direction.NORTH:
            robot.position.y = Math.min(constants_1.TABLETOP_SIZE - 1, robot.position.y + 1);
            return robot;
        case constants_2.Direction.SOUTH:
            robot.position.y = Math.max(0, robot.position.y - 1);
            return robot;
        case constants_2.Direction.EAST:
            robot.position.x = Math.min(constants_1.TABLETOP_SIZE - 1, robot.position.x + 1);
            return robot;
        case constants_2.Direction.WEST:
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
        case constants_2.Direction.NORTH:
            robot.direction = constants_2.Direction.WEST;
            return robot;
        case constants_2.Direction.SOUTH:
            robot.direction = constants_2.Direction.EAST;
            return robot;
        case constants_2.Direction.EAST:
            robot.direction = constants_2.Direction.NORTH;
            return robot;
        case constants_2.Direction.WEST:
            robot.direction = constants_2.Direction.SOUTH;
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
        case constants_2.Direction.NORTH:
            robot.direction = constants_2.Direction.EAST;
            return robot;
        case constants_2.Direction.SOUTH:
            robot.direction = constants_2.Direction.WEST;
            return robot;
        case constants_2.Direction.EAST:
            robot.direction = constants_2.Direction.SOUTH;
            return robot;
        case constants_2.Direction.WEST:
            robot.direction = constants_2.Direction.NORTH;
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
