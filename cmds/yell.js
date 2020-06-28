module.exports = {
  name: 'yell',
  category: 'Fun',
	aliases: ['shout','scream','caps'],
  desc: 'Returns whatever is inputted capitalized.',
  run: async (client,msg,args) => {
    if (args.length < 1) return msg.reply('Nothing to yell.').then(m => m.delete(5000));

		let message = args.join(' ').toUpperCase();

    msg.channel.send(message);
  }
}