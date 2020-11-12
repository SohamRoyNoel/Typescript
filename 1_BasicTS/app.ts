const person : {
      "name": String;
      "age": number;
      "languages": string[],
      "efficiency":[string, number ] // Tuple: store a collection of values of varied types
} = {
      name: "Soham",
      age: 23,
      languages: ["TS", "JS", "React", "Node"],
      efficiency: ['TS', 1]
}

// Push is exception case that allows both string or number-as it is defined as
// "efficiency":[string, number ], other types like boolean will be error
person.efficiency.push('JS'); 

// Atleast it is throwing exception if we assign wrong type
person.efficiency[0] = 10;

