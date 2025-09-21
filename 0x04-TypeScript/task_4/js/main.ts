/// <reference path="subjects/Teacher.ts" />
/// <reference path="subjects/Subject.ts" />
/// <reference path="subjects/Cpp.ts" />
/// <reference path="subjects/Java.ts" />
/// <reference path="subjects/React.ts" />

import Cpp = Subjects.Cpp;
import Java = Subjects.Java;
import React = Subjects.React;
import Teacher = Subjects.Teacher;

// Create and export constants for each subject
export const cpp = new Cpp();
export const java = new Java();
export const react = new React();

// Create and export Teacher object with C++ experience
export const cTeacher: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    experienceTeachingC: 10,
};

// C++ Subject
console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// Java Subject
console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// React Subject
console.log('React');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());