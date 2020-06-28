const { MessageEmbed } = require('discord.js');
module.exports = {
  name: 'serverinfo',
  category: 'Info',
	aliases: ['si','sinfo'],
  desc: 'Returns info about the guild.',
  run: async (client,msg,args) => {
    let embed = new MessageEmbed()
			.setColor('RANDOM')
			.setTitle(`Info about ${msg.guild.name}:`)
			.setThumbnail(msg.guild.iconURL())
			.addField('Available: ', msg.guild.available)
			.addField('Partnered: ', msg.guild.partnered)
			.addField('AFK Channel: ', msg.guild.afkChannel)
			.addField('AFK Timeout: ', msg.guild.afkTimeout)
			.addField('MFA Level: ', msg.guild.mfaLevel)
			.addField('Verification Level: ', msg.guild.verificationLevel)
			.addField('Nitro tier: ', msg.guild.premiumTier)
			.addField('Roles: ', msg.guild.roles.cache.array())
			.addField('Created on:', msg.guild.createdAt)
			.addField('Members: ', msg.guild.memberCount)
			.addField('Owner: ', msg.guild.owner.user.username)
			.addField('Region: ', msg.guild.region)
			.addField('ID: ', msg.guild.id);
		msg.channel.send(embed);
  }
}