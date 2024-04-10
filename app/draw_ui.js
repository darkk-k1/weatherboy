function dividinglines(ctx) 
{
    ctx.beginPath()
    ctx.strokeStyle = "#FF0000";
    ctx.lineWidth = 2;
    ctx.moveTo(0, 48);
    ctx.lineTo(800, 48);
    ctx.stroke();
    
    ctx.beginPath()
    ctx.strokeStyle = "#FF0000";
    ctx.lineWidth = 2;
    ctx.moveTo(0, 170);
    ctx.lineTo(800, 170);
    ctx.stroke();
    
    for(let i = 200;i<800;i=i+100)
    {
        ctx.beginPath()
        ctx.strokeStyle = "#FF0000";
        ctx.lineWidth = 2;
        ctx.moveTo(i, 170);
        ctx.lineTo(i, 480);
        ctx.stroke();
    }
}

function drawMainDate(ctx) 
{
    const date = new Date();
    ctx.font = '28px Roboto';
    ctx.fillStyle = "#000000";
    let monthNames = ["stycznia","lutego","marca","kwietnia","maja","czerwca","lipca","sierpnia","września","lipca","października","grudnia"];
    ctx.fillText(date.getDate() + " " + monthNames[date.getMonth()] + " (" + (date.getMonth()+1) + ") " + date.getFullYear(),10,5+28);
}

function drawNamesAndDates(ctx) 
{
    const date = new Date();
    let dayNames = ["Niedziela","Poniedziałek","Wtorek","Środa","Czwartek","Piątek","Sobota"];

    ctx.font = "28px Roboto";
    ctx.fillStyle = "#000000";
    ctx.textAlign = 'center'; 
    ctx.fillText(dayNames[date.getDay()],100,200);

    for(let i = 250, j = date.getDay()+1;i<800;i=i+100,j++)
    {
        ctx.textAlign = 'center'; 
        if(j == 7)
        {
            j = 0;
        }
        ctx.fillText(dayNames[j][0]+dayNames[j][1]+dayNames[j][2],i,200)
    }

    ctx.font = "20px Roboto";
    ctx.fillStyle = "#000000";
    ctx.textAlign = 'center'; 
    ctx.fillText(date.getDate()+"."+(date.getMonth()+1)+"."+date.getFullYear(),100,220);

    for(let i = 250, j = 1;i<800;i=i+100,j++)
    {
        ctx.textAlign = 'center'; 
        let calcdate = new Date();
        calcdate.setDate(calcdate.getDate() + j)
        ctx.fillText(calcdate.getDate()+"."+(calcdate.getMonth()+1)+"."+calcdate.getFullYear(),i,220);
    }
}

module.exports = { dividinglines,  drawMainDate, drawNamesAndDates};