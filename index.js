const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Square, Circle } = require("./lib/shapes");

// Function writes the SVG file using user answers from inquirer prompts
function writeToFile(fileName, answers) {
  let svgString = "";
  svgString =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
  svgString += "<g>";
  svgString += `${answers.shape}`;

   let shapeChoice;
  if (answers.shape === "Triangle") {
    shapeChoice = new Triangle();
    svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeBackgroundColor}"/>`;
  } else if (answers.shape === "Square") {
    shapeChoice = new Square();
    svgString += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeBackgroundColor}"/>`;
  } else {
    shapeChoice = new Circle();
    svgString += `<circle cx="150" cy="115" r="80" fill="${answers.shapeBackgroundColor}"/>`;
  }