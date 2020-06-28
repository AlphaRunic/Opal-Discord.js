module.exports = {
  name: 'beep',
  category: 'Info',
  desc: 'Returns latency of client and API in ms.',
  run: async (client,msg,args) => {
    const message = await msg.channel.send('Beep!');
		var ping = Math.round(client.ws.ping);

    message.edit(`Boop! Latency is: ${Math.floor(message.createdTimestamp - msg.createdTimestamp)}ms, ${client.user.username} latency is ${Math.floor(ping)}ms`);
  }
}