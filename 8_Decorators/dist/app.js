"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function AutoBind(_, _1, propertyName) {
    const originalMethod = propertyName.value;
    const adjDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const bindNow = originalMethod.bind(this);
            return bindNow;
        }
    };
    return adjDescriptor;
}
class Name {
    constructor() {
        this.name = 'Soham';
    }
    setName() {
        console.log(this.name);
    }
}
__decorate([
    AutoBind
], Name.prototype, "setName", null);
const n = new Name();
const button = document.querySelector('button');
button.addEventListener('click', n.setName);
