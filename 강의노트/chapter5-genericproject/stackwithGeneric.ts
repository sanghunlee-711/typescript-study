{
    interface Stack<T> {
        readonly size: number;
        pop():T;
        push(value: T):void;

    }

    type StackNode<T> = {
        value: T,
        next: StackNode<T>
    }

    class StackImpl<T> implements Stack<T>{
        private _size: number = 0;
        private head: StackNode<T>;

        constructor(private capacity: number){

        }

        get size(){
            return this._size;
        }

        push(value:T):void{
            if(this.capacity < this.size){
                throw new Error("Stack is Full!")
            }
            // const node:StackNode<T> = {value, next: this.head};
            //ellie do 타입추론 활용
            const node = {value, next: this.head};

            this.head = node;            
            this._size++;
        }
        

        pop():T{
            if(this.head == null){
                throw new Error("Stack is Empty")
            }

            const node: StackNode<T> = this.head;
            this.head = node.next;
            this._size--;
            return node.value;
        };

    }

    //아래와 같이 타입 알려줘야함
    const stack = new StackImpl<string>(10);
    stack.push('ellie 1');
    stack.push('ellie 2');
    stack.push('deele 3');

    console.log(stack.pop());


    const stack2 = new StackImpl<number>(10);
    stack2.push(1);
    stack2.push(2);
    stack2.push(3);

    console.log(stack2.pop());
}