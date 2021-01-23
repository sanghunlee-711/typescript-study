{
  //이렇게하면 각 유니온끼리 동일한 키값을 가지고 있지만 그 키내에 다른 값을 가지고 있기에 차별이 가능함
  type SuccessState = {
    result: "success";
    response: {
      body: string;
    };
  };
  type FailState = {
    result: "fail";
    reason: string;
  };
  type LoginState = SuccessState | FailState;

  function login(id: string, password: string): LoginState {
    return {
      result: "success",
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
    if (state.result === "success") {
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
