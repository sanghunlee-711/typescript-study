{
  // //JavaScript 💩
  // function jsAdd(num1, num2) {
  //   return num1 + num2;
  // }

  // //TypeScript ✨

  // function add(num1, num2: number): number {
  //   return num1 + num2;
  // }
  // add(2, 3);

  // //JavaScript 💩
  // function jsFetchNum(id) {
  //   //code...
  //   //code...
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  // //TypeScript ✨
  // //숫자를 promise resolve 하니 Promise<number>
  // // resolve 함수는 input arg를 return함
  // function tsFetchNum(id: string): Promise<number> {
  //   //...code
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  //JavaScript ✨ => TypeScript
  //Optional Parameter ->인자를 전달해도 되고 전달하지 않아도 되고 타입도 아무거나 되어버림
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }
  printName("Steve", "Jobs");

  printName("lee");

  printName("Anna", null);
  printName("Anna", undefined);

  function printName2(firstName: string, lastName: string | undefined) {
    console.log(firstName);
    console.log(lastName);
  }

  // printName2("lee"); //error

  //Default Parameter
  //Default Parameter랑 Optional Parameter는 같이 사용 못함
  function messageSend(message: string = "Default Parameter Value") {
    console.log(message);
  }

  messageSend();

  //Rest Parameter;
  //...을 (spread Operator) 통해서 인자를 배열로 받아올 수 있음
  console.log(addNumbers(1, 2));
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
}
