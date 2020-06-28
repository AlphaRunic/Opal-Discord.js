const { MessageEmbed } = require('discord.js');
module.exports = {
  name: 'javascript',
  category: 'Bot Creator',
	aliases: ['js','nodejs','node'],
	perm: 'bot admin',
  desc: 'Returns result of NodeJS code.', 
  run: async (client,msg,_args_,opal,discord,defaultargs) => {
		args = defaultargs;
    let message = args.join(' ');
		var logBackup = console.log;
		var errBackup = console.error;
		var logMessages = [];

		console.log = function() {
				logMessages.push.apply(logMessages, arguments);
				logBackup.apply(console, arguments);
		};
		console.error = function() {
				logMessages.push.apply(logMessages, arguments);
				errBackup.apply(console, arguments);
		};

		make_embed = function(title,desc,color,footer,img) {

			title = title || 'Embed Title';
			desc = desc || 'Embed Description';
			color = color || "RANDOM";
			footer = footer || 'Embed Footer';
			var embed = new MessageEmbed()
				.setTitle(title)
				.setDescription(desc)
				.setColor(color)
				.setFooter(footer);
			if (!img === undefined || !img === null) {
				embed.setThumbnail(img);
			}

			msg.channel.send(embed);

		}

		send_message = function(message) {
			msg.channel.send(message);
		}

		emoji = function(emoticon) {
			msg.channel.send(`:${emoticon}:`);
		}

		if (message.search('```') > -1) {
			message = message.replace('```','');
			message = message.replace('```','');
		}
		//msg.channel.send(message)

		try {
			eval(message);
		} catch(err) {
			console.log(`error: ${err}`);
		}

		/*if (message.search('-remove') > 0) {
			message = message.replace('-remove','');
			if (message.deletable)
				message.delete();
		}*/ //test

		//msg.channel.send(message);
		try {
			if (logMessages.length)
				msg.channel.send(logMessages.join(' '));
		} catch(err) {
			msg.channel.send(`error: ${err}`);
		}
  }
}