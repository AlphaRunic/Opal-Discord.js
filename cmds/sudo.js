module.exports = {
  name: 'sudo',
  category: 'Fun',
	aliases: ['say'],
  desc: 'Returns whatever is inputted. (-reverse for reversed text)',
  run: async (client,msg,args) => {
    if (msg.deletable) msg.delete();
    if (args.length < 1) return msg.reply('Nothing to sudo.').then(m => m.delete(5000));

		function reverseString(s){
    	return s.split("").reverse().join("");
		}

		let message = args.join(' ');

		if (message.search('-reverse') > 0) {
			message = message.replace('-reverse', '');
			message = reverseString(message);
		}

		if (message.search('@everyone') > 0) {
			message = message.replace('@everyone','');
		}

		if (message.search('@here') > 0) {
			message = message.replace('@here','');
		}

    msg.channel.send(message);
  }
}