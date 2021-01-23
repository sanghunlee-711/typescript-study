{
  //Enum: 여러가지의 관련된 상수 값들을 한 곳에 모아서 정의 하는 것.
  //JS에는 Enum이 없고 ts에서 제공해줌 -> 그래서 관례적으로 대문자로 정해준다(한번 정해지면 안바뀌는 것)
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDENSDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1 });
  DAYS_ENUM.MONDAY;
  const dayofTodat = DAYS_ENUM.MONDAY;
  //이렇게 위와 같이 여러가지 상수들을 Object.freeze({})를 이용해서 억지로 객체를 묶어두고 사용하는 방식을 택했었다.

  //TypeScript
  enum Days {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  console.log(Days.Sunday);

  const day = Days.Tuesday;
  let day2: Days = Days.Saturday;
  day2 = 55; //이런식으로 아무거나 할당이 되어버려서 문제가 됨
  // enum을 쓰면 타입을 확실하게 정의하지 못하기 때문에 문제가 크다
  console.log(day2);
  console.log(day); //1이 나오게 됨 . enum에 따로 값을 안 정하면 자동으로 0 부터 시작 되고 Monday에 1을 넣으면 1부터 시작하게됨
  // 문자열을 할당하면 하나씩 다 할당해줘야한다
  // 다른언어에서는 유용한데 ts에서는 사용을 자제하는게 좋다.

  type DaysOfWeek = "Monday" | "Tuesday" | "Wednesday";
  // 위와 Union type으로 , enum 대신에 사용이 가능하므로 가능한 해당방법 추천

  let dayOfWeek: DaysOfWeek = "Wednesday";
  dayOfWeek = "Monday";

  //Android, swift는 json으로 사용자 정보를 보내야 할때 enum type을 사용하게 됨
}
