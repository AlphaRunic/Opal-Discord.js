module.exports = {
	name: 'help',
	category: 'Info',
	desc: 'Returns Opal\'s help menu.',
	aliases: ['cmds','commands','h','helpme'],
	run: async (client,msg,args,opal,Discord) => {
		try {
			const cmds_per_page = 50;
			const max_page = (Math.floor(opal.commands/(cmds_per_page/2))+1);
			let page = 1;
			const cmds = client.commands.array();
			const cats = client.categories.array();
			function new_embed() {
				return new Discord.MessageEmbed()
					.setTitle(':sparkling_heart: **Opal Commands** :sparkling_heart:')
					.setThumbnail(client.user.avatarURL())
					.setFooter(`Page ${page}/${max_page}`)
					.setTimestamp()
					.setColor('#fd8cff');
			}
			let embed = new_embed();

			let i = 0;

			for (let cmd of cmds) {
					var alias = cmd.aliases;
					if (alias === undefined) {
						var alias = 'none';
					}
					embed.addField(`\`${cmd.name}\` **| alias: ${alias} | type: ${cmd.category}**`,`*${cmd.desc}*`, true);
					if ((i / (cmds_per_page/2)) === page) {
						msg.member.send(embed);
						embed = new_embed();
						embed.addField(`\`${cmd.name}\` **| alias: ${alias} | type: ${cmd.category}**`,`*${cmd.desc}*`, true);
						page += 1;
						embed.setFooter(`Page ${page}/${max_page}`);
					}
					i += 1
			}
			const dm_promise = await msg.member.send(embed);
			if (dm_promise) {
				msg.channel.send('**I sent a help menu to your DMs!** :blush::purple_heart:');
			} else {
				msg.channel.send('There was an error sending to your DMs.')
			}
		} catch (err) {
			msg.channel.send(`There was an error!\n ${err}\n Stack trace: \n${err.message}`);
		}
	}
};