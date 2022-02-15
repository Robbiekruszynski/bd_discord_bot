const Discord = require('discord.js');
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});
const fs = require('fs');
const { removeAllListeners } = require('process');
require('dotenv').config();
const { MessageEmbed } = require('discord.js');


client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Blockdaemon bot is online, bing bong');
});

const prefix = '!';


//Working example for a call / response 

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
       
    // if (command == "bddocs"){
    //     client.commands.get('bddocs').execute(message, args);
    // }

    if (command == "bdu"){
        client.commands.get("bdu").execute(message,args, Discord);
    }else if (command =="eth"){
        client.commands.get("ethereumdocs").execute(message,args, Discord);
    }else if (command == 'ethdocs'){
        client.commands.get("ethdocs").execute(message,args, Discord);
    }

});





//keep at bottom
client.login(process.env.TOKEN);


// ??command can happen in X value 
// however it points to the right channel 
// if they DO have they roll, then it still points (faster) 
// otherwise it points to the main channel 