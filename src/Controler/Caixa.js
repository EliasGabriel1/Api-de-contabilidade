import {openDb} from "../configdb.js";

export async function createTableCaixa(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS Caixa (id INTEGER PRIMARY KEY UNIQUE, nome TEXT, valor NUMERIC)');
    });
}

export async function selectTodos(req, res){
    openDb().then(db=>{
        db.all('SELECT * FROM Caixa')
       .then(pessoas=>res.json(pessoas));
   });
}

export async function selectTodosValidated(req, res){
    openDb().then(db=>{
        db.all('SELECT a.nome,a.valor from caixa a, cliente b where a.nome = b.nome and a.valor')
       .then(pessoas=>res.json(pessoas));
   });
}

export async function selectConta(req, res){
    let id = req.body.id;
   openDb().then(db=>{
        db.get('SELECT * FROM Caixa where id=?',[id])
       .then(pessoas=>res.json(pessoas));
   });
}

export async function selectValorPessoa(req, res){
    let nome = req.body.nome;
   openDb().then(db=>{
        db.get('SELECT valor FROM Caixa where nome=?',[nome])
       .then(pessoas=>res.json(pessoas));
   });
}

export async function insertCaixa(req, res){
    let caixa = req.body;
    openDb().then(db=>{
        db.run('INSERT INTO caixa (nome, valor) VALUES (?,?)', [caixa.nome, caixa.valor])
    });
    res.json({
        "statusCode":200
    })
}

export async function updateCaixa(req, res){
    let caixa = req.body;
    openDb().then(db=>{
        db.run('UPDATE caixa SET nome=?, valor=? WHERE id=?', [caixa.nome, caixa.idade, caixa.id])
    });
    res.json({
        "statusCode":200
    })
}

export async function updateCaixabyName(req, res){
    let caixa = req.body;
    openDb().then(db=>{
        db.run('UPDATE caixa SET valor=? WHERE nome=?', [caixa.valor, caixa.nome])
    });
    res.json({
        "statusCode":200
    })
}

export async function deleteCaixa(req, res){
    let id = req.body.id;
     openDb().then(db=>{
         db.get('Delete FROM caixa where nome=?',[nome])
        .then(pessoas=>res.json(pessoas));
    });
    res.json({
        "statusCode":200
    })
}