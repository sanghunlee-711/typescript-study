//Java: Exception이라는  class가 있다.
//JS: Error 라는 클래스가 있다.
{
  // const array = new Array(1000000000000000000000);

  type DirectionType = "right" | "left" | "up" | "down" | "he";

  function doMove(direction: DirectionType) {
    let position = { x: 0, y: 0 };

    switch (direction) {
      case "up":
        position.y += 1;
        break;
      case "down":
        position.y -= 1;
        break;
      case "right":
        position.x += 1;
        break;
      case "left":
        position.x -= 1;
        break;
      case "he":
        position.x += 1;
        break;
      default:
        //never타입은 에러핸들링 용으로 자주 쓰이는데 아무것도 할당이 안될 때 사용가능한 타입이다.
        //유니언타입의 모든케이스들이 다 실행되고 난 다음의 direction은 비어있기 때문에 할당불가능한 상태로 never를 할당할 수 있다.

        const invalid: never = direction;
        throw new Error(`unknown direction: ${invalid}`);
    }
  }

  function readFile(fileName: string): string {
    if (fileName === "not exist!") {
      throw new Error(`File Not exist! ${fileName}`);
    }
    return "file contents";
  }

  function closeFile(fileName: string) {}

  //에러가 발생할 수 있는 정확한 부분에서 try catch를 이용해서 에러를 잡을 수 있다.
  //이렇게 try catch를 하면 프로그램이 죽는 상태는 벌어지지 않게 되므로 적절하게 사용 필요

  function run() {
    const fileName = "not exist!";
    try {
      console.log(readFile(fileName));
    } catch (error) {
      console.log(`catched`);
      return;
    } finally {
      closeFile(fileName);
      console.log(`closed!`);
    }
    //try든 catch든 return을하든 무슨일이든 finally는 호출이된다!!
    console.log("!!!");
  }
  run();
}
