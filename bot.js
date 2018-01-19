const Discord = require("discord.js");
const client = new Discord.Client();

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
    message.channel.send("`works`");
  }
  if (message.content.startsWith("soundboardtopten")) {
    message.channel.send("`running...`");
    var request = new XMLHttpRequest();
    request.open('GET', 'http://oxsoundboard.com/api/get_top', true);

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        // Success!
        var data = JSON.parse(request.responseText);
        message.channel.send(data);
      } else {
        // We reached our target server, but it returned an error
        message.channel.send("`Oops! The server isn't responding. Tell Jack!`");
      }
    };

    request.onerror = function() {
      // There was a connection error of some sort
      message.channel.send("`Oops! Looks like I can't reach the server right now. Bummer. Try again later?`");
    };

    request.send();
  }
});

client.login(process.env.BOT_TOKEN);
