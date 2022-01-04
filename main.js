const Discord = require('discord.js');
const bdClient = new Discord.Client();


bdClient.once('ready', () => {
    console.log('Blockdaemon role bot is online');
});

//keep at bottom
bdClient.login('OTI3OTIxODg3MDYzOTk0NDI5.YdRQmQ.nfNSmmY6gBDAwfacf9e2V1byHfA');