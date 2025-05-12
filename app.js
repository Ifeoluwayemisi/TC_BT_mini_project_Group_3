import express from 'express';
const app = express();
// Import the route200 module from routeModule.js inside the custom-module folder
import { route200 } from './custom-module/routeModule.js';

const port = 5000;

// Middleware for parsing JSON requests
app.use(express.json());

// Define the /200 route using the route200 handler
app.get("/200", route200);

// Start the server
app.listen(port, () => {
  console.log(`Server is active on port: ${port}`);
}).on('error', (err) => {
  console.error(`Error starting server: ${err}`);
});
