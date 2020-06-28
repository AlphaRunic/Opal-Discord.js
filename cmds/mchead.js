const request = require('request');
module.exports = {
	name: 'mchead',
	category: 'Fun',
	desc: 'Returns a Minecraft head.',
	aliases: ['headmc'],
	run: async(client,message,args,opal,Discord,defargs) => {
		try {
			args = defargs;
			if (!args[0]) return message.reply('You need to input the UUID or username of the Minecraft Java Edition player!');
			
			request('https://cravatar.eu/head/' + encodeURIComponent(args[0]) + '/400.png', (req, res, png) => {
				if (png == 'Invalid minecraft username or uuid.') return message.reply('You need to input a valid Java UUID/username');
				message.channel.send(new Discord.MessageEmbed().setTitle(`${args[0]}'s Minecraft head`).setImage('https://cravatar.eu/head/' + args[0] + '/200.png'));
			});
		} catch (err) {
			message.channel.send('There was an error!\n' + err).catch();
		}
  }
}