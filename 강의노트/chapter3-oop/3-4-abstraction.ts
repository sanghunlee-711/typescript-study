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
        
        interface CommercialCoffeeMaker{
          makeCoffee(shots:number): CoffeeCup;
          fillCoffeeBeans(beans: number): void;
          clean(): void;
        }

        class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker{
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
      
        const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
        //추상화는 인터페이스를 간단하고 심플하게 만들어 줌으로서 많은사람들이 간단하게 사용할 수 있게 도와준다.
        //원래는 girndBeans나 preheat함수가 포함되나 private을 통해 은닉시켜 타인이 사용할때는 두가지 함수만 사용하게 함으로서 간단하게 만들 수 있다.
        // 언어에 따라 할 수 있는 방법과 수단이 다르나 encapsulation(제어자들을 사용한 것 Private, protected같은거)으로 그 의미를 나타낼 수 있기도 함 ?
        maker.makeCoffee(2);
        maker.fillCoffeeBeans(32);
        const maker2: CoffeeMaker = CoffeeMachine.makeMachine(32);
        maker2.makeCoffee(2)
        // maker2.fillCoffeeBeans(32);// 인터페이스에 포함되지 않는 함수이기에 제약이 생기고 실행이 불가능함.


        const maker3: CommercialCoffeeMaker = CoffeeMachine.makeMachine(32);
        maker3.makeCoffee(2)
        maker3.fillCoffeeBeans(32);// 인터페이스에 포함되지 않는 함수이기에 제약이 생기고 실행이 불가능함.
        maker3.clean();
        // 위와같이 인터페이스를 통해 사용할 수 있는 함수등의 제약을 걸수가 있다.
      
      class AmateurUser {
        constructor(private machine: CoffeeMaker){

        }
        makeCoffee(){
          const coffee = this.machine.makeCoffee(2);
          console.log(coffee);
        }
      }

      class ProBarista {
        constructor(private machine: CommercialCoffeeMaker){

        }
        makeCoffee(){
          const coffee = this.machine.makeCoffee(2);
          console.log(coffee)
          this.machine.fillCoffeeBeans(45);
          this.machine.clean();
        }
      }
      //동일한 object의 인스턴스라 할지라도 아마추어와 프로는 커피메이커를 생성자에서 받아오고 커머셜 커피 인터페이스를 받아와서
      // 인터페이스에서 정의된 함수만 쓸 수 있다.
      // 그래서 아마추어와 프로는 인터페이스에서 규약된 함수만 사용가능하므로 사용하는 사용자들은 클래스에 규약된 복잡한 로직을 알필요 없이 필요한 것만 사용하면 된다.
      const maker4: CoffeeMachine = CoffeeMachine.makeMachine(32);
      const amateur = new AmateurUser(maker4);
      const pro = new ProBarista(maker4);
      amateur.makeCoffee();
      console.log("amateur",amateur);
      
}