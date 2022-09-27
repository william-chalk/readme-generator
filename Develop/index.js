// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkDown = require("./utils/generateMarkdown");
const fs = require("fs");
const { rejects } = require("assert");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of the ReadMe? (Required)",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please enter a title for the ReadMe!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Please enter a description for your ReadMe (Required)",
    validate: (desInput) => {
      if (desInput) {
        return true;
      } else {
        console.log("Please enter a description for your ReadMe!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "install",
    message:
      "Please provide inscructions on how to install your project (Required)",
    validate: (installInput) => {
      if (installInput) {
        return true;
      } else {
        console.log(
          "Please provide instructions on how to install your project!"
        );
        return false;
      }
    },
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide the usage of your project (Required)",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("Please provided the usage of your project!");
        return false;
      }
    },
  },
  {
    type: "confirm",
    name: "confirmCredits",
    message: "Would you like to add collaborators for your project?",
    default: true,
  },
  {
    type: "input",
    name: "credits",
    message: "Provide the names and GitHub links for your collaborators",
    when: ({ confirmCredits }) => {
      if (confirmCredits) {
        return true;
      } else {
        return false;
      }
    },
  },
];

// TODO: Create a function to write README file
function writeToFile(data) {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/README.md", data, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: "File Created!",
      });
    });
  });
}

// TODO: Create a function to initialize app
function init(readMeData) {
  return inquirer.prompt(questions);
}

// Function call to initialize app
init()
  .then((userData) => {
    return generateMarkDown(userData);
  })
  .then((generateFile) => {
    return writeToFile(generateFile);
  });
