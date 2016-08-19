/**
 * Created by nopony on 19/08/2016.
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var PORT = 80;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('.'));
app.use(bodyParser.json());
app.post('/subscribe', function(req, res) {
	console.log('received a sub request, processing...');
	fs.appendFileSync('mails.txt', req.body.email + '\n');
	console.log('done!')
});
app.post('/message', function(req, res) {
	console.log('received message from user\n');
	fs.appendFile('messages.txt',
		req.body.contact_name + '\n'
		+ req.body.contact_email + '\n'
		+ req.body.contact_message + '\n', function(err) {
	        if(err) console.log(err);
	        else console.log('done!');
	});
});

app.listen(PORT, function() {
   console.log('listening on port ' + PORT);
});

