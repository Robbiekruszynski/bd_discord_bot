const Discord = require('discord.js');
const bdClient = new Discord.Client();


bdClient.once('ready', () => {
    console.log('Blockdaemon role bot is online');
});

//keep at bottom
bdClient.login('');