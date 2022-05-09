const inquirer = require("inquirer");
const fs = require("fs");
const generateTeam = require("./utils/generateTeam");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const { create } = require("domain");
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
  {
    type: "confirm",
    name: "askAgain",
    message: "Would you like to add another team member? (hit enter for YES) ",
    default: true,
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
  {
    type: "input",
    message: "GitHub Username: ",
    name: "github",
    validate: confirmAnswerValidator,
    when: (employeeQuestions) => employeeQuestions.employeeType === "Engineer",
  },
  {
    type: "input",
    message: "School Name: ",
    name: "school",
    validate: confirmAnswerValidator,
    when: (employeeQuestions) => employeeQuestions.employeeType === "Intern",
  },
  {
    type: "confirm",
    name: "askAgain",
    message: "Would you like to add another team member? (hit enter for YES) ",
    default: true,
  },
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateTeam(data), (err) =>
    err ? console.log(err) : console.log("Team Generated!")
  );
}

async function addEmployees() {
  await inquirer.prompt(employeeQuestions).then((response) => {
    console.log(response);
    employees.push(createEmployee(response));
    if (employeeQuestions.askAgain) {
      addEmployees();
    } else {
      const filename = "./dist/index2.html";
      writeToFile(filename, employees);
    }
  });
}

function createEmployee(data) {
  switch (data.employeeType) {
    case "Engineer":
      return new Engineer(data.name, data.id, data.email, data.github);
    case "Intern":
      return new Intern(data.name, data.id, data.email, data.school);
  }
  return new Manager(data.name, data.id, data.email, data.officeNumber);
}

async function init() {
  await inquirer
    .prompt(startingQuestions)
    .then((response) => {
      employees.push(createEmployee(response));
      if (response.askAgain) {
        addEmployees();
      } else {
        const filename = "./dist/index2.html";
        writeToFile(filename, employees);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

init();
