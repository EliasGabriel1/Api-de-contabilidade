import {openDb} from "../configdb.js";

export async function createTableCaixa(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS Cliente (id INTEGER PRIMARY KEY UNIQUE, nome TEXT, valor NUMERIC)');
    });
}

export async function selectTodosClientes(req, res){
    openDb().then(db=>{
        db.all('SELECT * FROM Cliente')
       .then(pessoas=>res.json(pessoas));
   });
}

export async function selectTodosClienteValidated(req, res){
    openDb().then(db=>{
        db.all('SELECT a.nome,a.valor from caixa a, cliente b where a.nome = b.nome and a.valor')
       .then(pessoas=>res.json(pessoas));
   });
}

export async function selectConta(req, res){
    let nome = req.body.nome;
   openDb().then(db=>{
        db.get('SELECT a.* from entrada a, cliente b where a.nome = b.nome and a.nome=?',[nome])
       .then(pessoas=>res.json(pessoas));
   });
}

export async function selectUserPessoa(req, res){
    let nome = req.body.nome;
   openDb().then(db=>{
        db.get('SELECT user from cliente WHERE nome=?',[nome])
       .then(pessoas=>res.json(pessoas));
   });
}

export async function insertCliente(req, res){
    let cliente = req.body;
    openDb().then(db=>{
        db.run('INSERT into cliente(nome,user) VALUES(?, ?)', [cliente.nome, cliente.user])
    });
    res.json({
        "statusCode":200
    })
}

export async function updateCliente(req, res){
    let cliente = req.body;
    openDb().then(db=>{
        db.run('UPDATE cliente SET user=? WHERE nome=? ', [cliente.user, cliente.nome])
    });
    res.json({
        "statusCode":200
    })
}

export async function updateCaixabyName(req, res){
    let cliente = req.body;
    openDb().then(db=>{
        db.run('UPDATE cliente SET nome=? WHERE user=?', [cliente.nome, cliente.user])
    });
    res.json({
        "statusCode":200
    })
}

export async function deleteCliente(req, res){
    let nome = req.body.nome;
     openDb().then(db=>{
         db.get('DELETE from cliente where nome=?',[nome])
        .then(pessoas=>res.json(pessoas));
    });
    res.json({
        "statusCode":200
    })
}