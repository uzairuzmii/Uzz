const fs = require("fs");
module.exports.config = {
        name: "biryani",
    version: "1.0.1",
        hasPermssion: 0,
        credits: "uzairrajput", 
        description: "hihihihi",
        commandCategory: "no prefix",
        usages: "biryani",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        if (event.body.indexOf("biryani")==0 || event.body.indexOf("Biryani")==0 || event.body.indexOf("BIRYANI")==0 || event.body.indexOf("BIRYANI")==0) {
                var msg = {
                                body: "=𝐎𝐰𝐧𝐞𝐫 ➻  𝑼𝒛𝒂𝒊𝒓 𝑹𝒂𝒋𝒑𝒖𝒕  \n__________________________________\n\n𝐘𝐚𝐚 𝐋𝐨𝐨 𝐁𝐚𝐁𝐲 𝐌𝐎𝐌𝐎𝐒 \n__________________________________ ",
                                attachment: fs.createReadStream(__dirname + `/mtxuzair/biryani.jpeg`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😍", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

        }
