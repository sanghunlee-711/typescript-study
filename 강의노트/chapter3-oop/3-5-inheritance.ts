{
    //복잡한 로직을 외부에서 바라봤을 때에도 간단하게 보일 수 있도록 만드는 것
    
        type CoffeeCup = {
          shots: number;
          hasMilk: boolean;
        };
      
        //아래와 같이 interface를 이용하여 함수마다 정의를 해주면 추상화를 극대화 할 수 있다.
        interface CoffeeMaker{
          makeCoffee(shots: number): CoffeeCup;
        }
        
        class CoffeeMachine implements CoffeeMaker{
          private static BEANS_GRAMM_PER_SHOT: number = 7; //class level
          private coffeeBeans: number = 0; //instance(object) level
          
          //상속하는 자식들에게서는 접근가능한 방향 protected
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

        const machine = new CoffeeMachine(23);
        const latteMachine = new CaffeeLatteMachine(23, 'ssss');
        const coffee = latteMachine.makeCoffee(1);
        console.log(coffee);
        console.log(latteMachine.serialNumber);


      
      
}