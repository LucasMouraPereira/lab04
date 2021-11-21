const Routes = require("next-routes");

const { HOME, STUDENT, COMPANY, LOGIN } = require("../utils/constants/urls");

module.exports = Routes()
  // Home
  .add({ name: "Home", pattern: HOME, page: "Home" })

  // Login
  .add({ name: "Login", pattern: LOGIN, page: "Login" })

  // Student
  .add({ name: "Student", pattern: STUDENT, page: "Student" })

  // Company
  .add({ name: "Company", pattern: COMPANY, page: "Company" });
