module.exports = {
    name: 'invite',
		category: 'Info',
    desc: 'Create an invite link for Opal.',
		aliases: ['link'],
    run: async (client, message, args) =>  {
        message.channel.send(`**Here is my invite link!** :link: \nhttps://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8`);
    },
};