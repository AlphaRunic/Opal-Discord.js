const { MessageEmbed } = require('discord.js');
module.exports = {
  name: 'loaddata',
  category: 'Info',
  desc: 'Returns data on command loading.',
	aliases: ['ld'],
  run: async (client,msg,args,opal) => {
		var embed = new MessageEmbed()
			.setTitle('Command Loading Data')
			.setColor('RANDOM');
		for (var key of Object.keys(opal.successful_loads)) {
			embed.addField(key, opal.successful_loads[key]);
		}
		msg.channel.send(embed);
  }
}