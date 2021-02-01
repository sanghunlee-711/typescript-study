
//제네릭에 조건을 주는 방법을 알아보자!
interface Employee {
    pay(): void;

}

class FullTimeEmployee implements Employee { 
    pay(){
        console.log(`full time!`);
    }
    workFullTime(){

    }
}

class PartTimeEmployee implements Employee {
    pay(){
        console.log(`part time!`);

    }
    workPartTime(){

    }
}

//세부적인 타입을 받아서 추상적인 타입으로 다시 리턴하는 함수는 똥이다.
function payBad(employee: Employee): Employee {
    //월급을 주고 동일한 employee를 리턴!
    employee.pay();
    return employee;
}

// function pay(employee:<E>):<E> {
//     returun employee;
// }

//아래와 같이 generic을 쓰면 pay함수를 못받음
// function pay<T>(employee:T): T{
//     employee.
//     return employee;
// }

function pay<T extends Employee> (employee: T):T{
    employee.pay();
    return employee;
}

const sample1 = new FullTimeEmployee();
const sample2 = new PartTimeEmployee();

//이렇게 하면 세부 클래스의 정보를 잃어버리게 된다..
// as를 쓰면 강제로 할당이 가능하나 추천가능하지 않은 방법이다.
const sample1AfterPay = payBad(sample1);
const sample2AfterPay = payBad(sample2);

const sample2Af = pay(sample2);

const obj1 = {
    name: 'lee',
    age: 20,
    check: true
};

function getValue<T,S>(arg:T, title:string): S{
    return arg[`${title}`]
}

//T[K] 와 같이 value를 타입으로 만들 수 있음음.
function getValueByEllie<T, K extends keyof T>(obj:T, key: K): T[K] {
    return obj[key]
}

console.log(getValue(obj1, 'name')); // lee
console.log(getValueByEllie(obj1, 'check')); // lee

console.log(getValue(obj1, 'age')) // 20