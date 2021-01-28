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
  
    interface CoffeeMaker{
      makeCoffee(shots: number): CoffeeCup;
    }
    
    class CoffeeMachine implements CoffeeMaker{
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
      clean(){
        console.log("Cleaning the machine!");
      }
  
      private grindBeans(shots:number){
        console.log(`grinding beans for ${shots}`);
        if(this.coffeeBeans < shots*CoffeeMachine.BEANS_GRAMM_PER_SHOT){
            throw new Error('Not enough coffee beans!');
        }
        this.coffeeBeans -= shots* CoffeeMachine.BEANS_GRAMM_PER_SHOT;
      }
       private preheat(): void{
        console.log("heating up!")
      }

      private extract(shots: number): CoffeeCup{
          console.log(`Pulling ${shots} shots ....`)
          return {
              shots,
              hasMilk: false,
          };
      }
      makeCoffee(shots: number): CoffeeCup {
        this.grindBeans(shots);
        this.preheat();
        return this.extract(shots);
      }
    }
//  싸구려 우유 거품기
    class  CheapMilkSteamer{
        private steamMilk():void{
            console.log("Steaming Some Milk🥛");
        }
        makeMilk(cup:CoffeeCup):CoffeeCup{
            this.steamMilk();
            return{
                ...cup,
                hasMilk:true,
            }
        }
    }

    //설탕 제조기
    class AuthomaticSugarMixer {
        private getSugar():boolean{
            console.log("Getting Some Sugar From jar");
            return true;
        }

        addSugar(cup: CoffeeCup): CoffeeCup{
            const sugar = this.getSugar();
            return {
                ...cup,
                hasSugar: sugar,
            };
        }
    }

    class CaffeeLatteMachine extends CoffeeMachine {
        //dependency injection 외부에서 필요한 로직을 받아오는 것
      constructor(beans:number, public readonly serialNumber: string, private milkFrother: CheapMilkSteamer){
        super(beans);  
      }

        makeCoffee(shots: number): CoffeeCup{
          const coffee = super.makeCoffee(shots);
        return this.milkFrother.makeMilk(coffee);
        }
    }

    class SweetCoffeeMaker extends CoffeeMachine {
        constructor(beans: number, private sugar: AuthomaticSugarMixer){
            super(beans);
        };

        //대신 suagar:AuthomaticSugarMixer 를 통해서 getsugar와 유사한 로직 사용
        // getSugar(){
        //     console.log("Getting Some Sugar");
        // }
        makeCoffee(shots: number): CoffeeCup{
            const coffee = super.makeCoffee(shots);
            return this.sugar.addSugar(coffee);
        }
    }

    //불가능..
    // class SwettCaffeLatteMachine extends SweetCoffeeMaker, CaffeeLatteMachine{

    // }
    //Favor Composition over Inheritance
    //필요한것들을 가져와서 조립하는 것을 composition이라고 한단다.
    class SwettCaffeLatteMachine extends CoffeeMachine{
        constructor(private beans:number, private milk: CheapMilkSteamer, private sugar: AuthomaticSugarMixer){
            super(beans);
        }

        makeCoffee(shots: number):CoffeeCup{
            const coffee = super.makeCoffee(shots);
            const sugarAdded = this.sugar.addSugar(coffee)
            return this.milk.makeMilk(sugarAdded);
        }
    }


    const machines: CoffeeMaker[] = [
    new CoffeeMachine(16),
    new CaffeeLatteMachine(16, '1'),
    new SweetCoffeeMaker(16),
    new CoffeeMachine(16),
    new CaffeeLatteMachine(16, '1'),
    new SweetCoffeeMaker(16),
    new CoffeeMachine(16),
    new CaffeeLatteMachine(16, '1'),
    new SweetCoffeeMaker(16),
    ];
    machines.forEach(machine1 =>{
        console.log("------------------------");
        machine1.makeCoffee(1);
    })
}

//각각의 기능별로 따로 클래스를 만들어 필요할때마다 따로 가져다 쓰는 것이 Composition이다.
// 코드의 재사용성 상승상승,, 치명적 단점은 특정 기능 클래스에 대한 의존성이 심해지게 된다.
//