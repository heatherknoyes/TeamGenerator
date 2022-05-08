const inquirer = require("inquirer");
const fs = require("fs");
const generateTeam = require("./utils/generateTeam");

const confirmAnswerValidator = (answer) => {
  if (answer !== "") {
    return true;
  }
  return "Please enter at least one character.";
};

const questions = [
  {
    type: "input",
    message: "Team Member Name: ",
    name: "title",
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
    message: "Email address: ",
    name: "email",
    validate: confirmAnswerValidator,
  },
  {
    type: "list",
    message: "Employee Type ",
    name: "employeeType",
    choices: ["Employee", "Manager", "Intern", "Engineer"],
  },
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateTeam(data), (err) =>
    err ? console.log(err) : console.log("Success!")
  );
}

function init() {
  inquirer
    .prompt(questions)
    .then((response) => {
      const filename = "./dist/index2.html";
      writeToFile(filename, response);
    })
    .catch((error) => {
      console.log(error);
    });
}

init();
