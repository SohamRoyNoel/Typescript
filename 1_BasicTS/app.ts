const person : {
      "name": String;
      "age": number;
      "languages": string[]
} = {
      name: "Soham",
      age: 23,
      languages: ["TS", "JS", "React", "Node"]
}

for(const lng of person.languages){
      console.log(lng.toLowerCase()); // every string function is working bcz TS knows this array is gonna be string
}

let arr : number[];
arr = [1 , 2 , 3, 'Js']; // TS error

console.warn(arr);

let arr1 : any[];
arr1 = [1 , 2 , 3, 'Js']; // TS error is gone as "any" works like pure JS

console.warn(arr);