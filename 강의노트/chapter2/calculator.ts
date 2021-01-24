//make a calculator

//My Challenge
type CalculatorType = "add" | "substract" | "multiply" | "divide" | "reaminder";
// union 타입으로 특정 타입만 지정해주자!
function calculate(
  command: CalculatorType,
  arg1: number,
  arg2: number
): number {
  if (command === "add") {
    return arg1 + arg2;
  } else if (command == "substract") {
    return arg1 - arg2;
  } else if (command == "multiply") {
    return arg1 * arg2;
  } else if (command == "divide") {
    return arg1 / arg2;
  } else if (command == "reaminder") {
    return arg1 % arg2;
  }
}

//Ellies
type Command = "add" | "substract" | "multiply" | "divide" | "reaminder";
function calculate2(command: Command, a: number, b: number): number {
  switch (command) {
    case "add":
      return a + b;
    case "substract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      return a / b;
    case "reaminder":
      return a % b;
    default:
      throw new Error("Unknown Command!");
  }
}

console.log(calculate("add", 1, 3)); //4
console.log(calculate("substract", 3, 1)); //2
console.log(calculate("multiply", 4, 2)); //8
console.log(calculate("divide", 4, 2)); //2
console.log(calculate("reaminder", 5, 2)); //1
