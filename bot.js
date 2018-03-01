const Discord = require("discord.js");
const client = new Discord.Client();
const http = require('http');
const prefix = "!sb";
const path = "http://oxsoundboard.com/";

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.author.bot) return;
  if (message.content.startsWith(prefix)) {
    var split_message = message.content.split(" ");
    if (split_message.length > 1){
      if (split_message[1] == "top"){
        message.channel.send("Top 4 most played sounds:");
        var resp_string = 'none';
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
              var result = parsedData.data;
              var output = "";
              for (var i = 0; i < result.length; i++){
                output += result[i] + "\n";
              }
              message.channel.send(output);
            } catch (e) {
              console.error(e.message);
            }
          });
        }).on('error', (e) => {
          console.error(`Got error: ${e.message}`);
        });
      }
      if (split_message[1] == "help") {
        var output = "```SoundbiteBot: prefix all SoundbiteBot instructions with !sb\n - !sb help : lists the bot's funcitonality\n - !sb top : prints the top ten sounds\n - !sb link <sound> : displays the link to a specified sound```";
        message.channel.send();
      }
      if (split_message[1] == "link" && split_message.length == 3){
        var link = path + split_message[2];
        message.channel.send(link);
      }
    }


  }
});

client.login(process.env.BOT_TOKEN);
