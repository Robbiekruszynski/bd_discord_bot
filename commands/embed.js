// at the top of your file
module.exports = { 
	name: 'ethdocs',
	description: "this is a command to execute embeds opposed to raw messages from the bot",
	execute(message, args, Discord){
		const embed = new Discord.MessageEmbed()
		.setColor('#0099ff')
		.setTitle('Blockdaemon documentation on Eth2')
		.setURL('https://blockdaemon.com/docs/protocol-documentation/ethereum-2-0/ethereum-2-what-is-it/')
		.setThumbnail('https://i.imgur.com/jfSxUzF.png')
		.addFields(
			{ name: 'Regular field title', value: 'Some value here' },
			{ name: 'Regular field title 2', value: 'Some value here 2' }
		)
		.setImage('https://i.imgur.com/jfSxUzF.png')
		.setFooter('Footer example');

		message.channel.send({ embed: embed })

		// message.channel.send({ embeds: [embed] });
	}
}
		



// const { MessageEmbed } = require('discord.js');

// // inside a command, event listener, etc.
// const exampleEmbed = new MessageEmbed()
// 	.setColor('#0099ff')
// 	.setTitle('Some title')
// 	.setURL('https://discord.js.org/')
// 	.setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
// 	.setDescription('Some description here')
// 	.setThumbnail('https://i.imgur.com/AfFp7pu.png')
// 	.addFields(
	// 	{ name: 'Regular field title', value: 'Some value here' },
	// 	{ name: '\u200B', value: '\u200B' },
	// 	{ name: 'Inline field title', value: 'Some value here', inline: true },
	// 	{ name: 'Inline field title', value: 'Some value here', inline: true },
	// )
// 	.addField('Inline field title', 'Some value here', true)
// 	.setImage('https://i.imgur.com/AfFp7pu.png')
// 	.setTimestamp()
// 	.setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

// channel.send({ embeds: [exampleEmbed] });