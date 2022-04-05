# Api-de-contabilidade



#Querys:


<!-- CAIXA -->
SELECT a.nome,a.valor from caixa a, cliente b where a.nome = b.nome and a.valor
SELECT valor from caixa WHERE nome="Elias Gabriel"
INSERT into caixa(nome,valor) VALUES("BRUNO", 500)
UPDATE caixa SET nome="joao",valor=600 WHERE id=2
UPDATE caixa SET valor=500 WHERE nome="joao"
DELETE FROM caixa where nome="joao"



<!-- CLIENTE -->
SELECT a.nome,a.valor from caixa a, cliente b where a.nome = b.nome and a.valor
SELECT a.* from entrada a, cliente b where a.nome = b.nome and a.nome="Elias Gabriel"
SELECT user from cliente WHERE nome="Elias Gabriel"
INSERT into cliente(nome,user) VALUES("BRUNO", "brunin")
UPDATE cliente SET user="eliasgahh" WHERE nome="Elias Gabriel"
DELETE from cliente where nome="BRUNO"



<!-- ENTRADA -->
SELECT a.* from entrada a, cliente b where a.nome = b.nome and a.nome="Elias Gabriel"
SELECT * from entrada WHERE nome="joao"
SELECT * from entrada WHERE idproduto=2500
SELECT * from entrada WHERE valor>=800
INSERT into entrada(idproduto,nome,produto,valor) VALUES(2500, "bruno","marola",900)
UPDATE entrada SET idproduto=5555 WHERE produto="shampoo"
UPDATE entrada SET produto="sabonete" WHERE produto="shampoo"
UPDATE entrada SET produto="shampoo" WHERE produto="sabonete" and idproduto="5555"
DELETE from entrada where produto="shampoo"
DELETE from entrada where nome="bruno"



<!-- SAIDAS -->
SELECT nome,produto from saidas where valor< 800
SELECT nome,produto from saidas where produto="shampoo"
INSERT into saidas(nome,produto,valor) VALUES("bruno", "açucar",1500)
INSERT into saidas(nome,produto,valor) VALUES("joao","shampoo",700)
UPDATE saidas SET produto="sabonete" WHERE produto="shampoo"
DELETE from saidas where nome="bruno"
DELETE from saidas where produto="shampoo"



<!-- PRODUTOS -->
SELECT descricaoprod, codbarras from produto WHERE descricaoprod="sabonete"
SELECT descricaoprod, codbarras from produto WHERE codbarras=15955
SELECT a.* from produto a where a.descricaoprod ="shampoo"
INSERT into produto(descricaoprod,codbarras) VALUES("sabonete",15955)
UPDATE produto SET codbarras=5555 WHERE descricaoprod="shampoo"
UPDATE produto SET descricaoprod="sabonete" WHERE descricaoprod="shampoo"
DELETE from produto where descricaoprod="sabonete"