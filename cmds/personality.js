const types = ['Psychopath', 'Depressed', 'Cheerful', 'Bright', 'Dark', 'God', 'Deceiver', 'Funny', 'Fishy', 'Cool', 'Insecure', 'Lonely', 'Optimistic', 'Brave', 'Brilliant', 'Dreamer', 'Nurturer', 'Peaceful', 'Hot', 'Sexy', 'Perfect', 'Overthinker', 'Idealist'];
const social = ['Loser', 'The nice guy', 'The cute girl', 'Dank memer', 'Nerd', 'Kinky'];
const relationship = ['Single', 'Married', 'Taken', 'Forever alone'];
const hobbies = ['Art', 'Drawing', 'Painting', 'Singing', 'Writing', 'Anime', 'Memes', 'Minecraft', 'Subscribing to PewDiePie from alt accounts', 'Deleting T-Series'];
const genres = ['Nightcore', 'Punk', 'Rock', 'Heavy Metal', 'Alternative', 'EDM', 'Classical', 'Dubstep', 'Jazz', 'Pop', 'Rap', 'Country', 'Blues'];

function random(t) {
	return t[Math.floor(Math.random() * t.length)];
}

module.exports = {
	name: 'personality',
	category: 'Fun',
	desc: 'Returns the personality of a user.',
	run: async(client,message,args,opal,Discord) => {
		try {
			let user = message.mentions.members.first() || message.member;

			let embed = new Discord.MessageEmbed()
				.setTitle(`${message.author.username}'s Personality`)
				.setThumbnail(user.avatarURL)
				.addField('Type:', random(types))
				.addField('Social Status:', random(social))
				.addField('Relationship Status:', random(relationship))
				.addField('Hobby:', random(hobbies))
				.addField('Music Genre:', random(genres))
				.setColor('RANDOM');

			message.channel.send(embed);
		} catch (err) {
			message.channel.send('There was an error!\n' + err).catch();
		}
  }
}