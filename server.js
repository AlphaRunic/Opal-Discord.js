const server = require('express')();
server.all('/', (req, res) => {
	res.send('<h1> Opal server is still online! 💜 </h1>');
});

function stay_alive() {
	server.listen(8080, ()=>console.log('Opal server is online! 💜'));
};

module.exports = {
	start: stay_alive	
};