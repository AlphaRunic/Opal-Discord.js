const search_img = require('g-i-s');
const search = 'bird'
module.exports = {
	name: 'bird',
	category: 'Fun',
	desc: 'Returns a random bird.',
	aliases: ['bird','birdie','birdy','chirper'],
	run: async (client,msg,args,opal,Discord) => {
		search_img(search, send_image);
		function send_image(error,results) {
			if (error) return msg.channel.send('There was an error!' + error);
			const url = results[Math.floor(Math.random() * results.length)].url
			if (!url) return msg.channel.send('Could not find an image URL!');
			msg.channel.send(new Discord.MessageEmbed().setTitle(`Here's a ${search}!`).setImage(url).setTimestamp().setColor('RANDOM'));
		}
	}
}