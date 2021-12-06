const Routes = require("next-routes");

const { HOME, STUDENT, COMPANY, TEACHER, LOGIN } = require("../utils/constants/urls");

module.exports = Routes()
  // Home
  .add({ name: "Home", pattern: HOME, page: "Home" })

  // Login
  .add({ name: "Login", pattern: LOGIN, page: "Login" })

  // Student
  .add({ name: "Student", pattern: STUDENT, page: "Student" })

  // Teacher
  .add({ name: "Teacher", pattern: TEACHER, page: "Teacher" })

  // Company
  .add({ name: "Company", pattern: COMPANY, page: "Company" });
