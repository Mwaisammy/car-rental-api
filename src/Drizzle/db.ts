/*istanbul ignore next*/
// import "dotenv/config";

// import { drizzle } from "drizzle-orm/node-postgres"
// // import { drizzle } from "drizzle-orm/neon-http"

// import { Client } from 'pg'
// import * as schema from "./schema"
// // import { neon } from "@neondatabase/serverless";

// export const client = new Client({
//     connectionString: process.env.Database_URL as string,
// })

// // export const client = neon(process.env.Database_URL!)

// const main  = async() => {
//     await client.connect();
// }

// main()

// const db = drizzle(client, { schema, logger:false});
// export default db;


import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import "dotenv/config";
import * as schema from "./schema";

export const client = neon(process.env.Database_URL!)
if(!client){
    throw new Error("Database connection failed")
}

const db = drizzle(client, { schema, logger: false })
export default db;

