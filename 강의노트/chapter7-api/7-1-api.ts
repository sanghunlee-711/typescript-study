{
    Array;
    [1,2].map;

    type Student = {
        passed: boolean;
    }

    const students: Student[] = [{passed: true},{passed: true},{passed: true} ];
    //모든 학생들이 트루가 되어야 트루를 반환하고 아니면 false반환
    const result = students.every(student => {
        return student.passed;
    });

    console.log(result);

    class Animal {}

    class Cat extends Animal {
        isCat: boolean = true;
    }

    class Dog extends Animal {
        isDog: boolean = true;
    }

    const animals: Animal[] = [new Cat(), new Cat(), new Cat()];
    function isCat(animal: Animal): animal is Cat {
        return (animal as Cat).isCat !== undefined;
    }
    console.log(animals.every<Cat>(isCat));

    //오픈소스 프로젝트의 잘 작성된 코드를 열심히 보면  좋은 코드를 많이 볼 수 있다.
    //github의 마이크로소프트 vscode오픈소스의 구조나 코드 작성법을 보는것과 같이 관련 언어의 오픈소스 프로젝트를 보는것이 좋다.
}