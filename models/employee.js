const mongoose = require("mongoose");

// Employee schema

const Employee = mongoose.model("Employees", {
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  salary: {
    type: String,
    required: true,
  },
});

module.exports = { Employee };
