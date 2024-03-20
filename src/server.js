import Hapi from '@hapi/hapi';
import routes from "./routes";

import {connectToDatabase} from './database'; // Import the connectToDatabase function

let server;
const start = async () => {
    server = Hapi.server({
        port: 8000,
        host: 'localhost',
    });

    routes.forEach(route => server.route(route));
    console.log(routes)

    await connectToDatabase(); // Connect to the database

    await server.start();
    console.log(`Server is listening on ${server.info.uri}`);
}

process.on('unhandledRejection', err => {
    console.log(err);
    process.exit(1);
});

process.on('SIGINT', async () => {
    console.log('Stopping server...');
    await server.stop({timeout: 1000});
    process.exit(0);
    // No need to call db.end(), since we don't have an explicit `end()` function in the database.js file
});

start();