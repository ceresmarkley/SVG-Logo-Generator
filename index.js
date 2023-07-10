const inquirer = require('inquirer');
const fs = require("fs");
const { Triangle, Circle, Square }= require('./lib/shapes.js');
const {} = require("./lib/prompt.js");


const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Please Enter your Logo Symbols here (3 or less characters):',
        validate: function (input) {
            if (input.length <= 3) {
                return true;
            }
            return 'You can only enter 3 or less characters';
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


function generateLogo(name, nameColor, shape, shapeColor) {
    let logoShape;

    if (shape === 'Circle') {
        logoShape = new Circle(name, nameColor, shapeColor);
    } else if (shape === 'Triangle') {
        logoShape = new Triangle(name, nameColor, shapeColor);
    } else if (shape === 'Square') {
        logoShape = new Square(name, nameColor, shapeColor);
    }

    const svgCode = logoShape.render();
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

async function generate() {
    try {
        const { name, nameColor, shape, shapeColor } = await inquirer.prompt(questions);

        generateLogo(name, nameColor, shape, shapeColor);
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

generate(); 

 