// never indicated that it never returns something
function throwException(message: string, code: number) : never { 
      throw {message: message, code: code};
}

const x = throwException("Using NEVER", 108);
console.log(x); // we dont have undefined on console: that means it crashes, never returns something