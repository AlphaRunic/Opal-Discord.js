module.exports = {
	name: 'reroll',
	category: 'Giveaway',
	perms: 'admin',
	desc: 'Rerolls a winner to a giveaway with the giveaway message ID specified.',
	run: async (client,message,args,opal,Discord) => {
		let messageID = args[0];
    client.giveawayManager.reroll(messageID).then(() => {
	    message.channel.send("Success! Giveaway rerolled!");
  	}).catch((err) => {
      message.channel.send("No giveaway found for "+messageID+", please check and try again");
    });
	}
}