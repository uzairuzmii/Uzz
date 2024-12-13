const fs = require("fs");
module.exports.config = {
        name: "chaumin",
    version: "1.0.1",
        hasPermssion: 0,
        credits: "uzairrajput", 
        description: "hihihihi",
        commandCategory: "no prefix",
        usages: "chaumin",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        if (event.body.indexOf("chaumin")==0 || event.body.indexOf("Chaumin")==0 || event.body.indexOf("CHAUMIN")==0 || event.body.indexOf("chauminn")==0) {
                var msg = {
                                body: "=𝐎𝐰𝐧𝐞𝐫 ➻  𝑼𝒛𝒂𝒊𝒓 𝑹𝒂𝒋𝒑𝒖𝒕  \n__________________________________\n\n𝐘𝐚𝐚 𝐋𝐨𝐨 𝐁𝐚𝐁𝐲 𝐜𝐇𝐚𝐔𝐦𝐈𝐧 \n__________________________________ ",
                                attachment: fs.createReadStream(__dirname + `/mtxuzair/images (1).jpeg`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🍜", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

        }
