export class Eat{
    constructor(food: string, drink: string) {
        this.food = food;
        this.drink = drink;
    }
    food: string;
    drink: string;
}

interface Person {
    eat(eat:Eat):void;
}

export class Student implements Person{
    eat(eat: Eat): void {
        console.log(`${eat.food} yemeği ${eat.drink} içeceği ile yenildi`);
    }
    dersCalis(): void {
        console.log("Ders çalişildi");
    }
}