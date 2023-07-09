const { Triangle, Circle, Square }= require('./shapes.js');

describe('Shapes', () => {
    describe('Triangle', () => {
        it('should generate a Triangle with input text inside and color background', () => {
            const trinagle = new Triangle ('CMC', 'white', 'blue');
            expect(trinagle)
        })
    })

    describe('Circle', () => {
        it('should generate a Triangle with input text inside and color background', () => {
            const circle = new Circle ('CMC', 'white', 'blue');
            expect(circle)
        })
    })

    describe('Square', () => {
        it('should generate a Triangle with input text inside and color background', () => {
            const square = new Square ('CMC', 'white', 'blue');
            expect(square)
        })
    })
})