const Discord = require("discord.js");
//const $ = require('jQuery');
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
  if (message.content.startsWith("jquery")) {
    message.channel.send("`jquery`");
    if (typeof $ == 'undefined'){
      message.channel.send("`not present`");
    } else {
      message.channel.send("`present`");
    }
  }
  if (message.content.startsWith("topsoundboard")) {
    message.channel.send("It worked!");
    $.getJSON("http://oxsoundboard.com/api/get_top", function(data){
      message.channel.send(data);
    });
  }
});

client.login(process.env.BOT_TOKEN);
