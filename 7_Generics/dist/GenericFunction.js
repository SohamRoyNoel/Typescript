"use strict";
function merge(n, n1) {
    return Object.assign(n, n1);
}
console.log(merge({ name: 'Soham', tecs: ['React', 'TS'] }, { role: 'Dev' }));
console.log(merge('Dev', { name: 'Soham' }));
function getCountMachine(element) {
    let description = '';
    if (element.length === 0) {
        description = 'No Element Found';
    }
    else if (element.length === 1) {
        description = `Entry has 1 Element`;
    }
    else if (element.length > 1) {
        description = `Entry has ${element.length} Elements`;
    }
    return [element, description];
}
console.log(getCountMachine('React'));
console.log(getCountMachine(['React', 'TypeScript']));
console.log(getCountMachine([]));
console.log(getCountMachine(['React']));
function keyOfObject(obj, str) {
    console.log(obj[str]);
}
keyOfObject({ name: 'Soham' }, 'name');
