const inquirer = require('inquirer');
const fs = require("fs");
const { Triangle, Circle, Square }= require('./lib/shapes.js');
const {} = require("./lib/prompt.js");


const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Please Enter your Logo Symbols here (3 or less characters):',
    },
    {
        type: 'input',
        name: 'nameColor',
        message: `Please Enter the color for your Logo's text:`,
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Please Select the background shape of your logo:',
        choices: ['Circle', 'Triangle', 'Square']
    },
    {
        type: 'input',
        name: 'shapecolor',
        message: 'Please Enter the color of your background shape: ',
    },
    
];

function writeToFile(fileName, data) {
fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Readme.md file created! Check UTILS folder!')
);
}

const init = () => {
inquirer.prompt(questions)
    .then((answers) => writeToFile('./examples/logo.svg', generateMarkdown(answers)))
    .catch((err) => console.log(err));
};

init();

 