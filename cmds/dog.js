const request = require('request');
module.exports = {
	name: 'dog',
	category: 'Fun',
	aliases: ['puppy','pooch','doggy','doggie'],
	desc: 'Returns a random cute puppy.',
	run: async (client,message,args,opal,Discord) => {
		try {
			request({json: true, url: 'https://random.dog/woof.json'}, (err, res, json) => {
				if (err) {
					message.reply('There was an error!');
				} else {
					message.channel.send(new Discord.MessageAttachment(json.url));
				}
			});
			} catch (err) {
				message.channel.send('There was an error!\n' + err).catch();
			}
  }
}