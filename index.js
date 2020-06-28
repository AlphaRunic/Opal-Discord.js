require('dotenv').config();
const Discord = require('discord.js');
const db = require('quick.db');
const { GiveawaysManager } = require("discord-giveaways");
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
	version: 'v7.7.4 alpha',
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

const manager = new GiveawaysManager(client, {
    storage: "./giveaways.json",
    updateCountdownEvery: 10000,
    default: {
        botsCanWin: false,
        exemptPermissions: [ "ADMINISTRATOR" ],
        embedColor: "RANDOM",
        reaction: "🎉"
    }
});

client.giveawayManager = manager;

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

	if (msg.author.bot) return;
	let content = msg.content;

	const lvldb = `level_${msg.author.id}_${msg.guild.id}`;
	const xpdb = `xp_${msg.author.id}_${msg.guild.id}`;
	const untildb = `tolvl_${msg.author.id}_${msg.guild.id}`;
	let level = db.get(lvldb);
	let xp = db.get(xpdb);
	let xptolvl = db.get(untildb);
	if (!level)
		level = 1;
	if (!xp)
		xp = 0;
	function formula() {
		return Math.round(350 * (level*1.25));
	}
	if (!xptolvl)
		xptolvl = formula();
	
	if ((Math.random() * 100) <= ((1/3) * 100)) {
		xp = xp + Math.ceil(Math.random() * (35*(level/5)));
	}

	if (xp >= xptolvl) {
		xp = xp-xptolvl;
		level = level + 1;
		xptolvl = formula();
		msg.reply(`you leveled up! Current level: ${level}`);
	}

	let stats = {
		exp: xp,
		level: level,
		tolvl: xptolvl
	}

	db.set(xpdb, xp);
	db.set(lvldb, level);
	db.set(untildb, xptolvl);

	let prefix = db.get(`prefix_${msg.guild.id}`);
	if(!prefix) { prefix = default_prefix; } else { prefix = prefix.prefix; };
	prefix = prefix.toLowerCase();

	const def_args = content.slice(prefix.length).trim().split(/ +/g);
	const def_cmd = def_args.shift().toLowerCase()
	content = content.toLowerCase();

	if (!db.get(`autoreplyoff_${msg.guild.id}`)) {

		if (content.search('no u') > -1 || content.search('no you') > -1)
			return msg.reply('no u');

		const suicide_msg = content.search(/\bkms\b/i) > -1 || content.search(/\b(kill myself)\b/i) > -1;
		if (suicide_msg)
			return msg.reply('don\'t say that. Call 1-800-273-8255 for the National Suicide Prevention Lifeline.');

		const can_u_not = content.search('can you not') > -1 || content.search('can u not') > -1;
		if (can_u_not)
			return msg.reply('can *you* not?');

	}

  if (!msg.guild) return;
  if (!content.startsWith(prefix)) return;
  if (!msg.member) msg.member = await msg.guild.fetchMember(msg);

  const args = content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (!cmd || cmd.length === 0) return;

  let command = client.commands.get(cmd);
  if(!command)
		command = client.commands.get(client.aliases.get(cmd));
  
	try {
		if(command) {
			const perms = command.perms;
			const end = '** :x:'
			let run = false;
			if (perms === 'admin') {
				if (!msg.member.hasPermission('ADMINISTRATOR'))
					return msg.reply('**this command is admin only!'+end);
				run = true;
			} else if (perms === 'bot admin') {
				if (!msg.author.id === '415233686758359051' || !msg.author.id === '415237647146024961')
					return msg.reply('**this command is bot creator only!'+end);
				run = true;
			} else if (!perms) {
				run = true;
			} else {
				return msg.reply(`invalid perms inputted: ${perms}`)
			}
			if (run === true)
				return command.run(client,msg,args,opal,Discord,def_args,stats);
		}
	} catch (err) {
		msg.channel.send(`Error: \`${err}\`\nStack:\n\`${err.message}\``)
	}
		
});

start_opal_server();
client.login(token);