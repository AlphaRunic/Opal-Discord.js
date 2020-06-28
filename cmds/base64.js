const { base64encode, base64decode } = require('nodejs-base64');

module.exports = {
  name: 'base64',
  category: 'Info',
  desc: "Returns a string encoded or decoded through Base64.",
	aliases: ['b64','base','crypto'],
  run: async (client,message,args,opal,discord) => {
		  try {
				//message.delete().catch();
				switch(args[0]) {
					case 'encode':
						if (!args.slice(1).join(' ')) return message.reply('You need to provide the string to encode!');
						message.channel.send(base64encode(args.slice(1).join(' ')));
						break;
					case 'decode':
						if (!args.slice(1).join(' ')) return message.reply('You need to provide the string to decode!');
						message.channel.send(base64decode(args.slice(1).join(' ')));
						break;
					default:
						return message.reply('You need to choose to Encode or Decode the string!');
						break;
				}
			} catch (err) {
				message.channel.send('There was an error!\n' + err).catch();
			}
  }
}