import {Pool} from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    // socketPath: process.env.DB_SOCKET,
});

export const connectToDatabase = async () => {
    try {
        const client = await pool.connect();
        console.log('Connected to the database');
        return client; // Return the client to handle transactions
    } catch (error) {
        console.error('Unable to connect to the database:', error.message);
        throw error;
    }
};

export const query = async (text, params) => {
    try {
        const client = await pool.connect();
        const result = await client.query(text, params);
        client.release(); // Release the client after query execution
        return result.rows;
    } catch (error) {
        console.error('Error executing query:', error.message);
        throw error;
    }
};
