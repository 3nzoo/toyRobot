import { Position, Robot } from './constants';
import { Direction } from './constants';

export let TABLETOP_SIZE = 5;

let limit: Position[] = [
  {
    x: 0,
    y: 0,
  },
];

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

  if (
    direction.toUpperCase() in Direction &&
    direction.toUpperCase() !== Direction.NULL
  ) {
    const entries = Object.entries(Direction);

    // console.log(
    //   Object.entries(Direction).find(
    //     (item) => item[0] === direction.toUpperCase()
    //   )
    // );

    // entries.find((item) => {
    //   if (item[1] === direction.toUpperCase()) {
    //     robot_details.direction = item[1];
    //   }
    // });

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

export const obstruction = (x: number, y: number) => {
  limit.push({ x: x, y: y });
  console.log(limit);
};

//TODO Move - advances one place forward
export const move = (robot: Robot): Robot | null => {
  if (!robot.placed) return null;
  switch (robot.direction) {
    case Direction.NORTH:
      if (limit.find((num) => num.y === robot.position.y + 1) !== undefined) {
        console.log('error: toy robot is blocked');
        return robot;
      }
      //?Math.min allows toy to move if not at the topmost
      //?if y is > than the tableSize-1 then it will choose the tableSize-1
      robot.position.y = Math.min(TABLETOP_SIZE - 1, robot.position.y + 1);
      return robot;
    case Direction.SOUTH:
      //?Math.mix allows toy to move if not at the lowermost position
      //?if y < 0 the end of table then choose 0
      if (limit.find((num) => num.y === robot.position.y - 1) !== undefined) {
        console.log('error: toy robot is blocked');
        return robot;
      }
      robot.position.y = Math.max(0, robot.position.y - 1);
      return robot;
    case Direction.EAST:
      if (limit.find((num) => num.x === robot.position.x + 1) !== undefined) {
        console.log('error: toy robot is blocked');
        return robot;
      }
      robot.position.x = Math.min(TABLETOP_SIZE - 1, robot.position.x + 1);
      return robot;
    case Direction.WEST:
      if (limit.find((num) => num.x === robot.position.x - 1) !== undefined) {
        console.log('error: toy robot is blocked');
        return robot;
      }
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

export const obs = (limit: string) => {
  console.log(limit);
};

//TODO modify tableSize
export const tableSize = (size: number) => {
  return (TABLETOP_SIZE = size);
};
