export enum Direction {
  NORTH = 'NORTH',
  SOUTH = 'SOUTH',
  EAST = 'EAST',
  WEST = 'WEST',
  NULL = 'NULL',
}

export interface Position {
  x: number;
  y: number;
}

export interface Robot {
  placed: boolean;
  position: Position;
  direction: Direction;
}

export enum StringCommands {
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
  REPORT = 'REPORT',
  MOVE = 'MOVE',
}

export interface placeCommand {
  newCommand: (x: number, y: number, direction: Direction) => Robot;
}
