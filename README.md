# Api-de-contabilidade

#Querys:


SELECT a.nome,a.valor from caixa a, cliente b where a.nome = b.nome and a.valor

SELECT a.* from entrada a, cliente b where a.nome = b.nome and a.nome="Elias Gabriel"

SELECT valor from caixa WHERE nome="Elias Gabriel"

SELECT user from cliente WHERE nome="Elias Gabriel"

SELECT * from entrada WHERE nome="joao"

SELECT * from entrada WHERE idproduto=2500

SELECT * from entrada WHERE valor>=800

SELECT descricaoprod, codbarras from produto WHERE descricaoprod="sabonete"

SELECT descricaoprod, codbarras from produto WHERE codbarras=15955

SELECT a.* from produto a where a.descricaoprod ="shampoo"

SELECT nome,produto from saidas where valor< 800

SELECT nome,produto from saidas where produto="shampoo"

INSERT into caixa(nome,valor) VALUES("BRUNO", 500)

INSERT into cliente(nome,user) VALUES("BRUNO", "brunin")

INSERT into entrada(idproduto,nome,produto,valor) VALUES(2500, "bruno","marola",900)

INSERT into produto(descricaoprod,codbarras) VALUES("sabonete",15955)

INSERT into saidas(nome,produto,valor) VALUES("bruno", "açucar",1500)

INSERT into saidas(nome,produto,valor) VALUES("joao","shampoo",700)

UPDATE caixa SET nome="joao",valor=600 WHERE id=2

Delete FROM caixa where nome="joao"

DELETE from produto where descricaoprod="sabonete"

DELETE from cliente where nome="BRUNO"

DELETE from saidas where nome="bruno"

DELETE from saidas where produto="shampoo"

DELETE from entrada where produto="shampoo"

DELETE from entrada where nome="bruno"
