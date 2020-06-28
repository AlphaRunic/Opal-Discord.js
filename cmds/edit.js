module.exports = {
	name: 'edit',
	category: 'Giveaway',
	perms: 'admin',
	desc: 'Edits a giveaway with a message ID, time to add, new winner count, and a new prize.',
	run: async (client,message,args,opal,Discord) => {
		let messageID = args[0];
		args.shift();
		let time = args[0];
		args.shift();
		let winnercount = args[0];
		args.shift()
		let prize = args.join(' ');
		if (!messageID) return msg.reply('you need to specify a message ID for a giveaway!');
		if (!time) return msg.reply('you need to specify an amount of time to add!');
		if (!winnercount) return msg.reply('you need to specify a winner count!');
		if (!prize) return msg.reply('you need to specify a prize!');
    client.giveawayManager.edit(messageID, {
      newWinnerCount: winnercount,
      newPrize: prize,
      addTime: time
    }).then(() => {
      message.channel.send("Success! Giveaway will updated in less than "+(manager.updateCountdownEvery/1000)+" seconds.");
    }).catch((err) => {
      message.channel.send("No giveaway found for "+messageID+", please check and try again");
    });
	}
}