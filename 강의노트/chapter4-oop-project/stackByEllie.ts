{
  interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
  }

  //ME
  //array[]를 사용하지 않아야 하면 자료구조 연결리스트(linked list)를 사용하면 된다.
  //각 노드별로 칸을 만들고 각 리스트가 서로 연결되어 있게 만들면 된다.
  //head -> 1->2->3 헤드가 첫번째를 가리키고 한방향이면 단방향 연결리스트 양방향은 양방향 ㅇㅇ
  //Head가 처음에는 첫번째를 가리키다가 2번째가 들어오면 2번째는 1번째를 가리키고 헤드는 2번째를 가리키게 된다.
  // pop을 하게 되면 head가 가리키던 두번째 노드가 아닌 첫번째 노드를 가리키게 하면 된다. -> 그러면 2는 자연스럽게 무시가된다?

  class Node {
    size: number;

    constructor(size: number) {
      this.size = size;
    }

    push(value: string): void {}
    pop(): string {
      return "";
    }
  }
}
