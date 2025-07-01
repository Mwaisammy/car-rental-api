import "dotenv/config";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";

const client = new Client({
    connectionString: process.env.DATABASE_URL,
});

async function migration() {
    try {
        await client.connect();
        const db = drizzle(client);
        console.log("......Migrations Started......");
        await migrate(db, { migrationsFolder: __dirname + "/migrations" });
        console.log("......Migrations Completed......");
        process.exit(0); // 0 means success
    } finally {
        await client.end();
    }
}

migration().catch((error) => {
    console.error("Migration failed:", error);
    process.exit(1); // 1 means an error occurred
});