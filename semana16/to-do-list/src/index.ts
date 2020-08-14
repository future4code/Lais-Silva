import knex from "knex";
import dotenv from "dotenv";
import express, { Request, Response } from "express";
import { AddressInfo } from "net";
import moment from 'moment'
dotenv.config();
const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || "3306"),
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

async function getUsers(): Promise<any> {
  try {
    const response = await connection.raw(`
    SELECT * FROM Users;
  `)
    const users = response[0]
    console.log(users)
  } catch (e) {
    console.log(e)
  }
}
function generateId(): string {
  return (Date.now() + Math.random().toString())
}
async function createUser(
  name: string,
  email: string,
  nickname: string
): Promise<any> {
  try {
    await connection
      .insert({
        id: generateId(),
        name: name,
        email: email,
        nickname: nickname
      })
      .into("Users")
  } catch (error) {
    console.log(error)
  }
}

app.post("/user/create", async (req: Request, res: Response) => {
  if (req.body.name === " " || req.body.email === " " || req.body.nickname === " ") {
    res.status(400).send({ message: "Campos nao podem estar vazios." })
  } else {
    try {
      await createUser(
        req.body.name,
        req.body.email,
        req.body.nickname
      )
      res.status(200).send({
        message: "Sucesso ao criar usuario"
      })
    } catch (error) {
      res.status(400).send({
        message: error
      })
    }
  }
})

async function findUser(id: string): Promise<any> {
  try {
    const response = await connection.raw(`
    SELECT id, nickname FROM Users WHERE id = "${id}"
    `)
    const user = response[0]
    return user
  } catch (error) {
    console.log(error)
  }
}

app.get('/user/find/:id', async (req: Request, res: Response) => {
  if (!req.params.id || req.params.id === " ") {
    res.status(400).send({ message: "Passe um ID." })
  } else {
    try {
      const user = await findUser(req.params.id as string)
      if (user.length > 0) {
        res.status(200).send({
          message: user
        })
      }
      else {
        res.status(200).send({
          message: "Uusário não encontrado."
        })
      }
    } catch (error) {
      res.status(400).send({
        message: error
      })
    }
  }
})

async function editUser(id: string, newName: string, newNickname: string) {
  try {
    await connection.raw(`
    UPDATE Users
    SET name = "${newName}"
    WHERE id = "${id}"`)
  } catch (error) {
    console.log(error)
  }
}

async function checkUser(id: string): Promise<any> {
  try {
    const response = await connection.raw(`
    SELECT id, nickname FROM Users WHERE id = "${id}"
    `)
    const user = response[0]
    return user
  } catch (error) {
    console.log(error)
  }
}
app.post('/user/edit/:id', async (req: Request, res: Response) => {
  if (!req.params.id || req.params.id === " " ||
    !req.body.name || req.body.name === " " ||
    !req.body.nickname || req.body.nickname === " ") {
    res.status(400).send({ message: "Você nao passou os dados corretamente." })
  } else {
    try {
      const user = await findUser(req.params.id as string)
      console.log(user)
      if (user.length > 0) {
        try {
          await editUser(req.params.id as string, req.body.name, req.body.nickname)
          getUsers()
          res.status(200).send({
            message: "Dados alterados com sucesso."
          })
        } catch (e) {
          console.log(e)
        }
      } else {
        res.status(200).send({
          message: "Usuário não encontrado"
        })
      }
    } catch (error) {
      res.status(400).send({
        message: error
      })
    }
  }
})
async function createTask(description: string, limitDate: string, creatorId: string): Promise<any> {
  try {
    const date = new Date(limitDate)
    await connection
      .insert({
        id: generateId(),
        description: description,
        limitDate: date,
        creatorId: creatorId
      })
      .into("Tasks")
  } catch (error) {
    console.log(error)
  }
}

app.post('/tasks/create', async (req: Request, res: Response) => {
  try {
    await createTask(req.body.description, req.body.limitDate, req.body.creatorId)
    res.status(200).send({ message: "Tarefa criada. " })
  } catch (error) {
    res.status(400).send({ message: error })
  }
})

async function findTask(id: string): Promise<any> {
  try {
    const response = await connection.raw(`
    SELECT * FROM Tasks  WHERE id = "${id}"
    `)
    const task = response[0]
    return task
  } catch (error) {
    console.log(error)
  }
}
app.get('/tasks/find/:id', async (req: Request, res: Response) => {
  try {
    const task = await findTask(req.params.id as string)
    res.status(200).send({ message: task })

  } catch (error) {
    res.status(400).send({ message: error })
  }
})