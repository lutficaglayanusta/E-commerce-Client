import pg from "pg"
import dotenv from "dotenv"

dotenv.config()

const { Pool } = pg

const {PG_LOCALHOST,PG_USER,PG_PASSWORD,PG_PORT,PG_DATABASE} = process.env

const pool = new Pool({
  user: PG_USER,
  password: PG_PASSWORD,
  host: PG_LOCALHOST,
  port: PG_PORT,
  database: PG_DATABASE,
});

export default pool