## Aula 55 - Introdução à Autenticação 

### Exercicio 1

**a)** Uma chave como string pode conter numeros, simbolos e letras; é mais abrangente e mais difícil de "adivinhar" e evita a construção de dois tokens idêntidos. 

### Exercicio 2

**a)** Primeio passamos as ifnormções de configuração necessários para integrar o Knex com nosso db no MySQL.
Realizada a conexão, foi criada uma função que cria usuário, recebendo um id, um email e uma senha, todos do tipo string; esses valores passados na chamada da função são inseridos na tabela "Users" presente no db conectado por meio de query builder. 

**b)**  
~~~SQL
CREATE TABLE AllUsers(
    id VARCHAR (255) NOT NULL primary key, 
    email VARCHAR(255) NOT NULL, 
    pasword VARCHAR(255) NOT NULL
)
~~~

### Exercicio 3

**a)** "as string" transforma o parâmetro recebido de qualquer tipo em string; se for um número, ele vai ser envolto por aspas, por exemplo. Fazemos isso para que o token sempre seja uma string ao final. 


 


