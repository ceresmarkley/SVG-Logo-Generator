const { Triangle, Circle, Square }= require('./shapes.js');

describe('Shapes', () => {
    describe('Triangle', () => {
        it('should generate a blue Triangle with blue text that spell MIB', () => {
            const triangle = new Triangle ('MIB', 'white', 'blue');
            expect(triangle.render()).toEqual(`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="150, 18 244, 182 56, 182" fill="blue" />
            <text x="150" y="140" text-anchor="middle" fill="white" font-size="48">MIB</text>
            </svg>`);
        })
    })

    describe('Circle', () => {
        it('should generate a white Circle with red text that spell CIA', () => {
            const circle = new Circle ('CIA', 'red', 'white');
            expect(circle.render()).toEqual(`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="80" fill="white" />
            <text x="150" y="110" text-anchor="middle" fill="red" font-size="48">CIA</text>
            </svg>`);
        })
    })

    describe('Square', () => {
        it('should generate a red Square with blue text that spell FBI', () => {
            const square = new Square ('FBI', 'blue', 'red');
            expect(square.render()).toEqual(`<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
            <rect x="150" y="100" width="150" height="150" fill="red" />
            <text x="225" y="180" text-anchor="middle" fill="blue" font-size="48">FBI</text>
            </svg>`);
        })
    })
})