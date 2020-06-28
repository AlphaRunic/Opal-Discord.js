const leet = (string) => {
  string = string.replace(/l|i/gi, '1');
  string = string.replace(/z/gi, '2');
  string = string.replace(/e/gi, '3');
  string = string.replace(/a/gi, '4');
  string = string.replace(/s/gi, '5');
  string = string.replace(/G/g, '6');
  string = string.replace(/t/gi, '7');
  string = string.replace(/b/gi, '8');
  string = string.replace(/g/g, '9');
  string = string.replace(/o/gi, '0');
  return string;
};

module.exports = {
	name: 'leet',
	category: 'Fun',
	aliases: ['l33t','1337','leetify'],
	desc: 'Leetifies a message.',
	run: async (client,message,args,opal,Discord) => {
		try {
			if (!args[0]) {
				message.channel.send('You must provide a message to leetify!');
			} else message.channel.send(leet(args.join(' ')));
		} catch (err) {
			message.channel.send('There was an error!\n' + err).catch();
		}
  }
}