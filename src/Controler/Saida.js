import {openDb} from "../configdb.js";

export async function createTablesaidas(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS saidas (id INTEGER PRIMARY KEY UNIQUE, nome TEXT, valor NUMERIC)');
    });
}

export async function selectTodos(req, res){
    openDb().then(db=>{
        db.all('SELECT * FROM saidas')
       .then(pessoas=>res.json(pessoas));
   });
}

export async function selectConta(req, res){
    let valor = req.body.valor;
   openDb().then(db=>{
        db.get('SELECT nome, produto from saidas where valor < ? ',[valor])
       .then(pessoas=>res.json(pessoas));
   });
}

export async function selectValorPessoa(req, res){
    let produto = req.body.produto;
   openDb().then(db=>{
        db.get('SELECT nome,produto from saidas where produto=?',[produto])
       .then(pessoas=>res.json(pessoas));
   });
}

export async function insertSaidas(req, res){
    let saidas = req.body;
    openDb().then(db=>{
        db.run('INSERT into saidas(nome,produto,valor) VALUES (?,?,?)', [saidas.nome, saidas.produto, saidas.valor])
    });
    res.json({
        "statusCode":200
    })
}

export async function updateSaidas(req, res){
    let saidas = req.body;
    openDb().then(db=>{
        db.run('UPDATE saidas SET produto=? WHERE produto=?', [saidas.produto, saidas.produtochange])
    });
    res.json({
        "statusCode":200
    })
}

export async function updateSaidas(req, res){
    let saidas = req.body;
    openDb().then(db=>{
        db.run('UPDATE saidas SET produto=?,valor=? WHERE nome=?', [saidas.produto, saidas.valor, saidas.nome])
    });
    res.json({
        "statusCode":200
    })
}

export async function deleteSaidas(req, res){
    let nome = req.body.nome;
     openDb().then(db=>{
         db.get('Delete FROM saidas where nome=?',[nome])
        .then(pessoas=>res.json(pessoas));
    });
    res.json({
        "statusCode":200
    })
}

export async function deleteSaidas(req, res){
    let produto = req.body.produto;
     openDb().then(db=>{
         db.get('Delete FROM saidas where produto=?',[produto])
        .then(pessoas=>res.json(pessoas));
    });
    res.json({
        "statusCode":200
    })
}