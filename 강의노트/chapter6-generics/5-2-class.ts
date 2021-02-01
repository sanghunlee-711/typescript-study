//either: a or b

interface Either<LEFT, RIGHT> {
    left: () => LEFT;
    right: () => RIGHT;
}

//보통은 L, R, V(value), I(item) 등으로 줄여쓴다, 나는 이해를 위해 길게 써보자
class SimpleEither<LEFT, RIGHT> implements Either<LEFT, RIGHT> {
    constructor(private leftValue: LEFT, private rightValue: RIGHT){

    }

    left(): LEFT{
        return this.leftValue;
    }

    right(): RIGHT{
        return this.rightValue
    }
}

const either: Either<number, number> = new SimpleEither(2,4);
either.left(); //2 
either.right(); //4
const best = new SimpleEither({name: 'ellie'},'Hello');