const fs = require("fs");
module.exports.config = {
        name: "WELCOMe",
    version: "1.0.1",
        hasPermssion: 0,
        credits: "uzairrajput", 
        description: "hihihihi",
        commandCategory: "no prefix",
        usages: "Welcome",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        if (event.body.indexOf("welcome")==0 || event.body.indexOf("WELCOME")==0 || event.body.indexOf("Welcome")==0 || event.body.indexOf("Shukhriya")==0) {
                var msg = {
                                body: "=𝐎𝐰𝐧𝐞𝐫 ➻  𝑼𝒛𝒂𝒊𝒓 𝑹𝒂𝒋𝒑𝒖𝒕  \n__________________________________\n\n🙋  🅃🄷🄰🄽🄺  🅈🄾🅄  🙋\n__________________________________ ",
                                attachment: fs.createReadStream(__dirname + `/noprefix/d08cfbbacd25670c448ac105504c840c.gif`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥂", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

        }
