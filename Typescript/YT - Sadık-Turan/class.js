var Taxi = /** @class */ (function () {
    function Taxi(location) {
        this.currentLocation = location;
        this.gizliLocation = location;
        this.gizliLocation.x = 666;
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("taksi x: ".concat(point.x, " y: ").concat(point.y, " konumuna gidiyor"));
        console.log("taksi x: ".concat(this.gizliLocation.x, " y: ").concat(this.gizliLocation.y, " gizli konumuna gidiyor"));
    };
    Taxi.prototype.getDistance = function (pointA, pointB) {
        throw new Error("Method not implemented.");
    };
    Taxi.prototype.addPassanger = function (passanger) {
        throw new Error("Method not implemented.");
    };
    Taxi.prototype.removePassanger = function (passanger) {
        throw new Error("Method not implemented.");
    };
    Taxi.prototype.setGizliLocation = function (value) {
        if (value.x < 0 || value.y < 0) {
            throw new Error("0 dan küçük lokasyon olamaz");
        }
        this.gizliLocation = value;
    };
    Object.defineProperty(Taxi.prototype, "Location", {
        get: function () {
            return this.gizliLocation;
        },
        enumerable: false,
        configurable: true
    });
    return Taxi;
}());
var taxi;
var point;
point = {
    x: 20,
    y: 99
};
taxi = new Taxi(point);
taxi.travelTo({ x: 1, y: 2 });
console.log(taxi.currentLocation);
//taxi.setGizliLocation({x:3,y:-1});
taxi.setGizliLocation({ x: 3, y: 1 });
var newPoint = taxi.Location;
console.log("method " + newPoint.x + " " + newPoint.y);
