function throwException(message, code) {
    throw { message: message, code: code };
}
var x = throwException("Using NEVER", 108);
console.log(x);
