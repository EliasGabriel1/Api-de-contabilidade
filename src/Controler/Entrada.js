import {openDb} from "../configdb.js";

export async function createTableEntrada(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS Entrada (id INTEGER PRIMARY KEY UNIQUE, nome TEXT, valor NUMERIC)');
    });
}

export async function selectTodos(req, res){
    openDb().then(db=>{
        db.all('SELECT * FROM Entrada')
       .then(pessoas=>res.json(pessoas));
   });
}

export async function selectValorPessoa(req, res){
    let nome = req.body.nome;
   openDb().then(db=>{
        db.get('SELECT a.* from entrada a, cliente b where a.nome = b.nome and a.nome=?',[nome])
       .then(pessoas=>res.json(pessoas));
   });
}

export async function selectValorPessoa(req, res){
    let idproduto = req.body.idproduto;
   openDb().then(db=>{
        db.get('SELECT * from entrada WHERE idproduto=?',[idproduto])
       .then(pessoas=>res.json(pessoas));
   });
}

export async function selectConta(req, res){
    let valor = req.body.valor;
   openDb().then(db=>{
        db.get('SELECT * from entrada WHERE valor>=?',[valor])
       .then(pessoas=>res.json(pessoas));
   });
}

export async function insertEntrada(req, res){
    let Entrada = req.body;
    openDb().then(db=>{
        db.run('INSERT into entrada(idproduto,nome,produto,valor) VALUES(?,?,?,?)', [Entrada.idproduto, Entrada.nome, Entrada.produto, Entrada.valor])
    });
    res.json({
        "statusCode":200
    })
}

export async function updateEntrada(req, res){
    let Entrada = req.body;
    openDb().then(db=>{
        db.run('UPDATE entrada SET idproduto=? WHERE produto=?', [Entrada.idproduto, Entrada.produto])
    });
    res.json({
        "statusCode":200
    })
}

export async function updateEntradabyName(req, res){
    let Entrada = req.body;
    openDb().then(db=>{
        db.run('UPDATE entrada SET produto=? WHERE produto=?', [Entrada.produto, Entrada.produtochange])
    });
    res.json({
        "statusCode":200
    })
}

export async function updateEntradabyName(req, res){
    let Entrada = req.body;
    openDb().then(db=>{
        db.run('UPDATE entrada SET produto=? WHERE produto=? and idproduto=?', [Entrada.produto, Entrada.produtochange, Entrada.idproduto])
    });
    res.json({
        "statusCode":200
    })
}

export async function deleteEntrada(req, res){
    let nome = req.body.nome;
     openDb().then(db=>{
         db.get('Delete FROM Entrada where nome=?',[nome])
        .then(pessoas=>res.json(pessoas));
    });
    res.json({
        "statusCode":200
    })
}

export async function deleteEntrada(req, res){
    let produto = req.body.produto;
     openDb().then(db=>{
         db.get('DELETE from entrada where produto=?',[produto])
        .then(pessoas=>res.json(pessoas));
    });
    res.json({
        "statusCode":200
    })
}