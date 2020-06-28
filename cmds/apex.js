const API = require('apexlegendsjs');
module.exports = {
	name: 'apex',
	category: 'Info',
	desc: 'Returns an Apex Legends user\'s stats using a name and a platform.',
	aliases: ['apexstats','apexlegends'],
	run: async (client,msg,args,opal,Discord,defargs) => {
		try {
			apexjs = API(process.env.TRACKER_API);
			let platform = args[0];
			defargs.shift()
			let username = defargs.join(' ');
			if (platform === 'xbl' || platform === 'xbox' || platform === 'xbox1') {
				platform = 'xbl';
			} else if (platform === 'psn' || platform === 'ps4' || platform === 'playstation') {
				platform = 'psn';
			} else {
				platform = 'origin';
			}
			const profile = await apexjs.profile(username, platform);
			//console.log(profile)
			const stats = profile.segments[0].stats
			let embed = new Discord.MessageEmbed()
				.setTitle(`${username}'s Apex Statistics`)
				.setThumbnail(profile.platformInfo.avatarUrl)
				.addField('**Region**', profile.userInfo.countryCode)
				.addField('**Current Legend**', profile.metadata.activeLegendName)
				.addField('**Level**', stats.level.value)
				.addField('**Rank**', stats.rankScore.metadata.rankName)
				.addField(`**${profile.metadata.activeLegendName} Wins**`, stats.season5Wins.value)
				.addField(`**${profile.metadata.activeLegendName} Kills**`, stats.season5Kills.value)
				.setFooter('*API by tracker.gg*')
				.setColor('RANDOM')
				.setTimestamp();
			msg.channel.send(embed);
		} catch (err) {
			msg.channel.send('Error: ' + err + '\nStack trace:\n' + err.message);
		}
	} 
}