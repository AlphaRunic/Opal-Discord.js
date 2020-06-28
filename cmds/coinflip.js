module.exports = {
  name: 'coinflip',
  category: 'Fun',
  desc: 'Returns Heads or Tails.',
	aliases: ['flipcoin','coin','flip'],
  run: async (client,msg,args) => {
		let message;
		if (50 >= Math.random() * 100) {
			message = 'Heads!';
		} else {
			message = 'Tails!';
		}
		
    msg.channel.send(message);
  }
}