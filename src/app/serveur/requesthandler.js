var sql =require("./requete")

function utilisateur(res,param,meth){
    // {"Content-Type": "application/json"}
    if (meth==='GET'){
        sql.getuser(param,res);
    }
    if (meth==='POST'){
        sql.postuser(param,res);
        }
    if (meth==='PUT'){
        sql.putuser(param,res);
        }
    if (meth==='DELETE'){
        sql.deluser(param,res);
        }
}

function patients(res,param,meth){
    if (meth==='GET'){
        sql.getpatients(res);
    }
    if (meth==='POST'){
        sql.postuser(param,res);
        }
    if (meth==='PUT'){
        sql.putuser(param,res);
        }
    if (meth==='DELETE'){
        sql.deluser(param,res);
        }
}


function log(res,param){}

function grille(res,param){}

exports.utilisateur = utilisateur;
exports.patients = patients;
