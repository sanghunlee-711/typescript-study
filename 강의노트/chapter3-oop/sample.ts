{
    interface Ground {
        makeSound(): void;
    }
    interface Fly{
        makeSound(): void;
        fly(name: string): void;
    }

    class Animal implements Ground, Fly{ 
        private name: string;

        private constructor(name: string){
            this.name = name;
        }

        //클래스 레벨에서의 사용을 위한 static 사용
        static newAnimal(name: string): Animal{    
            return new Animal(name)
        }

        makeSound(){
            console.log("HEllo")
        }

        fly(name: string){
            console.log(`fly ${name}`)
        }
    }

    const cat:Ground = Animal.newAnimal("cat");
    cat.makeSound();
    
    const bird: Fly = Animal.newAnimal('새새');
    bird.makeSound();
    bird.fly('새새')
}
