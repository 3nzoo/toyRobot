import { Robot, TABLETOP_SIZE } from './constants';
import { Direction } from './constants';

//TODO PLACE - setup the (x,y, direction)
export const place = (
  x: number,
  y: number,
  direction: Direction | string
): Robot => {
  const robot_details: Robot = {
    placed: false,
    position: { x: x, y: y },
    direction: Direction.NULL,
  };

  if (x > 4 || x < 0 || y < 0 || y > 4 || isNaN(x) || isNaN(y)) {
    robot_details.placed = false;
    console.log('invalid x or y position value');
    return robot_details;
  }

  if (direction.toUpperCase() in Direction) {
    const entries = Object.entries(Direction);
    entries.find(([key, value]) => {
      if (value === direction.toUpperCase()) {
        robot_details.direction = value;
      }
    });
    robot_details.placed = true;
    return robot_details;
  } else {
    console.log('invalid Direction');
    robot_details.placed = false;
    robot_details.position.x = 0;
    robot_details.position.y = 0;

    return robot_details;
  }
};

//TODO Move - advances one place forward
export const move = (robot: Robot): Robot | null => {
  if (!robot.placed) return null;

  switch (robot.direction) {
    case Direction.NORTH:
      //?Math.min allows toy to move if not at the topmost
      robot.position.y = Math.min(TABLETOP_SIZE - 1, robot.position.y + 1);
      return robot;
    case Direction.SOUTH:
      //?Math.mix allows toy to move if not at the lowermost position
      robot.position.y = Math.max(0, robot.position.y - 1);
      return robot;
    case Direction.EAST:
      robot.position.x = Math.min(TABLETOP_SIZE - 1, robot.position.x + 1);
      return robot;
    case Direction.WEST:
      robot.position.x = Math.max(0, robot.position.x - 1);
      return robot;
    default:
      return robot;
  }
};

//? (NORTH -> WEST), (SOUTH -> EAST), (EAST -> NORTH), (WEST -> SOUTH)
//TODO Left - turn facing to counter-clockwise
export const left = (robot: Robot): Robot | null => {
  if (!robot.placed) return null;
  switch (robot.direction) {
    case Direction.NORTH:
      robot.direction = Direction.WEST;
      return robot;
    case Direction.SOUTH:
      robot.direction = Direction.EAST;
      return robot;
    case Direction.EAST:
      robot.direction = Direction.NORTH;
      return robot;
    case Direction.WEST:
      robot.direction = Direction.SOUTH;
      return robot;
    default:
      return robot;
  }
};

//? (NORTH -> EAST), (SOUTH -> WEST), (EAST -> SOUTH), (WEST -> NORTH)
//TODO Right - turn facing to clockwise
export const right = (robot: Robot): Robot | null => {
  if (!robot.placed) return null;
  switch (robot.direction) {
    case Direction.NORTH:
      robot.direction = Direction.EAST;
      return robot;
    case Direction.SOUTH:
      robot.direction = Direction.WEST;
      return robot;
    case Direction.EAST:
      robot.direction = Direction.SOUTH;
      return robot;
    case Direction.WEST:
      robot.direction = Direction.NORTH;
      return robot;
    default:
      return robot;
  }
};

//TODO report - shows the current position and direction of the robot
export const report = (robot: Robot): void => {
  console.log(
    `x:${robot.position.x}, y:${robot.position.y}, Direction:${robot.direction}`
  );
};
