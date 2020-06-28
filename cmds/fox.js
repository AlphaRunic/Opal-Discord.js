const animals = require('getanimals');
module.exports = {
	name: 'fox',
	category: 'Fun',
	desc: 'Returns a random image of a fox.',
	run: async (client,msg,args,opal,Discord) => {
		try {
			const fox = animals.fox()
				.then((url) => {
					msg.channel.send(new Discord.MessageEmbed().setTitle('Here\'s a fox!').setColor('RANDOM').setImage(url));
					//msg.channel.send('debug: '+url);
				});
		} catch(err) {
			msg.channel.send(err);
		}
	}
}