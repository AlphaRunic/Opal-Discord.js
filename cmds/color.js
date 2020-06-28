module.exports = {
	name: 'color',
	category: 'Info',
	desc: 'Returns the color inputted.',
	aliases: ['colour'],
	run: async (client,msg,args,opal,Discord) => {
		try {
			let color = args[0];
			if (!color === 'random' && !color.startsWith('#')) color = '#' + color;
			if (color === 'random') color = color.toUpperCase();
			let color_embed = new Discord.MessageEmbed()
				.setTitle(color)
				.setColor(color)
			msg.channel.send(color_embed);
		} catch (err) {
			msg.channel.send(`There was an error!\n ${err}\n Stack trace: \n${err.message}`);
		}
	}
};