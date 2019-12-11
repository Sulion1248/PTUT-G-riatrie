var url = require("url");
var http = require('http');




function start(route,handle){

http.createServer(function (req, res) {
  
    var meth=req.method;
    var pathname = url.parse(req.url).pathname;
    route(handle, pathname,res,meth);

}).listen(8080);}

exports.start = start;