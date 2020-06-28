module.exports = {
  name: 'avatar',
  category: 'Info',
  desc: "Returns the user's avatar.",
	aliases: ['icon','pfp'],
  run: async (client,msg,args) => {
		let mem = msg.mentions.members.first();
		let user;
		if (!mem) {
			user = await client.users.fetch(msg.member.user.id);
		} else {
			user = await client.users.fetch(mem.id);
		}
		
		msg.channel.send(user.displayAvatarURL());
  }
}