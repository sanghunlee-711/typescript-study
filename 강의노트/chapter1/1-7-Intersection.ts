// Union이 발생가능한 타입 케이스중 한가지만 선택가능 한 것이었따(==or)
// Intersection은 그 모든 것을 다 합한 성격이라 생각하면 됨(==and)

{
  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    employeeId: number;
    work: () => void; //일하는 함수 아무것도 인자로 안받고 아무것도 리턴안함 ㅎㅅㅎ
  };

  function internWork(person: Student & Worker) {
    console.log(person.name, person.employeeId, person.work());
    //위 같이 모든 것들에 다 접근이 가능함
  }

  //따라서 두가지 타입에 모두 들어있는 키 값들을 다 넣어줘야한다.
  internWork({
    name: "Lee",
    score: 1,
    employeeId: 123,
    work: () => {},
  });
}
