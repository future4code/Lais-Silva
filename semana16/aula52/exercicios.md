## Aula 52 - Aprofundamento SQL

### Exercicio 1

**a)** O comando *ALTER TABLE Actor DROP COLUMN salary* exclui a tabela específica indicada (salary). 

**b)** O comando *ALTER TABLE Actor CHANGE gender sex VARCHAR(6);* altera o nome da tabela de "gender" para "sex", uma string de até seis caracteres. 

**c)** O comando *ALTER TABLE Actor CHANGE gender gender VARCHAR(255);* provavelmente apenas muda o tipo/tamanho da string que pode ser inserida na linha referente à coluna gender. 

**d)** 
~~~SQL
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
~~~

### Exercicio 2

**a)** 
~~~SQL
UPDATE Actor 
SET 
    name = "New Name", 
    birth_date = "1995-01-27"
WHERE id = "003"
~~~

**b)** 
~~~SQL
UPDATE Actor 
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";
~~~
~~~SQL
UPDATE Actor 
SET name = "Juliana Paes"
WHERE name = "JULIANA PÃES";
~~~

**c)** 
~~~SQL
UPDATE Actor 
SET 
    name = "New Name", 
    birth_date = "1995-01-27", 
    favorite_ice_cream = "Chocolatudo", ...
WHERE id = "005";
~~~

**d)** "0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0" => nenhuma linha foi modificada, mas, apesar de id inexistente, o MtSQL não aponta erros. 

### Exercicio 3

**a)** 
~~~SQL
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
~~~
**b)** 
~~~SQL
DELETE FROM Actor 
WHERE 
    gender = "male" AND 
    salary < 1000000;
~~~

### Exercicio 4

**a)** 
~~~SQL
SELECT MAX(salary) FROM Actor;
~~~

**b)** 
~~~SQL
SELECT MIN(salary) FROM Actor 
WHERE gender = "female";
~~~

**c)** 
~~~SQL
SELECT COUNT (*) FROM Actor 
WHERE gender = "female";
~~~

**d)** 
~~~SQL
SELECT SUM(salary) FROM Actor ;
~~~

### Exercicio 5

**a)** O comando indicado organiza e mostra a quantidade de linhas que contêm a mesma especificação da coluna gênero. Ele gera uma tabela que elenca todos os valores encontrados na coluna gênero e a quantidade de vezes que cada um deles aparce. 

**b)**
~~~SQL
SELECT id, name 
FROM Actor
ORDER BY name DESC;
~~~

**c)**
~~~SQL
SELECT (*)
FROM Actor
ORDER BY salary;
~~~

**d)**
~~~SQL
SELECT * FROM Actor
ORDER BY salary DESC 
LIMIT 3 ;
~~~

**e)**
~~~SQL
SELECT AVG(salary), gender
FROM Actor
GOUR BY gender ;
~~~

### Exercicio 6

**a)** 
~~~SQL
UPDATE Movie ADD playing_film_date DATE;
~~~

**b)** 
~~~SQL
UPDATE Movie
SET playing_film_date = "2020-08-15"
WHERE id = "001"
~~~
~~~SQL
UPDATE Movie
SET playing_film_date = "2020-01-15"
WHERE id = "002" ;
~~~

**d)** Não há sinal de erro, apenas a sinalização de que nenhuma linha foi alterada. 
~~~SQL
DELETE from Movie WHERE id = "001"
~~~

### Exercicio 7

**a)** 
~~~SQL
SELECT COUNT(*) FROM Movie
WHERE rating > 7.5 ; 
~~~

**b)** 
~~~SQL
SELECT AGV(rating) FROM Movie
~~~


**c)** 
~~~SQL
SELECT COUNT(*) FROM Movie
WHERE playing_film_date > "2020-08-11"
~~~

**d)** 
~~~SQL
SELECT COUNT(*) FROM Movie
WHERE playing_film_date < "2020-08-11"
~~~

**e)** 
~~~SQL
SELECT MAX(rating) FROM Movie ;
~~~

**f)** 
~~~SQL
SELECT MIN(rating) FROM Movie; 
~~~
### Exercicio 8

**a)** 
~~~SQL
SELECT * FROM Movies 
ORDER BY name;
~~~

**b)** 
~~~SQL
SELECT * FROM Movies 
ORDER BY name DESC;
~~~

**c)** 
~~~SQL
SELECT * FROM Movies 
WHERE release_date < CURDATE()
ORDER BY playing_film_date DESC;
~~~

**d)** 
~~~SQL
SELECT * FROM Movies 
ORDER BY rating DESC
LIMIT 3;
~~~



