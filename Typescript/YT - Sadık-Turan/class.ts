interface Point {
    x: number,
    y: number
}

interface Passenger {
    name: string,
    phone: string
}

interface Vehicle {
    currentLocation: Point;
    travelTo(point: Point): void;
    getDistance(pointA: Point, pointB: Point): number;
    addPassanger(passanger: Passenger): void;
    removePassanger(passanger: Passenger): void;
}

class Taxi implements Vehicle {
    
    currentLocation: Point;
    private gizliLocation: Point;

    constructor(location:Point) {
        this.currentLocation = location;
        this.gizliLocation = location;
        this.gizliLocation.x = 666;
    }

    travelTo(point: Point): void {
       console.log(`taksi x: ${point.x} y: ${point.y} konumuna gidiyor`);
       console.log(`taksi x: ${this.gizliLocation.x} y: ${this.gizliLocation.y} gizli konumuna gidiyor`);
    }
    getDistance(pointA: Point, pointB: Point): number {
        throw new Error("Method not implemented.");
    }
    addPassanger(passanger: Passenger): void {
        throw new Error("Method not implemented.");
    }
    removePassanger(passanger: Passenger): void {
        throw new Error("Method not implemented.");
    }
    setGizliLocation(value: Point){
        if(value.x < 0 || value.y < 0){
            throw new Error("0 dan küçük lokasyon olamaz");            
        }
        this.gizliLocation = value;
    }    
    get Location() {
        return this.gizliLocation;
    }
}

let taxi: Taxi;
let point: Point;

point = {
    x: 20,
    y: 99
}


taxi = new Taxi(point);

taxi.travelTo({x:1,y:2});
console.log(taxi.currentLocation);
//taxi.setGizliLocation({x:3,y:-1});
taxi.setGizliLocation({x:3,y:1});
let newPoint = taxi.Location;
console.log("method " + newPoint.x + " " + newPoint.y);

