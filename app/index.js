const { createCanvas } = require("canvas");
const fs = require("fs");


const width = 800;
const height = 480;

const canvas = createCanvas(width, height);
const context = canvas.getContext("2d");

context.fillStyle = "#764abc";
context.fillRect(0, 0, width, height);

const buffer = canvas.toBuffer("image/png");
fs.writeFileSync("app/out/img1.png", buffer);