const fs = require("fs");
module.exports.config = {
        name: "Musafir",
    version: "1.1.1",
        hasPermssion: 0,
        credits: "AADI BABU", 
        description: "THIS BOT IS AADI SHARMA",
        commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        let react = event.body.toLowerCase();
        if(react.includes("MUSAFIR") ||
     react.includes("Musafir") || react.includes("ASSLAM WALIKUM") || react.includes("Aslam") ||
react.includes("musafir") ||
react.includes("@Musafir Khan")) {
                var msg = {
                                body: `────── MUSAFIRR ZINDGI THAS NHAS HOTI HHAI MERI JAAN🙂💔`,
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("MUSAFIRR", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

        
