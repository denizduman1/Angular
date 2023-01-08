var number = 5;
number = 'a';
var a;
a = 5;
a = 'a';
a = true;
var b;
b = 5;
b = 'b';
b = true;
var c;
c = true;
var d = "text";
var e = [1, 2, 3];
var g = [1, true, 'doğru'];
var h = ['a', 1, false]; //tuple
var krediPayment = 0;
var havalePayment = 1;
var eftPayment = 2;
var Payment;
(function (Payment) {
    Payment[Payment["krediPayment"] = 0] = "krediPayment";
    Payment[Payment["havalePayment"] = 1] = "havalePayment";
    Payment[Payment["eftPayment"] = 2] = "eftPayment";
})(Payment || (Payment = {}));
var kredi = Payment.krediPayment;
console.log(kredi);
