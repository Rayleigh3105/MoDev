var request = require('request');

getGitHubData();

function getGitHubData() {
    var options = {
        url: `https://api.github.com/users/rayleigh3105`,
        headers: {
            'User-Agent': 'request'
        }
    };
    return new Promise((resolve, reject)=>{
        request( options, function (error, res, body) {
            if (error){
		            reject(error);
	             } else {
                   console.log('Data of my Github Account');
                   console.log(JSON.parse(body));
		               resolve(JSON.parse(body));
	             }
        });
    });
}
