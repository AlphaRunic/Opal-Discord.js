const db = require('quick.db');
module.exports = {
	name: 'prefix',
	aliases: ['cmdprefix','setprefix'],
	category: 'Admin',
	desc: 'Sets Opal\'s prefix to the value provided. (less than 7 characters)',
	perms: 'admin',
	run: async (client,msg,args,opal) => {
		const db_tag = `prefix_${msg.guild.id}`;
		if (args[1]) 
			return msg.channel.send('You cannot set the prefix to a double argument!');
		if (!args[0])
			return msg.channel.send('Please specify a prefix to change to.');
		if (args[0].length > 6)
			return msg.channel.send('Your prefix can not be more than 6 characters!');
		
		//msg.channel.send(args[0])
		//msg.channel.send(opal.prefix)
		if (args[0] == opal.prefix) {
			try {
				db.delete(db_tag)
			} catch (err) {
				msg.channel.send('Database error: ' + err);
			}
			return await msg.channel.send('**Reset prefix!** :white_check_mark:');
		} else {
			//else
			try {
				db.set(db_tag, { prefix: args[0] })
			} catch (err) {
				msg.channel.send('Database error: ' + err);
			}

			await msg.channel.send(`Successfully set prefix to **${args[0]}**!`);
		}
	}
}