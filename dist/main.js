"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var process = require("process");
var readline = require("readline");
var commands_1 = require("./commands");
var constants_1 = require("./constants");
var displayInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
});
var robot = {
    placed: false,
    position: { x: 0, y: 0 },
    direction: constants_1.Direction.NULL,
};
console.log('Welcome to the ToyRobot Test');
console.log('Available commands are PLACE(x, y, direction), LEFT, RIGHT, MOVE and REPORT.\n');
displayInterface.prompt(true);
displayInterface.on('line', function (newCommand) {
    var _a;
    var command_Name = newCommand.toString().toLowerCase();
    if (command_Name.trim().substring(0, 5).replace(/[()]/g, '') === 'place') {
        if (command_Name.length < 6)
            return console.log('missing arguments');
        var regex = /\(([^)]+)\)/;
        var result = (_a = command_Name === null || command_Name === void 0 ? void 0 : command_Name.match(regex)) === null || _a === void 0 ? void 0 : _a.toString().replace(/[()"]/g, '').split(',');
        if (result) {
            var robot_Details = (0, commands_1.place)(Number(result[0]), Number(result[1]), result[2].toUpperCase());
            if (robot_Details && robot_Details.placed === true) {
                robot = robot_Details;
            }
            else {
                robot.placed = false;
                robot.position.x = 0;
                robot.position.y = 2;
            }
            displayInterface.prompt(true);
            return robot;
        }
        else {
            console.log('invalid input');
        }
    }
    else if (newCommand.toString().toUpperCase() in constants_1.StringCommands) {
        if (!robot.placed) {
            return console.log('please place first your toy on the tabletop');
        }
        switch (command_Name.toUpperCase()) {
            case constants_1.StringCommands.LEFT:
                (0, commands_1.left)(robot);
                break;
            case constants_1.StringCommands.RIGHT:
                (0, commands_1.right)(robot);
                break;
            case constants_1.StringCommands.REPORT:
                (0, commands_1.report)(robot);
                break;
            case constants_1.StringCommands.MOVE:
                (0, commands_1.move)(robot);
                break;
            default:
                break;
        }
    }
    else if (command_Name === 'exit') {
        process.exit(0);
    }
    else {
        console.log('invalid command');
    }
    displayInterface.prompt(true);
});
