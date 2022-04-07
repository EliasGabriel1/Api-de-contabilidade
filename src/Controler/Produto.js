import {openDb} from "../configdb.js";

export async function createTableproduto(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS produto (id INTEGER PRIMARY KEY UNIQUE, nome TEXT, valor NUMERIC)');
    });
}

export async function selectTodos(req, res){
    openDb().then(db=>{
        db.all('SELECT * FROM produto')
       .then(pessoas=>res.json(pessoas));
   });
}

export async function selectConta(req, res){
    let descricaoprod = req.body.descricaoprod;
   openDb().then(db=>{
        db.get('SELECT descricaoprod, codbarras from produto WHERE descricaoprod=?',[descricaoprod])
       .then(pessoas=>res.json(pessoas));
   });
}

export async function selectValorPessoa(req, res){
    let codbarras = req.body.codbarras;
   openDb().then(db=>{
        db.get('SELECT descricaoprod, codbarras from produto WHERE codbarras=?',[codbarras])
       .then(pessoas=>res.json(pessoas));
   });
}

export async function selectValorPessoa(req, res){
    let produto = req.body.produto;
   openDb().then(db=>{
        db.get('SELECT a.* from produto a where a.descricaoprod =?',[produto])
       .then(pessoas=>res.json(pessoas));
   });
}

export async function insertProduto(req, res){
    let produto = req.body;
    openDb().then(db=>{
        db.run('INSERT into produto(descricaoprod,codbarras) VALUES VALUES (?,?)', [produto.produto, produto.codbarras])
    });
    res.json({
        "statusCode":200
    })
}

export async function updateProduto(req, res){
    let produto = req.body;
    openDb().then(db=>{
        db.run('UPDATE produto SET codbarras=? WHERE descricaoprod=?', [produto.codbarras, produto.produto])
    });
    res.json({
        "statusCode":200
    })
}

export async function updateProdutobyName(req, res){
    let produto = req.body;
    openDb().then(db=>{
        db.run('UPDATE produto SET descricaoprod=? WHERE descricaoprod=?', [produto.produto, produto.produtochange])
    });
    res.json({
        "statusCode":200
    })
}

export async function deleteproduto(req, res){
    let produto = req.body.produto;
     openDb().then(db=>{
         db.get('DELETE from produto where descricaoprod=?', [produto])
        .then(pessoas=>res.json(pessoas));
    });
    res.json({
        "statusCode":200
    })
}