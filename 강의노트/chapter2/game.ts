// Make some game!

type PositionOfGame = {
  x: number;
  y: number;
};
type DirectionOf = "up" | "down" | "left" | "right";

let position = { x: 0, y: 0 };

function move(direction: DirectionOf) {
  if (direction === "up") {
    let newPosition: PositionOfGame;
    newPosition = { x: position.x, y: position.y + 1 };
    return (position = newPosition);
  } else if (direction === "down") {
    let newPosition: PositionOfGame;
    newPosition = { x: position.x, y: position.y - 1 };
    return (position = newPosition);
  } else if (direction === "left") {
    let newPosition: PositionOfGame;
    newPosition = { x: position.x - 1, y: position.y };
    return (position = newPosition);
  } else if (direction === "right") {
    let newPosition: PositionOfGame;
    newPosition = { x: position.x + 1, y: position.y };
    return (position = newPosition);
  }
}

console.log(position); // {x:0,y:0}
move("up");
console.log(position); // {x:0,y:1}
move("down");
console.log(position); // {x:0,y:0}
move("left");
console.log(position); // {x:-1,y:0}
move("right");
console.log(position); // {x:0,y:0}

//Ellies
function move2(direction: "up" | "down" | "left" | "right") {
  switch (direction) {
    case "up":
      position.y += 1;
      break;
    case "down":
      position.y -= 1;
      break;
    case "left":
      position.x -= 1;
      break;
    case "right":
      position.x += 1;
      break;
    default:
      throw new Error(`Unknown Direction: ${direction}`);
  }
}
