function Shape () {
}

Shape.prototype.X = 0;
Shape.prototype.Y = 0;

Shape.prototype.move = function (x, y) {
    this.X = x;
    this.Y = y;
}

Shape.prototype.distance_from_origin = function () {
    return Math.sqrt(this.X*this.X + this.Y*this.Y);
}
Shape.prototype.area = function () {
    throw new Error("I don't have a form yet");
}

Shape.prototype.about = function () {
    throw new Error("I don't know about myself.");
}

var s = new Shape();
s.move(10, 10);
console.log(s.distance_from_origin());

// Inheritance example
// __proto__ is used to get the base prototype.

function Square() {
}

Square.prototype = new Shape();
Square.prototype.__proto__ = Shape.prototype;

// Add member variable to the derived class's prototype

Square.prototype.Width = 0;

Square.prototype.area = function () {
    return this.Width * this.Width;
}

Square.prototype.about = function () {
    // return "Square( width = " + this.Width + ")";
    return `Square(width: ${this.Width})`;
}

var sq = new Square();
sq.move(-5, -5);
sq.Width = 5;
console.log(sq.area());
console.log(sq.distance_from_origin());

function Rectangle () {
}

Rectangle.prototype = new Square();
Rectangle.prototype.__proto__ = Square.prototype;
Rectangle.prototype.Height = 0;

Rectangle.prototype.area = function () {
    return this.Width * this.Height;
}
Rectangle.prototype.about = function () {
    // return "Rectangle( width = " + this.Width + ", height = " + this.Height + ")";
    return `Rectangle(width: ${this.Width}, height: ${this.Height})`;
}


var re = new Rectangle();
re.move(25, 25);
re.Width = 10;
re.Height = 5;
console.log(re.area());
console.log(re.distance_from_origin());

some_shapes = [ sq, re ]

some_shapes.forEach(function(shape) {
  console.log(shape.about());
});

