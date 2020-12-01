// A generic type is a type, which is connected with some other types & flexible to other type

function merge<T, U extends object>(n: T, n1: U) {
  return Object.assign(n, n1);
}

console.log(merge({name: 'Soham', tecs:['React', 'TS']}, {role: 'Dev'}));

// console.log(merge<string, number>('Dev', 796394)); // in this case 796394 is not assigned: this is where TYPE CONSTRAINS[U extends object] comes to play
// ReplaceMent
console.log(merge('Dev', {name:'Soham'}));


// Generic Function with CUSTOM TYPE:
interface Lengther {
  length: number
}

function getCountMachine<T extends Lengther>(element: T): [T, string] {
  let description= '';
  if(element.length === 0 ){
    description = 'No Element Found';
  } else if(element.length === 1){
    description = `Entry has 1 Element`;
  } else if(element.length > 1) {
    description = `Entry has ${element.length} Elements`;
  }

  return [element, description];
}

console.log(getCountMachine('React'));
console.log(getCountMachine(['React', 'TypeScript']));
console.log(getCountMachine([]));
console.log(getCountMachine(['React']));

// Use of KEYOF in TS

// case - 1 : ERROR at obj[str] as TS doest guarantee if the obj has the str property 
// function keyOfObject(obj: object, str: string){
//    console.log(obj[str])
// }

// case - 2 :
function keyOfObject<T extends object, U extends keyof T>(obj: T, str: U){
   console.log(obj[str])
}

// keyOfObject({}, 'name'); // ERROR
keyOfObject({name: 'Soham'}, 'name');