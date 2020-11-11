function add(n1: number, n2: number){

      // JS throws error on runtime while TS throws error on DEV time
      if(typeof n1 !== 'number' || typeof n2 !== 'number'){
            throw new Error('Format exception detected');
      }

      // Error on runtime
      // app.js:4 Uncaught Error: Format exception detected
      // at add (app.js:4)
      // at app.js:10

      return n1+n2;
}

const n1 = "10";
const n2 = 10.3;

const addval = add(n1, n2);
console.log(addval)