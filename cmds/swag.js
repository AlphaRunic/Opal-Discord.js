module.exports = {
	name: 'swag',
	category: 'Fun',
	desc: 'Swagify!',
	run: async(client,message,args,opal,Discord) => {
		try {
			message.channel.send('https://tenor.com/view/guyfieri-gif-6119512');
		} catch (err) {
			message.channel.send('There was an error!\n' + err).catch();
		}
  }
}