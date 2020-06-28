module.exports = {
	name: 'picture',
	category: 'Fun',
	aliases: ['randompicture','randompic','pic','img'],
	desc: 'Returns a random picture.',
	run: async(client,message,args,opal,Discord) => {
		try {
			require('request')({url: 'http://www.splashbase.co/api/v1/images/random?images_only=true', json: true}, (req, res, json) => {
				let embed = new Discord.MessageEmbed()
				.setTitle('**Random Picture**')
				.setColor('RANDOM')
				.setImage(json.url)
				.setTimestamp();
				
				message.channel.send(embed);
			});
		} catch (err) {
			message.channel.send('There was an error!\n' + err).catch();
		}
  }
}