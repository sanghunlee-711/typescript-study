//글로벌 스코프에서의 충돌을 미리 방지하기 위해 블록안에서 강의노트를 작성해보자 :)

{
  //JavaScript
  // var -> old Version -> hoisting 문제 발생하니 사용말자귱
  // 어차피  타겟버전 있어서 컴파일링 하면 다 잘 바뀌니까 변명 ㄴㄴ
  //let -> Es6부터 등장
  let name = "Hello";
  name = "hi";

  //const
  const age = 5;
  // age = 4; //error

  //Javascript
  // 1. Primitive: number, string, boolean, bigint, symbol, null, undefined
  // -> 한가지 심플한 데이터를 담을 수 있는 원시타입
  // 2. Object: function, array ...
  //  -> 여러가지 복잡한 데이터를 담을 수 있는 타입

  // 1. ts . number
  const num: number = 1;

  //2. string
  const str: string = "Hello";

  //boolean
  const boolean: boolean = true;

  //undefined -> 값의 유무 자체가 결정되지 않은 상태
  let age2: number | undefined; // optional Type 설정 시 유용
  age2 = undefined;
  age2 = 3;
  function find(arg: number | undefined): number | undefined {
    return undefined;
  }
  console.log(find(age2));
  //null -> 값이 무(비어있는 상태)라고 정의된 상태

  let person2: string | null;
  person2 = "Hello@";
  person2 = null;

  // 보편적으로는 undefined를 사용하고 Null은 많이 사용안하기는 함..

  //unkown, any, void

  //unknown => 앵간하면 쓰지 않기루 ..
  let notSure: unknown;
  //어떤 종류의 데이터가 담길지 모르는 타입이 된다;

  notSure = "ㅗㄷ";
  notSure = true;
  notSure = 3;

  //any -> 💩 앵간하면 쓰지 않기루 ..22
  let anything: any = 0;
  anything = "Hello";

  //void -> 아무런 값도 return 하지 않는 함수를 말함
  //함수 return하는 것을 명시하는것이 좋은 관례이다
  function print(): void {
    console.log("Hello");
    return;
  }

  let unusable: void = undefined; //💩

  //never-> 절대 return하지 않는 함수, 이 함수 호출하면 어플리케이션 사망 각
  // 에러핸들링시 사용도 가능 할 듯.
  function throwError(message: string): never {
    //message -> server(log)
    throw new Error(message);

    // while(true){
    //while문 돌면서 작동될때
    // }

    //object
    //원시타입을 제외한 모든 타입을 할당 가능하게 만들어줌 배열도 가능 ㅎㅅㅎ..
    //구체적이지 못하기 때문에 포괄적인 타입은 사용하지 않기루 하자
    let obj: object;
    function acceptSomeObject(obj: object) {}
    acceptSomeObject({ name: "Lee" });
    acceptSomeObject({ animal: "dog" });
    acceptSomeObject([1, 2, 3, 4]);
  }
}
