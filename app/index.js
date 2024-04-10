const { registerFont,createCanvas } = require("canvas");
const fs = require("fs");

const width = 800;
const height = 480;

const canvas = createCanvas(width, height);
const ctx = canvas.getContext("2d");

// Clean canvas
ctx.fillStyle = "#FFFFFF";
ctx.fillRect(0, 0, width, height);

// Require modules
const draw_ui = require("./draw_ui.js");
const draw_hourly = require("./draw_hourly.js");
const draw_daily = require("./draw_daily.js");

draw_ui.dividinglines(ctx); // Draw dividing lines
draw_ui.drawMainDate(ctx); // Draw current date
draw_ui.drawNamesAndDates(ctx); // Draw day names
draw_ui.drawNamesAndDates(ctx); // Get current day data
draw_hourly.drawCurrentDay(ctx); 
draw_hourly.drawHours(ctx);
draw_daily.drawCurrentDay(ctx);
draw_daily.drawWeek(ctx);




// Draw statuses and other info

// Last updated
ctx.textAlign = 'center'; 
const date2 = new Date().toLocaleString();
ctx.font = '14px Roboto';
ctx.fillStyle = "#000000";
ctx.fillText(date2,730,62);










const buffer = canvas.toBuffer("image/png");
fs.writeFileSync("app/out/img1.png", buffer);



