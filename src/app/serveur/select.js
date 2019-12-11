var express = require('express');
var app = express();
var mysql = require('mysql');
var data ;
var ret='{"Utilisateurs" : [';
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database : 'patients',
  port : 3308
});
app.get('/utilisateur', function (req, res) {
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
  con.query("SELECT * FROM testjson", function (err, result, fields) {
    data=result
    var regex = new RegExp("\\\\", "g");
    for (var i = 0; i < data.length; i++) {
      sansledebut=JSON.stringify(data[i]).slice(16,-2).replace(regex,"")
      ret=ret+sansledebut+","
    }
    ret=ret.slice(0,-1)+"]}"
    ret=JSON.parse(ret)
  });
  con.end(function(err) {
      if (err) {
        return console.log('error:' + err.message);
      }
      console.log('Close the database connection.');
    });
  res.end( ret );
})

var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
})