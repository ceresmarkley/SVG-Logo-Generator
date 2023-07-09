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

    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />
    <text x="150" y="110" text-anchor="middle" fill="${this.nameColor}" font-size="48">${this.name}</text>
    </svg>`;
    }
}

class Circle {
    constructor(name, nameColor, shapeColor) {
        Shapes.call(name, nameColor, shapeColor)
    }

    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
    <text x="150" y="97.5" text-anchor="middle" fill="${this.nameColor}" font-size="48">${this.name}</text>
    </svg>`;
    }
}


class Square {
    constructor(name, nameColor, shapeColor) {
        Shapes.call(name, nameColor, shapeColor)
    }

}

module.exports = { Shapes, Triangle, Circle, Square };