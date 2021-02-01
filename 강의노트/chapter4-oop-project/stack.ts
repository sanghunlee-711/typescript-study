//stack...
//no Array, Object??..
//Can use push and pop only
// {
//   interface StackInter {
//     stack: number[];
//   }

//   class Stack implements StackInter {
//     stack: number[] = [];

//     constructor(stack: number[]) {
//       this.stack = stack;
//     }

//     makeNewStack(stack: number[]): number[] {
//       this.stack = stack;
//       return this.stack;
//     }

//     pushStack(getArg: number): number[] {
//       this.stack.push(getArg);
//       let newStack = this.stack;
//       console.log(this.stack);

//       return newStack;
//     }

//     popStack(): number[] {
//       this.stack.pop();
//       let newStack = this.stack;
//       console.log(this.stack);
//       return newStack;
//     }
//   }

//   const newStack = new Stack([1, 2, 3, 4]);
//   newStack.pushStack(2);
//   newStack.pushStack(22);
//   newStack.pushStack(32);
//   newStack.popStack();
//   newStack.pushStack(77);
// }

{
  interface Stack {
    readonly size:number;
    pop():string;
    push(value:string):void;
  }

  type StackNode = {
    value: string,
    next: StackNode
  }

  class StackImple implements Stack{
    private _size:number = 0 ;
    private head: StackNode;

    get size(){
      return this._size;
    }

    pop():string{
      return ''
    }

    push(value:string):void{
      const node: StackNode = {value , next: this.head}
      

    }

  }
}