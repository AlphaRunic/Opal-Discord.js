module.exports = {
	name:  'egg',
	category: 'Fun',
	desc: 'i love you egg',
	aliases: ['eggsong'],
	run: async (client,message,args,opal,Discord) => {
		try {
			message.channel.send(':egg::egg::egg:\nhttps://www.youtube.com/watch?v=GNndX9qua1o');
		} catch (err) {
			message.channel.send('There was an error!\n' + err).catch();
		}
	}
}