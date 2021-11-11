const Student = require("../model/student");

// add a JavaScript course to the students where name set to "Yahalom"
//#region optional:
// const addJSCourseToYahalom = () => {
//     Student.updateMany({ name: "Yahalom" }, { course: course.push("JavaScript") })
//     .then(() => {
//       return "updated";
//     })
//     .catch(() => {
//       return "failed";
//     });
// };
//#endregion
const addJSCourseToYahalom = () => {
  Student.find({ name: "Yahalom" })
    .then((students) => {
      students.forEach((student) => {
        Student.findOneAndUpdate(
          { phone: student.phone },
          { courses: student.courses.push("JavaScript") }
        ).then(() => {
          return "updated";
        });
      });
    })
    .catch(() => {
      return "failed";
    });
};

// update the birth to 02/12/1998 where name set to "Koren"
const updateKorenBD = () => {
  Student.updateMany({ name: "Koren" }, { birth: new Date("1998/12/02Z") })
    .then(() => {
      return "updated";
    })
    .catch(() => {
      return "failed";
    });
};
