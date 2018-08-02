import App from '/shapes/app.js';
import { Circle, Quad, Triangle } from '/shapes/shapes.js';

const canvasNode = document.querySelector("#myCanvas");
const app = new App(canvasNode);
const shapeMap = {
    circle: Circle,
    quad: Quad,
    triangle: Triangle
};
let currentFillColor = "#C6BAEE";
let currentStrokeColor = "#9D8CD7";
let currentStrokeWidth = 2;
let currentSize = 100;

canvasNode.addEventListener("mousemove", e => {
    if (app.currentShape) {
        app.currentShape.setPosition(e.clientX, e.clientY);
    }
});

canvasNode.addEventListener("click", e => {
    if (app.currentShape) {
        const shapeClass = app.currentShape.constructor;
        const shape = createShape(shapeClass, e.clientX, e.clientY);

        app.addShape(app.currentShape);
        app.setCurrentShape(shape);
    }
});

canvasNode.addEventListener("wheel", e => {
    e.preventDefault();

    if (app.currentShape) {
        currentSize = app.currentShape.size + e.deltaY;
        app.currentShape.setSize(currentSize);
    }
});

document.addEventListener("keydown", e => {
    if (e.keyCode === 27) {
        app.setCurrentShape(null);
    }
});

document.addEventListener("click", e => {
    const shape = e.target.dataset.shape;

    if (shape && shapeMap.hasOwnProperty(shape)) {
        const shapeClass = shapeMap[shape];
        const newShape = createShape(shapeClass);

        app.setCurrentShape(newShape);
    }
});

window.addEventListener("load", onResize);
window.addEventListener("resize", onResize);

function createShape(ShapeClass, x, y) {
    const shape = new ShapeClass(x, y, currentSize);

    shape.setFillColor(currentFillColor);
    shape.setStrokeColor(currentStrokeColor);
    shape.setStrokeWidth(currentStrokeWidth);

    return shape;
}

function onResize() {
    canvasNode.width = window.innerWidth;
    canvasNode.height = window.innerHeight;
}
