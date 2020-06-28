module.exports = {
  name: 'ping',
  category: 'Info',
	aliases: ['beep','latency'],
  desc: 'Returns latency of client and API in ms.',
  run: async (client,msg,args) => {
    const message = await msg.channel.send('Ping!')
		var ping = Math.round(client.ws.ping)

    message.edit(`Pong! Latency is: ${Math.floor(message.createdTimestamp - msg.createdTimestamp)}ms, ${client.user.username} latency is ${Math.floor(ping)}ms`)
  }
}