function add(n1, n2) {
    // JS throws error on runtime while TS throws error on DEV time
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        throw new Error('Format exception detected');
    }
    return n1 + n2;
}
var n1 = "10";
var n2 = 10.3;
var addval = add(n1, n2);
console.log(addval);
