const ms = require("ms");
module.exports = {
	name: 'giveaway',
	category: 'Giveaway',
	perms: 'admin',
	desc: 'Starts a giveaway in the channel executed in.',
	run: async (client,message,args,opal,Discord) => {
		if (!args[0]) return message.reply('specify a time!');
		if (!args[1]) return message.reply('specify a winner amount!');
		if (!args.slice(2).join(' ')) return message.reply('specify a prize!')
		client.giveawayManager.start(message.channel, {
      time: ms(args[0]),
      prize: args.slice(2).join(" "),
      winnerCount: parseInt(args[1])
    });
	}
}