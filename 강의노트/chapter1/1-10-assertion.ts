//Type Assertion
//그닥 좋은방법은 아님 ;
{
  function jsStrFunc(): any {
    return 2;
  }
  // 함수가 return하는 것이 string이라고 확신하는 경우
  //아래와 같이 type insertion을 통해서 해당 str의 api를 사용할 수 있다.
  const result = jsStrFunc();
  console.log((result as string).length);
  //이렇게 하면 다른 타입으로 와도 에러가 발생하지 않게 된다 => undefind가 발생하는 에러가 생김
  // 그래서 type assertion을 쓸때는 진짜 완전 100프로 확신하지 않으면 쓰지 말자

  // const wrong: any = 5;
  // console.log((wrong as Array<number>).push(2));
  // as ... 으로 강제해버리기 때문에 컴파일러에서 에러가 발생해 버릴 것.

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers()!;
  numbers.push(2); // 안됨 .. 만약 이게 배열일 것이라고 확신을 하면 느낌표 스면 됨
  numbers!.push(2); //!는 무조건 null이 아니라고 확신하게 만드는 것.

  const button = document.querySelector("class")!; //상황에 따라 백프로 일때 사용가능.. 근데 너무 위험하니 조건문을 선택하는 것도 괜찮다!
  if (button) {
    button.nodeValue;
  }
}
