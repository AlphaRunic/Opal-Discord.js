module.exports = {
	name: 'delete',
	category: 'Giveaway',
	aliases: ['delgiveaway'],
	perms: 'admin',
	desc: 'Deletes a giveaway with a message ID specified.',
	run: async (client,message,args,opal,Discord) => {
		let messageID = args[0];
        client.giveawayManager.delete(messageID).then(() => {
            message.channel.send("Success! Giveaway deleted!");
        }).catch((err) => {
            message.channel.send("No giveaway found for "+messageID+", please check and try again");
        });
	}
}