**Exercício 1**
>a. É uma chave única e que não pode ser duplicada na mesma tabela.
b. INSERT INTO Rating (id, comment, rate, movie_id) VALUES ("001","Muito bom!", 10,	"004");
c. Não é possível adicionar ou atualizar a linha, pois houve uma restrição de chave estrangeira.
d. ALTER TABLE Movie DROP COLUMN rating;
c. Não é possível excluir ou atualizar uma linha pai: uma restrição de chave estrangeira falha. Sendo assim, como a tabela Rating referencia a Movie, não podemos apagar a linha.

**Exercício 2**
>a.  Tabela onde será feita as referencias do id do ator e do filme com as outras tabelas existentes.Criando assim uma unica tabela a partir delas.
b. INSERT INTO MovieCastVALUES(	"004","001");
c.  Não é possível adicionar ou atualizar a linha, pois houve uma restrição de chave estrangeira.
d. Retorna um erro, pois o ator ta inserido em outra tabela => pai.

**Exercício 3**
> a. O operador ON é parecido com o where e impõe uma condição para a união de duas linhas que que normalmente são duas chaves primárias.
b. SELECT m.id as movie_id, r.rate as rating FROM Movie m INNER JOIN Rating r ON m.id = r.movie_id;

**Exercício 4**
> a. SELECT m.name, m.id, r.rate, r.comment FROM movies m LEFT JOIN Rating r ON m.id = r.id;
b. SELECT m.id, m.name, mc.actor_id FROM movies  m RIGHT JOIN MovieCast mc ON m.id = mc.movie_id;
c. SELECT AVG(r.rate), m.name FROM Rating r RIGHT JOIN  movies m ON r.movie_id = m.id GROUP BY m.name;

**Exercício 5**
>a. Porque precisamos pegar duas chaves primárias que estão salvas em uma tabela auxiliar para uni-las.
b. SELECT m.name as "Nome do filme", a.id as "ID do ator", a.name as "Nome do ator" FROM movies m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
c) Ela retorna todos os filmes mesmo que não tenham atores
d. SELECT m.name as "Nome do filme", a.name as "Nome do ator", r.rate as "Nota", r.comment as "Comentario"
FROM movies m LEFT JOIN MovieCast mc ON m.id = mc.movie_id JOIN Actor a ON mc.actor_id = a.id JOIN Rating r ON m.id = r.movie_id;

**Exercício 6**
> a. É uma relação M:N
b. CREATE TABLE Oscar (
	id VARCHAR(255) PRIMARY KEY,
    oscar_name VARCHAR(255) NOT NULL,
    movie_id VARCHAR(255) NOT NULL,
    date_win DATE NOT NULL,
    FOREIGN KEY (movie_id) REFERENCES movies(id)
);
c. INSERT INTO Oscar(id, oscar_name, movie_id, date_win) VALUES("002", "Óscar de melhor direção", "010","2020-01-06");
d. SELECT m.name as "Nome do filme", o.oscar_name as "Óscar" FROM movies m JOIN Oscar o ON m.id = o.movie_id
