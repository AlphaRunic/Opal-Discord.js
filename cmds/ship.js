module.exports = {
	name: 'ship',
	category: 'Fun',
	desc: 'Returns the ship strength of two users.',
	run: async(client,message,args,opal,Discord) => {
		try {
			let i = [];
			
			if (!message.mentions.members.first()) message.guild.members.forEach(member => {
				if (!member.user.bot) i.push(member);
			});
			else i.push(message.mentions.members.first());

			let member = i[Math.floor(Math.random() * i.length)];
			await message.channel.send(new Discord.MessageEmbed({
				title: 'Ship',
				description: message.author.username + ' x ' + member.user.username,
				color: 'RANDOM',
			}).addField('Ship Strength', Math.floor(Math.random() * 100 + 1) + '%'));
		} catch (err) {
			message.channel.send('Their was an error!\n' + err).catch();
		}
  }
}