const fs = require("fs");
module.exports.config = {
        name: "khana-khao",
    version: "1.1.1",
        hasPermssion: 0,
        credits: "uzairrajput",
        description: "THIS BOT WAS MADE BY UZAIR RAJPUT MTX",
        commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        let react = event.body.toLowerCase();
        if(react.includes("Dinner") ||
     react.includes("dinner") || react.includes("DINNER") || react.includes("KHANA") ||
react.includes("Khana") ||
react.includes("khana")) {
                var msg = {
                                body: `=𝐎𝐰𝐧𝐞𝐫 ➻  𝑼𝒛𝒂𝒊𝒓 𝑹𝒂𝒋𝒑𝒖𝒕  \n__________________________________\n\n𝐋𝐨 𝐁𝐚𝐁𝐲\n__________________________________`,attachment: fs.createReadStream(__dirname + `/mtxuzair/received_472683075271350.mp4`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💋", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
