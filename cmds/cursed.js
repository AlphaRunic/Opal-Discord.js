let cursedImages = [
	'https://i.chzbgr.com/full/9273239040/h40276077/cursed-image-bun-head-eating-hotdog',
	'https://ruinmyweek.com/wp-content/uploads/2018/12/19-pictures-literally-no-one-on-the-internet-should-be-allowed-to-see-6.jpg',
	'https://i.redd.it/f4hxtei3qyv11.jpg',
	'https://a.wattpad.com/cover/202454657-288-k280660.jpg',
	'https://i.redd.it/xzpz2hw7el631.jpg',
	'https://i.redd.it/1ht02x61yxn21.jpg',
	'https://i.ytimg.com/vi/G6q6o4s0YeQ/maxresdefault.jpg',
	'https://66.media.tumblr.com/161ceea6f9f41f0ef982af568ab27c08/17daf5dcbbc3fd90-23/s500x750/c8f246601da151944408f98f425825d150094f5f.png',
	'https://i.redd.it/bomure86s6z21.jpg',
	'https://i.redd.it/ejuj92oaf9x31.jpg',
  'https://media.discordapp.net/attachments/544924982195650581/546200058551336963/991f263.jpg?width=441&height=280',
  'https://media.discordapp.net/attachments/544924982195650581/546200293189353473/b4ef32c.jpg?width=345&height=330',
  'https://media.discordapp.net/attachments/544924982195650581/546199903454625804/851408d.jpg?width=331&height=331',
  'https://media.discordapp.net/attachments/544924982195650581/546199802745192458/a2e5ab9.jpg?width=333&height=330',
  'https://media.discordapp.net/attachments/544924982195650581/546200378048512011/e25cd43.jpg?width=161&height=330',
  'https://media.discordapp.net/attachments/544924982195650581/546199717751685130/ff37a6b.jpg?width=248&height=331',
  'https://cdn.discordapp.com/attachments/544924982195650581/546199361844019220/ce9668c.jpg',
  'https://images-ext-2.discordapp.net/external/j6rF01lKMC-51AX6O3VQMjEeKLO4yEw5WokM3mrFd9A/https/cdn.discordapp.com/attachments/544924982195650581/546199274015424522/ce134f1.jpg?width=336&height=330',
  'https://media.discordapp.net/attachments/544924982195650581/546199274015424522/ce134f1.jpg?width=336&height=330',
  'https://media.discordapp.net/attachments/544924982195650581/546200473800278026/a53279c.jpg?width=337&height=330',
  'https://media.discordapp.net/attachments/544924982195650581/546200565407940608/c2d27d6.jpg?width=337&height=330',
  'https://media.discordapp.net/attachments/544924982195650581/546200653614284811/736bbdc.jpg?width=241&height=331',
  'https://cdn.discordapp.com/attachments/544924982195650581/546201053851418625/2ab5ac5.jpg',
  'https://media.discordapp.net/attachments/544924982195650581/546201265487478796/89bc3c3.jpg?width=259&height=331',
  'https://media.discordapp.net/attachments/544924982195650581/546201398694641664/295312e.jpg?width=221&height=330',
  'https://media.discordapp.net/attachments/544924982195650581/546201571608887332/bf958fa.jpg?width=385&height=331',
  'https://media.discordapp.net/attachments/544924982195650581/546201691566112788/baa305e.jpg?width=314&height=330',
  'https://media.discordapp.net/attachments/544924982195650581/546201839381512193/b9acceb.jpg?width=322&height=331',
  'https://media.discordapp.net/attachments/544924982195650581/546201988703191071/1964229.jpg?width=275&height=331',
  'https://media.discordapp.net/attachments/544924982195650581/546202122325196811/b6e2224.jpg?width=336&height=330',
  'https://media.discordapp.net/attachments/544924982195650581/546202342505316352/ff69864.jpg?width=441&height=231',
  'https://media.discordapp.net/attachments/544924982195650581/546202474457989130/5f2c9b9.jpg?width=263&height=330',
  'https://media.discordapp.net/attachments/544924982195650581/546202630238633985/e69f070.jpg?width=343&height=331',
  'https://media.discordapp.net/attachments/544924982195650581/546202888020557825/9198f64.jpg?width=341&height=331',
  'https://media.discordapp.net/attachments/544924982195650581/546203331429662752/783e881.jpg?width=336&height=330',
  'https://media.discordapp.net/attachments/544924982195650581/546203486480629770/d0ac499.jpg?width=351&height=331',
  'https://media.discordapp.net/attachments/544924982195650581/546203612347498506/5941cc1.jpg?width=341&height=331',
  'https://media.discordapp.net/attachments/544924982195650581/546203788072189962/42fb9cf.jpg?width=331&height=331',
  'https://media.discordapp.net/attachments/544924982195650581/546204204176244746/7c7fa1d.jpg?width=297&height=331',
  'https://media.discordapp.net/attachments/544924982195650581/546204325563858954/d603099.jpg?width=341&height=331',
  'https://media.discordapp.net/attachments/544924982195650581/546204528509190144/2820bfd.jpg?width=322&height=331'
];

module.exports = {
	name: 'cursed',
	category: 'Fun',
	aliases: ['cursedimg'],
	desc: 'Returns a cursed image.',
	run: async (client, message, args, opal, discord) => { // eslint-disable-line no-unused-vars
		try {    
			let embed = new discord.MessageEmbed()
				.setTitle('Cursed Image')
				.setColor('RANDOM')
				.setImage(cursedImages[Math.floor(Math.random() * cursedImages.length)]);

			message.channel.send(embed);
		} catch (err) {
			message.channel.send(`There was an error!\n\`${err}\``).catch();
		}
	}
};