module.exports = {
	name: 'oofception',
	category: 'Fun',
	desc: 'Returns an oofception.',
	aliases: ['oof'],
	run: async(client,message,args,opal,Discord) => {
		try {
			message.channel.send(new Discord.MessageAttachment('https://cdn.drawception.com/images/panels/2017/12-4/Lz4rnPE4Rt-2.png'));
		} catch (err) {
			message.channel.send('Their was an error!\n' + err).catch();
		}
  }
}