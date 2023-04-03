"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Department = void 0;
var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
    }
    /**
     * Getter id
     * @return {number}
     */
    Department.prototype.getId = function () {
        return this.id;
    };
    /**
     * Getter name
     * @return {string}
     */
    Department.prototype.getName = function () {
        return this.name;
    };
    /**
     * Setter id
     * @param {number} value
     */
    Department.prototype.setId = function (id) {
        this.id = id;
    };
    /**
     * Setter name
     * @param {string} value
     */
    Department.prototype.setName = function (name) {
        this.name = name;
    };
    return Department;
}());
exports.Department = Department;
