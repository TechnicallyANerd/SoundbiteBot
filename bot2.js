const Discord = require("discord.js");
const client = new Discord.Client();
const request = require ("request");
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
    var str = '';

    var options = {
          host: 'www.oxsoundboard.com',
          path: '/api/get_top'
    };

    callback = function(response) {

          response.on('data', function (chunk) {
                str += chunk;
          });

          response.on('end', function () {
                console.log(str);
          });

          //return str;
    }

    var req = http.request(options, callback).end();

    // These just return undefined and empty
    console.log(req.data);
    console.log(str);
  }
});

client.login(process.env.BOT_TOKEN);
