module.exports = {
  name: '8ball',
  category: 'Fun',
  desc: 'Returns a random eight ball message.',
  run: async (client,msg,args) => {
    var eightball_msgs = ['Reply hazy, try again','Ask again later','Better not tell you now','Cannot predict now','Concentrate and ask again','Dont count on it','My reply is no','My sources say no','Outlook not so good','Very doubtful','It is certain,','It is decidedly so','Without a doubt, yes','Yes -- definitely','You may rely on it','Outlook good','Yes','Signs point to yes'];
		var random_msg = eightball_msgs[Math.floor(Math.random() * eightball_msgs.length)];
		msg.channel.send(`Your answer: ${random_msg}`);
  }
}