// In TS we dont need to specify return type explicitly, TS inference does it for us
function add(n1, n2) {
    return n1 + n2;
}
// Void and Undefined type :: void means no return type
function printer(num) {
    console.log(num);
}
function printer1(num) {
    console.log(num);
    return;
}
printer(add(10, 15));
console.log(printer(add(10, 15))); // void
console.log(printer1(add(10, 15))); // undefined
