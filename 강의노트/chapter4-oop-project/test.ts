{
    interface Stack<T> {
       readonly size: number;
       push(value: T):void;
       pop():T
    }

    type NodeStack<T> = {
        next: NodeStack<T>,
        vlaue: T
    }

    class StackImpl<T> implements Stack<T> {
        private _size: number = 0;
        private head: NodeStack<T>

        get size(){
            return this._size;
        }

        push(value: T): void {
            //새로운 노드 샘플은 들어온 값을 가진 value와 이전것을 가리키고 있는 next키 값 쌍을 가짐
            const nodeSample: NodeStack<T> = {vlaue: value, next: this.head};
            //이제 헤드가 가리키는것은 새로운 노드샘플이됨.
            this.head = nodeSample;
            //사이즈 업!
            this._size++;
        };

        pop():T{
            //head가 가리키는 것을 샘플로 받아옴(node)

            const nodeSample: NodeStack<T> = this.head;
            //what the..
            //head가 가리키는 것을 그 전의 것으로 바꾸어줌
            this.head = nodeSample.next;

            //사이즈 변경!
            this._size--; 
            //기존 가리키던것의 값을 반환함!
            return  nodeSample.vlaue;
        }
    }   

}