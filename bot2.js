const Discord = require("discord.js");
const client = new Discord.Client();
var request = require ("request");
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
    var request = new XMLHttpRequest();
    request.open('GET', 'http://oxsoundboard.com/api/get_top', true);

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        // Success!
        //var data = JSON.parse(request.responseText);
        console.log("SUCCESS")
      } else {
        // We reached our target server, but it returned an error
        console.log("505")
      }
    };

    request.onerror = function() {
      // There was a connection error of some sort
      console.log("FAILURE")
    };

    request.send();
});

client.login(process.env.BOT_TOKEN);
