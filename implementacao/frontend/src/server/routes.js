const Routes = require("next-routes");

const { HOME, STUDENT, COMPANY } = require("../utils/constants/urls");

module.exports = Routes()
  // Home
  .add({ name: "Home", pattern: HOME, page: "Home" })

  // Student
  .add({ name: "Student", pattern: STUDENT, page: "Student" })

  // Company
  .add({ name: "Company", pattern: COMPANY, page: "Company" });
