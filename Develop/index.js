const api = require('./utils/api')
const generateMarkdown = require('./utils/generateMarkdown')
const inquirer = require('inquirer')

const questions = [
  'What is your Github username?',
  'What tests do you need to run for your repo?',
  'Rules about contributing:',
  'Installation commands'
];

let inquirerQuestions = questions.map(q => {
  return {
    type: 'input',
    name: q,
    message: q
  }
})

function writeToFile(fileName, data) {
}

function init() {
  inquirer.prompt(inquirerQuestions)
    .then(answers => {
      let answersArr = Object.values(answers)
      let githubUser = answersArr[0]
      let githubURL = `https://api.github.com/users/${githubUser}`
      api.getUser(githubURL)
    })
}

init();
