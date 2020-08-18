## Aula 56 - Criptografia e User Role

### Exercicio 1

**a)** *Round* é a quantidade de vezes que a string recebida/senha passa pelo processo de hash, tornando cada vez mais difícil decifrá-la por meio de rainbow tables, por exemplo; já *salt* é uma sequência em string aleatória inserida antes da string recebida como senha; dessa forma, pessoas com a mesma senha terão um hash direferente. Usei o valor 12 como cost; quanto mais alto o número, mais segura a senha. 

### Exercicio 2

**a)** Mais interessante seria começar pelo endpoint de cadastro. Assim, salvariamos no banco a senha do usuário já depois do processo de hash (ela se tornará um cypherText); no endpoint de login, a função compare do HashManager vai verificar se aquele cypherText corresponde com a senha fornecida pelo usuário. 

**d)** Precisamos alterar para que o endpoint não retorne a senha como cypherText, mas como plaintext, assim como foi fornecido no momento de cadastro. 

### Exercicio 5

**a)** "as string" transforma o parâmetro recebido de qualquer tipo em string; se for um número, ele vai ser envolto por aspas, por exemplo. Fazemos isso para que o token sempre seja uma string ao final. 


 


