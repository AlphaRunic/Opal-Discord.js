module.exports = {
	name: 'pin',
	category: 'Admin',
	aliases: ['pinmsg'],
	desc: 'Pins a message.',
	perms: 'admin',
	run: async (client,message,args,opal,Discord) => {
		try {
			message.channel.messages.fetch({limit: 2}).then(async messages => {
				if (!Array.from(messages.keys())[1]) return message.reply('You have to send a message to pin!');
				let msg = messages.get(Array.from(messages.keys())[1]);
				msg.pin().catch(() => {
					return message.reply('There was an error!');
				});
				message.channel.send('I\'ve pinned the message!');
			});
		} catch (err) {
			message.channel.send('There was an error!\n' + err).catch();
		}
  }
}