{
  //상속 계속하면 족보 꼬일 위험이 있음
  //달달한 커피라떼를 만들려면 상속받아서 확장시킨 라테머신이랑 스윗머신을 합해야하는데 이런 것이 지속되면 좌우로 퍼져나가게 됨
  //상속은 수직적인 관계가 필요함.
  //타입스크립트에서는 한가지 이상의 부모클래스를 상속할 수가 없다 :)
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup;
  }

  interface MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; //class level
    private coffeeBeans: number = 0; //instance(object) level

    public constructor(
      coffeeBeans: number,
      private milk: MilkFrother,
      private sugar: SugarProvider
    ) {
      this.coffeeBeans = coffeeBeans;
    }

    // static makeMachine(coffeeBeans: number): CoffeeMachine {
    //   return new CoffeeMachine(coffeeBeans);
    // }

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

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots ....`);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      const coffee = this.extract(shots);
      const sugarAdded = this.sugar.addSugar(coffee);
      return this.milk.makeMilk(sugarAdded);
    }
  }
  //여기는 MilkFrother
  // 이렇게 하면 규격(interface)에 맞는 class로 적용이 된상태임.
  class CheapMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log("Steaming Some Milk🥛");
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class FancyMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log("Fancy Some Milk🥛");
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class ColdMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log("Fancy Some Milk🥛");
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class NoMilk implements MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  //  여기에서 이제 SugarProvider의 interface를 받게 된다.
  class CandySugarMixer implements SugarProvider {
    private getSugar(): boolean {
      console.log("Getting Some Sugar From Candy");
      return true;
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }

  class SugarMixer implements SugarProvider {
    private getSugar(): boolean {
      console.log("Getting Some Sugar From jar");
      return true;
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }

  class NoSugar implements SugarProvider {
    addSugar(cup: CoffeeCup) {
      return cup;
    }
  }
  //인터페이스로 정의하며 의존성이 낮아지고 다양하게 만들어 낼 수 있게 되어 아래와 같은 CoffeeMachine의 extend가 필요없어짐
  //CoffeeMachine하나만 있으면 된당.

  // class CaffeeLatteMachine extends CoffeeMachine {
  //   //dependency injection 외부에서 필요한 로직을 받아오는 것
  //   constructor(
  //     beans: number,
  //     public readonly serialNumber: string,
  //     private milkFrother: MilkFrother
  //   ) {
  //     super(beans);
  //   }

  //   makeCoffee(shots: number): CoffeeCup {
  //     const coffee = super.makeCoffee(shots);
  //     return this.milkFrother.makeMilk(coffee);
  //   }
  // }

  // class SweetCoffeeMaker extends CoffeeMachine {
  //   // sugar: CandySugarMixer 가 아닌 sugar: SugarProvider를 받아오게 바꾸자 이렇게 되면 클래스간의 coupling이 된것이 아니라 interface를 통해서 클래스상의 연결성을 끊어주기(de-coupling) 때문에 재사용성이 극대화 된다.
  //   constructor(beans: number, private sugar: SugarProvider) {
  //     super(beans);
  //   }

  //   //대신 suagar:CandySugarMixer 를 통해서 getsugar와 유사한 로직 사용
  //   // getSugar(){
  //   //     console.log("Getting Some Sugar");
  //   // }
  //   makeCoffee(shots: number): CoffeeCup {
  //     const coffee = super.makeCoffee(shots);
  //     return this.sugar.addSugar(coffee);
  //   }
  // }

  // 불가능..
  // class SwettCaffeLatteMachine extends SweetCoffeeMaker, CaffeeLatteMachine{

  // }
  // Favor Composition over Inheritance
  // 필요한것들을 가져와서 조립하는 것을 composition이라고 한단다.
  // class SwettCaffeLatteMachine extends CoffeeMachine {
  //   constructor(
  //     private beans: number,
  //     //milk: CheapMilkSteamer -> milk:MilkFrother // sugar: CandySugarMixer-> sugar:
  //     private milk: MilkFrother,
  //     private sugar: SugarProvider
  //   ) {
  //     super(beans);
  //   }

  //   makeCoffee(shots: number): CoffeeCup {
  //     const coffee = super.makeCoffee(shots);
  //     const sugarAdded = this.sugar.addSugar(coffee);
  //     return this.milk.makeMilk(sugarAdded);
  //   }
  // }

  //
  //아래와 같이 하면 굉장히 재사용성이 낮게 됨, 라떼머신인데 서울우유만 사용가능하다는 뭐 그런것 ㅊ ㅓ럼
  // 그래서 클래스사이에서 상호작용을 하려할때는 interface(계약서)를 통해 소통하도록 만든다.
  //Milk🥛
  const cheapMilkSteamer = new CheapMilkSteamer();
  const fancyMilkMaker = new FancyMilkSteamer();
  const coldMilkMaker = new ColdMilkSteamer();
  const noMilk = new NoMilk();

  //Sugar 🙌🏻
  const candySugar = new CandySugarMixer();
  const sugar = new SugarMixer();
  const noSugar = new NoSugar();

  //동일한 클래스를 이용함에도 불구하고 다른 객체를 만들게 된다!!! SweetCoffeeMaker라는 객체를 재사용하고 있는 것.
  const sweetCandyMachine = new CoffeeMachine(12, noMilk, candySugar);
  const sweetMachine = new CoffeeMachine(12, noMilk, sugar);

  const latteMachine = new CoffeeMachine(12, cheapMilkSteamer, noSugar);
  const coldLatteMachine = new CoffeeMachine(12, coldMilkMaker, noSugar);
  const sweetLatteMachine = new CoffeeMachine(12, cheapMilkSteamer, candySugar);
}

//각각의 기능별로 따로 클래스를 만들어 필요할때마다 따로 가져다 쓰는 것이 Composition이다.
// 코드의 재사용성 상승상승,, 치명적 단점은 특정 기능 클래스에 대한 의존성이 심해지게 된다.
//
