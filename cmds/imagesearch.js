const search_img = require('g-i-s');
module.exports = {
	name: 'imagesearch',
	category: 'Fun',
	desc: 'Returns an image from search results.',
	aliases: ['picsearch','imgsearch'],
	run: async (client,msg,args,opal,Discord) => {
		if (!args[0]) return msg.channel.send('You need to search something!');
		const query = args.join(' ');
		search_img(query, send_image);
		function send_image(error,results) {
			if (error) return msg.channel.send('There was an error!' + error);
			const url = results[Math.floor(Math.random() * results.length)].url
			if (!url) return msg.channel.send('Could not find an image URL!');
			msg.channel.send(new Discord.MessageEmbed().setTitle(`Here's an image of \`${query}\``).setImage(url).setTimestamp().setColor('RANDOM'));
		}
	}
}