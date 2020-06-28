const { MessageEmbed } = require("discord.js");


module.exports = {
    name: "love",
    aliases: ["affinity",'lovecalc'],
    category: "Fun",
    desc: "Calculates the love affinity you have for another person.",
    run: async (client, msg, args) => {
        // Get a member from mention, id, or username
				function getMember(msg, toFind='') {
					toFind = toFind.toLowerCase();

					let target = msg.guild.members.cache.get(toFind);
					
					if (!target && msg.mentions.members)
							target = msg.mentions.members.first();

					if (!target && toFind) {
							target = msg.guild.members.find(member => {
									return member.displayName.toLowerCase().includes(toFind) ||
									member.user.tag.toLowerCase().includes(toFind)
							});
					}
							
					if (!target) 
							target = msg.member;
							
					return target;
				}
				
        let person = getMember(msg, args[0]);

        if (!person || msg.author.id === person.id) {
            person = msg.guild.members.cache
                .filter(m => m.id !== msg.author.id)
                .random();
        }

        const love = Math.random() * 100;
        const loveIndex = Math.floor(love / 10);
        const loveLevel = "💖".repeat(loveIndex) + "💔".repeat(10 - loveIndex);

        const embed = new MessageEmbed()
						.setTitle(`${person.displayName}'s love affinity for you:`)
            .setColor("#ffb6c1")
            .addField(`☁ **${person.displayName}** loves **${msg.member.displayName}** this much:`,
            `💟 ${Math.floor(love)}%\n\n${loveLevel}`);

        msg.channel.send(embed);
    }
}