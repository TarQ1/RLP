const { prefix } = require("../../config.json");

module.exports = {
    name: "status",
    description: "Get status of the current game",
    aliases: ["commands"],
    usage: "[command name]",
    cooldown: 10,
    execute(message, args) {
        if (status.status == 0) {
            message.channel.send("Not playing in any channel");
            console.log("Not playing in any channel");
        } else {
            message.channel.send("Playing on channel: " + status.channel.name);
            console.log("Playing on channel: " + status.channel.name);
        }
    },
};
