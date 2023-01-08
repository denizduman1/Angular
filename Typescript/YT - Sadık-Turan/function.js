function getAverage(a, b, c) {
    var total = a + b;
    if (typeof c !== 'undefined') {
        total += c;
    }
    return 'Result is ' + total;
}
var x = getAverage(1, 2, 3).toUpperCase();
var y = getAverage(1, 2).toLowerCase();
console.log(x);
console.log(y);
function getAverage2() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    var total = 0;
    for (var i = 0; i < a.length; i++) {
        total += a[i];
    }
    return 'Result is ' + total;
}
var a = getAverage2(1, 2, 3).toUpperCase();
var b = getAverage2(1, 2).toLowerCase();
console.log(a);
console.log(b);
var topla = function () {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    a.forEach(function (item) {
        console.log(item);
    });
};
topla(28, 52, 34, 67);
