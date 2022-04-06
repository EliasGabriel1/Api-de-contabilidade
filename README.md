# Api-de-contabilidade



#Querys:


<!-- CAIXA -->
</br> SELECT a.nome,a.valor from caixa a, cliente b where a.nome = b.nome and a.valor
</br> SELECT valor from caixa WHERE nome="Elias Gabriel"
</br> INSERT into caixa(nome,valor) VALUES("BRUNO", 500)
</br> UPDATE caixa SET nome="joao",valor=600 WHERE id=2
</br> UPDATE caixa SET valor=500 WHERE nome="joao"
</br> DELETE FROM caixa where nome="joao"



<!-- CLIENTE -->
</br>SELECT a.nome,a.valor from caixa a, cliente b where a.nome = b.nome and a.valor
</br>SELECT a.* from entrada a, cliente b where a.nome = b.nome and a.nome="Elias Gabriel"
</br>SELECT user from cliente WHERE nome="Elias Gabriel"
</br>INSERT into cliente(nome,user) VALUES("BRUNO", "brunin")
</br>UPDATE cliente SET user="eliasgahh" WHERE nome="Elias Gabriel"
</br>DELETE from cliente where nome="BRUNO"



<!-- ENTRADA -->
</br>SELECT a.* from entrada a, cliente b where a.nome = b.nome and a.nome="Elias Gabriel"
</br>SELECT * from entrada WHERE nome="joao"
</br>SELECT * from entrada WHERE idproduto=2500
</br>SELECT * from entrada WHERE valor>=800
</br>INSERT into entrada(idproduto,nome,produto,valor) VALUES(2500, "bruno","marola",900)
</br>UPDATE entrada SET idproduto=5555 WHERE produto="shampoo"
</br>UPDATE entrada SET produto="sabonete" WHERE produto="shampoo"
</br>UPDATE entrada SET produto="shampoo" WHERE produto="sabonete" and idproduto="5555"
</br>DELETE from entrada where produto="shampoo"
</br>DELETE from entrada where nome="bruno"


<!-- SAIDAS -->
</br>SELECT nome,produto from saidas where valor< 800
</br>SELECT nome,produto from saidas where produto="shampoo"
</br>INSERT into saidas(nome,produto,valor) VALUES("bruno", "açucar",1500)
</br>INSERT into saidas(nome,produto,valor) VALUES("joao","shampoo",700)
</br>UPDATE saidas SET produto="sabonete" WHERE produto="shampoo"
</br>DELETE from saidas where nome="bruno"
</br>DELETE from saidas where produto="shampoo"



<!-- PRODUTOS -->
</br>SELECT descricaoprod, codbarras from produto WHERE descricaoprod="sabonete"
</br>SELECT descricaoprod, codbarras from produto WHERE codbarras=15955
</br>SELECT a.* from produto a where a.descricaoprod ="shampoo"
</br>INSERT into produto(descricaoprod,codbarras) VALUES("sabonete",15955)
</br>UPDATE produto SET codbarras=5555 WHERE descricaoprod="shampoo"
</br>UPDATE produto SET descricaoprod="sabonete" WHERE descricaoprod="shampoo"
</br>DELETE from produto where descricaoprod="sabonete"
