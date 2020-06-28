const joke = require('one-liner-joke').getRandomJoke;

module.exports = {
	name: 'joke',
	category: 'Fun',
	aliases: ['randomjoke'],
	desc: 'Returns a random joke. NSFW supported.',
	run: async (client,message,args,opal,Discord) => {
		try {
			if (!message.channel.nsfw) {
				message.channel.send(joke({'exclude_tags': ['dirty', 'racist', 'marriage', 'sex', 'death']}).body);
			} else {
				message.channel.send(joke({'exclude_tags': ['racist']}).body);
			}
		} catch (err) {
			message.channel.send('There was an error!\n' + err).catch();
		}
  }
}