
const request = require('superagent');

module.exports = {
    name: 'insult',
		category: 'Fun',
		aliases: ['hateon'],
    desc: 'Insults the tagged user or the message sender if no one is tagged.',
    run: async (client, message, args) => {
        const user = message.mentions.members.first() || message.member;

        request.get('http://quandyfactory.com/insult/json/')
            .end((err, res) => {
                if (!err && res.status === 200) {
                    const fancyinsult = res.body;
                    message.channel.send(`${user}, ${fancyinsult.insult.toLowerCase()}`);
                } 
                else {
                    console.log(`REST API call failed: ${err}`)
                }
            });
    },
};