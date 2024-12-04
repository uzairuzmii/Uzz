const request = require('request');
const fs = require('fs');
const path = require('path');

module.exports.config = {
    name: "boss",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "SHANKAR SUMAN",
    description: "no prefix",
    usePrefix: false,
    commandCategory: "No command marks needed",
    usages: "Yo Yo",
    cooldowns: 5,
};

const gif = "https://i.imgur.com/QJV0qC7.jpeg";
const message = "● ======= 𝐎𝐖𝐍𝐄𝐑  𝐁𝐀𝐁𝐔=======🥰 𝐊𝐇𝐀𝐍 𝐁𝐎𝐒𝐒          ● 𝐎𝐰𝐧𝐞𝐫 ➻  ────𝐀𝐘𝐄𝐒𝐇𝐀 𝐊𝐄 𝐇𝐀𝐒𝐁𝐄𝐍𝐃 𝐍𝐀𝐌𝐄 𝐓𝐎 𝐏𝐓𝐀 𝐇𝐈 𝐇𝐀𝐈 𝐁𝐎𝐒𝐒 𝐊𝐀 𝐀𝐀𝐏 𝐒𝐀𝐁 𝐊𝐎 𝐊𝐇𝐀𝐍 𝐒𝐀𝐇𝐀𝐁🙂❣️ 𝐘𝐄 𝐑𝐇𝐈 𝐁𝐎𝐒𝐒 𝐎𝐑 𝐔𝐍𝐊𝐈 𝐖𝐈𝐅𝐄 𝐀𝐘𝐄𝐒𝐀 𝐊𝐈 𝐏𝐈𝐂 ";

module.exports.handleEvent = async function({ api, event, client, Users, __GLOBAL }) {
    var { threadID, messageID } = event;
    const lowerCaseMessage = event.body.toLowerCase();

    if (lowerCaseMessage.startsWith("KHAN") || 
        lowerCaseMessage.startsWith("Khan") || 
        lowerCaseMessage.startsWith("khan")) { 

        const downloadPath = path.join(__dirname, 'Boss-Jpg-Images.jpg');

        // Download image from Imgur
        request(gif).pipe(fs.createWriteStream(downloadPath)).on('close', () => {
            var msg = {
                body: message,
                attachment: fs.createReadStream(downloadPath)
            };
            api.sendMessage(msg, threadID, messageID);
            api.setMessageReaction("😘", event.messageID, (err) => {}, true);
        });
    }
}

module.exports.run = function({ api, event, client, __GLOBAL }) {

}
