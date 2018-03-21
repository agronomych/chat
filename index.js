var express = require('express');
var app = express();
var logger = require('log4js').getLogger();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var port = 3000;
server.listen(port, '127.0.0.1', function(){
    var addr = server.address();
    console.log(addr);
    logger.debug('listening on '+addr.address+':' + addr.port);
});
app.get('/:username', function(req,res){
    res.send('Hello '+req.params.username+'!');
});