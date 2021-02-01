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


type StackNode = {
  //불변성을 위해서 readonly를 사용
  readonly value: string;
  //다음 스택 노드 가리키거나 안 가리킴을 나타내느 용도의 next
  // next: StackNode | undefined;
  readonly next?: StackNode;
}

//인터페이스의 규격에 맞게 구현하는 것.
class StackImpl implements Stack {
  //readonly쓰면 내부에서도 size를 바꿀수 없음 그래서 getter를 통해서 읽기만 가능하게 만들고 내부에서는 변경가능하게 사용한다.
  private _size: number = 0;
  //this.head는 stacknode를 가질수도 있고 아닐 수도 있기 때문 ?? 뭔 ..
  private head?: StackNode;
  //동일한 이름의 public변수 사용시 _를 이용해준다.
  
  constructor(private capacity: number){

  }
  
  get size() {
    return this._size;
  }


  push(value:string): void{
    if(this.size === this.capacity){
      throw new Error("Stack is Full");
    }

    const node: StackNode = {value, next: this.head};
    this.head = node;
    this._size++;

  };

  pop():string{
    //head가 undefined이거나 null일수 있음
    if(this.head == null){
      // null == undefined 가 true를 뜨는것을 이용하게 되는 것
       throw new Error("Stack is Empty!")
    }

    const node: StackNode = this.head;
    this.head = node.next;
     this._size--;
     return node.value;
  };
}

const stack = new StackImpl(10);
stack.push('ellie 1');
stack.push('ellie 2');
stack.push('deele 3');

console.log(stack.pop());

// while(stack.size != 0){
//   console.log(stack.pop());
// }

//   class Node {
//     constructor(readonly size:number){
//     }
//   }
// }


// const node = new Node();

// class Stack implements Stack {

//   get node(): Stack{
//     return new Stack();
//   }

//   push(value: string): void{

//   };

//   pop(): string{
//     return '';
//   };

}
