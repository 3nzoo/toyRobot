"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringCommands = exports.TABLETOP_SIZE = exports.Direction = void 0;
var Direction;
(function (Direction) {
    Direction["NORTH"] = "NORTH";
    Direction["SOUTH"] = "SOUTH";
    Direction["EAST"] = "EAST";
    Direction["WEST"] = "WEST";
    Direction["NULL"] = "NULL";
})(Direction = exports.Direction || (exports.Direction = {}));
exports.TABLETOP_SIZE = 5;
var StringCommands;
(function (StringCommands) {
    StringCommands["LEFT"] = "LEFT";
    StringCommands["RIGHT"] = "RIGHT";
    StringCommands["REPORT"] = "REPORT";
    StringCommands["MOVE"] = "MOVE";
})(StringCommands = exports.StringCommands || (exports.StringCommands = {}));
