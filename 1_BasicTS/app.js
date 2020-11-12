// default enum starts with 0
var role;
(function (role) {
    role[role["DEV"] = 0] = "DEV";
    role[role["SUPPORT"] = 1] = "SUPPORT";
    role[role["QA"] = 2] = "QA";
    role[role["PO"] = 3] = "PO";
})(role || (role = {}));
;
// you can assign enum value to anything, it will be counted from there
var role1;
(function (role1) {
    role1[role1["DEV"] = 6] = "DEV";
    role1[role1["SUPPORT"] = 7] = "SUPPORT";
    role1[role1["QA"] = 8] = "QA";
    role1[role1["PO"] = 9] = "PO";
})(role1 || (role1 = {}));
var person = {
    name: "Soham",
    age: 23,
    languages: ["TS", "JS", "React", "Node"],
    efficiency: ['TS', 1],
    role: role1.PO
};
console.log(person.role);
