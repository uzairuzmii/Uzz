const fs = require("fs");
module.exports.config = {
        name: "parathe",
    version: "1.0.1",
        hasPermssion: 0,
        credits: "uzairrajput", 
        description: "hihihihi",
        commandCategory: "no prefix",
        usages: "parathe",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        if (event.body.indexOf("parathe")==0 || event.body.indexOf("paratha")==0 || event.body.indexOf("PARATHE")==0 || event.body.indexOf("Parathe")==0) {
                var msg = {
                                body: "=𝐎𝐰𝐧𝐞𝐫 ➻  𝑼𝒛𝒂𝒊𝒓 𝑹𝒂𝒋𝒑𝒖𝒕  \n__________________________________\n\n𝐘𝐚𝐚 𝐋𝐨𝐨 𝐁𝐚𝐁𝐲 𝐏𝐚𝐑𝐚𝐓𝐡𝐞\n__________________________________ ",
                                attachment: fs.createReadStream(__dirname + `/mtxuzair/7688e35b3d9376764427668db625967c.jpg`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🫔", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

        }
