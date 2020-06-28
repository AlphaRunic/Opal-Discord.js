const db = require('quick.db');
module.exports = {
  name: 'stats',
  category: 'Levels',
  desc: 'Returns your/a tagged user\'s stats.',
	aliases: ['statistics','levels','lvls'],
  run: async (client,msg,args,opal,Discord,defargs,stats) => {
		let user = msg.author;
    const ment = msg.mentions.members.first();
		if (!ment === undefined) {
			stats = {exp: db.get(`xp_${ment.id}_${msg.guild.id}`), level: db.get(`level_${ment.id}_${msg.guild.id}`), tolvl: db.get(`tolvl_${ment.id}_${msg.guild.id}`)};
			user = ment.user;
		}
		let stat_embed = new Discord.MessageEmbed()
			.setTitle(`${user.username}'s Statistics`)
			.addField('Level', stats.level)
			.addField('Experience', stats.exp)
			.addField('XP until next level', stats.tolvl)
			.setThumbnail(user.displayAvatarURL())
			.setColor("RANDOM")
			.setTimestamp();
		msg.channel.send(stat_embed);
;  }
}