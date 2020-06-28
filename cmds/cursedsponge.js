const { createCanvas, loadImage } = require('canvas');
const path = require('path');
module.exports = {
	name: 'cursedsponge',
	category: 'Fun',
	aliases: ['cursedspongebob','spongesnail'],
	desc: 'Returns an image of cursed SpongeBob.',
	run: async (client,msg,args,opal,Discord) => {
		let amount = parseInt(args[0]);
		if (amount > 200) amount = 200;
		if (amount < 1) amount = 1;
		if (!amount) amount = 1;
		const sponge = await loadImage(path.join(__dirname, '..', 'assets', 'images', 'snailified.png'));
		const rows = Math.ceil(amount / 10);
		const canvas = createCanvas(sponge.width * (rows > 1 ? 10 : amount), sponge.height * rows);
		const ctx = canvas.getContext('2d');
		let width = 0;
		for (let i = 0; i < amount; i++) {
			const row = Math.ceil((i + 1) / 10);
			ctx.drawImage(sponge, width, sponge.height * (row - 1));
			if ((width + sponge.width) === (sponge.width * (rows > 1 ? 10 : amount))) width = 0;
			else width += sponge.width;
		}
		return msg.channel.send({ files: [{ attachment: canvas.toBuffer(), name: 'cursed-sponge.png' }] });
	}
}