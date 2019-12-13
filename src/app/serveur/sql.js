var mysql = require('mysql');
var retour;
  function requetesql(requete,param,res){
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database : 'geriatrie',
        port : 3306})
  con.connect(function(err){
    con.query(requete,param, function(err, rows, fields) {
        if (err) return console.log(err);
        retour=rows;
        console.log("JSON : "+JSON.stringify(retour));
        con.end();
        answer=(JSON.stringify(retour))
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        res.setHeader('Access-Control-Allow-Credentials', true);
        res.writeHead(200,{"Content-Type": "application/json"});
        res.write(answer)
        res.end()
    })})
}
function requetesqlsansparam(requete,res){
  var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database : 'geriatrie',
      port : 3306})
con.connect(function(err){
  con.query(requete, function(err, rows, fields) {
      if (err) return console.log(err);
      retour=rows;
      console.log("JSON : "+JSON.stringify(retour));
      con.end();
      answer=(JSON.stringify(retour))
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
      res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
      res.setHeader('Access-Control-Allow-Credentials', true);
      res.writeHead(200,{"Content-Type": "application/json"});
      res.write(answer)
      res.end()
  })})
}
    exports.requetesql=requetesql;
    exports.requetesqlsansparam=requetesqlsansparam;