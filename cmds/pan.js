module.exports = {
	name: 'pan',
	category: 'Fun',
	desc: 'Returns Saul\'s Pan.',
	run: async(client,message,args,opal,Discord) => {
		try {
			message.channel.send("**Welcome to Saul's Pan.** :shallow_pan_of_food:\n https://discord.gg/vvsNgcy");
		} catch (err) {
			message.channel.send('There was an error!\n' + err).catch();
		}
  }
}