module.exports = {
  name: 'random',
  category: 'Fun',
  desc: 'Returns a number between 0 and the number provided.',
  run: async (client,msg,args) => {
		let num = args[0]
		if (!num) {
			num = 1;
		};
		let diceNum = Math.random() * num;

		if (diceNum >= 1) {
			diceNum = Math.floor(diceNum);
		};

		msg.channel.send(`Your number: ${diceNum}`);
  }
}