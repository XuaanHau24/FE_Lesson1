import { Person } from "./Person";

class Student extends Person {
  private className: string;
  private age: number;

  /**
   * Getter className
   * @return {string}
   */
  public getClassName(): string {
    return this.className;
  }

  /**
   * Getter age
   * @return {number}
   */
  public getAge(): number {
    return this.age;
  }

  /**
   * Setter className
   * @param {string} value
   */
  public setClassName(className: string) {
    this.className = className;
  }

  /**
   * Setter age
   * @param {number} value
   */
  public setAge(age: number) {
    this.age = age;
  }

  constructor(
    id: number,
    name: string,
    address: string,
    className: string,
    age: number
  ) {
    super(id, name, address);
    this.className = className;
    this, (age = age);
  }

  //khai bao phthuc hien thi hoc sinh

  public showInfor() {
    console.log("ID:", super.getId());
    console.log("name:", super.getName());
    console.log("Address:", super.getAddress());
    console.log("Class:", this.getClassName());
    console.log("age:", this.getAge());
  }

  public toString(): String {
    // var result = "ID:" +super.getId() ;
    var result = `ID: ${super.getId()}, Name: ${super.getName()}, Class: ${
      this.className
    } `;
    return result;
  }

  //viet ham in thong tin student
}

function printStudent(student: Student): void {
  console.log("ID:", student.getId());
  console.log("name:", student.getName());
  console.log("Address:", student.getAddress());
  console.log("Class:", student.getClassName());
  console.log("age:", student.getAge());
}

// khai bao ham arrow
let printStudent_New = (student: Student) => {
  console.log("ID:", student.getId());
  console.log("name:", student.getName());
  console.log("Address:", student.getAddress());
  console.log("Class:", student.getClassName());
  console.log("age:", student.getAge());
};
// viet ham tinh tong 2 so: arrow
let sum = (a: number, b: number) => {
  return a + b;
};

// viet ham tinh tong 2 so: arrow// ap dung chi return duy nhat 1 thang
let sum_ = (a: number, b: number) => a + b;

export { Student, printStudent, printStudent_New };
