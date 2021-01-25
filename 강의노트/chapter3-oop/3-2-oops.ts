{
  // type CoffeeCup = {
  //   shots: number;
  //   hasMilk: boolean;
  // };

  // class coffeeMachine {
  //   coffeeBeans: number;
  //   BEANS_GRAMM_PER_SHOT: number;

  //   constructor(coffeeBeans: number, BEANS_GRAMM_PER_SHOT: number) {
  //     this.coffeeBeans = coffeeBeans;
  //     this.BEANS_GRAMM_PER_SHOT = BEANS_GRAMM_PER_SHOT;
  //   }

  //   makeCoffee(shots: number): CoffeeCup {
  //     if (this.coffeeBeans < shots * this.BEANS_GRAMM_PER_SHOT) {
  //       throw new Error("Not enough Coffee beads!");
  //     }
  //     this.coffeeBeans -= shots * this.BEANS_GRAMM_PER_SHOT; //사용한 만큼 커피콩 줄임
  //     return {
  //       shots,
  //       hasMilk: false,
  //     };
  //   }
  // }
  // const newCoffeeMake = new coffeeMachine(21, 7);
  // const coffeeshot = newCoffeeMake.makeCoffee(2);
  // console.log(coffeeshot);

  //ellies

  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    //관련있는데이터나 함수들을 한곳에 묵는 것, 청사진(template을 만드는 기능도!)
    static BEANS_GRAMM_PER_SHOT: number = 7;

    // 클래스에서 한번 정의되고 계속 공유가 되게 된다. 그러니까 메모리 낭비가 됨
    // 그래서 static 키워드를 써서 class level로 사용이 가능하다
    //클래스 레밸이라는 것은 오브젝트(인스턴스) 마다 생성되지 않는다.
    // static 안붙이면 인스턴스 or object레벨이 된다.
    // static변수의 사용을 위해서는 클래스명.변수명
    // 함수에서도 적용이 가능하다.

    coffeeBeans: number = 0;

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
      //class를 가지고 instance를 만들 때 항상 호출되는 함수가 constructor
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      // 이 함수는 클래스내부의 어떠한 속성값도 필요하지 않기 때문에 static을 붙이고 큻래스 내부의 것들을 공유하지 않아도 됨
      return new CoffeeMaker(coffeeBeans);
    }
    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough Coffee beads!");
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT; //사용한 만큼 커피콩 줄임
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = new CoffeeMaker(32); // coffeemaker의 인스턴스 생성

  console.log(maker);

  const newMaker3 = CoffeeMaker.makeMachine(3); //static안 붙으면 클래스레벨에서의 함수호출이 되지 않음.
  //그래서 클래스레벨에서 활용을 하고 싶다면 static을 붙이면 된다.

  // Math.abs 를 생각해보면 new Math() 로 만들지 않고 함수들을 호출 했는데 abs의 경우 static 함수라 생각하면 된다
}
