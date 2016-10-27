const express = require('express');
const app = express();
const WebClient = require('@slack/client').WebClient;
const client = new WebClient();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', (request, response) => {
  client.oauth
    .access(process.env.SLACK_CLIENT_ID, process.env.SLACK_CLIENT_SECRET, request.query.code)
    .then(res => {
      response.render('pages/index', {
        accessToken: res.access_token
      });
    }).catch(err => {
      response.render('pages/index', {
        accessToken: null
      });
    });
});

app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'));
});
