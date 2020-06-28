module.exports = {
	name: 'why',
	category: 'Fun',
	desc: 'Returns a random "why?" question.',
	run: async(client,message,args,opal,Discord) => {
		try {
			require('request')({url: 'https://nekos.life/api/why', json: true}, (req, res, json) => {
				let embed = new Discord.MessageEmbed()
				.setTitle('Why?')
				.setColor('RANDOM')
				.setDescription(json.why.replace(/^\w/, c => c.toUpperCase()));
				
				message.channel.send(embed);
			});
		} catch (err) {
			message.channel.send('There was an error!\n' + err).catch();
		}
  }
}