module.exports = {
  name: 'reverse',
  category: 'Fun',
  desc: 'Returns whatever is inputted backwards. ',
	aliases: ['rev'],
  run: async (client,msg,args) => {
    if (args.length < 1) return msg.reply('Nothing to reverse.').then(m => m.delete(5000));

		function reverseString(s){
    	return s.split("").reverse().join("");
		}

    msg.channel.send(reverseString(args.join(' ')))
  }
}