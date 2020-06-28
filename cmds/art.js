const request = require('node-superfetch')
module.exports = {
	name: 'art',
	category: 'Fun',
	desc: 'Returns a random piece of artwork.',
	run: async(client,msg,args,opal,Discord) => {
		const { body } = await request.get('https://thisartworkdoesnotexist.com/artwork');
		let attach = new Discord.MessageEmbed()
			.setTitle('Here\'s a random piece of art!')
			.setFooter('API by thisartworkdoesnotexist.com')
			.setColor('RANDOM')
			.setImage(body)
			.setTimestamp();
		msg.channel.send(attach)
	}
}