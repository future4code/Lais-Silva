## Aula 54 

### Exercicio 1

**a)** Uma chave estrangeira é a coluna de uma determinada tabela criada em relação à primary key de outra tabela. 

**b)** 
~~~SQL
INSERT INTO Rating(id, comment, rate, movie_id)
VALUES(
    1, 
    "Bom", 
    7.5, 
    1
);
~~~

**c)** "Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`mello_lais_silva`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `AllMovies` (`id`))". Significa que a foreign key falhou na tentativa de encontrar correspondência com alguma primay key. 

**d)**
~~~SQL
ALTER TABLE Movie DROP COLUMN rating;
~~~

**e)** "Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`mello_lais_silva`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `AllMovies` (`id`))". Não é possível deletar uma linha de tabela que já sirva de referência para a forerign key de outra linha presente em outra tabela.

### Exercicio 2

**a)** Essa tabela serve para reunir filmes e atores numa nova tabela chamada MovieCast.

**b)**  
~~~SQL
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
    1, 
    1
);
~~~

**c)** "Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`mello_lais_silva`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `AllActors` (`id`))". Houve falha ao buscar uma primarykey para fazer referência à foreign key. 

**d)** "Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`mello_lais_silva`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `AllActors` (`id`))". Não é possível alterar ou deletar uma linha que sirva de referência para alguma foreign key. 

### Exercicio 3

**a)** O operador "ON" especifica quais são as keys que devem corresponder. 

**b)** 
~~~SQL
SELECT tittle, AllMovies.id, rate 
FROM AllMovies
INNER JOIN Rating on AllMovies.id = Rating.movie_id;
~~~

### Exercicio 4

**a)** 
~~~SQL
SELECT tittle, AllMovies.id, rate, comment 
FROM AllMovies
LEFT JOIN Rating on AllMovies.id = Rating.movie_id;
~~~

**b)** 
~~~SQL
SELECT movie_id, actor_id, AllMovies.tittle 
FROM MovieCast
JOIN AllMovies on AllMovies.id = MovieCast.movie_id;
~~~

**c)**
~~~SQL
SELECT AVG(rate) FROM Rating
JOIN AllMovies on AllMovies.id = movie_id;
~~~
### Exercicio 5
**a)** São necessários dois JOIN porque só é possível juntar duas tabelas por vez; por isso, criamos a primeria, que reune duas tabelas, e depois juntamos ela com a terceira. 

**b)** 
~~~SQL
SELECT tittle as "nome do filme", 
m.id as "id do filme", 
a.id as "id do ator", 
a.name as "nome do ator" 
FROM AllMovies m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN AllActors a ON a.id = mc.actor_id;
~~~

**c)** Ao invés de m.tittle, esta escrito m,tittle; a resposta é que não existe nenhuma coluna chamada "m" em AllMovies. 

**d)** 
~~~SQL
SELECT 
	m.id as movie_id, 
    m.title, 
    a.id as actor_id, 
    a.name, 
    r.rate, 
    r.comment 
FROM AllMovies m
LEFT JOIN Rating r on r.movie_id = m.id
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN AllActors a ON a.id = mc.actor_id;
~~~

### Exercicio 6

**a)** Relação N:N, porque um só filme pode receber diversos prêmios, e o oscar pode ser dado à diversos filmes.

**b)** 
~~~SQL
CREATE TABLE Oscar(
    date DATE, 
    id INT, 
    category ENUM("Direção", "Melhor Filme"), 
    movie_id INT,
    FOREIGN KEY (movie_id) REFERENCES AllMovies(id)
);
~~~

**c)** 
~~~SQL
INSERT INTO Oscar(date, id, category, movie_id)
VALUES(
    "2020-11-01", 
    151515, 
    "Direção", 
    1
), 
(
    "2020-11-01", 
    151515, 
    "Melhor Filme", 
    1
),( 
    "2020-11-01", 
    151515, 
    "Direção", 
    2
)...
~~~

**d)** 
~~~SQL
SELECT * FROM Oscar
JOIN AllMovies ON AllMovies.id = movie_id ;
~~~



 


