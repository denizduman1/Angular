function getAverage(a:number,b:number,c?:number) : string {
    let total = a+b;

    if(typeof c !== 'undefined'){
        total += c; 
    }
    return 'Result is ' + total;
}

const x = getAverage(1,2,3).toUpperCase();
const y = getAverage(1,2).toLowerCase();
console.log(x);
console.log(y);


function getAverage2(...a: number[]) : string {
    let total = 0;

    for (let i = 0; i < a.length; i++) {
        total += a[i];        
    }

    return 'Result is ' + total;
}

const a = getAverage2(1,2,3).toUpperCase();
const b = getAverage2(1,2).toLowerCase();
console.log(a);
console.log(b);


const topla = (...a : number[]) : void => {
   a.forEach(item => {
       console.log(item);
   });
}

topla(28,52,34,67);


