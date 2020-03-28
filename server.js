const app = require('./app');
const http = require('http');
const port = process.argv[2] || 3000;
const server = http.createServer();
const config = require('./env/env');
const auth = require('./routes/auth');
server.listen(port, config.ip, () => {
	console.log(server.address().address + ':' + server.address().port);
});


app.get('/', (req, res) => {
	res.send('<html><title>Node-psql-boilerplate</title></html>');
});

//const auth = require('./routes/auth');
app.use('/auth/', auth);