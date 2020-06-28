const request = require('request');
module.exports = {
	name: 'duck',
	category: 'Fun',
	desc: 'Returns an image of a duckie.',
	aliases: ['duckie'],
	run: async(client,message,args,opal,Discord) => {
		try {
			request({json: true, url: 'https://random-d.uk/api/v1/random'}, (err, res, json) => {
				if (err) {
					message.reply('There was an error!\n' + err);
				} else {
					message.channel.send(new Discord.MessageEmbed({title: 'Here\'s a duck:'}).setImage(json.url).setColor('RANDOM'));
				}
			});
		} catch (err) {
			message.channel.send('There was an error!\n' + err).catch();
		}
	}
}