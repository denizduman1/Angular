"use strict";
exports.__esModule = true;
exports.Student = exports.Eat = void 0;
var Eat = /** @class */ (function () {
    function Eat(food, drink) {
        this.food = food;
        this.drink = drink;
    }
    return Eat;
}());
exports.Eat = Eat;
var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.eat = function (eat) {
        console.log("".concat(eat.food, " yeme\u011Fi ").concat(eat.drink, " i\u00E7ece\u011Fi ile yenildi"));
    };
    Student.prototype.dersCalis = function () {
        console.log("Ders çalişildi");
    };
    return Student;
}());
exports.Student = Student;
