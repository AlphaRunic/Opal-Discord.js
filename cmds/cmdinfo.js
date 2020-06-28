
module.exports = {
	name: 'cmdinfo',
	category: 'Info',
	desc: 'Returns information about command provided.',
	aliases: ['ci','cinfo','aboutcmd'],
	run: async (client, msg, args, opal, discord) => {
		//message.channel.send(message.member.user.tag)
		//if (message.member.user.tag === 'yochocollates#7077' || message.member.user.tag === 'Runic#0029') {
			if (!args.length) return msg.channel.send(`You didn't pass any command to analyze, ${msg.author}!`);

			function get_info(commandName) {
				const command = msg.client.commands.get(commandName)
				|| msg.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

				if (!command) return msg.channel.send(`There is no command with name or alias \`${commandName}\`, ${msg.author}!`);

				return command;
			}

			const commandName = args[0].toLowerCase();
			const command = get_info(commandName);
			if (!command.aliases)
				command.aliases = 'None';
			if (!command.perms)
				command.perms = 'USER'
			try {
				let embed = new discord.MessageEmbed()
					.setTitle(`Command info for ${command.name}.js`)
					.setTimestamp()
					.setThumbnail(client.user.avatarURL())
					.setColor('RANDOM')
					.addField('**Category**', command.category)
					.addField('**Permissions**', command.perms.toUpperCase())
					.addField('**Aliases**', command.aliases)
					.addField('**Description**', command.desc);
				msg.channel.send(embed);
			} catch (err) {
				msg.channel.send(`Error while retrieving command info: ${err}`);
			}
			
		//} else {
			//message.channel.send('Only the bot owner can use this command!')
		//}
	}
}