module.exports = {
	name: 'punch',
	category: 'Fun',
	aliases: ['ko','knockout'],
	desc: 'Punches a user.',
	run: async (client,message,args,opal,Discord) => {
		try {    
			let member = message.mentions.members.first();
			let embed;
			
			if (member) {
				if (Math.random() < 0.5) {
					embed = new Discord.MessageEmbed()
					.setTitle(message.author.username + ' punches ' + member.user.username +'! :boom:')
					.setColor('RANDOM')
					.setDescription(message.author.username + ' punched ' + member.user.username + '!\n' + message.author.username + ' didn\'t knock ' + member.user.username + ' out!');
				} else {
					embed = new Discord.MessageEmbed()
					.setTitle(message.author.username + ' punches ' + member.user.username)
					.setColor('RANDOM')
					.setDescription(message.author.username + ' punched ' + member.user.username + ' and managed to knock ' + member.user.username + ' out!');
				}
			} else message.reply('You need to mention the person you want to punch!');
			
			message.channel.send(embed);
		} catch (err) {
			message.channel.send('Their was an error!\n' + err).catch();
		}
  }
}