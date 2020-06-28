const request = require('superagent');
module.exports = {
	name: 'gif',
	category: 'Fun',
	aliases: ['randomgif'],
	desc: 'Returns a random GIF.',
	run: async (client,msg,args) => {
		request
            .get('http://api.giphy.com/v1/gifs/random')
            .set('api_key', 'dc6zaTOxFJmzC')
            .query({ rating: msg.channel.nsfw === true ? 'r' : 'pg13', fmt: 'json' })
            .query(`tag=${args.join('+')}`)
            .then(res => {
                if (res.statusCode !== 200 || res.body.meta.status !== 200) return msg.channel.send('API_ERROR')
                if (res.body.data.id !== undefined) {
										//msg.channel.send(`(debug) nsfw?: ${msg.channel.nsfw}`);
                    return msg.channel.send(`http://media.giphy.com/media/${res.body.data.id}/giphy.gif`)
                } else {
                    return msg.channel.send(`NO_RESULTS, ${args}`);
                }
            }).catch(msg.channel.send);
	}
}