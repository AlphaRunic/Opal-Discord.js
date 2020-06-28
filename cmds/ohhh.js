module.exports = {
	name: 'ohhh',
	category: 'Fun',
	aliases: ['roasted','flamed','burned','boom','bam','ohh'],
	desc: 'Returns a GIF of supa hot fia.',
	run: async(client,message,args,opal,Discord) => {
		try {
			message.channel.send('https://tenor.com/view/swag-crew-super-hot-funny-gif-11988752');
		} catch (err) {
			message.channel.send('There was an error!\n' + err).catch();
		}
  }
}