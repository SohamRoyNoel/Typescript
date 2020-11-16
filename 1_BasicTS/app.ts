// Unknown type: grants any type of values
let x : unknown;

x = 10;
x = 'Random String';

// lets see the difference between any and unknown
// Assigning an unknown type to a string
let y : string;

//y = x; // Boom- Error(any will allow this, unknown doesnt; Thats why unknown has a little type check but any doesnt have that)

// we need an additional check to prevent this
if( typeof x === 'string'){
      y = x // Now TS is happy
}



