# Cinema System

[![Author](https://img.shields.io/badge/Author-Milene%20Ap.%20Taborda-a56cc1)](https://github.com/milenetaborda) [![Database](https://img.shields.io/badge/MySQL-Workbench-a56cc1)]

Simples sistema de um cinema. Com informações sobre atores, filmes, ingressos, e mais.

  - MySQL Workbench
  
**Exercício 1**
>a. Altera a tabela de atores, removendo a coluna salary.
b. Altera a tabela de atores, na coluna gender, altera nome para sex do tipo string com no maximo 6 caracteres;
c. Altera a tabela de atores,  na coluna gender, altera a quantidade maxima de caracteres para 255;
d. ALTER TABLE Actors CHANGE gender gender VARCHAR(100);

**Exercício 2**
>a. UPDATE Actor SET name = "Moacyr Franco" birth_date = "2020-02-10" WHERE id = "003";
b. UPDATE Actor SET name = UPPER("juliana pães") WHERE id = "005";
UPDATE Actor SET name = "Juliana Paes" WHERE id = "005";
c. UPDATE Actor SET name = "Juliana Paes", 	birth_date = "1979/12/23",	salary = 100000,   sex = "female" WHERE id = "005";
d.  Não é possível usar o acesso de intervalo no índice 'PRIMARY' devido à conversão de tipo ou colagem no 'id' de campo

**Exercício 3**
>a. DELETE FROM Actor WHERE name = "Fernanda Montenegro";
b. DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;

**Exercício 4**
>a. SELECT MAX(salary) FROM Actor;
b.SELECT MIN(salary) FROM Actor WHERE gender = "female";
c. SELECT COUNT(*) FROM Actor WHERE gender = "female";
d. SELECT SUM(salary) FROM Actor;

**Exercício 5**
>a. Retorna a quantidade de atores cujo sexo é masculino e feminino. Ou seja duas linhas(contador) e duas colunas.(Count e Gender);
b. SELECT  id, name FROM Actor ORDER BY name ASC;
c. SELECT  * FROM Actor ORDER BY salary ASC;
d. SELECT  * FROM Actor ORDER BY salary DESC LIMIT 3;
e. SELECT AVG(salary), gender FROM Actor GROUP BY gender;

**Exercício 6**
>a. ALTER TABLE Movie ADD playing_limit_date DATE;
b. ALTER TABLE Movie CHANGE rating rating FLOAT;
c. UPDATE Movie SET playing_limit_date = CURDATE() WHERE id = "002"; 
UPDATE Movie SET playing_limit_date = "2020/06/08" WHERE id = "003" ;
d. Não retorna erro, porém aparece que 0 linhas foram afetadas.

**Exercício 7**
>a. SELECT COUNT(*) FROM Movie WHERE rating = "7.5";
b. SELECT AVG(rating) FROM Movie;
c. SELECT COUNT(*) FROM Movie WHERE playing_limit_date >= CURDATE();
d. SELECT COUNT(*) FROM Movie WHERE playing_limit_date < CURDATE();
e. SELECT MAX(rating) FROM Movie;
f. SELECT MIN(rating) FROM Movie;

**Exercício 8**
>a. SELECT * FROM Movie ORDER BY title ASC;
b. SELECT * FROM Movie ORDER BY title DESC LIMIT 5;
c. SELECT * FROM Movie WHERE release_date < CURDATE() ORDER BY release_date DESC LIMIT 3;
d. SELECT * FROM Movie ORDER BY rating DESC LIMIT 3;
