const { MessageEmbed } = require('discord.js');
module.exports = {
  name: 'announce',
  category: 'Admin',
	aliases: ['ann','pingall'],
  desc: 'Announces a message. (-embed for an embedded announcement)',
	perms: 'admin',
  run: async (client,msg,args) => {
    if (args.length < 1) return msg.reply('Not enough arguments.').then(m => m.delete(5000));

		if (msg.deletable)
			msg.delete();

		msg.channel.send('@everyone');

		mess = args.join(' ');

		if (mess.search('-embed') > -1) {
			mess = mess.substring(0, mess.length-6);
			let embed = new MessageEmbed()
				.setTitle('**Announcement**')
				.setColor('RANDOM')
				.setDescription(mess)
				.addField('Author: ', msg.author.tag);
			msg.channel.send(embed);
		} else{
			msg.channel.send(mess);
		}
  }
}