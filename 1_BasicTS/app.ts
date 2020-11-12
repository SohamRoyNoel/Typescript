// default enum starts with 0
enum role {'DEV', 'SUPPORT', 'QA', 'PO'};
// you can assign enum value to anything, it will be counted from there
enum role1 {'DEV'=6, 'SUPPORT', 'QA', 'PO'}

const person : {
      "name": String;
      "age": number;
      "languages": string[],
      "efficiency":[string, number ], // Tuple: store a collection of values of varied types
      "role": number
} = {
      name: "Soham",
      age: 23,
      languages: ["TS", "JS", "React", "Node"],
      efficiency: ['TS', 1],
      role: role1.PO
}


console.log(person.role);




