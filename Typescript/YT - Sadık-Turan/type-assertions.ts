let message;

message = 'Hello World';

let count = (message as string).length;
let count_2 = (<string>message).length;


console.log(count);


