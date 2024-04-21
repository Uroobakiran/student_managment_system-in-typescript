#!/usr/bin/env node 
class School {
    name;
    students = [];
    teachers = [];
    addStudent(stdObj) {
        this.students.push(stdObj);
    }
    addTeachers(teObj) {
        this.teachers.push(teObj);
    }
    constructor(name) {
        this.name = name;
    }
}
class Student {
    name;
    age;
    schoolName;
    constructor(name, age, schoolName) {
        this.name = name;
        this.age = age;
        this.schoolName = schoolName;
    }
}
class Teacher extends Student {
}
let school1 = new School("AL-Kamran public");
let school2 = new School("Happy palace");
let school3 = new School("Genius Acadamy");
let student1 = new Student("Ali", 18, school1.name);
let student2 = new Student("Imran", 20, school2.name);
let student4 = new Student("shezad", 17, school2.name);
let student3 = new Student("Ahad", 21, school3.name);
let teacher1 = new Teacher("Kanwal", 29, school1.name);
let teacher2 = new Teacher("Amna", 28, school2.name);
let teacher3 = new Teacher("Izzah", 30, school3.name);
school1.addStudent(student1);
school2.addStudent(student2);
school3.addStudent(student3);
school2.addStudent(student4);
school1.addTeachers(teacher1);
school2.addTeachers(teacher2);
school3.addTeachers(teacher3);
console.log(school1);
console.log(school2);
console.log(school3);
export {};
