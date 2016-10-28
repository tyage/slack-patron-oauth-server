const express = require('express');
const app = express();
const WebClient = require('@slack/client').WebClient;
const client = new WebClient();

const permissions = 'channels:history groups:history im:history team:read users:read channels:read groups:read im:read emoji:read';

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', (request, response) => {
  const code = request.query.code;
  if (code === undefined) {
    return response.render('pages/index', {
      clientId: process.env.SLACK_CLIENT_ID,
      scope: permissions
    });
  }

  client.oauth
    .access(process.env.SLACK_CLIENT_ID, process.env.SLACK_CLIENT_SECRET, code)
    .then(res => {
      response.render('pages/accessToken', {
        accessToken: res.access_token
      });
    }).catch(err => {
      response.render('pages/error');
    });
});

app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'));
});
