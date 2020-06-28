module.exports = {
  name: 'adminify',
  category: 'Admin',
  desc: 'Sets a user to admin.',
	aliases: ['admin'],
	perms: 'admin',
  run: async (client,msg,args) => {
    if (args.length < 1) return msg.reply('Not enough arguments.').then(m => m.delete(5000));

		let user = msg.mentions.members.first();

		var myRole = msg.guild.roles.cache.find(role => role.name === "Admins").id;

		if (!myRole) {
			msg.guild.roles.create({
				data: {
					name: 'Admins',
					color: 'RED',
					permissions: ['ADMINISTRATOR']
				},
				reason: 'No Admins role was defined, so your friend Opal created one!',
			})
				.then(console.log)
				.catch(console.error);
			myRole = msg.guild.roles.cache.find(role => role.name === "Admins").id;
		}

		//msg.channel.send(myRole);

		user.roles.add(myRole);

		msg.channel.send(`Successfully adminified ${user.user.tag}.`);
  }
}