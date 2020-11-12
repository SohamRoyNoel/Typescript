var person = {
    name: "Soham",
    age: 23,
    languages: ["TS", "JS", "React", "Node"]
};
for (var _i = 0, _a = person.languages; _i < _a.length; _i++) {
    var lng = _a[_i];
    console.log(lng.toLowerCase()); // every string function is working bcz TS knows this array is gonna be string
}
var arr;
arr = [1, 2, 3, 'Js'];
console.warn(arr);
