"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Position = void 0;
var Position = /** @class */ (function () {
    function Position(id, name) {
        this.id = id;
        this, name = name;
    }
    /**
     * Getter id
     * @return {number}
     */
    Position.prototype.getId = function () {
        return this.id;
    };
    /**
     * Getter name
     * @return {string}
     */
    Position.prototype.getName = function () {
        return this.name;
    };
    /**
     * Setter id
     * @param {number} value
     */
    Position.prototype.setId = function (id) {
        this.id = id;
    };
    /**
     * Setter name
     * @param {string} value
     */
    Position.prototype.setName = function (name) {
        this.name = name;
    };
    return Position;
}());
exports.Position = Position;
