module.exports = {
	name: 'liedetector',
	category: 'Fun',
	desc: 'Returns what percentage of lies your message is.',
	aliases: ['liedetect','liar'],
	run: async(client,message,args,opal,Discord) => {
		try {
			message.channel.send('Your message is **' + Math.floor(Math.random() * 100) + '%** lies.');
		} catch (err) {
			message.channel.send('Their was an error!\n' + err).catch();
		}
  }
}