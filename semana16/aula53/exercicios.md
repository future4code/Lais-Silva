## Aula 52 - Aprofundamento SQL

### Exercicio 1

**a)** A resposta Raw é um array com uma array das informações requeridas e outro array com outras informações que não são importantes/necessárias para o usuário. Por isso usamos response[0], para pegar apenas o array situado na primeira posição. 

**b)** 
~~~ts
async function findActor(id: number) : Promise<any> {
  try {
    const actor = await connection("AllActors")
    .select()
    .where("id", id)
    return actor
  } catch (error) {
    return error
  }
}
~~~

**c)** 
~~~ts
async function getCountByName(name: string): Promise<any>{
  try {
    const result = await connection.raw(`(
      SELECT COUNT(*) as numberOfActors FROM AllActors WHERE name = "${name}"
    )`)
    console.log(result[0][0])
    return result[0][0]
    
  } catch (error) {
    return error
  }
 }
~~~

### Exercicio 2

**a)** 
~~~ts
async function setSalary(id: number, salary: number): Promise<void> {
  try {
    await connection("AllActors")
    .select({ salary: salary })
    .where("id", id)
    console.log("Sucess")
  } catch (error) {
    return error
  }
}
~~~
**b)**  
~~~ts
async function deleteActor(id: number): Promise<void> {
  try {
    await connection("AllActors")
    .delete()
    .where("id", id)
    console.log("Deletado com sucesso")
  } catch (error) {
    return error
  }
}
~~~

**c)** 
~~~ts
async function avgSalary(gender: string): Promise<any> {
  try {
    const avg = await connection("AllActors")
    .avg()
    .where("gender", gender)
    console.log(avg)
  } catch (error) {
    return error
  }
}
~~~

### Exercicio 3

**a)** É o caminho para acessar o valor de id recebido na requisição (req) como parâmetro (params).

**b)** As ultimas linhas do Try fazem com que seja enviada um codigo de status que representa sucesso (200) e o ator criado. Já as ultimas tinhas do catch enviam uma mensagem e código de erro (400/bad request). 
**c)** 
~~~ts
app.get('/actor', async(req: Request, res: Response) => {
  try {
    const count = await getCountByGender(req.query.gender as string)
    res.status(200).send({
      quantity: count,
    });
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
})
~~~

### Exercicio 4

**a)** 
~~~ts
app.post("/actor", async(req: Request, res: Response) => {
  try {
      await setSalary(req.body.id, req.body.salary);
      res.status(200).send({
          message: "Atualizado com sucesso."})
  } catch(e) {
      res.status(400).send({
          message: e.message
      })
  }
});
~~~

**b)** 
~~~ts
app.delete('/actor', async(req: Request, res: Response) => {
  try {
    await deleteActor(req.body.id)
    res.status(200).send({
      message: "Deletado com sucesso."
    })
  } catch (error) {
    res.status(400).send({
      message: error.message
  })
  }
})
~~~

### Exercicio 5

**a)** 
~~~ts
app.post("./movie", req: Request, res: Response ) => {
    try {
        await createMovie(req.params.tittle, req.params.id, 
        req.params.date,
        req.params.description);
        res.status(200).send({
            message: "Filme criado com sucesso."
        })
        
    } catch(e) {
        res.status(400).send({
            message: e.message
        })
    }
}
~~~

### Exercicio 6

**a)** 
~~~ts
app.get("./movies", req: Request, res: Response) => {
    try {
        const movies = await getMovies()
        res.status(200).sed({
            movies: movies
        })
    } catch(e) {
        res.status(400).send({
        message: e.message
        })
    }
}
~~~

### Exercicio 7

**a)** 
~~~ts
app.get("/movie/search", async (req: Request, res: Response) => {
  try {
    const movies = await searchMovie(req.query.query as string);
    res.status(200).send({
      movies: movies,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
~~~

 


