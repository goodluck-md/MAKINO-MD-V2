const fs = require("fs");
const chalk = require("chalk");

//to enable function - true
//to disable function - false
//
global.available = false;
global.autoReadGc = false;
global.autoReadAll = false;
global.antitags = false;


//auto functioner
global.autoTyping = false;                //make true to enable auto typing
global.autoRecord = true;                //make true to enable auto recording
global.groupevent = true;                //This is the new variable for controlling group event handling.
global.statusseen = false;                 //make true to view statuses 


global.Owner = [""];
global.OwnerNumber = [""];
global.ownertag = [""]; 
global.OwnerName =  "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";
global.BotName = "🐦Makino-md-v2";
global.packname = "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";                             //Do not change.
global.author = "🐦Makino md ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ";                               //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change.
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm "; 
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm"; //Do not change!
//global.dbase = process.env.DBASE || "";//Mongodb here
global.AuthorWhatsapp = "https://wa.me/2347080968564"; //Bot creator WhatsApp link,don't change or bot will not work.

global.sessID = process.env.sessID || `{"noiseKey":{"private":{"type":"Buffer","data":"SHyGfbk4ZVXsvlNE7cFUy/8be2bxVkIhFkld7zQAe3E="},"public":{"type":"Buffer","data":"wRJZieOA4P14dHDTndMhnQEwKbEhW+YYp4rv5aR6kCg="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"+Em2GlG8KyizhZPmxyD42+I2x56AXem0YlV2PQoNLV4="},"public":{"type":"Buffer","data":"dXGxWU/pCM8XUL4fQn4eYOJWgavKM9yHrCD+jU7Sb0A="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"+OO2/nlvbY9PslJQWNjGjx/0VTCIX/T9bfMBcw/Xn0s="},"public":{"type":"Buffer","data":"QgbP2AlRllcUUnfO0VXfGQ8u3pZ3S43q9F3cgGvZyjs="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"8Ao8l3kP/r+7Cr1RI/YQ9PalPlP00sWUjYkZqO3mFGs="},"public":{"type":"Buffer","data":"uAF+m53AVebuVm51wuMWwCVe0W1fPwFSAHpI9wDHVhw="}},"signature":{"type":"Buffer","data":"wd3NNtA0d1SOgq1dqmFg8k9nRisokH5E7vB58LfrTu7tFBsMzcx0a2Csj/AzqPA0Z2KG6sZVYztELVqyB9sIiA=="},"keyId":1},"registrationId":138,"advSecretKey":"hTio0BAof/j8dtjM/3BFz/uojwMpTopzzUWUPcKCk+Y=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"YK9_Y7_BQFm2KXoroMn0kg","phoneId":"30017b13-dcde-4f09-beb1-99d2d9062a5d","identityId":{"type":"Buffer","data":"9dclWvCR5lV+bGogi0aplp1XgSY="},"registered":true,"backupToken":{"type":"Buffer","data":"+bHlWyFwfGjZ49R+Gf1+C/H7k+A="},"registration":{},"pairingCode":"X1B8TP7J","me":{"id":"2348171902471:27@s.whatsapp.net"},"account":{"details":"CPjAv68EEOevlbQGGAEgACgA","accountSignatureKey":"AzyJFPozT0/olyodEjLYMsDFwFaP1AiKgZsODdDxrFU=","accountSignature":"lvAeTo1tyvLJw/ZFiO3VwFIVZFP9on20jfS2OIqsUink7q2cLoYBKJdsNTor27h+qVmAcHkocMcvBiStVpc6DQ==","deviceSignature":"mNImhIo3I4g6dBKI4G/YDA4mlAwxs1zLFElTaBvD4mSg/ynwTkbEtXH3B+GbNlD1y7kM5VySelJ2LONDaIBfiA=="},"signalIdentities":[{"identifier":{"name":"2348171902471:27@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BQM8iRT6M09P6JcqHRIy2DLAxcBWj9QIioGbDg3Q8axV"}}],"platform":"android","lastAccountSyncTimestamp":1720014836}`
global.prefa = ["/" ]

//
global.BotLogo = fs.readFileSync("./Assets/pic1.jpg");
global.Thumb = fs.readFileSync("./Assets/pic9.jpg");
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg");
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg");


//
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


//
global.mess = {
    jobdone: 'Here you go...',
    useradmin: 'Only group Admin can use the command 😂 ',
    botadmin: 'Make me Admin first 😌📍.',
    botowner: 'Only my *Owner* can use this command,Dont trespass, Baka!',
    grouponly: 'This command is only made for *Groups*, Baka!',
    privateonly: 'This command is only made for *Private Chat*, Baka!',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: 'Wait a lil bit (¬_¬)ﾉ...',
    nolink: ' provide me *link*, Baka!',
    error: 'An error occurd!',
    banned: 'You cant use the commands because you Are *Banned*',
    bangc: 'This Group is *Banned* from using Commands!',
    nonsfw: 'Dont be a pervert,idiot! This is not a NSFW enabled group!'
    
}
