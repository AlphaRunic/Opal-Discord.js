const { MessageEmbed } = require("discord.js");

const chooseArr = ["🗻", "📰", "✂"];

module.exports = {
    name: "rps",
    category: "Fun",
    desc: "Rock Paper Scissors game. React to one of the emojis to play the game.",
    run: async (client, msg, args) => {
				function promptMessage(msg, author, time, validReactions) {
        // We put in the time as seconds, with this it's being transfered to MS
        time *= 1000;

        // For every emoji in the function parameters, react in the good order.
        for (const reaction of validReactions)  msg.react(reaction);

        // Only allow reactions from the author, 
        // and the emoji must be in the array we provided.
        const filter = (reaction, user) => validReactions.includes(reaction.emoji.name) && user.id === author.id;

        // And ofcourse, await the reactions
        return msg
            .awaitReactions(filter, { max: 1, time: time})
            .then(collected => collected.first() && collected.first().emoji.name);
    }
        const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setFooter(msg.guild.me.displayName, client.user.displayAvatarURL)
            .setTitle("Add a reaction to one of these emojis to play the game!")
            .setTimestamp();

        const m = await msg.channel.send(embed);
        const reacted = await promptMessage(m, msg.author, 30, chooseArr);

        const botChoice = chooseArr[Math.floor(Math.random() * chooseArr.length)];

        const result = await getResult(reacted, botChoice);
        await m.reactions.removeAll().catch('Failed to remove reactions.');

        embed
            .setTitle(result, `${reacted} vs ${botChoice}`);

        m.edit(embed);

        function getResult(me, clientChosen) {
            if ((me === "🗻" && clientChosen === "✂") ||
                (me === "📰" && clientChosen === "🗻") ||
                (me === "✂" && clientChosen === "📰")) {
                    return "You won!";
            } else if (me === clientChosen) {
                return "It's a tie!";
            } else {
                return "You lost!";
            }
        }
    }
}