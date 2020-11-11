
// CASE 1:- explicit Object type: as we are making it as Object
// const user : Object = {
//      name: "Soham",
//      age: 23
// }

// CASE 2
// Nested OBJECT
interface hateList {
      title: string;
      description: string; 
}

// Simple Object Type
const user : {
      name: String;
      age: number;
      loves: string[], // Array as OBJECT Type
      hates: hateList[]       // Nested OBJECT
} = {
      name: "Soham",
      age: 23,
      loves: ['JS', 'TS', 'GQL'],
      hates: [{
            title:'SSMS',
            description: 'I dont understand'
      },
      {
            title: 'JSP',
            description: 'This is dumbs haven'
      }]
}

console.log(user.hates[1].title);