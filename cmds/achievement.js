module.exports = {
	name: 'achievement',
	category: 'Fun',
	desc: 'Returns a Minecraft achievement.',
	aliases: ['achievementget','mcachievement','achieve','mcachieve'],
	run: async(client,message,args,opal,Discord) => {
		try {
			if (!args[0]) return message.reply('You need to input somthing to make an achievement!');
			
			message.channel.send(new Discord.MessageAttachment('https://www.minecraftskinstealer.com/achievement/a.php?i=20&h=Achievment+Get!&t=' + encodeURIComponent(args.join(' ')), 'mc.png'))  
		} catch (err) {
			message.channel.send('There was an error!\n' + err).catch();
		}
  }
}