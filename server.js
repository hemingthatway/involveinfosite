/**
 * Created by nopony on 19/08/2016.
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var PORT = 80;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(bodyParser.json());
app.post('/subscribe', function(req, res) {
    console.log('received a sub request, processing...');
    fs.appendFile('mails.txt', req.body.email + '\n', function (err) {
        if(err) console.log(err);
        else res.send({saved: 0});
    });
    console.log('done, responded with code 0')

});
app.post('/message', function(req, res) {
    console.log('received message from user\n');
    fs.appendFile('messages.txt',
        req.body.contact_name + '\n'
        + req.body.contact_email + '\n'
        + req.body.contact_message + '\n', function(err) {
            if(err) console.log(err);

            else {
                res.send({saved: 0});
                console.log('done, responded with code 0');
            }
        });
});

app.listen(PORT, function() {
    console.log('listening on port ' + PORT);
});

