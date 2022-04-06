import { Router } from "express";
import { createTable, insertPessoa, updatePessoa, selectPessoas, selectPessoa, deletePessoa } from "./Controler/pessoa.js";
import { createTableCaixa, selectTodos, selectTodosValidated , selectConta, selectValorPessoa} from "./Controler/Caixa.js";

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

router.get('/Todos', selectTodos)
router.get('/TodosValidado', selectTodosValidated)
router.get('/Conta', selectConta)
router.get('/ValorPessoa', selectValorPessoa)



router.get('/pessoas', selectPessoas)
router.get('/pessoa', selectPessoa)
router.post('/pessoa', insertPessoa)
router.put('/pessoa', updatePessoa)
router.delete('/pessoa', deletePessoa)

export default router;