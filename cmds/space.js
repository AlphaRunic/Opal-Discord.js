module.exports = {
  name: 'space',
  category: 'Fun',
	aliases: ['separate','spacify'],
  desc: 'Returns whatever is inputted spaced out/separated.',
  run: async (client,msg,args) => {
    //if (msg.deletable) msg.delete();
    if (args.length < 1) return msg.reply('Nothing to join.').then(m => m.delete(5000));

		function sepstr(s){
    	return s.split("").join(' ');
		}

		let message = sepstr(args.join(' '));

    msg.channel.send(message);
  }
}