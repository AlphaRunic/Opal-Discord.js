const request = require('request');
module.exports = {
	name: 'urban',
	category: 'Fun',
	desc: 'Returns the Urban Dictionary definition of what is passed.',
	run: async (client, msg, [search, resultNum]) => {
		const baseUrl = "http://api.urbandictionary.com/v0/define?term=";
		const theUrl = baseUrl + search;
		request({
			url: theUrl,
			json: true,
		}, (error, response, body) => {
			if (!resultNum) {
				resultNum = 0;
			} else if (resultNum > 1) {
				resultNum -= 1;
			}
			const result = body.list[resultNum];
			if (result) {
				const definition = [
					`**Word** ${search}`,
					"",
					`**Definition** ${resultNum += 1} out of ${body.list.length}\n${result.definition}`,
					"",
					`**Example**\n${result.example}`,
					`<${result.permalink}>`,
				];
				msg.channel.send(definition).catch(err => client.funcs.log(err.stack, "error"));
			} else {
				msg.channel.send("No entry found.").catch(err => client.funcs.log(err.stack, "error"));
			}
		});
	}
}