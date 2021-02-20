const { prefix } = require("../../config.json");

module.exports = {
  name: "exit",
  description: "Exit the game",
  aliases: ["commands"],
  usage: "[command name]",
  cooldown: 10,
  execute(message, args, status) {
    if (!status) {
      console.log("Can't access status");
      return;
    }
    if (status.status == 0) {
      message.channel.send(
        "Not playing in any channel"
      );
      status.channel = message.channel;
      status.status = 1;
      console.log("Ready to play on " + message.channel.name);
      message.channel.send("Ready to play on " + message.channel.name);
    } else {
      status.status = 0;
      message.channel.send(
        "Stopped playing on channel: " +
          status.channel.name 
      );
      console.log(
        "Stopped playing on channel: " +
          status.channel.name 
      );
    }
  },
};
