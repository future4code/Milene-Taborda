# Cinema System

[![Author](https://img.shields.io/badge/Author-Milene%20Ap.%20Taborda-a56cc1)](https://github.com/milenetaborda) [![Database](https://img.shields.io/badge/MySQL-Workbench-a56cc1)]

Simples sistema de um cinema. Com informações sobre atores, filmes, ingressos, e mais.

  - MySQL Workbench

**Exercício 1**
>a. **VARCHAR** - strings ; **DATE** - representa uma data (YYYY-MM-DD); **PRIMARY KEY** - identificador único ou chave primária.
b. Lista todos os bancos de dados de um host e todas as tabelas criadas.
c. Retorna um erro na sintaxe.

**Exercício 2**
>a. --
b. Não é possível criar outra query com o mesmo identificador para chave primária.
c. Contagem de colunas não corresponde à contagem de valores na linha do insert.
d. A coluna Nome não pode ser Null.
e. Date está em um formato correto, o valor esperado é no formato (YYYY/MM/DD)
f. --

**Exercício 3**
>a. SELECT * FROM Actor WHERE gender="female";
b. SELECT  salary FROM Actor WHERE name="Tony Ramos" ;
c. Não retornou nada, já que todos atores que cadastramos foram preenchidos e são NOT NULL.
d. SELECT id, name, salary FROM Actor WHERE salary <= 500000 ;
e. SELECT id, name from Actor WHERE id = "002";

**Exercicio 4**
>a. Selecione todas as informações da tabela Actor onde o nome começa com J ou começa com A, e que o salario seja maior que 300000;
b. SELECT * from Actor WHERE (name NOT LIKE "A%") AND salary > 350000;
c. SELECT * from Actor WHERE name LIKE "%g%" OR name LIKE "%G%" ;
d. SELECT * from Actor WHERE (name LIKE "%a%" OR name LIKE "%A%" OR name LIKE "%g%" OR name LIKE "%G%") AND salary BETWEEN 350000 AND 900000;

**Exercício 5**
>a. Estou criando uma tabela Movie, com as seguintes colunas: Id(PK), Title, Synopsis, Release Date, e Rating. Todos são NOT NULL, e o id é um identificador tem que ser único para cada filme criado. 

**Exercicio 6** 
>a. SELECT id, title, rating FROM Movie WHERE id="004";
b. SELECT * FROM Movie WHERE title="Homem de Ferro";
c. SELECT id, title, synopsis FROM Movie WHERE rating >= 7;

**Exercício 7**
>a. SELECT * FROM Movie WHERE title LIKE "%vida%";
b. SELECT * FROM Movie WHERE title LIKE "%vida%" OR synopsis LIKE "%vida%";
c. SELECT * FROM Movie WHERE release_date < "2020/06/08";
d.  SELECT * FROM Movie WHERE release_date < "2020/06/08" AND (title LIKE "%vida%" OR synopsis LIKE "%vida%") AND rating > 7;

