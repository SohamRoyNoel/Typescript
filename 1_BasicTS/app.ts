
// In TS we dont need to specify return type explicitly, TS inference does it for us
function add(n1: number, n2:number) : number{
      return n1+n2;
}

// Void and Undefined type :: void means no return type
function printer(num:number) : void{
      console.log(num);
}

function printer1(num:number) : undefined{
      console.log(num);
      return;
}


printer(add(10, 15));

console.log(printer(add(10, 15))); // void

console.log(printer1(add(10, 15))); // undefined