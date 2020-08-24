import knex from "knex";
import { Console } from "console";
import dotenv from "dotenv";

dotenv.config()
export class UserDatabase {
  private connection = knex({
    client: "mysql",
    connection: {
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT || "3306"),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
  });

  private static TABLE_NAME = "AllUsers";

  public async createUser(
    id: string,
    email: string,
    password: string
  ): Promise<void> {
    await this.connection
      .insert({ id, email, password })
      .into(UserDatabase.TABLE_NAME)
  }

  public async getUserByiD(email: string): Promise<any> {
    const user = await this.connection
      .select("*")
      .from(UserDatabase.TABLE_NAME)
      .where({ email })

    return user[0]
  }

  public async getUserById(id: string): Promise<any> {
    const response = await this.connection.raw(`
      SELECT * FROM AllUsers WHERE id = "${id}" 
    `)
    return response[0];
  }
}
