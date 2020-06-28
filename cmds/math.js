module.exports = {
	name: 'math',
	category: 'Info',
	desc: 'Returns any expression passed',
	run: async (client,msg,args) => {
		//msg.channel.send('math cmd ran')
		if (args.length < 1) return msg.reply('Nothing to parse.').then(m => m.delete(5000));

		let operation = args[0].toLowerCase();
		let num_1 = Number(args[1]);
		let num_2 = Number(args[2]);
		
		if (operation === 'add') {
			let result = (num_1 + num_2).toString();
			msg.reply('Result: ' + result);
		} else if (operation === 'sub') {
			let result = (num_1 - num_2).toString();
			msg.reply('Result: ' + result);
		} else if (operation === 'mult') {
			let result = (num_1 * num_2).toString();
			msg.reply('Result: ' + result);
		} else if (operation === 'div') {
			let result = (num_1 / num_2).toString();
			msg.reply('Result: ' + result);
		} else if (operation === 'mod') {
			function mod(n, m) {
				return ((n % m) + m) % m;
			}
			let result = mod(num_1,num_2).toString();
			msg.reply('Result: ' + result);
		} else if (operation === 'pow') {
			let result = (num_1 ** num_2).toString();
			msg.reply('Result: ' + result);
		}
	},
}