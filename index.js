const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

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
      validate: (officeInput) => {
        if (officeInput) {
          return true;
        } else {
          console.log("Please enter your office number.");
          return false;
        }
      },
    },
  ]);
};

const employeeArray = [];

const addEmployee = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "What is the employee's position?",
        choices: ["Engineer", "Intern"],
      },
      {
        type: "input",
        name: "name",
        message: "What is the employee's name?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter a name.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "EmployeeID:",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter an employee ID.");
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
        name: "github",
        message: "What is the employee's Github username?",
        when: (answers) => answers.role === "Engineer",
        validate: (githubInput) => {
          if (githubInput) {
            return true;
          } else {
            console.log("Please enter the engineer's Github.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "What is the employee's school?",
        when: (answers) => answers.role === "Intern",
        validate: (schoolInput) => {
          if (schoolInput) {
            return true;
          } else {
            console.log("Please enter the intern's school.");
            return false;
          }
        },
      },
      {
        type: "confirm",
        name: "confirmAddEmployee",
        message: "Would you like to add another employee?",
        default: false,
      },
    ])
    .then((employeeData) => {
      const { role, name, id, email, github, school, confirmAddEmployee } = employeeData;
      if (role === "Engineer") {
        const engineer = new Engineer(name, id, email, github);
        employeeArray.push(engineer);
      } else {
        const intern = new Intern(name, id, email, school);
        employeeArray.push(intern);
      }

      if (confirmAddEmployee) {
        return addEmployee(employeeArray);
      } else {
        return employeeArray;
      }
    });
};

addManager()
  .then((managerData) => {
    const { name, id, email, office } = managerData;
    const manager = new Manager(name, id, email, office);
    employeeArray.push(manager);
    // console.log(manager);
    console.log(employeeArray);
  })
  .then(addEmployee)
  .then((employeeArray) => {
    console.log(employeeArray);
  });
