const Pool = require("pg").Pool

const pool = new Pool({
  user: "postgres",
  password: "parool", //add your password
  database: "WAD2023-HW4",
  host: "localhost",
  port: "5432",
})

const execute = async (query) => {
  try {
    await pool.connect() // create a connection
    await pool.query(query) // executes a query
    return true
  } catch (error) {
    console.error(error.stack)
    return false
  }
}

/* 
gen_random_uuid() A system function to generate a random Universally Unique IDentifier (UUID)
An example of generated uuid:  32165102-4866-4d2d-b90c-7a2fddbb6bc8
*/

const createTblQueryUsers = `
    CREATE TABLE IF NOT EXISTS "users" (
        id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
        email VARCHAR(200) NOT NULL UNIQUE,
        password VARCHAR(200) NOT NULL 
  );`

const createTblQueryPosts = `
    CREATE TABLE IF NOT EXISTS "posttable" (
        id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
        body TEXT NOT NULL,
        date_created TIMESTAMP DEFAULT current_timestamp,
        like_count INTEGER DEFAULT 0,
        user_id uuid REFERENCES "users" (id) ON DELETE CASCADE
    );`

    
const insertPostQuery = `
    INSERT INTO "posttable" (body, user_id) VALUES
    ('Post 1 body', (SELECT id FROM "users" WHERE email = 'daglas.aitsen@ut.ee')),
    ('Post 2 body', (SELECT id FROM "users" WHERE email = 'daglas.aitsen@ut.ee')),
    ('Post 3 body', (SELECT id FROM "users" WHERE email = 'daglas.aitsen@ut.ee')),
    ('Post 4 body', (SELECT id FROM "users" WHERE email = 'daglas.aitsen@ut.ee')),
    ('Post 5 body', (SELECT id FROM "users" WHERE email = 'daglas.aitsen@ut.ee'));
`

execute(createTblQueryUsers)
  .then(() => execute(createTblQueryPosts))
  .then(() => execute(insertPostQuery))
  .then(() => console.log('Tables "users" and "posttable" are created.'))
  .catch((error) => console.error("Error:", error))

module.exports = pool
