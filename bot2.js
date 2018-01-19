const Discord = require("discord.js");
const client = new Discord.Client();
const http = require('http');

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if(message.author.bot) return;
  if (message.content.startsWith("ping")) {
    message.channel.send("`pong!`");
  }
  if (message.content.startsWith("pong")) {
    message.channel.send("`fuck off xo`");
  }
  if (message.content.startsWith("Ping")) {
    message.channel.send("`nope`");
  }
  if (message.content.startsWith("test")) {
    console.log("works");
    message.channel.send("`works`");
  }
  if (message.content.startsWith("soundboardtopten")) {
    message.channel.send("`running...`");
    var http = require('http');
    http.get('http://www.oxsoundboard.com/api/get_top/', (res) => {
      const { statusCode } = res;
      const contentType = res.headers['content-type'];

      let error;
      if (statusCode !== 200) {
        error = new Error('Request Failed.\n' +
                          `Status Code: ${statusCode}`);
      } else if (!/^application\/json/.test(contentType)) {
        error = new Error('Invalid content-type.\n' +
                          `Expected application/json but received ${contentType}`);
      }
      if (error) {
        console.error(error.message);
        // consume response data to free up memory
        res.resume();
        return;
      }

      res.setEncoding('utf8');
      let rawData = '';
      res.on('data', (chunk) => { rawData += chunk; });
      res.on('end', () => {
        try {
          const parsedData = JSON.parse(rawData);
          console.log(parsedData);
          message.channel.send(parsedData);
        } catch (e) {
          console.error(e.message);
        }
      });
    }).on('error', (e) => {
      console.error(`Got error: ${e.message}`);
    });
  }
});

client.login(process.env.BOT_TOKEN);

var express = require('express');
var app     = express();

app.set('port', (process.env.PORT || 5000));

//For avoidong Heroku $PORT error
app.get('/', function(request, response) {
    var result = 'App is running'
    response.send(result);
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});
