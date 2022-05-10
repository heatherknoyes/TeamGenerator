const inquirer = require("inquirer");
const fs = require("fs");
const generateTeam = require("./utils/generateTeam");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const employees = [];

const confirmAnswerValidator = (answer) => {
  if (answer !== "") {
    return true;
  }
  return "Please enter at least one character.";
};

const confirmDigitValidator = (answer) => {
  if (answer.match(/^[1-9]\d*$/)) {
    return true;
  }
  return "Please only enter numbers.";
};

const confirmEmailValidator = (answer) => {
  if (answer.match(/\S+@\S+\.\S+/)) {
    return true;
  }
  return "Please a valid email format.";
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
    validate: confirmDigitValidator,
  },
  {
    type: "input",
    message: "Manager Email Address: ",
    name: "email",
    validate: confirmEmailValidator,
  },
  {
    type: "input",
    message: "Manager Office Number: ",
    name: "officeNumber",
    validate: confirmDigitValidator,
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
    validate: confirmDigitValidator,
  },
  {
    type: "input",
    message: "Team Member Email Address: ",
    name: "email",
    validate: confirmEmailValidator,
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
    when: (answers) => answers.employeeType === "Engineer",
  },
  {
    type: "input",
    message: "School Name: ",
    name: "school",
    validate: confirmAnswerValidator,
    when: (answers) => answers.employeeType === "Intern",
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
    const employee = createEmployee(response);
    employees.push(createEmployee(response));
    if (response.askAgain) {
      addEmployees();
    } else {
      const filename = "./dist/index.html";
      writeToFile(filename, employees);
    }
  });
}

function createEmployee(data) {
  if (data.employeeType === "Engineer") {
    return new Engineer(data.name, data.id, data.email, data.github);
  } else if (data.employeeType === "Intern") {
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
        const filename = "./dist/index.html";
        writeToFile(filename, employees);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

init();
