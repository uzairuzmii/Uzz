const fs = require("fs");
module.exports.config = {
        name: "Ayesha",
    version: "1.0.1",
        hasPermssion: 0,
        credits: "AADI BABU", 
        description: "hihihihi",
        commandCategory: "no prefix",
        usages: "RuhaNi",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        if (event.body.indexOf("ayesha")==0 || event.body.indexOf("AYESHA")==0 || event.body.indexOf("Ayesha")==0 || event.body.indexOf("@Ayesha Khan ")==0) {
                var msg = {
                                body: "=𝐎𝐰𝐧𝐞𝐫 ➻  𝐊𝐇𝐀𝐍  𝐒𝐀𝐇𝐀𝐁 \n__________________________________\n\n𝐎𝐰𝐧𝐞𝐑 𝐀𝐲𝐞𝐬𝐡𝐚 𝐤𝐡𝐚𝐧\n__________________________________ ",
                                attachment: fs.createReadStream(__dirname + `/noprefix/fae15ba06332f6e84389b5ec25c569ff.jpg`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😳", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

        }
