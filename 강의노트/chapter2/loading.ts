{
  type LoadingState = {
    state: "loading";
  };

  type SuccessState = {
    state: "success";
    response: {
      body: string;
    };
  };
  type FailState = {
    state: "fail";
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  function printLoginState(status: ResourceLoadState): string {
    if (status.state === "loading") {
      console.log(status.state);
      return status.state;
    } else if (status.state === "success") {
      console.log(status.response.body);

      return status.response.body;
    } else if (status.state === "fail") {
      console.log(`${status.reason}!`);

      return `${status.reason}!`;
    }
  }

  //Ellies
  function printLoginState2(state: ResourceLoadState) {
    switch (state.state) {
      case "loading":
        console.log("loading...");
        break;
      case "success":
        console.log(`SMile${state.response.body}`);
        break;
      case "fail":
        console.log(`scream ${state.reason}`);
        break;
      default:
        throw new Error(`unknown state ${state}`);
    }
  }

  printLoginState({ state: "loading" }); // Loading...
  printLoginState({ state: "success", response: { body: "loaded" } }); // loaded...
  printLoginState({ state: "fail", reason: "No NetWork" }); // No NetWork!...
}
