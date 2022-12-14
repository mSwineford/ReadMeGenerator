// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the projects name?",
    name: "project name",
  },
  {
    type: "input",
    message: "Give the README file a discription.",
    name: "project description",
  },
  {
    type: "input",
    message: "Provide the installation instructions.",
    name: "installation instructions",
  },
  {
    type: "input",
    message: "Provide the usage instructions.",
    name: "usage",
  },
  {
    type: "input",
    message: "Provide the contribution guidelines.",
    name: "contributing",
  },
  {
    type: "input",
    message: "Provide the instructions for testing.",
    name: "test",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile("README.md", fileName, (error, data) =>
  error ? console.error(error) : console.log(data))
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
