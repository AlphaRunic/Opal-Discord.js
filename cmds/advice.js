const request = require('superagent')
module.exports = {
	name: 'advice',
	category: 'Fun',
	desc: 'Gives random life advice.',
	run: async (client,msg,args) => {
		request
            .get('http://api.adviceslip.com/advice')
            .end((err, res) => {
                if (!err && res.status === 200) {
                    try {
                        JSON.parse(res.text);
                    } catch (e) {
                        return message.reply(', an api error occurred.');
                    }
                    const advice = JSON.parse(res.text);
                    msg.channel.send(`*${advice.slip.advice}*`);
                } else {
                console.error(`REST API call failed: ${err}, status code: ${res.status}`);
                }
            });
	}
}