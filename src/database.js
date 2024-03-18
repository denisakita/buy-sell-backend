const {Client} = require('pg');
require('dotenv').config();

const client = new Client({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: 'amf',
});

async function connectToDatabase() {
    try {
        await client.connect();
        console.log('Connected to PostgreSQL database');
    } catch (error) {
        console.error('Connection error', error);
    }
}

async function query(queryString, escapedValues) {
    try {
        const result = await client.query(queryString, escapedValues);
        return result.rows;
    } catch (error) {
        console.error('Query error', error);
        throw error;
    }
}

module.exports = {
    connectToDatabase,
    query,
};
// Connection with MySQL
// const connection = msql.createConnection({
//   host:'localhost',
//   user:'amf',
//   password:'amf',
//   database:'buy-sell-db'
// });
// export const db ={
//   connect:()=> connection.conect(),
//   query:(queryString, escapedValue)=>
//       new Promise((resolve,reject)=>{
//         connection.query(queryString,escapedValue,(error,results,fields)=>{
//           if (error) reject
//           resolve({results,fields});
//         })
//       }),
//   end: () => connection.end(),
// }