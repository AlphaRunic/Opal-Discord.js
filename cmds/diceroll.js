module.exports = {
  name: 'diceroll',
  category: 'Fun',
  desc: 'Returns a number between 1 and 6.',
	aliases: ['dice','die'],
  run: async (client,msg,args) => {
		let diceNum = Math.floor(Math.random() * 6)
		msg.channel.send(`Your number: ${diceNum}`)
  }
}