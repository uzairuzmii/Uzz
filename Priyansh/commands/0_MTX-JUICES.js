const fs = require("fs");
module.exports.config = {
        name: "juices",
    version: "1.0.1",
        hasPermssion: 0,
        credits: "uzairrajput", 
        description: "hihihihi",
        commandCategory: "no prefix",
        usages: "juice",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        if (event.body.indexOf("juice")==0 || event.body.indexOf("juices")==0 || event.body.indexOf("Juice")==0 || event.body.indexOf("JUICE")==0) {
                var msg = {
                                body: "=𝐎𝐰𝐧𝐞𝐫 ➻ 𝑼𝒛𝒂𝒊𝒓 𝑹𝒂𝒋𝒑𝒖𝒕   \n__________________________________\n\n𝐘𝐚𝐚 𝐋𝐨𝐨 𝐁𝐚𝐁𝐲 𝐉𝐮𝐢𝐂𝐞\n__________________________________ ",
                                attachment: fs.createReadStream(__dirname + `/mtxuzair/Never_forget_to_hydrate_your_body_every_day🥤🍓😋_|_Gıda,_Smoothies,_Çilekler(480P).mp4`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🍺", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

        }
