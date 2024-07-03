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

global.sessID = process.env.sessID || `{"noiseKey":{"private":{"type":"Buffer","data":"OKEUtXNAHKgm9a/Q9+LIvl8Zr/FgHr3OvXcBN0N5pEQ="},"public":{"type":"Buffer","data":"GDMcHFJx2pvXnLW0gJ8m9fwL+CzRSa/k5Dh1SwGx7kg="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"2GeVtF5PB/QCPvnFTgRq7hmVEqBFpc+1fZE4D/NgeX4="},"public":{"type":"Buffer","data":"ZkX4lKPA6GKlRWfgNrPtaqJyKxfv44YufrGJc2hJAD4="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"MNXKu5O4Av45wZsVdXR+YAQ6okkRk4sb3FA4ot6dwXc="},"public":{"type":"Buffer","data":"ZGNmDLqB8vrt12beqXOXxthNLtfoFxA2vb0oPELVZWQ="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"8FeD620i1vghUSmpku/9j+cM6ShkQaZc6TzWJ0x26WQ="},"public":{"type":"Buffer","data":"150RPhFIuOg0pBrkxhvOYc7vN11XY+zuOsHlM5dk5F8="}},"signature":{"type":"Buffer","data":"zS8xPlhvKyVcyAnpN3T5FHa2Bg/boZ0J9m10QKs43tX44RP9eIQSbyRVtWAtJ6GZ6Q9JCvmjPiAJfSlSenWyAQ=="},"keyId":1},"registrationId":162,"advSecretKey":"WzcB0qKapktVKYCJMAYWuk+drAcMs9JWUs/rrL0uoCU=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"9FpiOcIEQP-uoS_a9dkfSQ","phoneId":"c8a26e09-ce73-4cae-a9ba-7f9e18e18925","identityId":{"type":"Buffer","data":"3RdvA5IkYh5t2EaA4qXzZ8spa5g="},"registered":true,"backupToken":{"type":"Buffer","data":"FOVx+OD33mruLUMs5p6NE9eai0o="},"registration":{},"pairingCode":"SDTTX6KL","me":{"id":"2348171902471:26@s.whatsapp.net"},"account":{"details":"CPfAv68EEMKSlLQGGAsgACgA","accountSignatureKey":"AzyJFPozT0/olyodEjLYMsDFwFaP1AiKgZsODdDxrFU=","accountSignature":"fVT8TVvujRQkeVSX7VoKXrWckK/dTpscSgqY8YFgah1cciWCoIxFaEqUYVlY0wLaU5xXuIGzXE8539oSzlI1Ag==","deviceSignature":"/7fuWUQuyo5TQNkNic9F5wbHOf0OedAp9w18oxCT8Map/KXoHb0XIb359UNItX1Fol2xX1uSYrACE2+tHstMDw=="},"signalIdentities":[{"identifier":{"name":"2348171902471:26@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BQM8iRT6M09P6JcqHRIy2DLAxcBWj9QIioGbDg3Q8axV"}}],"platform":"android","lastAccountSyncTimestamp":1719994703}`
global.prefa = ["/"]

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
