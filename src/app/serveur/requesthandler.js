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

function sejours(res,param,meth){
    if (meth==='GET'){
        sql.getsejours(param,res);
    }
    if (meth==='POST'){
        sql.postsejour(param,res);
        }
    if (meth==='PUT'){
        sql.putsejour(param,res);
        }
    if (meth==='DELETE'){
        sql.delsejour(param,res);
        }
}

function log(res,param){}

function grille(res,param){}
exports.sejours = sejours;
exports.utilisateur = utilisateur;
exports.patients = patients;
