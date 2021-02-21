const fs = require("fs");
const charjson = require("../json/char.json");

const vie = 0; // pour ne pas avoir un 0 illisible plus tard.

const Player = class {
    constructor() {
        this.items = charjson.items;
        this.stats = charjson.stats;
    }
    additem(id, nom) {
        this.items.push([id, nom]);
    }
    removehealh(value) {
        this.stats[vie][1] -= value;
        if (this.stats[vie][1] <= 0) {
            console.log("Tu est mort, ripz");
        } else {
            console.log(
                "Tu as maintenant " + this.stats[vie][1] + " points de vie",
            );
        }
        if (typeof status === "undefined") {
            // check si la variable globale status existe avant d'envoyer un msg
            return;
        }
        if (this.stats[vie][1] <= 0) {
            status.channel.send("Tu est mort, ripz");
        } else {
            status.channel.send(
                "Tu as maintenant " + this.stats["vie"] + " points de vie",
            );
        }
    }
    save() {
        const data = JSON.stringify(this, null, "\t");
        fs.writeFile("../json/char.json", data, "utf8", (err) => {
            if (err) {
                console.log(`Error writing file: ${err}`);
            } else {
                console.log(`File is written successfully!`);
            }
        });
    }
};


module.exports = Player;
