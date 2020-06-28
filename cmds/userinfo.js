const { MessageEmbed } = require('discord.js')
module.exports = {
  name: 'userinfo',
  category: 'Info',
  desc: "Returnsae user's info.",
	aliases: ['ui','user','whois'],
  run: async (client,msg,args) => {

		let member = msg.mentions.members.first();
		if (!member)
			member = msg.member;
		let id = member.id;
    let user = await client.users.fetch(id);

		function format_obj(obj) {
			var out = '';
			for (var p in obj) {
				out += p + ': ' + obj[p] + '\n';
			}
			return out;
		}

		var nick = member.nickname;
		if (!nick)
			nick = user.username;

		var membership = member.premiumSince;
		if (!membership)
			membership = 'Does not have Nitro';
		
		let embed = new MessageEmbed()
			.setColor('#0000FF')
			.setTitle(`Info about ${user.username}:`)
			.addField('Nickname: ', nick)
			.addField('Last message: ', user.lastMessage)
			.addField('ID: ', id)
			.addField('Created on: ', user.createdAt)
			.addField('Presence: ', user.presence.status)
			.addField('Tag: ', user.tag)
			.addField('Permissions: ', format_obj(member.permissions))
			.addField('Roles: ', format_obj(member.roles))
			.addField('Manageable: ', member.manageable)
			.addField('Nitro since: ', membership)
			.setThumbnail(user.displayAvatarURL());
		msg.channel.send(embed);
  }
}