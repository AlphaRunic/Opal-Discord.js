const { createCanvas, loadImage } = require('canvas');
const request = require('node-superfetch');
const path = require('path');
module.exports = {
  name: 'bobross',
  category: 'Fun',
  desc: 'Returns a user\'s avatar "Bob Ross-ified".',
  run: async (client,msg,args,opal,Discord) => {
		let user = msg.author;
		const ment = msg.mentions.members.first();
		if (ment) user = ment.user;
		const avatarURL = user.displayAvatarURL({ format: 'png', size: 512 });
		try {
			const base = await loadImage(path.join(__dirname, '..', 'assets', 'images', 'bob-ross.png'));
			const { body } = await request.get(avatarURL);
			const avatar = await loadImage(body);
			const canvas = createCanvas(base.width, base.height);
			const ctx = canvas.getContext('2d');
			ctx.fillStyle = 'white';
			ctx.fillRect(0, 0, base.width, base.height);
			ctx.drawImage(avatar, 15, 20, 440, 440);
			ctx.drawImage(base, 0, 0);
			return msg.channel.send({ files: [{ attachment: canvas.toBuffer(), name: 'bob-ross.png' }] });
		} catch (err) {
			return msg.reply(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
		}
  }
}