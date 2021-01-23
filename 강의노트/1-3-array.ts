{
  //Array
  const fruits: string[] = ["🥝", "🥝"];
  const scores: Array<number> = [1, 3, 4];

  function printArray(fruits: readonly string[]) {
    //readonly사용시에는 절대 변경불가
    //읽어내는 것만 가능!
    // fruits.push("new")  -> x
    // fruits: readonly string[]는 가능하나
    // fruits: readonly Array<number> 는 불가능하다.
    // 그래서 string[] 이런방식이 선호됨
  }

  //Tuple ->배열인데 서로 다른 타입을 선언하는 것이 가능한 타입.
  // Interface, Type alias, Class 정도로 활용
  let student: [string, number];
  student = ["name", 2];
  student[1]; // number
  student[0]; // string
  const [name, age] = student; //object destructing을 통해서 조금 더 명확하게 설명 가능
  // 하지만 임의로 이름을 정하는 것이기 때문에 그렇게 선호되지 않음
  // react의 useState를 생각하면 두가지를 받아오는 것인데 state와 함수를 받아오니 tuple형태이다
  //tuple 사용은 권장되지 않는다
  // index로 값을 정의 하는 것은 어떤데이터인지 알아낼 수 없기 때문 ..
  //tuple대신에 obj나 class형태로 쓰는 것 권장
}
