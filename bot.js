const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
  if (message.content.startsWith("Ping")) {
    message.channel.send("nope");
  }
});

client.login(process.env.BOT_TOKEN);
