# Toy Robot Test

A Typescript Toy Robot Simulator for Ai-Media

## How to run this project?

Please make sure you have Node.js (latest version) and install `yarn` as your package manager

```shell
$ yarn
$ yarn start
```

## For testing, run the following command in separate shells

```shell
$ yarn test
```

## If you want to run testing before building or running the program

```shell
$ yarn start:test
```

## Sample in game commands

**PLACE or place Command**, this will start and put your Toy Robot on the tabletop

```
> place(2,3,SOUTH)
```

**left/LEFT or right/Right Command**, this will change the facing direction of your Toy Robot

```
> left
```

```
> right
```

**move/MOVE Command**, this will make your Toy Robot move forward depends on the direction it's facing.

```
> move
```

**report/REPORT Command**, this will show the current x, y position and the current direction your toy robot is faceing.

```
> report
```

## Reminder

**You need to do the PLACE command first before being able to run other commands**
**The default size of the tabletop is 5x5. If the next move of the toy robot will exceed its boundaries or it will make it fall then no movement will be done.**
