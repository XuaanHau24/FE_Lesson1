"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myName = exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    Person.prototype.setId = function (id) {
        this.id = id;
    };
    Person.prototype.getId = function () {
        return this.id;
    };
    //cmd shift p
    /**
     * Getter name
     * @return {string}
     */
    Person.prototype.getName = function () {
        return this.name;
    };
    /**
     * Getter address
     * @return {string}
     */
    Person.prototype.getAddress = function () {
        return this.address;
    };
    /**
     * Setter name
     * @param {string} value
     */
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    /**
     * Setter address
     * @param {string} value
     */
    Person.prototype.setAddress = function (address) {
        this.address = address;
    };
    Person.prototype.go = function () {
        console.log("i can go");
    };
    return Person;
}());
exports.Person = Person;
var myName = "aaa";
exports.myName = myName;
// var person1 = new Person();
// person1.id = 1;
// person1.name = "A";
// person1.address = "A11";
// console.log("person1: ", person1);
