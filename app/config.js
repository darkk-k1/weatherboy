const fs = require("fs");
const readlineSync = require('readline-sync');

function getConfig(id)
{
    const wak_config = fs.readFileSync("app/config/wak.conf", 'utf-8');
    const config_lines = wak_config.split('\n');

    let config = [];
    
    for (const line of config_lines) 
    {
        if(line.startsWith("hourly_for_day"))
        {
            config.push(line.slice(15));
        }
        if(line.startsWith("daily_for_week"))
        {
            config.push(line.slice(15));
        }
    }


    return config[id];
}

module.exports = { getConfig };