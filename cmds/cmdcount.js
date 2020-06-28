module.exports = {
	name: 'cmdcount',
	category: 'Info',
	aliases: ['cc','cmdamt'],
	desc: 'Returns the amount of commands Opal has implemented.',
	run: async (client,msg,args,opal) => {
		msg.channel.send(`I have ${opal.commands} commands.`);
	}
}