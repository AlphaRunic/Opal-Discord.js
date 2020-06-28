module.exports = {
  name: 'dm',
  category: 'Admin',
  desc: 'DMs a user a message.',
	aliases: ['msg','pm','message'],
	perms: 'admin',
  run: async (client,msg,args) => {
		try {
			if (args.length < 2) return msg.reply('Not enough arguments.').then(m => m.delete(5000));

			let mem = msg.mentions.members.first();
			let user = mem.id;
			args.shift()
			let mess = args.join(' ');

			let person = await client.users.fetch(user);
			person.send(mess);
			msg.channel.send(`Message successfully sent to ${person.username}.`);
		} catch (err) {
			msg.channel.send(`Error: ${err}\nStack trace:\n${err.message}`);
		}
  }
}