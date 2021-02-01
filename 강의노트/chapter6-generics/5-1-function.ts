{
    function checkNotNullBad(arg: number | null):number{
        if( arg == null){
            throw new Error('Not valid number');
        }
        return arg;
    }

    //타입마다 다체크하기 불편
    const result = checkNotNullBad(123);
    console.log(result);
    checkNotNullBad(null);

    function checkNotNullAnyBad(arg:any | null):any {
        if( arg == null){
            throw new Error('Not valid number');
        }
        return arg;
    }
    //any쓰면 타입정보가 없어지므로 ㅇㅇ..

    const result2 = checkNotNullAnyBad(123);



    //아래와 같이 generic을 사용하면 받은 타입(코딩하는 시점에서) 리턴하는 타입이 정해지게 만들 수 있다.
    //유연하지만 타입이 보장되게 만드는 방법이다(컴파일시간, 즉 코드를 치는 시간에 타입이 배정되어 버린다.)
    function checkNotNull<T>(arg: T | null): T {
        if( arg == null){
            throw new Error('Not valid number');
        }
        return arg;
    }

    const number = checkNotNull(123);
    const boal: boolean = checkNotNull(true);
}