// CASE 1:- explicit Object type: as we are making it as Object
// const user : Object = {
//      name: "Soham",
//      age: 23
// }
// Simple Object Type
var user = {
    name: "Soham",
    age: 23,
    loves: ['JS', 'TS', 'GQL'],
    hates: [{
            title: 'SSMS',
            description: 'I dont understand'
        },
        {
            title: 'JSP',
            description: 'This is dumbs haven'
        }]
};
console.log(user.hates[1].title);
