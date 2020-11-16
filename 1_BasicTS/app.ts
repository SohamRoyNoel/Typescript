// In TS we dont need to specify return type explicitly, TS inference does it for us
function add(n1: number, n2:number, cb:(res: number) => void){
      var x = n1+n2;
      cb(x);
}

console.log(add(8, 10, (resp)=>{
      console.log(resp);
      return resp; // it doesnt bother bcz its a callback, it checks the type only
}))


