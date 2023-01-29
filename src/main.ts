// //TODO make a toyCommand function that will accept a specific command

import * as process from 'process';
import * as readline from 'readline';
import { left, move, place, report, right } from './commands';
import { Direction, placeCommand, Robot, StringCommands } from './constants';

const displayInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

let robot: Robot = {
  placed: false,
  position: { x: 0, y: 0 },
  direction: Direction.NULL,
};

console.log('Welcome to the ToyRobot Test');
console.log(
  'Available commands are PLACE(x, y, direction), LEFT, RIGHT, MOVE and REPORT.\n'
);

displayInterface.prompt(true);

displayInterface.on('line', (newCommand: placeCommand | StringCommands) => {
  const command_Name = newCommand.toString().toLowerCase();

  if (command_Name.trim().substring(0, 5).replace(/[()]/g, '') === 'place') {
    if (command_Name.length < 6) return console.log('missing arguments');

    const regex = /\(([^)]+)\)/;
    const result = command_Name
      ?.match(regex) //? use regex to get only the value inside the parenthesis
      ?.toString()
      .replace(/[()"]/g, '') //? remove the parenthesis before converting to an array
      .split(',');

    //?validation for x,y and direction arguments
    if (result) {
      const robot_Details = place(
        Number(result[0]),
        Number(result[1]),
        result[2].toUpperCase()
      );

      if (robot_Details && robot_Details.placed === true) {
        robot = robot_Details;
      } else {
        robot.placed = false;
        robot.position.x = 0;
        robot.position.y = 2;
      }
      displayInterface.prompt(true);

      return robot;
    } else {
      console.log('invalid input');
    }
  }

  //?check if the newCommand is in the command List
  else if (newCommand.toString().toUpperCase() in StringCommands) {
    if (!robot.placed) {
      return console.log('please place first your toy on the tabletop');
    }

    switch (command_Name.toUpperCase()) {
      case StringCommands.LEFT:
        left(robot);
        break;
      case StringCommands.RIGHT:
        right(robot);
        break;
      case StringCommands.REPORT:
        report(robot);
        break;
      case StringCommands.MOVE:
        move(robot);
        break;
      default:
        break;
    }
  } else if (command_Name === 'exit') {
    process.exit(0);
  } else {
    console.log('invalid command');
  }

  displayInterface.prompt(true);
});
