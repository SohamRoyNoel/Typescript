"use strict";
class Storages {
    constructor() {
        this.data = [];
    }
    addItem(data) {
        this.data.push(data);
    }
    removeItem(data) {
        this.data.splice(this.data.indexOf(data), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const numberStorage = new Storages();
numberStorage.addItem('React');
numberStorage.addItem('Flutter');
numberStorage.addItem('MongoDB');
numberStorage.removeItem('React');
console.log(numberStorage.getItems());
