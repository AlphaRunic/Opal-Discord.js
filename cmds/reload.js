
module.exports = {
	name: 'reload',
	category: 'Bot Creaor',
	desc: 'Reloads a command provided.',
	aliases: ['rl'],
	perms: 'bot admin',
	run: async (client, message, args) => {
		//message.channel.send(message.member.user.tag)
			if (!args.length) return message.channel.send(`You didn't pass any command to reload, ${message.author}!`);

			function reload(commandName) {
				const command = message.client.commands.get(commandName)
				|| message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

				if (!command) return false, message.channel.send(`There is no command with name or alias \`${commandName}\`, ${message.author}!`);

				delete require.cache[require.resolve(`./${command.name}.js`)];

				try {
					const newCommand = require(`./${command.name}.js`);
					message.client.commands.set(newCommand.name, newCommand);
					return newCommand;
				} catch (error) {
					console.log(error);
					message.channel.send(`There was an error while reloading a command \`${command.name}\`:\n\`${error.message}\``);
				}
			}

			const commandName = args[0].toLowerCase();
			if (commandName === 'all') {
				for (let cmd of message.client.commands.array()) {
					reload(cmd.name)
				}
				message.channel.send('All commands sucessfully reloaded!')
			} else {
				newCommand = reload(commandName)
				if (newCommand.name === undefined) return;
				message.channel.send(`Successfully reloaded ${newCommand.name}.js!`)
			}
	}
}