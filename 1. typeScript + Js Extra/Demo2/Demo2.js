"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Student_1 = require("./Student");
// import { Department } from "./Department";
// import { Position } from "./Position";
// var person1 = new Person(1,"A","HN");
// let personArray: {id: number, name: string, address: string}[] = [
// {"id": 2, "name": "b", "address" : "HN2"},
// {"id": 3, "name": "c", "address" : "HN3"},
// {"id": 4, "name": "d", "address" : "HN4"},
// {"id": 5, "name": "e", "address" : "HN5"},
// ]
// // person1.id = 1;
// // person1.name = "A";
// // person1.address = "A11";
// var dep1 = new Department(1, "Dev");
// let depArray: {id: number, name: string}[] = [
//     {"id": 2, "name": "Test"},
//     {"id": 3, "name": "BA"},
//     {"id": 4, "name": "PO"},
//     {"id": 5, "name": "PM"},
// ]
// var pos1 = new Position(1, "Lead")
// let posArray: {id: number, name: string}[] = [
//     {"id": 2, "name": "Manager"},
//     {"id": 3, "name": "Staf"},
//     {"id": 4, "name": "Employee"},
//     {"id": 5, "name": "DM"},
// ]
// console.log("person1: ", person1);
// person1.go();
// console.log("personArray", personArray, "depArray", depArray, "posArray", posArray);
// console.log("dep1:", dep1);
// console.log("pos1", pos1);
var student1 = new Student_1.Student(1, "s1", "hn", "railw", 9);
var student2 = new Student_1.Student(1, "s2", "hn2", "railw2", 10);
var student3 = new Student_1.Student(1, "s3", "hn3", "railw3", 2);
var student4 = new Student_1.Student(1, "s4", "hn4", "railw4", 8);
console.log("thong tin hoc vien");
// console.log("ID:" , student1.getId());
// console.log("name:" , student1.getName());
// console.log("Address:" , student1.getAddress());
// console.log("Class:" , student1.getClassName());
// console.log("age:" , student1.getAge());
// student2.showInfor();
// console.log(student1.toString());
// printStudent(student3);
// printStudent_New(student1);
var students;
students = [student1, student2, student3, student4];
for (var index = 0; index < students.length; index++) {
    students[index].showInfor();
}
students.forEach(function (st) {
    st.showInfor();
});
for (var key in students) {
    console.log("key: ", key);
    students[key].showInfor();
}
for (var _i = 0, students_1 = students; _i < students_1.length; _i++) {
    var iterator = students_1[_i];
    console.log("inter", iterator);
}
var numberArray = [1, 2, 3];
var numberArray_new;
//map tao ra 1 mang moi tu mang ban dau
var numberArray_new_1 = numberArray.map(function (num) {
    return num + 5;
});
console.log("numberArray1", numberArray_new_1);
