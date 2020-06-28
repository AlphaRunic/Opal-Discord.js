const db = require('quick.db')
module.exports = {
  name: 'autoreply',
  category: 'Admin',
	perms: 'admin',
  desc: 'Enables/disables auto-reply commands.',
  run: async (client,msg,args) => {
    let disabled = db.get(`autoreplyoff_${msg.guild.id}`);
		if (disabled) {
			db.set(`autoreplyoff_${msg.guild.id}`, false);
			return msg.channel.send('Auto Reply commands enabled.')
		} else {
			db.set(`autoreplyoff_${msg.guild.id}`, true);
			return msg.channel.send('Auto Reply commands disabled.')
		}
  }
}