const Twitter = require('twitter');
const config = require('./config.js');
const Client = new Twitter(config);

// Search params
const params = {
  q: 'nasa',
  count: 20,
  result_type: 'recent',
  lang: 'en'
}

// Initiate search using the above paramaters
Client.get('search/tweets', params, (err, data, response) => {
  if(err){
    return console.log(err);
  }
  console.log(data);
})
