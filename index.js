var express = require('express');
var app = express();
var WebClient = require('@slack/client').WebClient;
var client = new WebClient();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
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

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
