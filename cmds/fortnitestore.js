const API = require('fortnite');
module.exports = {
	name: 'fortnitestore',
	category: 'Info',
	desc: 'Returns the Fortnite shop.',
	aliases: ['fortniteshop'],
	run: async (client,msg,args,opal,Discord,defargs) => {
		try {
			let item_pos = args[0];
			if (!item_pos) item_pos = 0;
			const fortnite = new API(process.env.TRACKER_API);
			const store = await fortnite.store();
			const item = store[item_pos];
			let embed = new Discord.MessageEmbed()
				.setTitle(item.name)
				.addField('Rarity',item.rarity)
				.addField('Price',item.vbucks)
				.setImage(item.image)
				.setColor('RANDOM')
				.setFooter('API by tracker.gg')
				.setTimestamp();
			msg.channel.send(embed);
		} catch (err) {
			msg.channel.send('Error: ' + err + '\nStack trace:\n' + err.message);
		}
	} 
}