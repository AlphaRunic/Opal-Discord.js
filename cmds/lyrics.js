const solenolyrics = require("solenolyrics"); 
const { MessageEmbed } = require("discord.js");
module.exports = {
  name: 'lyrics',
  category: 'Info',
	aliases: ['songlyrics','lyr'],
  desc: 'Returns the lyrics of the song provided.',
  run: async (client,msg,args) => {
		//try {
			let song = args.join(' ')
			var lyrics = await solenolyrics.requestLyricsFor(song);
			lyrics = lyrics.substring(0,2047); 
			//msg.channel.send(`song length: ${lyrics.length}`);
			if (lyrics.length >= 2048)
				return msg.channel.send('Error: song is too long to be sent through Discord.');
			var embed = new MessageEmbed()
				.setColor('RANDOM')
				.setTitle(`Lyrics to ${song}`)
				.setDescription(lyrics);
			msg.channel.send(embed);
		//} catch (err) {
			//msg.channel.send('Error: ' + err)
		//}
  }
}