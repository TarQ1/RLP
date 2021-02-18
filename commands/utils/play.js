const fs = require("fs");
const { prefix } = require("../../config.json");

module.exports = {
  name: "play",
  description: "Start a game and set global variable.",
  aliases: ["commands"],
  usage: "[command name]",
  cooldown: 10,
  execute(message, args, status) {
    if (!status) {
      console.log("Can't access status");
      return;
    }
    if (status.status == 0) {
      status.channel = message.channel;
      status.status = 1;
      console.log("Ready to play on " + message.channel.name);
	  message.channel.send("Ready to play on " + message.channel.name);
    } else {
      message.channel.send(
        "Aleady playing on channel: " +
          status.channel.name +
          ". Use " +
          prefix +
          "stop to stop playing"
      );
      console.log(
        "Aleady playing on " +
          message.channel.name +
          "Use " +
          prefix +
          "stop to change channel"
      );
    }
  },
};