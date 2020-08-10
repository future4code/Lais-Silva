# Aula 51 - Introdução a Banco de Dados

 #### Exercício 1

a) Na coluna id, usamos *varchar* para estabelecer que ela receberá uma string. A mesma coisa para name e gender, mas nesses existe a obrigatoriedade de preenchimento do campo com *NOT NULL* (presente em todas as outras colunas). O *DATE* em birh_date define o tipo como Date. 

b) SHOW databeses exibe os bancos de dados no servidor; já SHOW tables mostra as tabelas presentes no database.

c) *SHOW Actor* não funciona como comando. Usei *DESCRIBE Actor* e recebi uma tabela com nome do campo, tipo, chave, se pode ser ou não null, o valor default (null para todos) e extras(essa coluna estava vazia).

#### Exercício 2
a)
~~~SQL
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
"002", 
"Gloria",
1200000,
"1963-08-23", 
"female"
);
~~~
b) O erro **Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'** ocorreu pois a primary key deve ser sempre única. 

c) **Error Code: 1136. Column count doesn't match values count at row 1** => ocorreu erro pois não foram passados todos os valores esperados, e nenhum deles pode estar vazio *(NOT NULL)*. Código corrigido:
~~~SQL
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
~~~

d) Como falta o value name, o valor inserido por defaul é null. Mas, ao descrever o value name, dissemos que ele não poderia ser null, ou seja, o campo nao pode ficar em branco. 
~~~SQL
INSERT INTO Actor (name, id, salary, birth_date, gender)
VALUES(
  "Åse Kleveland", 
  "004",
  400000,
  "1949-04-18", 
  "female"
);
~~~

e) Ocorreu um erro pois o formato Date exige aspas. 
~~~SQL
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);
~~~

f)
~~~SQL
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Ruth de Souza",
  20000,
  "1921-03-26", 
  "female"
);
~~~
~~~SQL
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Viola Davis",
  20000000,
  "1965-08-11", 
  "female"
);
~~~

#### Exercício 3
a)
~~~SQL
SELECT * FROM Actor WHERE gender = "female";
~~~

b) 
~~~SQL
SELECT salary FROM Actor WHERE name = "Tony Ramos";
~~~

c) Essa query retorna uma linha vazia da tabela, onde todos os valores são null. 
~~~SQL
SELECT * FROM Actor WHERE gender = "invalid";
~~~

d) 
~~~SQL
SELECT id, name, salary FROM Actor WHERE salary < 500000 ;
~~~

e) O erro "Error Code: 1054. Unknown column 'nome' in 'field list'" ocorre porque o nome da coluna é *"name"*, em inglês. 
~~~SQL
SELECT id, name from Actor WHERE id = "002"
~~~

#### Exercício 4

a) A Query pede para serem mostrados todos os dados de linhas que tenham na coluna "name" um valor que _contenha_ **a** OU **j** E cujos salários são maiores do que R$300.000,00.

b)
~~~SQL
SELECT * FROM Actor
WHERE (name LIKE "A%") AND salary > 350000
~~~

c)
~~~SQL
SELECT * FROM Actor
WHERE 
(name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")  
AND salary BETWEEN 350000 AND 900000;
~~~

#### Exercício 5
a) Com essa querry criamos a nova tabela Movie, que contem obrigatóriamente um id (tipo string, primary key, nao pode repetir), name (tipo string), description (tipo text) e date(do tipo Date).
~~~SQL
CREATE TABLE Movie (
	id VARCHAR(255) PRIMARY KEY,
	name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    date DATE NOT NULL, 
    rating FLOAT NOT NULL
);
~~~

b)
~~~SQL
INSERT INTO Movie(id, name, description, date, rating)
VALUES(
"001", 
"Se eu fosse você", 
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006-01-06", 
7
);
~~~

c)
~~~SQL
INSERT INTO Movie(id, name, description, date, rating)
VALUES(
"002", 
"Doce de mãe", 
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012-12-27", 
10
);
~~~

d)
~~~SQL
INSERT INTO Movie(id, name, description, date, rating)
VALUES(
"003", 
"dona flor e seus dois maridos", 
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017-11-02", 
8
);
~~~

e)
~~~SQL
INSERT INTO Movie(id, name, description, date, rating)
VALUES(
"004", 
"Cazuza - o tempo não para", 
"A história de Agenor, conhecido como Cazuza, um jovem talentoso que sempre quis aproveitar ao máximo todas as emoções da vida. O filme mostra a trajetória de Cazuza, desde seus tempos com a banda Barão Vermelho até sua carreira solo como cantor e compositor. O longa-metragem exibe ainda a luta do artista contra a aids.",
"2004-06-11", 
10
);
~~~

#### Exercício 6

a)
~~~SQL
SELECT id, name, rating FROM Movie WHERE id = "001";
~~~

b)
~~~SQL
SELECT * FROM Movie WHERE name = "Cazuza - o tempo não para";
~~~

c)
~~~SQL
SELECT id, name, description FROM Movie WHERE rating > 7;
~~~

#### Exercício 7

a)
~~~SQL
SELECT * FROM Movie WHERE name LIKE "%vida%";
~~~

b)
~~~SQL
SELECT * FROM Movie WHERE name OR description LIKE "%cazuza%" ;
~~~

c) 
~~~SQL
SELECT * FROM Movie WHERE date > "2020-08-10";
~~~

d) 
~~~SQL
SELECT * FROM Movie WHERE date < CURDATE() AND
(name OR description LIKE "%cazuza%") AND
rating > 7;
~~~


