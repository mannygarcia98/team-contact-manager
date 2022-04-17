const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");

const addManager = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your name.");
          return false;
        }
      },
    },
    {
      //Need to add a validation to accept only numbers here.
      type: "input",
      name: "id",
      message: "EmployeeID:",
      validate: (idInput) => {
        if (idInput) {
          return true;
        } else {
          console.log("Please enter your employee ID.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "Email address:",
      validate: (emailInput) => {
        if (emailInput) {
          return true;
        } else {
          console.log("Please enter a valid email address.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "office",
      message: "Office number:",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your office number.");
          return false;
        }
      },
    },
  ]);
};

// addManager();

addManager().then((managerData) => {
  const { name, id, email, office } = managerData;
  const manager = new Manager(name, id, email, office);
  console.log(manager);
  // .then(addEmployee)
});
