const search_img = require('g-i-s');
const cities = ['los angeles','new york','dubai','hong kong','melbourne','portland','seattle','washington dc','detroit','grand rapids','lansing','santa cruz california','san francisco','salt lake city','phoenix arizona','philadelphia','pittsburgh','atlanta','tampa','miami','london','paris','santa monica','mexico city','brasilia','anaheim','chicago','rock springs wyoming','tokyo','sydney australia','istanbul','boston','san bernardino','minneapolis','denver colorado','baltimore','cincinatti ohio','las vegas','virginia beach','raleigh north carolina','bakersfield california','baton rouge','el paso texas','de moines','beijing','singapore','buenos aires','vienna','montreal canada','vancouver','santiago chile','santo domingo','helsinki','cairo','copenhagen','berlin','hamburg','athens','budapest','rome','naples italy','busan sk','amsterdam','oslo','lima','manila philippines','madrid','barcelona','stockholm','bangkok','new castle','cleveland','caracas']
module.exports = {
	name: 'city',
	category: 'Fun',
	desc: 'Returns a random city.',
	run: async (client,msg,args,opal,Discord) => {
		const search = cities[Math.floor(Math.random() * cities.length)];
		search_img(search, send_image);
		function send_image(error,results) {
			if (error) return msg.channel.send('There was an error!' + error);
			const url = results[Math.floor(Math.random() * results.length)].url
			if (!url) return msg.channel.send('Could not find an image URL!');
			msg.channel.send(new Discord.MessageEmbed().setTitle(`Here's a city!`).setImage(url).setTimestamp().setColor('RANDOM'));
		}
	}
}