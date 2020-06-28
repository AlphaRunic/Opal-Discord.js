const { createCanvas, loadImage, registerFont } = require('canvas');
const path = require('path');
registerFont(path.join(__dirname, '..', 'assets', 'fonts', 'Noto-Regular.ttf'), { family: 'Noto' });
registerFont(path.join(__dirname, '..', 'assets', 'fonts', 'Noto-CJK.otf'), { family: 'Noto' });
registerFont(path.join(__dirname, '..', 'assets', 'fonts', 'Noto-Emoji.ttf'), { family: 'Noto' });
module.exports = {
  name: 'sos',
  category: 'Fun',
	aliases: ['esther'],
  desc: 'Returns an Esther Vereska comic with your message.',
  run: async (client,msg,args) => {
		const message = args.join()
    const base = await loadImage(path.join(__dirname, '..', 'assets', 'images', 'sos.png'));
		const canvas = createCanvas(base.width, base.height);
		const ctx = canvas.getContext('2d');
		ctx.drawImage(base, 0, 0);
		ctx.font = '90px Noto';
		ctx.fillStyle = 'black';
		ctx.textAlign = 'center';
		ctx.textBaseline = 'middle';
		ctx.rotate(15 * (Math.PI / 180));
		let fontSize = 90;
		while (ctx.measureText(message).width > 140) {
			fontSize--;
			ctx.font = `${fontSize}px Noto`;
		}
		ctx.fillText(message.toUpperCase(), 362, 522);
		ctx.rotate(-15 * (Math.PI / 180));
		return msg.channel.send({ files: [{ attachment: canvas.toBuffer(), name: 'sos.png' }] });
  }
}
