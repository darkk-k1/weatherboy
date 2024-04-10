const request = require('sync-request')
const config = require("./config.js");

function drawCurrentDay(ctx)
{
    const resposneHourly = request('GET', config.getConfig(0));
    const jsonRawData = resposneHourly.getBody('utf8');

    const jsonData = JSON.parse(jsonRawData);

    ctx.textAlign = 'left'; 
    for(let i = 1, j = 1;i<9;i++,j=j+3)
    {
        ctx.font = '16px Roboto';
        ctx.fillStyle = "#000000";
        ctx.fillText(jsonData.hourly.temperature_2m[j] + "°C",145,220+i*25);
    }

}

function drawHours(ctx)
{
    ctx.textAlign = 'left'; 

    for(let i = 1, j = 1;i<9;i++,j=j+3)
    {
        ctx.font = '14px Roboto';
        ctx.fillStyle = "#000000";

        let tmpHour = j+":00"
        if(tmpHour.length == 4) tmpHour = "0"+tmpHour;
        ctx.fillText(tmpHour + ":",100,220+i*25);
    }

}






module.exports = { drawCurrentDay, drawHours };