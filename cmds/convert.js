const convert = (degree, args, message) => {
  let x;
  if (degree == 'C') {
    x = args[1] * 9 / 5 + 32;
    if (isNaN(args[1])) {
      message.reply(args[1] + ' is not a number!');
    } else {
      message.channel.send('The temperature in Fahrenheit is ' + Math.round(x) + '°F');
    }
  } else if (degree == 'F') {
    x = (args[1] -32) * 5 / 9;
    if (isNaN(args[1])) {
      message.reply(args[1] + ' is not a number!');
    } else {
      message.channel.send('The temperature in Celsius is ' + Math.round(x) + '°C');
    }
  } else {
    message.reply('You have to choose C or F!');
  }
}

module.exports = {
	name: 'convert',
	category: 'Info',
	desc: 'Convert a temperature from Celsius or Fahrenheit.',
	aliases: ['tempconvert'],
	run: async (client,message,args,opal,Discord) => {
		try {
			if (args[0] == 'c') {
				convert('C', args, message);
			} else if (args[0] == 'f') {
				convert('F', args, message);
			} else {
				message.reply('You have to choose C or F!');
			}
		} catch (err) {
			message.channel.send('Their was an error!\n' + err).catch();
		}
	}
}