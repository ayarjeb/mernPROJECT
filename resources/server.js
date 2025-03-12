import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnect from './config/mongoose.config.js';
import router from './routes/all.routes.js';

const app = express();
// Middleware configuration
app.use(express.json(), cors());
// Loads environment variables from the .env file
dotenv.config(); 
// Retrieves the port number from environment variables
const PORT = process.env.PORT; 
// Establishing connection to the MongoDB database
dbConnect(); 
// Mounts the routes under the '/api' prefix
app.use('/api', router);
app.use('/api/auth', router); 


// Starts the server and listens on the specified port
app.listen(PORT, () =>
console.log(`Listening on port: ${PORT}`) // Logs a message when the server starts successfully
);
