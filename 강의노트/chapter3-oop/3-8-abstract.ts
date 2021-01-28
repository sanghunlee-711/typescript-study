{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;

    //ellie
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  //abstract 클래스는 자식클래스를 만들수가 없다.
  //부모클래스로서부터 필요한 것만 정의해놓고
  abstract class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; //class level
    private coffeeBeans: number = 0; //instance(object) level

    public constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("Value for Beans shold be greater than 0 !");
      }
      this.coffeeBeans += beans;
    }
    clean() {
      console.log("Cleaning the machine!");
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }
    private preheat(): void {
      console.log("heating up!");
    }

    //abstract로 자식클래스마다 다 다르게 구현해야하기(접근)을 해야하기 때문에 외부에서 클래스 내부의 함수 자체에 접근을 못하게 protected를 붙인다
    protected abstract extract(shots: number): CoffeeCup;

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class CaffeeLatteMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans);
    }
    private steamMilk(): void {
      console.log("Steaming some milk!!");
    }
    protected extract(shots: 3): CoffeeCup {
      this.steamMilk();
      return {
        shots,
        hasMilk: true,
      };
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    //이렇게하면 super를 부르지 않고 그냥 추상 메서드만 불러와서 새로운 클래스를 만들어 낼 수 잇음
    protected extract(shots: 3): CoffeeCup {
      return {
        shots,
        hasMilk: true,
      };
    }
  }

  const machines: CoffeeMaker[] = [
    // new CoffeeMachine(16),//커피머신은 이제 추상머신이라 사용 못함, 구현한 클래스만 사용 가능
    new CaffeeLatteMachine(16, "1"),
    new SweetCoffeeMaker(16),
    new CaffeeLatteMachine(16, "1"),
    new SweetCoffeeMaker(16),
    new CaffeeLatteMachine(16, "1"),
    new SweetCoffeeMaker(16),
  ];
  machines.forEach((machine1) => {
    console.log("------------------------");
    machine1.makeCoffee(1);
  });
}

//특정한 기능만 자식클래스에서 기능이 달라진다면 abstract클래스를 사용할 수 있다.
