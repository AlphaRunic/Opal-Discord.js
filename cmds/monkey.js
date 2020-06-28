module.exports = {
	name: 'monkey',
	category: 'Fun',
	desc: 'monkey coughs',
	aliases: ['ape','orangutan','420monkey'],
	run: async (client,msg,args,opal,Discord) => {
		try {
			msg.channel.send('https://bit.ly/3id06Sm');
		} catch (err) {
			msg.channel.send('There was (somehow) an error! \n' + err);
		}
	}
}