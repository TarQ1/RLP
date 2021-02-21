const gen = require("./gen.js");
const { prefix } = require("../../config.json");
async function randomInt(low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}

const room_merchant = class {
    constructor() {
        this.items = [gen.item(), gen.item(), gen.item()];
    }

    async play() {
        const msg = await status.channel.send(
            "The merchant is selling three items:\n" +
                this.items[0] +
                "\n" +
                this.items[1] +
                "\n" +
                this.items[2] +
                "\n" +
                "Enter 1, 2, 3 to buy an item or 0 to not buy anything",
        );

        await msg.react("0️⃣");
        await msg.react("1️⃣");
        await msg.react("2️⃣");
        await msg.react("3️⃣");

        const filter = (reaction, user) => {
            return (
                reaction.emoji.name === "0️⃣" ||
                reaction.emoji.name === "1️⃣" ||
                reaction.emoji.name === "2️⃣" ||
                reaction.emoji.name === "3️⃣"
            );
        };
        const collector = msg.createReactionCollector(filter, { time: 15000 });

        collector.on("collect", (reaction, user) => {
            console.log(`Collected ${reaction.emoji.name} from ${user.tag}`);
        });

        collector.on("end", (collected) => {
            console.log(`Collected ${collected.size} items`);
        });
    }
};

function room_gen() {
    const chance = randomInt(0, 55);
    if (chance <= 55) return new room_merchant();
    else if (chance < 40) return new room_battle();
    else if (chance < 50) return new room_loot();
    return new room_merchant();
}

async function play() {
    console.log("pas bloqué la");
    const room = room_gen();
    console.log("pas bloqué ici");
    await room.play();
    console.log("ni la");
    // play the room
    // ask if he wants to sleep or eat
    // ask if he want to go to the next room or save
    // if yes call play again
    // if no save and stop the game
}

module.exports = { play };
