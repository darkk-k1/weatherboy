const https = require('https');

async function getData(api_key)
{
    https.get(api_key, res => {
        let data = [];
        const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
        console.log('Status Code:', res.statusCode);
        console.log('Date in Response header:', headerDate);
      
        res.on('data', chunk => 
        {
          data.push(chunk);
        });
      
        res.on('end', () => 
        {
          console.log('Response ended');
      
            return 0;
      
      
      
        });
      }).on('error', err => 
      {
        console.log('Error: ', err.message);
      });
}

module.exports = { getData };