{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  //정보 은닉을 위한
  //public 따로 기재하지 않으면 public이 된다.(외부에서 접근 가능 및 공개적)
  //private (외부에서 접근 불가, 보이지 않음)
  //protected (상속 시 외부에서는 접근 불가능 하나 클래스를 상속받은 자식클래스에서만 접근 가능한 것.)

  class CoffeeMaker {
    //관련있는데이터나 함수들을 한곳에 묵는 것, 청사진(template을 만드는 기능도!)
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    // 클래스에서 한번 정의되고 계속 공유가 되게 된다. 그러니까 메모리 낭비가 됨
    // 그래서 static 키워드를 써서 class level로 사용이 가능하다
    //클래스 레밸이라는 것은 오브젝트(인스턴스) 마다 생성되지 않는다.
    // static 안붙이면 인스턴스 or object레벨이 된다.
    // static변수의 사용을 위해서는 클래스명.변수명
    // 함수에서도 적용이 가능하다.

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
      //class를 가지고 instance를 만들 때 항상 호출되는 함수가 constructor
    }

    //makeMachine과 같이 새로운 인스턴스를 반환해주는 함수를 가지고 있을 경우 constructor를 남발하여 새로운 인스턴스를 생성하지 못하도록 private으로 만들어주고
    //makeMachine과 같은 함수를 사용하도록 유도해야한다.
    static makeMachine(coffeeBeans: number): CoffeeMaker {
      // 이 함수는 클래스내부의 어떠한 속성값도 필요하지 않기 때문에 static을 붙이고 큻래스 내부의 것들을 공유하지 않아도 됨
      return new CoffeeMaker(coffeeBeans);
    }

    //외부에서 public인 fillCoffeeBeans를 통해서 내부의 상태인 beans를 변경할 수 있도록 만들어 놓았다.
    // 이렇게 함으로서 전달받는 인자의 안정성 검사를 통해서 내부 state를 변경하기에 안전해진다.
    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("Value for Beans shold be greater than 0 !");
      }
      this.coffeeBeans += beans;
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

  // const maker = new CoffeeMaker(32); // coffeemaker의 인스턴스 생성 -> constructor가 private이므로 다른 방법으로 유도
  const maker = CoffeeMaker.makeMachine(32);
  // maker.coffeeBeans = 3; // 이렇게 외부에서 설정을 할때 비정상적인 설정도 가능하게 접근이 되어버린다.
  // maker.coffeeBeans = 34; // 이렇게 외부에서 설정을 할때 비정상적인(유효하지 않은) 설정도 가능하게 접근이 되어버린다.
  maker.fillCoffeeBeans(32);

  //Getter, Setter
  class User {
    // fullName: string;

    //  함수가 아니라 접근할 때 함수가 아니라 변수인 것 처럼 접근하면 됨.
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }

    private internalAge = 4;

    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      if (num < 0) {
        throw new Error("Age should be greater than 0 !");
      }
      this.internalAge = num;
    }
    //아래와 같이 하면 User클래스에서 변수 타입을 지정해주고 나중에 this.firstName으로 셋팅하는 것을 한번에 해줄 수 있음.
    constructor(private firstName: string, public lastName: string) {
      //변수를 바로 접근한ㄴ 것이 아니라 get을 이용해서 호출해주어야 변경이 계속 됨?
      // this.fullName = `${firstName} ${lastName}`;
    }
  }

  const user = new User("Steve", "Jobs");
  console.log(user.fullName);
  //변경해주어도 한번 할당 된 뒤 변경이 되지 않기에 Steve Jobs만 두번 나오게 됨.
  user.age = 6;
  console.log(user.fullName);
}

//캡슐화는 클래스 생성 시 외부에서 볼 수 있어야하는 데이터와 외부에 노출하면 안될 것을 구별하는 것이다.
