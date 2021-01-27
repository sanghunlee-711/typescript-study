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
          

          private constructor(coffeeBeans: number) {
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
            //2분 55 초
        }



      
      
}