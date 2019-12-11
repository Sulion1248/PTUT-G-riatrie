var server = require("./serveur");
var router = require("./router");
var requestHandlers = require("./requesthandler");
var handle = {};
handle["/"] = requestHandlers.utilisateur;
handle["/utilisateur"] = requestHandlers.utilisateur;
handle["/patients"] = requestHandlers.patients;
handle["error404"] = requestHandlers.error404;
server.start(router.route,handle);