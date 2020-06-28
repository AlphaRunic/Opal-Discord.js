module.exports = {
	name: 'attach',
	desc: 'Sends an attached file.',
	aliases: ['file'],
	category: 'Fun',
	run: async (client, msg, args, opal, discord) => {
		let attachment = new discord.MessageAttachment(args.join(' '));
		msg.channel.send(attachment);
	}
}