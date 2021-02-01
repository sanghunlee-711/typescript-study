{
  //Union Type: OR로 이해해보자
  type Direction = "left" | "right" | "up" | "down";
  // -> Direction은 총 네가지만 가능

  function move(direction: Direction) {
    console.log(direction);
  }
  move("right");

  //이렇게 몇가지만 가능한 케이스를 정해주는 것을 위해서 union 타입을 사용하는 것

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 8;

  //발생할 수 있는 케이스중 정의한 것만 사용하기 위해서 Unio Type을 이용한다

  //function: login -> success, fail

  //My Trial
  //  type LoginStatus = "success" | "Fail";

  // function loginCheck(status: string): Promise<LoginStatus> {
  //   fetch("", {}).then((res) => {
  //     if (res.status === 200) {
  //       return "success";
  //     } else if (res.status === 500) {
  //       return "Fail";
  //     }
  //   });
  // }

  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };
  type LoginState = SuccessState | FailState;

  function login(id: string, password: string): LoginState {
    return {
      response: {
        body: "logged in!",
      },
    };
  }

  //printLoginState(state)
  //success -> 성공하면 성공한 res.body,
  //fail -> 실패하면 실패 reason

  function printLoginState(state: LoginState): void {
    //타입에 따라 조건문 걸기가 가능한가 ??..
    if ("response" in state) {
      //response라는 key가 obj안에 있다면 이라는 가정으로 접근이 가능함
      // 코드 작성시에는 LoginState가 어떤타입을 가지게 될지 모르기 때문이다.
      console.log(`Success ${state.response.body}`);
    } else {
      console.log(`Fail ${state.reason}`);
    }
  }
  //위 방식은 별로 추천되지 않음 ..
  //discriminatedUnion을 사용하자
}


{
  type Animal = 'cat' | 'dog' | 'bird'
  
  function whatAnimal(arg: Animal): Animal{
    console.log(arg);
    return arg
  }

  whatAnimal("")
}