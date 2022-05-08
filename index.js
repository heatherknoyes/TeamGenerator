const inquirer = require("inquirer");
const fs = require("fs");
const generateTeam = require("./utils/generateTeam");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const employees = [];

const confirmAnswerValidator = (answer) => {
  if (answer !== "") {
    return true;
  }
  return "Please enter at least one character.";
};

const startingQuestions = [
  {
    type: "input",
    message: "Manager Name: ",
    name: "name",
    validate: confirmAnswerValidator,
  },
  {
    type: "input",
    message: "Manager ID: ",
    name: "id",
    validate: confirmAnswerValidator,
  },
  {
    type: "input",
    message: "Manager Email Address: ",
    name: "email",
    validate: confirmAnswerValidator,
  },
  {
    type: "input",
    message: "Manager Office Number: ",
    name: "officeNumber",
    validate: confirmAnswerValidator,
  },
];

const employeeQuestions = [
  {
    type: "input",
    message: "Team Member Name: ",
    name: "name",
    validate: confirmAnswerValidator,
  },
  {
    type: "input",
    message: "Team Member ID: ",
    name: "id",
    validate: confirmAnswerValidator,
  },
  {
    type: "input",
    message: "Team Member Email Address: ",
    name: "email",
    validate: confirmAnswerValidator,
  },
  {
    type: "list",
    message: "Employee Type: ",
    name: "employeeType",
    choices: ["Intern", "Engineer"],
  },
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateTeam(data), (err) =>
    err ? console.log(err) : console.log("Team Generated!")
  );
}

async function addEmployees() {
  await inquirer.prompt(employeeQuestions).then((response) => {
    if (employee.getRole() === "Intern") {
      inquirer
        .prompt({
          type: "input",
          message: "School Name: ",
          name: "school",
          validate: confirmAnswerValidator,
        })
        .then((detail) => {
          const employee = createEmployee(response, detail);
          employees.push(employee);
        });
    } else if (employee.getRole() === "Engineer") {
      inquirer
        .prompt({
          type: "input",
          message: "Github Name: ",
          name: "github",
          validate: confirmAnswerValidator,
        })
        .then((detail) => {
          const employee = createEmployee(response, detail);
          employees.push(employee);
        });
    }

    if (
      inquirer.prompt({
        type: "confirm",
        name: "askAgain",
        message:
          "Would you like to enter another employee? (hit enter for YES) ",
        default: true,
      })
    ) {
      addEmployees();
    } else {
      console.log(employees);
      const filename = "./dist/index2.html";
      writeToFile(filename, employees);
    }
  });
}

function createEmployee(data, detail) {
  switch (data.employeeType) {
    case "Engineer":
      return new Engineer(data.name, data.id, data.email, detail.github);
    case "Intern":
      return new Intern(data.name, data.id, data.email, detail.school);
  }
  return new Manager(data.name, data.id, data.email, data.officeNumber);
}

async function init() {
  await inquirer
    .prompt(startingQuestions)
    .then((response) => {
      employees.push(createEmployee(response));
    })
    .catch((error) => {
      console.log(error);
    });

  await addEmployees();
}

init();
