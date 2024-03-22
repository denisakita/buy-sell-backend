import Hapi from '@hapi/hapi';
// import * as admin from 'firebase-admin';
import routes from './routes';
import { connectToDatabase } from './database'; // Import the connectToDatabase function

// import credentials from '../credentials.json';
//
// admin.initializeApp({
//     credential: admin.credential.cert(credentials),
// });

let server;

const start = async () => {
    server = Hapi.server({
        port: 8000,
        host: 'localhost',
        // host: '0.0.0.0',
        routes: {
            cors: true // Enable CORS for all routes on this server
        }
    });

    routes.forEach(route => server.route(route));

    try {
        await connectToDatabase(); // Connect to the database
        await server.start();
        console.log(`Server is listening on ${server.info.uri}`);
    } catch (error) {
        console.error('Error starting server:', error);
        process.exit(1);
    }
};

process.on('unhandledRejection', err => {
    console.log(err);
    process.exit(1);
});

process.on('SIGINT', async () => {
    console.log('Stopping server...');
    try {
        await server.stop({ timeout: 10000 });
        console.log('Server stopped');
    } catch (error) {
        console.error('Error stopping server:', error);
    }
    process.exit(0);
});

start();
