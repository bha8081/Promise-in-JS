const dataMy = {
    name: "Bhavesh Yadav",
    course: "Web Dev",
    Instructer: "Hitesh sir",
};

// console.log(dataMy.course);
// console.log(dataMy.Instructer);
// console.log(dataMy.name);

// di-Structure.
// const {course: subject} = dataMy
// const { Instructer} = dataMy
// console.log(subject);
// console.log(Instructer);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let student = {
    name: "Shubham Yadav",
    branch: "ME",
    passingyear: 2019,
    contectnumber: 8081554164,
    address: "Murtazabad, Muftiganj, Jaunpur",
};
// console.log(student);

console.log(student.name);
console.log(student.branch);
console.log(student.passingyear);
console.log(student.contectnumber);
console.log(student.address);

const {contectnumber: number} = student;
const {passingyear: passout} = student;
console.log(passout);
console.log(number);

