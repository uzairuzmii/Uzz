const fs = require("fs");
module.exports.config = {
        name: "momos",
    version: "1.0.1",
        hasPermssion: 0,
        credits: "uzairrajput", 
        description: "hihihihi",
        commandCategory: "no prefix",
        usages: "momos",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        if (event.body.indexOf("momos")==0 || event.body.indexOf("Momos")==0 || event.body.indexOf("MOMOS")==0 || event.body.indexOf("MOMOSS")==0) {
                var msg = {
                                body: "=𝐎𝐰𝐧𝐞𝐫 ➻  𝑼𝒛𝒂𝒊𝒓 𝑹𝒂𝒋𝒑𝒖𝒕  \n__________________________________\n\n𝐘𝐚𝐚 𝐋𝐨𝐨 𝐁𝐚𝐁𝐲 𝐌𝐎𝐌𝐎𝐒 \n__________________________________ ",
                                attachment: fs.createReadStream(__dirname + `/mtxuzair/9428f494ff4af77478041fb45a9f7b4f.jpg`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😍", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

        }
