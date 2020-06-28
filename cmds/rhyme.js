const rhyme = require('rhyme');
module.exports = {
	name: 'rhyme',
	category: 'Fun',
	desc: 'Returns a rhymes to a word.',
	run: async(client,message,args,opal,Discord) => {
		try {
			if (!args[0]) return message.reply('You need to input the word to rhyme!');
			
			let msg = await message.reply('Fetching rhymes...');
		
			rhyme(async (rl) => {
				
				let rhymes = '';

				let words = rl.rhyme(args.join(' '));
				
				words.forEach(word => {
					rhymes += word.toLowerCase() + ', ';
				});

				rhymes = rhymes.slice(0, -2);

				let embed = new Discord.MessageEmbed({
					title: 'Rhyme',
					description: `**Rhyming Words**\n${rhymes || 'None Found.'}`,
					color: 'RANDOM'
				});

				msg.edit(embed);
			});
		} catch (err) {
			message.channel.send('There was an error!\n' + err).catch();
		}
  }
}