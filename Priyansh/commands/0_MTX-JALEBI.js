const fs = require("fs");
module.exports.config = {
        name: "jalebi",
    version: "1.0.1",
        hasPermssion: 0,
        credits: "uzairrajput", 
        description: "hihihihi",
        commandCategory: "no prefix",
        usages: "jalebi",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        if (event.body.indexOf("jalebi")==0 || event.body.indexOf("Jalebi")==0 || event.body.indexOf("JALEBI")==0 || event.body.indexOf("JABELI")==0) {
                var msg = {
                                body: "=𝐎𝐰𝐧𝐞𝐫 ➻  𝑼𝒛𝒂𝒊𝒓 𝑹𝒂𝒋𝒑𝒖𝒕 \n__________________________________\n\n𝐘𝐚𝐚 𝐋𝐨𝐨 𝐁𝐚𝐁𝐲 𝐉𝐚𝐥𝐞𝐁𝐢\n__________________________________",
                                attachment: fs.createReadStream(__dirname + `/mtxuzair/b9ad6b8258591ea5d1e7d13773d1e222.jpg`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥨", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

        }
