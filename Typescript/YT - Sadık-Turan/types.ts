let number = 5;
number = 'a';

let a;

a = 5;
a = 'a';
a = true;

let b:number;

b = 5;
b = 'b';
b= true;


let c: boolean;
c = true;

let d: string = "text";

let e: number[] = [1,2,3];

let g: any[] = [1,true,'doğru'];

let h: [string,number,boolean] = ['a',1,false]; //tuple


const krediPayment = 0;
const havalePayment = 1;
const eftPayment = 2;

enum Payment {krediPayment, havalePayment=10, eftPayment}

let kredi = Payment.krediPayment;

console.log(kredi);






