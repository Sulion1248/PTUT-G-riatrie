var reqsql =require("./sql")

var data ;
var ret='{"Utilisateurs" : ['
//permet d'obtenir les informations de l'utilisateur qui tente de se connecter
function getuser (param,res){
  req="SELECT UtilisateurJSON FROM Utilisateur where nom=?"
  var paramarray = [param];
  console.log("requete : "+req+" "+paramarray)
  reqsql.requetesql(req,paramarray,res); 
}
//permet d'obtenir les informations d'un patient si on le recherche avec son IPP
function getpatient (param,res){
  req="SELECT patientJSON FROM testjson where idPatient=?"
  var paramarray = [param];
  console.log("requete : "+req+" "+paramarray)
  reqsql.requetesql(req,paramarray,res); 
}
//permet d'obtenir tout les sejours d'un patient donné
function getsejours(param,res){
  req="SELECT Sejour.idSejour, Sejour.DateDebut, Sejour.DateFin, Sejour.actif "+
  "FROM Sejour "+
  "where Sejour.Patient_idPatient=?";
  console.log("requete : "+req)
  var paramarray = [param];
  reqsql.requetesql(req,paramarray,res); 
}
//permet d obtenir tout les patients avec un séjour actif
function getpatients (res){
  req="SELECT Patient.idPatient, Patient.patientJSON, Sejour.datedebut, Secteur.nom, Secteur.couleur "+
  "FROM Patient inner join Sejour on Patient.idPatient=Sejour.Patient_idPatient "+
  "inner join Secteur on Sejour.Secteur_idSecteur=Secteur.idSecteur "+
  "where Sejour.actif=true";
  console.log("requete : "+req)
  reqsql.requetesqlsansparam(req,res); 
}
function getgrilles (){
  req='Select Grilleadl.idGrilleADL, Grilleadl.AdlJSON, Grilleadl.Com,  Grilleadl.DateEntre'+
  'FROM Grilleadl where Grilleadl.Sejour_idSejour=?';
  console.log("requete : "+req);
  reqsql.requetesql(req,paramarray,res); 
}
exports.getsejours=getsejours;
exports.getuser=getuser;
exports.getpatients=getpatients;
exports.getgrilles=getgrilles;
