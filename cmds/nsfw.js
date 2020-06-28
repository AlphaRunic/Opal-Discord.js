const Porn = require('pornsearch');
const search_queries = ['ass','tits','pussy','sex','milf','blowjob','cumshot','twerk','fingering','lesbian','face riding', 'deepthroat', 'assjob','lap dance','anal','squirt','orgasm']
module.exports = {
	name: 'nsfw',
	category: 'NSFW',
	aliases: ['porn'],
	desc: 'Returns a porn clip.',
	run: async (client,msg,args,opal,Discord) => {
		try {
			if (!msg.channel.nsfw)
				return msg.reply('you need to be in an NSFW channel to use NSFW commands! ya nasty...')

			let webm;
			let video;
			let search = args.join(' ');
			if (search.search('webm') > -1 && !video) webm = true; search.replace('webm','');
			if (search.search('video') > -1 && !webm) video = true; search.replace('video','');
			
			if (!search || !args[0])
				search = search_queries[Math.floor(Math.random() * search_queries.length)];

			const Pornsearch = Porn.search(search);
			if (!video) {
				const gifs = await Pornsearch.gifs();
				let gif = gifs[Math.floor(Math.random() * gifs.length)].url;
				if (!gif || gif.search('undefined') > -1 || webm === true) gif = new Discord.MessageAttachment(gifs[Math.floor(Math.random() * gifs.length)].webm);
				//console.log(gifs);
				msg.channel.send(`**Here's a porn clip.** :hot_face:`);
				msg.channel.send(gif);
			} else {
				const vids = await Pornsearch.videos();
				let vid = vids[Math.floor(Math.random() * vids.length)].url;
				msg.channel.send(`**Here's a porn video.** :hot_face:`);
				msg.channel.send(vid);
			}
		} catch (err) {
			msg.channel.send('Error! ' + err + '\nStack trace:' + err.message).catch();
		}
	}
}