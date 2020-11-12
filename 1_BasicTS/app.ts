// Type Aliases: combine multiple data type under same hood

type CombineType = number | string;

function add(n1: CombineType, n2: CombineType){

      let res;

      if(typeof n1 === 'number' && typeof n2 === 'number'){
            res = n1 + n2;
      } else {
            res = n1.toString() + n2.toString();
      }

      return res;
}

console.log(add(10,20));

console.log(add('10','20'));









