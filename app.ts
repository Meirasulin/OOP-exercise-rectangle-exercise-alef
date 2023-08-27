// Exercise 3
class Shape {
  constructor() {}
  info(): string {
    return "This is a Shape";
  }
  draw() {
    console.log("drawing a shape");
  }
}

// Exercise 1
class Rectangle extends Shape {
  height: number;
  width: number;

  constructor(height: number, width: number) {
    super();
    this.height = height;
    this.width = width;
  }
  eara(): number {
    return this.height * this.width;
  }
  info(): string {
    return "This is a Rectangle";
  }
  scale(change: number): Rectangle {
    this.height *= change;
    this.width *= change;
    return this;
  }
  static twoRectangles(
    firstRectangle: Rectangle,
    scoundRectangle: Rectangle
  ): Rectangle {
    const twoRectanglesWidth = firstRectangle.width + scoundRectangle.width;
    const twoRectanglesHeight = firstRectangle.height + scoundRectangle.height;
    return new Rectangle(twoRectanglesHeight, twoRectanglesWidth);
  }
  draw() {
    console.log("drawing a Rectangle");
  }
}
// const myRectangle = new Rectangle(2, 3);
// const myEara = myRectangle.eara();
// console.log("the eara is - " + myEara);

// Exercise 2
class Square extends Rectangle {
  side: number;
  constructor(side: number) {
    super(side, side);
    this.side = side;
  }
  draw(): void {
    console.log("drawing a Square");
  }
}
// const mySquare = new Square(4);
// const mySquareEara = mySquare.eara();
// console.log("The area of the square is - " + mySquareEara);

// Exercise 3
class ColoredRectangle extends Rectangle {
  color: string;
  constructor(height: number, width: number, color: string) {
    super(height, width);
    this.color = color;
  }
  info(): string {
    return "This is a rectangle in color " + this.color;
  }
}
// const myColorRectangle = new ColoredRectangle(2, 3, "blue");
// const printColor = myColorRectangle.info();
// const mycoloredEara = myColorRectangle.eara();
// console.log(mycoloredEara, printColor);

// Exercise 4
// const scaleRectangle = new Rectangle(3, 4);
// const scale = scaleRectangle.scale(3);
// console.log("this is scale! " + scale);
// const firstRectangle = new Rectangle(2, 4);
// const scoundRectangle = new Rectangle(1, 2);
// const twoRectanglesTogether = Rectangle.twoRectangles(
//   firstRectangle,
//   scoundRectangle
// );
// const earaOftwoRectanglesTogether = twoRectanglesTogether.eara();
// console.log("eara Of two Rectangles Together: " + earaOftwoRectanglesTogether);

// Exercise 5
class Circle extends Shape {
  constructor() {
    super();
  }
  draw(): void {
    console.log("drawing a Circle");
  }
}

const renderShapes = (shapes: Shape[]) => {
  for (const shape of shapes) {
    shape.draw();
  }
};
const myRectangle = new Rectangle(2, 3);
const mySquare = new Square(6);
const myCircle = new Circle();
const myShape = new Shape();
const myArray = [myRectangle, mySquare, myCircle, myShape];
renderShapes(myArray);
