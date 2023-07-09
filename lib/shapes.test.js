const { Triangle, Circle, Square }= require('./shapes.js');

describe('Shapes', () => {
    describe('Triangle', () => {
        it('should generate a Triangle with input text inside and color background', () => {
            const trinagle = new Triangle ('CMC', 'white', 'blue');
            expect(trinagle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        })
    })

    describe('Circle', () => {
        it('should generate a Triangle with input text inside and color background', () => {
            const circle = new Circle ('CIA', 'red', 'white');
            expect(circle.render()).toEqual('<circle  points="150, 18 244, 182 56, 182" fill="blue" />');
        })
    })

    describe('Square', () => {
        it('should generate a Triangle with input text inside and color background', () => {
            const square = new Square ('FBI', 'blue', 'red');
            expect(square.render()).toEqual('<rect  points="150, 18 244, 182 56, 182" fill="blue" />');
        })
    })
})