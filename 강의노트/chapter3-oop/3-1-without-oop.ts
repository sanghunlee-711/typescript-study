{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  const BEANS_GRAMM_PER_SHOT: number = 7;
  let coffeeBeans: number = 0;

  function makeCoffee(shots: number): CoffeeCup {
    if (coffeeBeans < shots * BEANS_GRAMM_PER_SHOT) {
      throw new Error("Not enough Coffee beads!");
    }
    coffeeBeans -= shots * BEANS_GRAMM_PER_SHOT; //사용한 만큼 커피콩 줄임
    return {
      shots,
      hasMilk: false,
    };
  }

  coffeeBeans += 3 * BEANS_GRAMM_PER_SHOT;

  const coffee = makeCoffee(2);
  console.log(coffee);

  //필요한 함수와 상수들이 다 엉켜있는 모습이라고 한다.
}
