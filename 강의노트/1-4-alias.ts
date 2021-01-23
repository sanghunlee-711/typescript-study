{
  // Type Aliases-> 새로운 타입을 내가 정의할 수 있다는 것.

  type Text = string;
  const name: Text = "Sanghun";
  const address: Text = "Korea";
  type Num = number;
  type Student = {
    name: string;
    age: number;
  };

  const student: Student = { name: "Lee", age: 28 };

  //String Literal Type

  type Name = "name";
  let hunname: Name;
  // hunname = 'd' -> x
  // 문자열 타입을 넣으면 해당 문자 말고는 할당이 안된다.
  type JSON = "json";
  const json: JSON = "json";

  type Boal = true;
  // const isCat: Boal = false; -> Error
}
