// server.js
// where your node app starts

// init project
var strftime = require('strftime')
var express = require('express');
var app = express();

app.use(express.static('public'));

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/:date', function (req, res){
  var date = new Date (req.params.date);
  res.json({
    unix : date.getTime(),
    natural : strftime(('%B %e, %Y'), date),
  });
});

// listen for requests :)

app.listen(process.env.PORT);