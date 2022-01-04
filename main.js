const Discord = require('discord.js');
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});
const fs = require('fs');
// require('dotenv').config();

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Blockdaemon role bot is online, bing bong');
});

const prefix = '!';


client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
       
    if (command == "bing"){
        message.channel.send('bong!');
    }
});


// client.login(process.env.TOKEN);



//keep at bottom
client.login('OTI3OTIxODg3MDYzOTk0NDI5.YdRQmQ.WW6zEP93z8YpnurKU2bQObodXdc');