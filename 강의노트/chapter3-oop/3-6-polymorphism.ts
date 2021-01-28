{
    
        type CoffeeCup = {
          shots: number;
          hasMilk?: boolean;
          //me
          sugar?: number;
          //ellie
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
        //interface사용 시 implements
        // 클래스 상속시 extends
        class CaffeeLatteMachine extends CoffeeMachine {
          //CoffeeMachine이 private이면 상속이 안됨
            //2분 55 초
            //자식 클래스에서 부모 클래스에 있는 함수를 덮어쓸 수 있다(overwriting)
          constructor(beans:number, public readonly serialNumber: string){
            super(beans);  
          }
            private steamMilk(): void{
              console.log("Steaming some milk!!")
            }
            makeCoffee(shots: number): CoffeeCup{
              const coffee = super.makeCoffee(shots);
              this.steamMilk();
              return{
                //아래와 같이 하면 부모에서 하는 모든행동을 들고 오면서 (공통적 기능 그대로 재사용)
                //자식 클래스에서만 특화된 기능을 쓸 수 있다. this.steamMilk()...
                //SUPER라는 것을 이용해 부모 클래스에서 사용하는 것을 사용할 수 있다.
                ...coffee,
                hasMilk: true
              }
            }
        }

        //LEE
        //설탕 들어가는 머신, 커피컵에 설탕을 추가해주는 클래스!
        class SweetCoffeeMakerme extends CoffeeMachine{
            sugar?:number;
            constructor(beans: number, sugar?:number){
                //확장 받으려 하는 클래스의 constructor의 내부를 가져오기 위해서 super가 필요
                super(beans);
                sugar = 0;
            }
             addSugar(sugar:number):void{
                this.sugar += sugar
            }
            makeCoffee(shots:number): CoffeeCup{
                const coffee = super.makeCoffee(shots);
                return{
                    ...coffee,
                    sugar: this.sugar
                }
            }
        }
        const addSweet = new SweetCoffeeMakerme(2);
        const addSugar = addSweet.addSugar(4);
        console.log(addSugar);
        //

        //Ellie
        //다형성을 이용하여 한가지의 클래스를 통해 다양한 클래스를 생성할 수 있게 됨
        class SweetCoffeeMaker extends CoffeeMachine {
            makeCoffee(shots: number): CoffeeCup{
                const coffee = super.makeCoffee(shots);
                return{
                    ...coffee,
                    hasSugar: true,
                }
            }
        }

        //다형성의 장점은 내부적으로 구현된 다양한 클래스들이 
        //한가지 인터페이스를 구현하거나 동일한 부모 클래스 상속 시 
        //동일한 함수를 어떤클래스인지 구분하지 않고 공통된 api를 호출할 수 있다는 것이 큰 장점이다.
        //CoffeeMaker[] = CoffeeMachine[] 이다?
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
