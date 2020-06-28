module.exports = {
  name: 'about',
  category: 'Info',
  desc: "Returns the bot's info.",
	aliases: ['abt','info','botinfo','opalinfo'],
  run: async (client,msg,args,opal,discord) => {
		let embed = new discord.MessageEmbed()
			.setColor('#fd8cff')
			.setTitle(`:purple_heart: ***About Opal*** :purple_heart:`)
			.addField(':pencil: **Author:** ', opal.author,true)
			.addField(':desktop: **Memory Usage:** ', `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MiB`,true)
			.addField('**Version:** ', opal.version,true)
			.addField('**Discord.js Version:** ', 'v'+discord.version,true)
			.addField('**Node Version:** ', process.version,true)
			.addField(':keyboard: **Command Count:** ', opal.commands,true)
			.addField(':date: **Created On:** ', client.user.createdAt,true)
			.addField(':loudspeaker: **Language:** ', `Node JavaScript ${process.version}`,true)
			.setThumbnail(client.user.displayAvatarURL());
		msg.channel.send(embed);
  }
}