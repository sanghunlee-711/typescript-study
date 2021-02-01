{
  class TimeoutError extends Error {}
  class OfflineError extends Error {}

  class NetworkClient {
    tryConnect(): void {
      throw new Error("No NetWork!");
    }
  }

  class UserService {
    //client를 받아옴(dependency injection..)
    constructor(private client: NetworkClient) {}

    login() {
      this.client.tryConnect();
      //login...
    }
  }
  class App {
    constructor(private _userService: UserService) {}
    run() {
      try {
        this._userService.login();
      } catch (error) {
        //error는 any타입이므로 .. instanceof 키워드를 이용해서 구분하는 등의 행위를 못함 😭
        //따라서 세부적인 에러를 다루기위해서는 Error State를 사용하는 것이 좋다.
        console.log(`Check NetWork! ${error}`);
      }
    }
  }

  //에러가 발생했을때 멋지게 처리할 수 없다면 catch하지 않는 것이 났다고 본다..
  //에러처리는 무조건 의미가 있어야함 -> 우아해야함 :)
  //처리할 수 있는 곳에서 try catch를 쓰는 것이 맞음. ex login 함수에서 처리하는 것보다 app의 run함수에서 처리하는게 나을 것..

  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);
  app.run();
}
