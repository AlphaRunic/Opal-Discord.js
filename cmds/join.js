module.exports = {
  name: 'join',
  category: 'Fun',
	aliases: ['combine'],
  desc: 'Returns whatever is inputted joined together.',
  run: async (client,msg,args) => {
    //if (msg.deletable) msg.delete();
    if (args.length < 1) return msg.reply('Nothing to join.').then(m => m.delete(5000));

		function joinstr(s){
    	return s.split(" ").join("");
		}

		let message = joinstr(args.join(' '));

    msg.channel.send(message);
  }
}