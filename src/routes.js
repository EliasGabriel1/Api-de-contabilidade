import { Router } from "express";
import { createTable, insertPessoa, updatePessoa, selectPessoas, selectPessoa, deletePessoa } from "./Controler/Pessoa.js";
import { createTableCaixa, selectTodos, selectTodosValidated , selectConta, selectValorPessoa} from "./Controler/Caixa.js";
// import { createTableCaixa, selectTodos, selectTodosValidated , selectConta, selectValorPessoa} from "./Controler/Cliente.js";
// import { createTableCaixa, selectTodos, selectTodosValidated , selectConta, selectValorPessoa} from "./Controler/Entrada.js";
// import { createTableCaixa, selectTodos, selectTodosValidated , selectConta, selectValorPessoa} from "./Controler/Produto.js";
// import { createTableCaixa, selectTodos, selectTodosValidated , selectConta, selectValorPessoa} from "./Controler/Saida.js";

const router = Router();

createTable();
createTableCaixa();


router.get('/', (req, res)=> {
    res.json({
        "statusCode": 200,
        "msg": "A Api está funcionando na porta: 3000"
    })
    }
)



// CAIXA
router.get('/Todos', selectTodos)
router.get('/TodosValidado', selectTodosValidated)
router.get('/Conta', selectConta)
router.get('/ValorPessoa', selectValorPessoa)


// PESSOA
router.get('/pessoas', selectPessoas)
router.get('/pessoa', selectPessoa)
router.post('/pessoa', insertPessoa)
router.put('/pessoa', updatePessoa)
router.delete('/pessoa', deletePessoa)


// CLIENTE
// router.get('/pessoas', selectPessoas)
// router.get('/pessoa', selectPessoa)
// router.post('/pessoa', insertPessoa)
// router.put('/pessoa', updatePessoa)
// router.delete('/pessoa', deletePessoa)


// ENTRADA
// router.get('/pessoas', selectPessoas)
// router.get('/pessoa', selectPessoa)
// router.post('/pessoa', insertPessoa)
// router.put('/pessoa', updatePessoa)
// router.delete('/pessoa', deletePessoa)


// PRODUTO
// router.get('/pessoas', selectPessoas)
// router.get('/pessoa', selectPessoa)
// router.post('/pessoa', insertPessoa)
// router.put('/pessoa', updatePessoa)
// router.delete('/pessoa', deletePessoa)


// SAIDA
// router.get('/pessoas', selectPessoas)
// router.get('/pessoa', selectPessoa)
// router.post('/pessoa', insertPessoa)
// router.put('/pessoa', updatePessoa)
// router.delete('/pessoa', deletePessoa)


export default router;