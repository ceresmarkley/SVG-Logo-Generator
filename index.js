const inquirer = require('inquirer');
const fs = require("fs");
const { Triangle, Circle, Square }= require('./lib/shapes.js');

const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Please Enter your Logo Symbols here (3 or less characters):',
        validate: function (input) {
            if (input.trim() !== "" && input.length >= 1 && input.length <= 3) {
                return true
              }
            return "Must enter a valid response that is 1-3 characters!";
        },
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
        name: 'shapeColor',
        message: 'Please Enter the color of your background shape: ',
    },
    
];

// function to generate the shape matching the class selected by user in prompt questions.
function generateLogo(name, nameColor, shape, shapeColor) {
    let logoShape;

    if (shape === 'Circle') {
        logoShape = new Circle(name, nameColor, shapeColor);
    } else if (shape === 'Triangle') {
        logoShape = new Triangle(name, nameColor, shapeColor);
    } else if (shape === 'Square') {
        logoShape = new Square(name, nameColor, shapeColor);
    }

    // create a const svgCode that will render logoShape from user's selected 'shape'. 
    const svgCode = logoShape.render();
    // checks to see if filename already exits in examples folder and make a new file if it does, else make file
    const exists = fs.existsSync('./examples/logo.svg');

    if (exists) {
        const newFileName = `./examples/logo-${name}.svg`;
        fs.writeFileSync(newFileName, svgCode);
        console.log(`Logo saved to ${newFileName}`);
    } else {
        fs.writeFileSync(`./examples/logo-${name}.svg`, svgCode);
        console.log('Nice Logo dude!');
}
}

// creating async function that will await the return of prompt questions' input before calling generate logo function.
async function generate() {
    try {
        const { name, nameColor, shape, shapeColor } = await inquirer.prompt(questions);

        generateLogo(name, nameColor, shape, shapeColor);
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

generate(); 

 