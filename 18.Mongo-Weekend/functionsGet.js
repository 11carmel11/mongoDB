const Student = require("./model/student");

// get all students
const getAllStudents = () => {
  Student.find({}).then((students) => {
    return students;
  });
};

// get all students with name set to "Ido"
const getAllIdo = () => {
  Student.find({ name: "Ido" }).then((students) => {
    return students;
  });
};

// get all students where courses include "Law"
const getAllLawStudents = () => {
  Student.find({ courses: "Law" }).then((students) => {
    return students;
  });
};

// get all students where courses include "Java" and gender set to "Female"
const getAllFemaleJavaStudents = () => {
  Student.find({ $and: [{ courses: "Java" }, { gender: "Female" }] }).then(
    (students) => {
      return students;
    }
  );
};

// get all students where birth > 05/05/1998
const getAllChildren = () => {
  Student.find({ birth: { $lt: new Date("1998/05/05Z") } }).then((students) => {
    return students;
  });
};

// get all students where phone starts with 054
const getAllStudentsWith054 = () => {
  Student.find({ phone: /^054/ }).then((students) => {
    return students;
  });
};
