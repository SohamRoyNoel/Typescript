// In TS we dont need to specify return type explicitly, TS inference does it for us
function add(n1, n2, cb) {
    var x = n1 + n2;
    cb(x);
}
console.log(add(8, 10, function (resp) {
    console.log(resp);
}));
