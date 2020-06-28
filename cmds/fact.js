module.exports = {
	name: 'fact',
	category: 'Fun',
	desc: 'Returns a random factoid.',
	aliases: ['factoid','funfact'],
	run: async(client,message,args,opal,Discord) => {
		try {
			require('request')({url: 'https://nekos.life/api/v2/fact', json: true}, (req, res, json) => {
				let embed = new Discord.MessageEmbed()
					.setTitle('Here\'s a fun fact:')
					.setDescription(json.fact)
					.setTimestamp()
					.setColor('RANDOM');
				
				message.channel.send(embed);
			});
		} catch (err) {
			message.channel.send('There was an error!\n' + err).catch();
		}
	}
}