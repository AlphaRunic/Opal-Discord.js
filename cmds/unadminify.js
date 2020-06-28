module.exports = {
  name: 'unadminify',
  category: 'Admin',
  desc: 'Sets a user to back to member from admin.',
	aliases: ['unadmin'],
	perms: 'admin',
  run: async (client,msg,args) => {
    if (args.length < 1) return msg.reply('Not enough arguments.').then(m => m.delete(5000));

		let user = msg.mentions.members.first();

		var myRole = msg.guild.roles.cache.find(role => role.name === "Admins").id;

		if (!myRole) return console.log('Use is not admin or admin role is not named "Admins"');

		//msg.channel.send(myRole);

		user.roles.remove(myRole);

		msg.channel.send(`Successfully unadminified ${user.user.tag}.`);
  }
}