//Type Inference :타입을 자동으로 추론해버리는 것
// 프로젝트에서 코드가 굉장히 커지기 때문에 자동추론을 지양하고 꼭 정확하게 명시해주자
{
  let text = "Hello";
  // text = 2; // string으로 자동타입이 할당되어서 다른 타입으로는 못넣게 되는 것

  //함수 변수에 인자 할당하지 않으면 자동으로 any가 할당된다.
  function print(message: any) {
    console.log(message);
  }

  print("string");
  print(0);
  function print2(message = "Hello") {
    console.log(message);
  }
  print2("hello");

  function add(x: number, y: number) {
    return x + y;
  }

  const result = add(1, 2); //이렇게 하면 result에 자동으로 number타입이 결정됨
}
