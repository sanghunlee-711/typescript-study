1. 절차지향 vs 객체지향
   Imperative and Procedural Programming(절차지향)
   하나의 어플리케이션이 있다면 어플리케이션이 동작하기 위한 데이터와 함수들 위주로 구성하는 것을 말함
   ex) main 함수에서 play 와 startime을 호출할 수 있음
   그 다음 play내부에 load prepare와 같은 함수가 있음
   그 함수내부에서는 전역변수를 변경할 수 있게 됨

이러한 플로우의 지향을 절차지향이라 함

함수가 여러개 얽혀있고 사이드이펙트의 발생가능성 및 수정하기 및 유지보수, 확장의 문제가 있다.

객체지향
Object Oriented Programming
프로그램을 객체로 정의하여 객체들끼리 의사소통하고 연결되도록 만드는 것.

서로 관련된 데이터와 함수를 object로 만들어 그것들을 연결시키게 되는 것임.

-> 사람과 유사한 생각을 하면서 객체를 구성할 수 있게 된다고 한다.

만약 한곳에서 문제가 생긴다면 관련있는 객체만 건들면 되는 것과
객체의 재사용성 및 새롭게 필요한것이 있다면 객체를 다시만들면되는 등 생산성 향상과 높은 퀄리티의 프로그래밍을 가능하게 해주고 유지보수등의 시간절약 효율이 있다.

object의 속성을 가지고 있는데이터와 그것을 행동하게 할 수 있는 함수가 있다.
ex) MediaPlayer(Object) -> data: music -> function: play, stop ...

ex) Error, Exception, Event등도 Object로 관리가 된다.

Object내부에 있는 데이터들을 fields 라고 부르고 함수는 methods라고 부른다.

대개는 이런 Object를 class로 정의한다.

class는 데이터가 들어있지 않은 이렇게 생겨있다와 같은 개념의 template과 같다(붕어빵틀)

- declare once, no data in , template

이 class에 데이터를 넣어서 만드는 것이 object이다.

이 object는 class의 instance라고 한다.

- data in, created many times, instance of a class

class는 이것이 어떻게 생겼는지를 묘사한다.

---

ex)

class Student
name: string
score: number
study ()

ex)

lee extends of Student
name: 'sanghun'
score: 100
study()
...

---

2. 객체 지향의 원칙(4가지 원칙!)
   2-1. Encapsulation
   -> 캡슐화가 용이해야한다.(잘 되어져 있어야한다.)
   -> 절차지향에서는 데이터와 함수가 여러가지 섞여있게 됨
   -> 객체지향에서는 이렇게 분포된 데이터와 함수에서 연관된 것들을 하나의 object에 모아놓고 외부에 노출 될 것과 그렇지 않을 것을 구별하여 object를 만드는 것.
   ex)
   고양이에게 배고프고 화나게 만드는 것은 외부에서 컨트롤할 수 없는 것이다 (state)
   그런데 사람이 외부에서 play -> happy
   feed -> full
   로 외부에서 고양이의 state를 변경해줄 수 있다.
   2-2. Abstraction
   -> 추상성이 좋아야함
   -> 내부의 복잡한 기능을 모두 이해하지 않고도 외부에서 객체 내부의 기능을 모두 이해할 수 있게 되는것을 말함.
   2-3. Inheritance
   -> 상속을 통한 코드의 재사용성이 좋아야한다
   -> 예를들어 커피머신 클래스가 있고 거기에 필요한 데이터와 함수가 다 있다고하면 상속을 이용하여 더 필요한 기능을 더한 커피기기를 만들어 낼 수 있는것을 생각하면 된다.
   -> 상속을 통해서 한번 잘 정의된 클래스를 재사용할 수 있게 된다.
   -> parent/child , super/sub, base/derived
   -> IS-A관계라고도 말할 수 있다.
   -> class animal, make sound() method, 이 있고 이것을 상속한 고양이 강아지라면 고양이와 강아지는 모두 make sound()함수를 가지고 있게 된다.

   -> 브라우저의 DOM요소를 생각해보자
   -> HTMLElelment는 DOM의 Elemen를 상속 받음
   -> Element는 Node를 상속받음
   -> Node는 EventTarget을 상속받음
   그래서 HtmlElement는 parent들??? 메서드들을 사용할 수 있음

   2-4. Polymorphism
   -> 다형성을 이용해서 조금 더 멋지게 코드 치기
   -> 상속을 통해 받게 된 강아지 고양이를 신경쓰지 않고 어떤 상속받은 클래스이든 parent클래스의 공통된 함수를 통해서 접근을 가능한 것을 말한다.
