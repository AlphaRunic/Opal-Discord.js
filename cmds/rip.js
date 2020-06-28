module.exports = {
	name: 'rip',
	category: 'Fun',
	desc: 'RIP',
	run: async(client,message,args,opal,Discord) => {
		try {
			message.channel.send(new Discord.MessageAttachment('https://cdn.discordapp.com/emojis/230989718471442432.png'));
		} catch (err) {
			message.channel.send('There was an error!\n' + err).catch();
		}
  }
}