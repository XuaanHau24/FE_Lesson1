"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.printStudent_New = exports.printStudent = exports.Student = void 0;
var Person_1 = require("./Person");
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(id, name, address, className, age) {
        var _this = _super.call(this, id, name, address) || this;
        _this.className = className;
        _this, (age = age);
        return _this;
    }
    /**
     * Getter className
     * @return {string}
     */
    Student.prototype.getClassName = function () {
        return this.className;
    };
    /**
     * Getter age
     * @return {number}
     */
    Student.prototype.getAge = function () {
        return this.age;
    };
    /**
     * Setter className
     * @param {string} value
     */
    Student.prototype.setClassName = function (className) {
        this.className = className;
    };
    /**
     * Setter age
     * @param {number} value
     */
    Student.prototype.setAge = function (age) {
        this.age = age;
    };
    //khai bao phthuc hien thi hoc sinh
    Student.prototype.showInfor = function () {
        console.log("ID:", _super.prototype.getId.call(this));
        console.log("name:", _super.prototype.getName.call(this));
        console.log("Address:", _super.prototype.getAddress.call(this));
        console.log("Class:", this.getClassName());
        console.log("age:", this.getAge());
    };
    Student.prototype.toString = function () {
        // var result = "ID:" +super.getId() ;
        var result = "ID: ".concat(_super.prototype.getId.call(this), ", Name: ").concat(_super.prototype.getName.call(this), ", Class: ").concat(this.className, " ");
        return result;
    };
    return Student;
}(Person_1.Person));
exports.Student = Student;
function printStudent(student) {
    console.log("ID:", student.getId());
    console.log("name:", student.getName());
    console.log("Address:", student.getAddress());
    console.log("Class:", student.getClassName());
    console.log("age:", student.getAge());
}
exports.printStudent = printStudent;
// khai bao ham arrow
var printStudent_New = function (student) {
    console.log("ID:", student.getId());
    console.log("name:", student.getName());
    console.log("Address:", student.getAddress());
    console.log("Class:", student.getClassName());
    console.log("age:", student.getAge());
};
exports.printStudent_New = printStudent_New;
// viet ham tinh tong 2 so: arrow
var sum = function (a, b) {
    return a + b;
};
// viet ham tinh tong 2 so: arrow// ap dung chi return duy nhat 1 thang
var sum_ = function (a, b) { return a + b; };
