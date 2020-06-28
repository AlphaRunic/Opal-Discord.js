const { readdirSync, statSync } = require('fs');

var load_statuses = [];

module.exports = (client,msg) => {
  let cf = 'cmds/'
  readdirSync(cf).forEach(dir => {
    	let path = cf;
    //if (statSync(path).isDirectory()){
      const commands = readdirSync(path).filter(f => f.endsWith('.js'));
      
      for(let file of commands){
				//if (!skip) {
				//try {
					let pull = require(`./${path}/${file}`);
					if (pull.name) {
						client.commands.set(pull.name, pull);
						load_statuses.push({command: pull.name, success: true});
						if (pull.aliases) {
							pull.aliases.forEach(alias => client.aliases.set(alias, pull.name));
						}
					} else {
						load_statuses.push({command: pull.name, success: false});
					};
				//} catch (err) {
					//console.error(`Error: ${err}`)
				//}
    	}
    //}
  });
}