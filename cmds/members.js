module.exports = {
  name: 'members',
  category: 'Info',
	aliases: ['users','usercount','membercount','uc','mc'],
  desc: 'Returns how many members are in the guild.',
  run: async (client,msg,args) => {
		msg.channel.send(`This server has ${msg.guild.memberCount} members.`);
  }
}