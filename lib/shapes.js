class Shapes {
    constructor(name, nameColor, shapeColor) {
        this.name = name;
        this.nameColor = nameColor;
        this.shapeColor = shapeColor;
    }
}


class Triangle {
    constructor(name, nameColor, shapeColor) {
        Shapes.call(name, nameColor, shapeColor)
    }

}

class Circle {
    constructor(name, nameColor, shapeColor) {
        Shapes.call(name, nameColor, shapeColor)
    }

}

class Square {
    constructor(name, nameColor, shapeColor) {
        Shapes.call(name, nameColor, shapeColor)
    }

}

module.exports = { Shapes, Triangle, Circle, Square };