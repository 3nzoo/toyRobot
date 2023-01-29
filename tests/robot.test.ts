import { place, move, left, right, report } from '../src/commands';
import { Direction, Robot } from '../src/constants';

describe('robot commands', () => {
  let robot: Robot;

  beforeEach(() => {
    robot = {
      placed: false,
      position: { x: 0, y: 0 },
      direction: Direction.NULL,
    };
  });

  test('place should set the robot position and direction', () => {
    const robot = place(2, 3, 'north');
    expect(robot).toEqual({
      placed: true,
      position: { x: 2, y: 3 },
      direction: Direction.NORTH,
    });
  });

  test('move should change the robot position based on the direction', () => {
    const robot = place(2, 3, 'NORTH');
    move(robot);
    expect(robot.position).toEqual({ x: 2, y: 4 });
  });

  test('left should change the robot direction', () => {
    const robot = place(2, 3, 'NORTH');
    left(robot);
    expect(robot.direction).toBe('WEST');
  });

  test('right should change the robot direction', () => {
    const robot = place(2, 3, 'NORTH');
    right(robot);
    expect(robot.direction).toBe('EAST');
  });

  test('report should log the robot position and direction', () => {
    const robot = place(2, 3, 'NORTH');
    jest.spyOn(console, 'log');
    report(robot);
    expect(console.log).toHaveBeenCalledWith('x:2, y:3, Direction:NORTH');
  });
});
