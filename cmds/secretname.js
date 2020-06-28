const anonymus = require('anonymus');
module.exports = {
	name: 'secretname',
	category: 'Fun',
	desc: 'Generates an unidentifiable name.',
	aliases: ['cryptoname','anonymous'],
	run: async (client,msg,args,opal,Discord) => {
		try {
			msg.channel.send(`**Here's your anonymous name:** *${anonymus.create()}*`);
		} catch {
			msg.channel.send('API error!');
		}
	}
}