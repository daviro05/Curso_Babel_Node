
const request = require('request');

function pruebaRequest(url){
  return new Promise((resolve, reject) =>{
    request(url,(error, response, body) => {
        if(error){
            return reject(error);
        }
        if(!response || response.statusCode !== 200){
            return reject({error: 'statusCode', code: response.statusCode});
        }
        try {
            const parseJSON = JSON.parse(body);
            return resolve(parseJSON);
        } catch (error) {
            console.log(error);
        }
    });
  });
}

pruebaRequest('http://www.mocky.io/v2/5aafa9ca2d00005a006efeff').
then((result) => {
    console.log(typeof result);
    console.log(result);
})
.catch(console.log);