"use strict"
const STUDENTS = [{
   name: "Tanya",
   course: 3,
   subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
   }
}, {
   name: "Victor",
   course: 4,
   subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
   }
}, {
   name: "Anton",
   course: 2,
   subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
   }
}];

//Function 1
const getSubject = (student) => {
   let res = [];
   for (const val of Object.keys(student.subjects)) {
      res.push((val[0].toUpperCase() + val.substring(1)).replace("_", " "))
   }
   return res;
}
//Function 2
const getAverageMark = (student) => {
   let sum = 0;
   let length = 0;
   let marks = Object.values(student.subjects);
   for (let i = 0; i < marks.length; i++) {
      sum += marks[i].reduce((sum, b) => sum + b, 0)
      length += marks[i].length
   }
   return +(sum / length).toFixed(2);
}

//Function 3

const getStudentInfo = (student) => {
   return {
      name: student.name,
      course: student.course,
      avarageMark: getAverageMark(student),
   }
}
//Function 4
const getStudentsNames = () => {
   let res = [];
   STUDENTS.map(student => res.push(student.name))
   return res.sort();
}
//Function 5
const getBestStudent = () => {
   let score = 0;
   let studName = "";
   for (let i = 0; i < STUDENTS.length; i++) {
      if (getAverageMark(STUDENTS[i]) > score) {
         score = getAverageMark(STUDENTS[i]);
         studName = STUDENTS[i].name;
      }
   }
   return studName;
}
//Function 6
const calculateWordLetters = (str) => {
   const obj = {}
   return str.split("").reduce((r, c) => (r[c] = (r[c] || 0) + 1, r), obj);
}

console.log("Предмети 1-го студента: ", getSubject(STUDENTS[0]))
console.log("Середній бал 1-го студента: ", getAverageMark(STUDENTS[0]))
console.log("Інформація 1-го студента: ", getStudentInfo(STUDENTS[0]))
console.log("Імена студентів в алфавітному порядку: ", getStudentsNames(STUDENTS))
console.log("Кращий студент: ", getBestStudent(STUDENTS))
console.log(calculateWordLetters("тест"))