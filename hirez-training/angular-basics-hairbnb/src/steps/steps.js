#!/usr/bin/env node

var inquirer = require('inquirer');
var replace = require('replace-in-file');

var questions = [{
  type: 'list',
  name: 'selectedStep',
  message: 'Change to step (ctrl+c to quit)',
  choices: [
    { name: 'Step 1', value: 'app' },
    { name: 'Step 2', value: 'steps/_step2' },
    { name: 'Step 2 - Exercise', value: 'steps/_step2-exercise' },
    { name: 'Step 3', value: 'steps/_step3' },
    { name: 'Step 3 - Exercise', value: 'steps/_step3-exercise' },
    { name: 'Step 4', value: 'steps/_step4' },
    { name: 'Step 4 - Exercise', value: 'steps/_step4-exercise' },
    { name: 'Step 5', value: 'steps/_step5' },
    new inquirer.Separator()
  ]
},];


inquirer.prompt(questions).then(function (answers) {
  replace({
    files: 'src/main.ts',
    from: /(from.\'\.\/).*(?=\/app\.module)/g,
    to: "from './" + answers.selectedStep
  }).then(function () {
    console.log("The app.module path in main.ts was replaced to:", answers.selectedStep)
  })
    .catch(function (err) {
      console.error('Error in replacing "main.ts" ', err);
    })
})
  .catch(function (error) {
    console.error('Error in making a choice: ', error);
  });
