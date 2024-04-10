const request = require('sync-request')
const config = require("./config.js");
const fs = require("fs");
const canvas = require("canvas");

function drawWeek(ctx)
{
    const resposneDaily = request('GET', config.getConfig(1));
    const jsonRawData = resposneDaily.getBody('utf8');

    const jsonData = JSON.parse(jsonRawData);

    //console.log(jsonData);




}


function drawCurrentDay(ctx)
{
    const resposneDaily = request('GET', config.getConfig(1));
    const jsonRawData = resposneDaily.getBody('utf8');

    const jsonData = JSON.parse(jsonRawData);


    let weatherIcons = [];
    let weatherIconsImg = [];
    let iconNames = ["sun.svg","cloud.svg","feather.svg","cloud-drizzle.svg","cloud-drizzle.svg","cloud-rain.svg","cloud-rain.svg","cloud-snow.svg","cloud-snow.svg","cloud-rain.svg","cloud-snow.svg","cloud-lightning.svg","cloud-lightning.svg","feather.svg","snowflake.svg"];


    for(let i = 0;i<iconNames.length;i++)
    {
        weatherIcons.push(fs.readFileSync("app/icons/"+iconNames[i]));
        weatherIconsImg.push(new canvas.Image);
        weatherIconsImg[i].src = weatherIcons[i];
    }


    

    

    

    ctx.textAlign = 'left'; 
    for(let i = 1, j = 1;i<9;i++,j=j+3)
    {
        ctx.font = '28px Roboto';
        ctx.fillStyle = "#000000";
        ctx.fillText(jsonData.daily.temperature_2m_max[0] + "°C",10,370);
        ctx.fillText(jsonData.daily.temperature_2m_min[0] + "°C",10,400);
    }


    switch(66)
    //switch(jsonData.daily.weather_code[0])
    {
        case 0:
            ctx.drawImage(weatherIconsImg[0], 10, 250, 72, 72);
            break;
        case 1: case 2: case 3:
            ctx.drawImage(weatherIconsImg[1], 10, 250, 72, 72);
            break;
        case 45: case 48:
            ctx.drawImage(weatherIconsImg[2], 10, 250, 72, 72);
            break;
        case 51: case 53: case 55:
            ctx.drawImage(weatherIconsImg[3], 10, 250, 72, 72);
            break;
        case 56: case 57:
            ctx.drawImage(weatherIconsImg[4], 10, 250, 72, 72);
            ctx.drawImage(weatherIconsImg[14], 25, 260, 24, 24);
            break;
        case 61: case 63: case 65:
            ctx.drawImage(weatherIconsImg[5], 10, 250, 72, 72);
            break;
        case 66: case 67:
            ctx.drawImage(weatherIconsImg[6], 10, 250, 72, 72);
            ctx.drawImage(weatherIconsImg[14], 25, 260, 24, 24);
            break;
        case 71: case 73: case 75:
            ctx.drawImage(weatherIconsImg[7], 10, 250, 72, 72);
            break;
        case 77:
            ctx.drawImage(weatherIconsImg[8], 10, 250, 72, 72);
            break;
        case 80: case 81: case 82:
            ctx.drawImage(weatherIconsImg[9], 10, 250, 72, 72);
            break;
        case 85: case 86:
            ctx.drawImage(weatherIconsImg[10], 10, 250, 72, 72);
            break;
        case 95:
            ctx.drawImage(weatherIconsImg[11], 10, 250, 72, 72);
            break;
        case 96: case 99:
            ctx.drawImage(weatherIconsImg[12], 10, 250, 72, 72);
            break;
        default:
            ctx.drawImage(weatherIconsImg[13], 10, 250, 72, 72);
            break;
    
        
    }




}


module.exports = { drawWeek,drawCurrentDay };