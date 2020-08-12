import knex from "knex";
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";

dotenv.config();

const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

const app = express();
app.use(express.json());
const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

// EXERCICIO 1.B.
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

// EXERCÍCIO 1.C.
// Ao criar a tabela, não coloquei nome; para acelerar o exercício, a resolução 
// é feita com o parâmetro "name", que tambem é string

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

// EXERCÍCIO 2.A.
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
// EXERCÍCIO 2.B.
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
// EXERCÍCIO 2.C.
async function avgSalary(gender: string): Promise<any> {
  try {
    const avg = await connection("AllActors")
    .avg("salary")
    .where("gender", gender)
    console.log(avg)
  } catch (error) {
    return error
  }
}
// EXERCÍCIO 3.C.
app.get('/actor', async(req: Request, res: Response) => {
  try {
    const count = await getCountByName(req.query.name as string)
    res.status(200).send({
      quantity: count,
    });
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
})

// EXERCÍCIO 4.A.
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

// EXERCÍCIO 4.B.
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

// EXERCÍCIO 5.
const createMovie = async (
  id: string,
  title: string,
  releaseDate: Date
) => {
  await connection
    .insert({
      id: id,
      title: title,
      releas_date: releaseDate
    })
    .into("Movie");
};

app.post("/movie", async (req: Request, res: Response) => {
  try {
    await createMovie(
      req.body.id,
      req.body.title,
      req.body.releaseDate
    );

    res.status(200).send({
      message: "Success"
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

//EXERCICIO 6
const getAllMovies = async (): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Movie LIMIT 15
  `);

  return result[0];
};

app.post("/movie/:id", async (req: Request, res: Response) => {
  try {
    const movies = await getAllMovies();

    res.status(200).send({
      movies: movies,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

//EXERCICIO 7
const searchMovie = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Movie WHERE id = "${id}" LIMIT 15
  `);

  return result[0];
};

app.get("/movie/search", async (req: Request, res: Response) => {
  try {
    const movies = await searchMovie(req.query.id as string);

    res.status(200).send({
      movies: movies,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
