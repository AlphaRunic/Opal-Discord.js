require('dotenv').config();
const Discord = require('discord.js');
const db = require('quick.db');
const start_opal_server = require('./server').start;
//console.log(start_opal_server);
const client = new Discord.Client({
  disableEveryone: true,
});

const activity_types = ['playing','listening','watching'];
const status_types = ['online','dnd']

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.categories = new Discord.Collection();
//client.queue = new Discord.Collection();

client.strtruncate = function(str, cutoff) {
	return str.substring(0, cutoff)
}

const default_prefix = 'opal-';
const token = process.env.TOKEN;

var opal = {
	version: 'v7.0 alpha',
	author: 'Runic#0029',
	prefix: default_prefix
};


['command'].forEach(handler => {
  require('./' + handler)(client);
});

opal.cmdarray = client.commands.array();
opal.commands = opal.cmdarray.length;
opal.successful_loads = {};
for (let cmd of opal.cmdarray) {
	opal.successful_loads[`${cmd.name}.js`] = 'Success';
	//console.log(`${cmd.name}.js loaded successfully.`)
}

client.on('ready', () => {
  console.log(`${client.user.username} ${opal.version} is online! 💜`)

  client.user.setPresence({
    status: status_types[Math.floor(Math.random() * status_types.length)],
    activity: {
      name: `${default_prefix}help 💜 ${client.user.username} ${opal.version}`,
      type: activity_types[Math.floor(Math.random() * activity_types.length)].toUpperCase()
    }
  });
});

client.on('guildMemberAdd', member => {
	try{
		const channel = member.guild.channels.get(ch => ch.name === 'welcome')
		if (!channel) channel = member.guild.channels.get(ch => ch.name === 'general');;
		channel.send(`**Welcome to ${member.guild.name}, ${member}!** :smiley: :sparkling_heart:`);
	} catch (err) {
		console.log(err);
	}
});

client.on('message', async msg => {

	let prefix = db.get(`prefix_${msg.guild.id}`);
	if(!prefix) { prefix = default_prefix; } else { prefix = prefix.prefix; };
	prefix = prefix.toLowerCase();

	const def_args = msg.content.slice(prefix.length).trim().split(/ +/g);
	const def_cmd = def_args.shift().toLowerCase()
	msg.content = msg.content.toLowerCase();
  if (msg.author.bot) return;
  if (!msg.guild) return;
  if (!msg.content.startsWith(prefix)) return;
  if (!msg.member) msg.member = await msg.guild.fetchMember(msg);

  const args = msg.content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (!cmd || cmd.length === 0) return;

  let command = client.commands.get(cmd);
  if(!command)
		command = client.commands.get(client.aliases.get(cmd));
  
	try {
		if(command) {
			const perms = command.perms;
			let run = false;
			if (perms === 'admin') {
				if (!msg.member.hasPermission('ADMINISTRATOR'))
					return msg.reply('this command is admin only!');
				run = true;
			} else if (perms === 'bot admin') {
				if (!msg.author.id === '415233686758359051' || !msg.author.id === '415237647146024961')
					return msg.reply('this command is bot creator only!');
				run = true;
			} else if (!perms) {
				run = true;
			} else {
				return msg.reply(`invalid perms inputted: ${perms}`)
			}
			if (run === true)
				command.run(client,msg,args,opal,Discord,def_args);
		}
	} catch (err) {
		msg.channel.send(`Error: \`${err}\`\nStack:\n\`${err.message}\``)
	}
		
});

start_opal_server();
client.login(token);